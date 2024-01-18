import Spinner from "components/Spinner"
import { useAuth } from "context/AuthContext"
import { useMessagingV2 } from "context/MessagingContextV2"
import { useProfileStore } from "context/ProfileStore"
import { formatConversationsMessage } from "network/apiFormatter/messagingV2"
import { addNewConversationsMessage, getConversationsMessage } from "network/apis/messages"
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { MessageItemTypeD, onMessageArgs } from "types/messagingV2"
import ChatboxActions from "./messagingV2Components/ChatBoxActions"
import ChatHeader from "./messagingV2Components/ChatHeader"
import ChatItem from "./messagingV2Components/ChatItem"

const LIMIT = 30;

export default function ChatBox({ ongoingCall }: { ongoingCall: boolean }) {
    const { activeChat, setActiveChat, markSeen, socketData, onMessageRemove, updateIndbox, guestCallStatus, callStatusData } = useMessagingV2()
    const { profile } = useProfileStore()
    const { token } = useAuth()
    const [conversationQueue, setConversationQueue] = useState<MessageItemTypeD[]>([])
    const [cq, setcq] = useState<MessageItemTypeD[]>([])
    const [conversationLoading, setConversationLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [addMediaProps, setAddMediaProps] = useState({})
    const { ref, inView, entry } = useInView();

    const router = useRouter();

    const fetchAllConversationMessage = async (conversationsId: number) => {
        try {
            setConversationLoading(true)
            const res = await getConversationsMessage({ conversationsId, token, page, perPage: LIMIT });
            setConversationQueue(
                (prev) => {
                    if (page == 1) {
                        return [...res.data]
                    } else {
                        return [...prev, ...res.data]
                    }
                }
            );

            // TODO: message grouping by date
            // setConversationQueue(
            //     (prev) => {
            //         let data = res.data
            //         if (page == 1) {
            //             data = [...res.data]
            //         } else {
            //             data = [...prev, ...res.data]
            //         }

            //         const groups = data?.reduce((groups, chat) => {
            //             const date = chat?.created_at?.split(' ')[0];
            //             if (!groups[date]) {
            //                 groups[date] = [];
            //             }
            //             groups[date]?.push(chat);
            //             return groups;
            //         }, {});

            //         return Object.keys(groups).map((date) => {
            //             return {
            //                 date,
            //                 chat: groups[date]
            //             };
            //         });
            //     }
            // );

            setLastPage(res?.last_page)
            setConversationLoading(false)
        } catch (err) {
            console.log(err)
            setConversationLoading(false)
        }
    };

    const chatRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true })
        }
    }, [])

    const removeMessage = (id) => {
        if (activeChat?.conversationId) {
            onMessageRemove({ conversationsId: activeChat.conversationId, id: id })
        }
        setConversationQueue(conversationQueue.filter(i => i.id !== id))
    }

    const onMessage = async ({ type, file }: onMessageArgs) => {

        console.log("ON MESSGES", type, file)

        if (type === "text") {
            let localId = new Date().getTime()
            setConversationQueue(
                (prev) => {
                    return [{
                        type: "text",
                        body: file,
                        user_id: profile?.id,
                        localId,
                        uploading: true,
                        localRead: 0
                    }, ...prev]
                }
            );

            // updateIndbox({ conversationId: activeChat.conversationId, body: file, type: "text", pic: activeChat?.user?.pic, name: activeChat?.user?.name })
        }

        if (type === "capturedMedia") {
            const data: any = file;
            if (data.type.split("/")[0] == "video") {
                addMedia(activeChat.conversationId, 'video', data)
                updateIndbox({ conversationId: activeChat.conversationId, type: "video" })
            } else if (data.type.split("/")[0] == "image") {
                addMedia(activeChat.conversationId, 'picture', data)
                updateIndbox({ conversationId: activeChat.conversationId, type: "picture" })
            }
        }

        if (type === "localMedia") {
            for (const data of file) {
                if (data.type.split("/")[0] == "video") {
                    addMedia(activeChat.conversationId, 'video', data)
                    updateIndbox({ conversationId: activeChat.conversationId, type: "video" })
                } else if (data.type.split("/")[0] == "image") {
                    addMedia(activeChat.conversationId, 'picture', data)
                    updateIndbox({ conversationId: activeChat.conversationId, type: "picture" })
                }
            }
        }

        if (type === "audio") {
            addMedia(activeChat.conversationId, 'audio', file)
            updateIndbox({ conversationId: activeChat.conversationId, type: "audio" })
        }
    }

    const addMedia = (conversation_id: any, type: any, file: File) => {
        let lId = new Date().getTime() + file.lastModified
        setAddMediaProps({ conversation_id, type, file })

        setConversationQueue(
            (prev) => {
                return [{
                    type: type,
                    media_path_full: URL.createObjectURL(file),
                    user_id: profile?.id,
                    localId: lId,
                    uploading: true,
                    body: file,
                    local_media_path: URL.createObjectURL(file),
                    localRead: 0
                }, ...prev]
            }
        )
    }

    const onMessageSuccess = ({ localId, res, isText }: { localId: number, res: {}, isText: boolean }) => {
        if (isText) {
            setConversationQueue(conversationQueue.map(i => {
                if (i.localId === localId) {
                    return { ...i, id: res?.id, body: res?.body, uploading: false }
                } else {
                    return i
                }
            }))
        } else {
            setConversationQueue(conversationQueue.map(i => {
                if (i.localId === localId) {
                    return { ...i, id: res?.data?.id, media_path_full: res?.data?.media_path_full, uploading: false }
                } else {
                    return i
                }
            }))
        }
    }

    const onMessageFail = (localId: number) => {
        setConversationQueue(arr => arr.filter(i => i.localId !== localId));
    }

    useEffect(() => {
        if (activeChat?.conversationId === parseInt(socketData?.message?.conversation_id)) {

            console.log("conversationQueue rannnn outside")

            setConversationQueue(
                (prev) => {
                    return [{
                        type: socketData?.message?.type,
                        created_at: socketData?.message?.created_at,
                        body: socketData?.message?.body,
                        media_path_full: socketData?.message?.media_path_full,
                        localRead: 1,
                        // rooms: socketData?.message?.rooms
                    }, ...prev]
                }
            )
        }
    }, [socketData, activeChat?.conversationId])

    // useEffect(() => {
    //     if (conversationQueue.length === 0) return
    //     console.log("conversationQueue", conversationQueue)
    //     markSeen(activeChat.conversationId)
    // }, [conversationQueue])

    useEffect(() => {
        markSeen(activeChat.conversationId)
    }, [activeChat.conversationId, socketData])

    useEffect(() => {
        if (activeChat.conversationId) {
            setConversationQueue([])
            setPage(1)
            fetchAllConversationMessage(activeChat.conversationId)
        }
    }, [activeChat])

    useEffect(() => {
        if (page === 1) return;
        fetchAllConversationMessage(activeChat.conversationId)
    }, [page])

    useEffect(() => {
        console.log("inView:", inView)
        if (!inView) return;

        if (lastPage > page) {
            setPage((prev: number) => prev + 1)
        }
    }, [inView])

    const [firstUnreadIndex, setFirstUnreadIndex] = useState<number>(0);
    const [unreadMessages, setUnreadMessages] = useState<MessageItemTypeD[]>();


    /** 
     * IF NO CONVERSION ID FOUND ( CHAT PAGE FOR MOBILE)
     */
    // useEffect(() => {
    //     if (!activeChat.conversationId && router.query.conversationId) {

    //         setActiveChat({
    //             conversationId: router.query.conversationId,
    //         })

    //     }

    // }, [activeChat, router.query, setActiveChat])


    // useEffect(() => {

    //     console.log("KK-------------------", conversationQueue, activeChat)
    //     if (conversationQueue.length > 0 && !activeChat.user?.talentlogin) {
    //         // const otherUser = 
    //         router.push('/messsagesV2')

    //     }
    // }, [conversationQueue, activeChat])

    // useEffect(() => {

    //TODO: Handle later
    //     if (!activeChat.conversationId) {
    //         router.push('/messages')
    //     }

    // }, [activeChat, router])

    console.log("activeChat: ", activeChat)

    useEffect(() => {
        setUnreadMessages(
            conversationQueue.filter(
                i => {
                    if (i?.users) {
                        return i?.users?.filter((i2: any) => i2?.id === profile?.id)[0]?.pivot?.read === 0
                    } else {
                        return i?.localRead === 0
                    }
                }
            )
        );

        setFirstUnreadIndex(
            conversationQueue.filter(i => {
                if (i?.users) {
                    return i?.users?.filter((i: any) => i?.id === profile?.id)[0]?.pivot?.read === 0
                } else {
                    return i?.localRead === 0
                }
            }
            )?.length || 0
        )
    }, [conversationQueue, profile?.id])

    useEffect(() => {
        // if (guestCallStatus === "finished") {
        //     toast.success("Call ended");
        // }
        if (guestCallStatus === "finished" && activeChat?.conversationId === callStatusData?.message?.conversation_id) {
            setConversationQueue(
                (prev) => {
                    return [{
                        type: "call",
                        created_at: guestCallStatus?.message?.created_at,
                        rooms: guestCallStatus?.message?.rooms
                    }, ...prev]
                }
            )
        }

    }, [guestCallStatus])

    return (
        <Root addPaddingTop={ongoingCall}>
            <ChatHeader
                url={activeChat?.user?.pic}
                name={activeChat?.user?.name}
                onlineStatus={false}
                talentnum={activeChat?.user?.talentnum}
            />
            <>
                <Chat>
                    {
                        conversationQueue?.length > 0 &&
                        <>
                            {
                                conversationQueue?.map((i, index) => {
                                    const item = formatConversationsMessage(i, profile?.id, activeChat.user?.name, profile?.name);
                                    let lastRead = false;
                                    console.log('conversationQueue rannnn close outside', i);
                                    console.log('hello there item', item);

                                    if (i?.localRead === 1 && index === 0) {
                                        console.log('conversationQueue rannnn');
                                        lastRead = true;
                                    } else if (unreadMessages.length === 0) {
                                        if (item?.readStatus === 1 && index === 0) lastRead = true;
                                    } else {
                                        console.log("last ran");
                                        if (item?.readStatus === 1 && index === firstUnreadIndex) lastRead = true;
                                        const lastLocalItem = conversationQueue.filter(i2 => i2?.localRead === 1)[0];
                                        if (lastLocalItem?.body === item?.body && lastLocalItem?.created_at === item?.createdAt) lastRead = true;
                                        console.log("hello there", conversationQueue.filter(i2 => i2?.localRead === 1));
                                    }

                                    return (
                                        <div className="relative" key={item.localId} ref={index === 0 ? chatRef : null}>
                                            <ChatItem
                                                item={item}
                                                own={item?.position === 2}
                                                removeMessage={removeMessage}
                                                cId={activeChat.conversationId}
                                                onMessageSuccess={onMessageSuccess}
                                                onMessageFail={onMessageFail}
                                                readStatus={item.readStatus}
                                                uploading={item.uploading}
                                                lastRead={lastRead}
                                            />
                                        </div>
                                    )

                                    // TODO: message grouping by date
                                    // <>
                                    //     {i?.chat?.map(i2 => {
                                    //         const item = formatConversationsMessage(i2, profile?.id, activeChat.user?.name)

                                    //         return (
                                    //             <div key={item.localId} ref={index === 0 ? chatRef : null}>
                                    //                 <ChatItem
                                    //                     item={item}
                                    //                     own={item?.position === 2}
                                    //                     removeMessage={removeMessage}
                                    //                     cId={activeChat.conversationId}
                                    //                     onMessageSuccess={onMessageSuccess}
                                    //                     onMessageFail={onMessageFail}
                                    //                 />
                                    //             </div>
                                    //         )
                                    //     })}

                                    //     <div className="flex items-center justify-center my-3 opacity-30 ">
                                    //         <div className="flex-grow w-full h-[1px] bg-base"></div>
                                    //         <span className="text-sm font-semibold min-w-[100px] text-center">{i?.date}</span>
                                    //         <div className="flex-grow w-full h-[1px] bg-base"></div>
                                    //     </div>
                                    // </>
                                })
                            }

                            <div ref={ref} className="ref" >
                                {
                                    conversationLoading &&
                                    <div className="flex items-center justify-center">
                                        <Spinner primary />
                                    </div>
                                }
                            </div>
                        </>
                    }
                </Chat>
            </>

            <div className="mt-auto">
                <ChatboxActions
                    onMessage={onMessage}
                />
            </div>
        </Root>
    )
}

const Root = styled.div<{ addPaddingTop: boolean }>`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: ${p => p.addPaddingTop ? "36.5vh" : "none"};
`

const Chat = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 0 10px;

    @media (min-width: 500px) {
        padding: 30px 50px;
    } 
`