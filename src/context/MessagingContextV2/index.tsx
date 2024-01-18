import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Echo from 'laravel-echo';
import socketio from 'socket.io-client';
import { addNewConversationsMessage, deleteConversationsMessage, getConversationsMessage, getMessageCountApi, getMessageTalentApi, markAsSeenApi } from "network/apis/messages";
import { useRouter } from "next/router";
import { ActiveChatD, CallDataD, CallStatusD, CallUserD, FloatingMessageTypeD, GuestCallStatusD, HostCallStatusD, IndboxItem, MessagingContextV2D, SocketDataD, TabTypeD, UpdateIndboxArg } from "types/messagingV2";
import { getCDInvitesListApi } from "network/apis/jobs";
import useSound from "use-sound";
import { getUnreadNotificationsCountApi } from "network/apis/notifications";
import { formatCallSocket } from "network/apiFormatter/messagingV2";
import { acceptCallApi, cancelCallApi, finishCallApi, leaveCallApi, rejectCallApi, startCallApi } from "network/apis/call";
import { useHMSActions } from "@100mslive/react-sdk";
import { MOBILE_BREAKPOINT } from "containers/MessagingV2/const";

const LIMIT = 10

const MessagingContextV2 = createContext<MessagingContextV2D>({} as MessagingContextV2D)

export default function MessagingProviderV2({ children }: any) {
    const { token, user } = useAuth();
    const { profile } = useProfileStore();
    const router = useRouter();
    const hmsActions = useHMSActions();
    const [socketData, setSocketData] = useState<SocketDataD>({} as SocketDataD);
    const [messageCount, setMessageCount] = useState(0);
    const [notificationCount, setNotificationCount] = useState(0);
    const [playMessageSound] = useSound('/audio/messageSound.mp3');
    const [notificationSocketData, setNotificationSocketData] = useState({});
    const [callStatusData, setCallStatusData] = useState({});


    /**
     * Layout
     */

    const [activeTab, setActiveTab] = useState<TabTypeD>('');
    const [floatingMessage, setFloatingMessage] = useState<FloatingMessageTypeD>({} as FloatingMessageTypeD);


    /**
     * Messaging
     */

    const [updateCount, setUpdateCount] = useState(false);
    const [indbox, setIndbox] = useState<IndboxItem[]>([]);
    const [indboxLoading, setIndboxLoading] = useState(false);
    const indboxMessagesPage = useRef({ current: 1, total: 0 });
    const [activeChat, setActiveChat] = useState<ActiveChatD>({} as ActiveChatD);


    /**
     * INVITES
     */

    const [invites, setInvites] = useState<any[]>([]);
    const [invitesLoading, setInvitesLoading] = useState(false);
    const [invitesLoadingMore, setInvitesLoadingMore] = useState(false);
    const invitesPage = useRef({ current: 1, total: 0 });
    const [activeInvite, setActiveInvite] = useState<any>({});
    const notInList = useRef(false);

    /**
     * CALL
     */

    const [callSocketData, setCallSocketData] = useState<CallDataD>({});
    const [openVideoCalling, setOpenVideoCalling] = useState(false);
    //  ------  //
    const [hostCallStatus, setHostCallStatus] = useState<HostCallStatusD>("");
    const [guestCallStatus, setGuestCallStatus] = useState<GuestCallStatusD>("");
    const [callSocketMessage, setCallSocketMessage] = useState<any>({});
    const [isHost, setIsHost] = useState(false);
    const [roomId, setRoomId] = useState("");
    const [callStatus, setCallStatus] = useState<CallStatusD>(null);
    const [callUsers, setCallUsers] = useState<CallUserD[]>();

    useEffect(() => {
        console.log("yay 11 hostCallStatus", hostCallStatus);
        console.log("yay 11 guestCallStatus", guestCallStatus);
    }, [hostCallStatus, guestCallStatus])


    // const [cdInvitations, setCDInvitations] = useState([])
    // const [conversationsId, setConversationId] = useState()
    // const [showChatClass, setShowChatClass] = useState<any>({
    //     item: {},
    //     showMessage: false
    // });
    // const [showInvitationClass, setshowInvitationClass] = useState<any>({
    //     item: {},
    //     showInvitation: false
    // });
    // const [conversationsMessage, setConversationsMessage] = useState([]);
    // const [conversationLoading, setConversationLoading] = useState(false);
    // const [lastPageMessage, setlastPageMessage] = useState<number>(1);
    // const [conversationPage, setConversationPage] = useState<number>(1);
    // const [message, setMessage] = useState("");



    // ------ FUNCTIONS ------ 


    // MESSAGING 
    const fetchMessageCount = useCallback(async () => {
        try {
            if (!token) {
                return;
            }
            const res = await getMessageCountApi({ token });
            setMessageCount(Number(res?.total_unread_count || 0));
            console.log("res?.total_unread_count", res?.total_unread_count)
        } catch (err) {
            console.log('Err', err);
        }
    }, [token]);

    const fetchIndboxMessages = useCallback(async () => {
        try {
            if (indboxMessagesPage.current.current === 1 && !notInList.current) {
                setIndboxLoading(true);
            }

            const res = await getMessageTalentApi({ token, page: indboxMessagesPage.current.current, perPage: LIMIT });
            setIndbox((prev) => {
                if (indboxMessagesPage.current.current == 1) {
                    return [...res?.data]
                } else {
                    return [...prev, ...res?.data]
                }
            });
            indboxMessagesPage.current.total = Number(res?.last_page);
            setIndboxLoading(false);
        } catch (err) {
            console.log('Err', err);
            setIndboxLoading(false);
        }
    }, [indboxMessagesPage, token]);

    const fetchMoreIndboxMessages = useCallback(async () => {
        if (indboxMessagesPage.current.total > indboxMessagesPage.current.current) {
            indboxMessagesPage.current.current = indboxMessagesPage.current.current + 1;
            fetchIndboxMessages();
        }
    }, [fetchIndboxMessages]);

    const markSeen = async (id: number) => {
        setUpdateCount(!updateCount)
        try {
            const res = await markAsSeenApi({ token, raw: { conversation_id: id } })
            if (res?.status) {
                setUpdateCount(!updateCount)
            }
            console.log('MARK SEEN RES', res)
        } catch (err) {
            console.log(err);
        }
    };


    // CALL

    const onCall = useCallback(e => {
        setCallSocketMessage(formatCallSocket(e));
        setGuestCallStatus("incoming");
    }, []);

    const onCallStatusChange = useCallback(e => {
        setGuestCallStatus(e?.status || "");
        setCallStatusData(e);
        console.log("yay 11 socket event", e);
    }, []);

    // HOST FUNCTIONS
    const startCall = async () => {
        try {
            const res = await startCallApi({ conversationId: activeChat?.conversationId, userId: activeChat?.user?.id, token });

            // if (res?.error) {
            //     let arr = res?.error?.split(" ")
            //     let rId = arr[arr.length - 1]
            //     await finishCallApi({ token, roomId: rId || "" });
            //     startCall();
            // }

            if (res?.call_rooms) {
                setRoomId(res?.call_rooms?.provider_room_id);
            }

            await hmsActions.join({
                userName: profile?.name,
                authToken: res?.token
            });

            setIsHost(true);
            setHostCallStatus("joined");
            setGuestCallStatus("calling");
        } catch (err) {
            console.log("Err:", err);
        }
    }

    const cancelCall = async () => {
        await cancelCallApi({ token, roomId: roomId });
        finishCallApi({ token, roomId });
        // hmsActions.leave();
        await hmsActions.endRoom(true, "call ended");
        setHostCallStatus("finished");
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            router.push("/messages");
        }
        // setTimeout(() => {
        //     setActiveChat({
        //         conversationId: activeChat?.conversationId,
        //         user: {
        //             id: activeChat?.user?.id,
        //             name: activeChat?.user?.name,
        //             pic: activeChat?.user?.pic,
        //             talentlogin: activeChat?.user?.talentlogin,
        //             talentnum: activeChat?.user?.talentnum
        //         },
        //         fetchAgain: true
        //     })
        // }, 2000)
    }

    const finishCall = async () => {
        // await finishCallApi({ token, roomId });
        // hmsActions.leave();
        await hmsActions.endRoom(true, "call ended");
        setHostCallStatus("finished");
        setIsHost(false);
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            router.push("/messages");
        }

        // setTimeout(() => {
        //     setActiveChat({
        //         conversationId: activeChat?.conversationId,
        //         user: {
        //             id: activeChat?.user?.id,
        //             name: activeChat?.user?.name,
        //             pic: activeChat?.user?.pic,
        //             talentlogin: activeChat?.user?.talentlogin,
        //             talentnum: activeChat?.user?.talentnum
        //         },
        //         fetchAgain: true
        //     })
        // }, 2000)
    }

    // GUEST FUNCTIONS
    const leaveCall = async () => {
        await leaveCallApi({ token, roomId });
        hmsActions.leave();
        setGuestCallStatus("left");
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            router.push("/messages");
        }
    }

    const acceptCall = async () => {
        await acceptCallApi({ token, roomId });
        await hmsActions.join({
            userName: profile?.name,
            authToken: callSocketMessage?.authToken
        });
        setGuestCallStatus("joined");
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            router.push("/messages/call");
        } else {
            if (!router.pathname.includes("messages")) {
                router.push("/messages");
            }
        }
    }

    const rejectCall = async () => {
        await rejectCallApi({ token, roomId: roomId });
        setGuestCallStatus("rejected");
    }

    // const onAccept = useCallback(e => {
    //     console.log('callSocketData new', e);
    //     setCallSocketData({ status: e?.status || null });
    //     // setCallSocketData({ ...callSocketData, status: e?.status || null })
    // }, [callSocketData]);

    // const startAgain = async () => {
    //     try {
    //         const res = await startCallApi({ conversationId: activeChat?.conversationId, userId: activeChat?.user?.id, token });

    //     if (res?.call_rooms) {
    //         setRoomId(res?.call_rooms?.provider_room_id);
    //     }

    //         await hmsActions.join({
    //             userName: profile?.name,
    //             authToken: res?.token
    //         });

    //         setIsHost(true); 
    //     } catch (err) {
    //         console.log("Err:", err);
    //     }
    // }



    //INVITATIONS

    const fetchInvites = useCallback(async () => {
        try {
            setIndboxLoading(true);
            const res = await getCDInvitesListApi({ token: token, page: invitesPage.current.current, perPage: LIMIT });
            setInvites((prev) => {
                if (invitesPage.current.current == 1) {
                    return [...res.data]
                } else {
                    return [...prev, ...res.data]
                }
            });
            invitesPage.current.total = Number(res?.last_page);
            setInvitesLoading(false)
            setInvitesLoadingMore(false)
        } catch (err) {
            console.log('Err', err);
            setInvitesLoading(false);
            setInvitesLoadingMore(false);
        }
    }, [token]);

    const fetchMoreInvites = useCallback(async () => {
        if (invitesPage.current.total > invitesPage.current.current) {
            invitesPage.current.current = invitesPage.current.current + 1;
            fetchInvites();
        }
    }, [fetchInvites]);


    // NOTIFICATOINS

    const onNotification = useCallback(e => {
        setNotificationSocketData(e);
        console.log("notification e: ", e)
    }, []);

    const fetchNotificationCount = useCallback(async () => {
        try {
            if (!token) {
                return;
            }
            const res = await getUnreadNotificationsCountApi(token);
            setNotificationCount(res?.total_unread_count)
        } catch (err) {
            console.log('Err', err);
        }
    }, [token]);

    useEffect(() => {
        fetchNotificationCount();
    }, [fetchNotificationCount, notificationSocketData]);

    // ACTION FUNCTIONS

    const onMessage = useCallback(e => {
        console.log("CALLLL", e)
        setMessageCount(Number(e?.total_unread_count?.total_unread_count));
        setSocketData(e);
    }, [])

    const onMessageRemove = async ({ conversationsId, id }: { conversationsId: number, id: number }) => {
        try {
            await deleteConversationsMessage({ id: id, conversationsId: conversationsId, token: token })
        } catch (err) {
            console.error(err);
        }
    }

    const updateIndbox = ({ conversationId: cId, body, type, name, pic }: UpdateIndboxArg) => {
        if (indbox.filter(d2 => { return d2?.id == parseInt(cId) }).length === 0) {

            console.log("ind this one ran")
            setIndbox(d => [
                {
                    // ...d,
                    id: cId,
                    name: name,
                    pic: pic,
                    last_message: {
                        body: body || "",
                        type: type
                    },
                    unread_count: 0
                },
                ...d.filter(d1 => d1?.id !== parseInt(cId))
            ])
        } else {
            setIndbox(d => [
                ...d.filter(
                    d2 => {
                        return d2?.id == parseInt(cId)
                    }
                ).map(d3 => (
                    {
                        ...d3,
                        last_message: {
                            body: body || "",
                            type: type
                        },
                        unread_count: 0
                    }
                )),
                ...d.filter(d1 => d1?.id !== parseInt(cId))
            ])
        }
    }

    const clearUnreadCount = ({ conversationId: cId }: { conversationId: any }) => {
        setIndbox(s => s.map((i: any) => i.pivot?.conversation_id === cId ? ({ ...i, unread_count: 0, }) : i))
    }

    /**
     * EFFECTS
     */

    //LAYOUT
    useEffect(() => {
        if (activeTab === 'messages') {
            fetchIndboxMessages()
        } else if (activeTab === 'invitations') {
            fetchInvites();
        } else if (activeTab === '') {

        }
    }, [fetchIndboxMessages, fetchInvites, activeTab]);


    useEffect(() => {
        if (router.pathname.includes('messages')) {
            fetchIndboxMessages()
        }
    }, [router, fetchIndboxMessages]);



    //MESSAGING

    useEffect(() => {
        fetchMessageCount();
    }, [fetchMessageCount, updateCount, socketData]);

    useEffect(() => {
        let messageChannel: any;
        let notifChannel: any;
        let callChannel: any;

        //
        return;

        if (profile.id && profile.talentnum && token) {
            const socketEcho = new Echo({
                host: 'https://wss.exploretalent.com/',
                broadcaster: 'socket.io',
                client: socketio,
                auth: {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                }
            });

            messageChannel = socketEcho.private(
                'chat.' + profile.id,
            ).listen('.MessageSent', onMessage);

            callChannel = socketEcho.private(
                'call.' + profile.id,
            ).listen('.CallIncomming', onCall);

            callChannel = socketEcho.private(
                'call.' + profile.id,
            ).listen('.CallStatus', onCallStatusChange);

            notifChannel = socketEcho.private(
                'notification.' + profile.talentnum,
            ).listen('.WebNotification', onNotification);
        }

        return () => {
            messageChannel?.stopListening('.MessageSent', onMessage)
            callChannel?.stopListening('.callSent', onCall)
            notifChannel?.stopListening('.notifSent', onNotification)
        }

    }, [profile.id, token, profile.talentnum, onMessage, onCall, onNotification, onCallStatusChange]);

    useEffect(() => {
        if (socketData?.message) {
            console.log('socketData', socketData)
            let notActiveChat = false;

            if (indbox.filter(y => y.id === parseInt(socketData.message.conversation_id)).length > 0) {
                setIndbox(d => [
                    ...d.filter(
                        d2 => {
                            return d2?.id == parseInt(socketData?.message?.conversation_id)
                        }
                    ).map(d3 => {
                        if (activeChat.conversationId === parseInt(socketData?.message?.conversation_id)) {
                            return {
                                ...d3,
                                last_message: {
                                    body: socketData?.message?.body || "",
                                    type: socketData?.message?.type
                                },
                                unread_count: 0
                            }
                        } else {
                            // console.log("PLAY SOUND")
                            playMessageSound()

                            // notActiveChat = true;
                            return {
                                ...d3,
                                last_message: {
                                    body: socketData?.message?.body || "",
                                    type: socketData?.message?.type
                                },
                                unread_count: d3.unread_count + 1
                            }
                        }
                    }),
                    ...d.filter(d1 => d1?.id !== parseInt(socketData?.message?.conversation_id))
                ])



            } else {
                notInList.current = true;
                playMessageSound()
                fetchIndboxMessages()
            }
        }
    }, [socketData, fetchIndboxMessages]);

    useEffect(() => {
        if (socketData.message) {
            setFloatingMessage(s => {
                return {
                    conversationId: Number(socketData.message?.conversation_id || 0),
                    unread: Number(socketData?.message?.conversation?.unread_count || 0),
                    user: {
                        name: socketData?.sender?.fname || '',
                        pic: socketData?.sender?.profile_picture_path || '',
                    },
                    items: s?.conversationId === socketData?.message?.conversation_id && s.items ? [...s.items, {
                        text: socketData.message?.body,
                        type: socketData?.message?.type,
                    }].slice(-3) : [{
                        text: socketData.message?.body,
                        type: socketData?.message?.type,
                    }]
                }
            })
        }
    }, [socketData]);

    useEffect(() => {
        clearUnreadCount({ conversationId: activeChat.conversationId });
    }, [activeChat.conversationId]);

    useEffect(() => {
        console.log("INDBOX CHANGE", indbox);
    }, [indbox]);

    useEffect(() => {
        console.log("notificationSocketData", notificationSocketData);
    }, [notificationSocketData]);

    // CALL
    useEffect(() => {
        setRoomId(callSocketMessage.roomId);
    }, [callSocketMessage])


    useEffect(() => {
        if (guestCallStatus !== "finished") return;
        const leave = async () => {
            try {
                await hmsActions.leave();
                setGuestCallStatus("left");
                if (window.innerWidth <= MOBILE_BREAKPOINT) {
                    router.push("/messages");
                }
            }
            catch (err) {
                console.log("Err", err)
            }
        }
        leave();
    }, [guestCallStatus])

    // useEffect(() => {
    //     if (showChatClass?.item?.id) {
    //         setConversationsMessage([])
    //         setConversationPage(1)
    //         setlastPageMessage(1)
    //     }
    // }, [showChatClass])

    return (
        <MessagingContextV2.Provider value={{
            socketData,
            messageCount,

            //Layout
            activeTab,
            setActiveTab,

            //Messages
            indbox,
            indboxLoading,
            fetchMoreIndboxMessages,
            indboxMessagesPage,
            activeChat,
            setActiveChat,
            markSeen,
            onMessageRemove,
            updateIndbox,
            clearUnreadCount,
            floatingMessage,

            //INVIATIONS
            invites,
            fetchInvites,
            invitesLoading,
            fetchMoreInvites,
            invitesLoadingMore,
            activeInvite,
            setActiveInvite,
            invitePage: invitesPage.current,

            //Notifications
            notificationCount,
            setNotificationCount,

            //CALL
            callSocketData,
            setCallSocketData,
            isHost,
            setIsHost,
            openVideoCalling,
            setOpenVideoCalling,
            roomId,
            setRoomId,
            acceptCall,
            rejectCall,
            startCall,
            cancelCall,
            leaveCall,
            finishCall,
            callStatus,
            callUsers,
            callSocketMessage,
            guestCallStatus,
            hostCallStatus,
            callStatusData
        }}>
            {children}
        </MessagingContextV2.Provider>
    )
}

export function useMessagingV2() {
    return useContext(MessagingContextV2);
}