import { rgba } from "polished"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion";
import ImageViewPop from "components/ImageViewPop";
import { useState, useEffect, useRef } from "react";
import VideoPlayerModal from "components/VideoPlayerModal";
import VideoImageThumbnail from 'react-video-thumbnail-image';
import { FaPlay } from "react-icons/fa";
import AudioPlayer from "components/profile/AudioPlayer";
import { useMessagingV2 } from "context/MessagingContextV2";
import { BiCheckDouble, BiDotsHorizontalRounded, BiDotsVerticalRounded } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import ClickAwayListener from "react-click-away-listener";
import ProgressBar from "./ProgressBar";
// import { toast } from "react-toastify";
import toast from "react-hot-toast"
import axios from "axios";
import { addNewConversations, addNewConversationsMessage, markAsSeenApi, MessageMedia } from "network/apis/messages";
import { useProfileStore } from "context/ProfileStore";
import { useAuth } from "context/AuthContext";
import { MessageItemTypeD } from "types/messagingV2";
import momentTz from "moment-timezone";
import { format } from "date-fns";
import { BsClockHistory } from "react-icons/bs";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { secondsToHms } from "@/utils/helper";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { t2t } from "@/utils/constants/profile";

export default function ChatItem({ own = false, item, onMessageSuccess, onMessageFail, cId, removeMessage, readStatus, uploading, lastRead = false }: ChatItemProps) {

    const { token } = useAuth()
    const [imgView, setImgView] = useState(false)
    const [fullVideo, setFullVideo] = useState(false)
    const [openActionsModal, setOpenActionsModal] = useState(false)
    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(false)
    const cancelRef = useRef<any>();
    const { activeChat, markSeen, setActiveChat, updateIndbox } = useMessagingV2();

    console.log("lastRead", lastRead)

    const cancelProgress = () => {
        cancelRef.current?.cancel();
        setProgress(0);
    }

    const sendText = async (message: string) => {
        console.log("outside")

        if (!activeChat?.conversationId) {
            console.log("inside")
            let raw = {
                name: activeChat?.user?.name,
                user_ids: [activeChat?.user?.userId],
                type: t2t
            }
            const res = await addNewConversations({ data: JSON.stringify(raw), token: token })

            setActiveChat({ ...activeChat, conversationId: res?.id })

            let raw2 = {
                body: message,
                type: 'text'
            }

            const res2 = await addNewConversationsMessage({
                data: JSON.stringify(raw2),
                conversationsId: res?.id,
                token: token
            })

            console.log("KK----------", item)

            onMessageSuccess({ localId: item?.localId, res: res2, isText: true })

            updateIndbox({ conversationId: res?.id, body: message, type: "text", pic: activeChat?.user?.pic, name: activeChat?.user?.name })

        } else {
            let raw = {
                body: message,
                type: 'text'
            }
            try {
                const res = await addNewConversationsMessage({
                    data: JSON.stringify(raw),
                    conversationsId: cId,
                    token: token
                })

                console.log("KK----------", item)

                onMessageSuccess({ localId: item?.localId, res, isText: true })
                updateIndbox({ conversationId: cId, body: message, type: "text", pic: activeChat?.user?.pic, name: activeChat?.user?.name })
            } catch (err) {


                if (err?.errors?.message_allowed !== undefined && err?.errors?.message_allowed === false) {
                    toast.error("Messaging talents is an exclusive feature for our Pro members. If you're already a Pro member and are encountering this message, please reach out to our support team for assistance.", { duration: 3000, position: 'bottom-center', });
                }
                console.log(err);
                onMessageFail(item?.localId)
            }
        }

    }

    const addMedia = async ({ conversation_id, type, file }: { conversation_id: string, type: string, file: File }) => {
        try {
            if (!activeChat?.conversationId) {
                let raw = {
                    name: activeChat?.user?.name,
                    user_ids: [activeChat?.user?.userId],
                    type: t2t
                }
                const res = await addNewConversations({ data: JSON.stringify(raw), token: token })

                setActiveChat({ ...activeChat, conversationId: res?.id })


                const raw2 = new FormData();
                raw2.append("type", type);
                raw2.append("file", file);
                raw2.append("conversation_id", res?.id);
                cancelRef.current = axios.CancelToken.source();


                const res2 = await axios.post(MessageMedia, raw2, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: "Bearer " + token,
                    },
                    cancelToken: cancelRef.current?.token,
                    onUploadProgress: (progressEvent: any) => {
                        const p = progressEvent.loaded / progressEvent.total;
                        setProgress(p);
                    },
                })

                onMessageSuccess({ localId: item?.localId, res: res2, isText: false })

                if (type === "picture") {
                    updateIndbox({ conversationId: res?.id, type: "picture", pic: activeChat?.user?.pic, name: activeChat?.user?.name })
                } else if (type === "video") {
                    updateIndbox({ conversationId: res?.id, type: "video", pic: activeChat?.user?.pic, name: activeChat?.user?.name })
                } else if (type === "audio") {
                    updateIndbox({ conversationId: res?.id, type: "audio", pic: activeChat?.user?.pic, name: activeChat?.user?.name })
                }
            } else {
                const raw = new FormData();
                raw.append("type", type);
                raw.append("file", file);
                raw.append("conversation_id", conversation_id);
                cancelRef.current = axios.CancelToken.source();

                const res = await axios.post(MessageMedia, raw, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: "Bearer " + token,
                    },
                    cancelToken: cancelRef.current?.token,
                    onUploadProgress: (progressEvent: any) => {
                        const p = progressEvent.loaded / progressEvent.total;
                        setProgress(p);
                    },
                })

                onMessageSuccess({ localId: item?.localId, res, isText: false })

                if (type === "picture") {
                    updateIndbox({ conversationId: activeChat.conversationId, type: "picture" })
                } else if (type === "video") {
                    updateIndbox({ conversationId: activeChat.conversationId, type: "video" })
                } else if (type === "audio") {
                    updateIndbox({ conversationId: activeChat.conversationId, type: "audio" })
                }
            }

        } catch (err) {
            console.log("err", err)
            if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.message_allowed === false) {
                toast.error("Messaging talents is an exclusive feature for our Pro members. If you're already a Pro member and are encountering this message, please reach out to our support team for assistance.", { duration: 3000, position: 'bottom-center' });
            } else {
                toast.error("Uploading failed!");
                onMessageFail(item?.id)
            }
        }
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const formatDate = (date: string) => {
        const date1 = new Date(date);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 365) {
            return date1.getDate() + '/' + date1.getMonth() + '/' + date1.getFullYear() + ' ' + format(new Date(momentTz.tz(date, "America/Los_Angeles")), "h:mm aaa");
        } else if (diffDays > 1) {
            return date1.getDate() + ' ' + monthNames[date1.getMonth()] + ' ' + format(new Date(momentTz.tz(date, "America/Los_Angeles")), "h:mm aaa");
        } else {
            return format(new Date(momentTz.tz(date, "America/Los_Angeles")), "h:mm aaa");
        }
    }

    const formatDate2 = (date = 1) => {
        const d = new Date(date * 1000)
        const date1 = new Date(date * 1000);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 365) {
            return date1.getDate() + '/' + date1.getMonth() + '/' + date1.getFullYear() + ' ' + format(new Date(momentTz.tz(d, "America/Los_Angeles")), "h:mm aaa");
        } else if (diffDays > 1) {
            return date1.getDate() + ' ' + monthNames[date1.getMonth()] + ' ' + format(new Date(momentTz.tz(d, "America/Los_Angeles")), "h:mm aaa");
        } else {
            return format(new Date(momentTz.tz(d, "America/Los_Angeles")), "h:mm aaa");
        }
    }

    const formatTime = (time = 1) => {
        const date = new Date(time * 1000);
        console.log("time", date)
        return format(new Date(momentTz.tz(date, "America/Los_Angeles")), "h:mm aaa");
    }

    useEffect(() => {
        if (item?.uploading) {
            if (item?.type === "text") {
                sendText(item?.body)
            } else {
                addMedia({ conversation_id: cId, type: item?.type, file: item?.body })
            }
        }
    }, [])

    useEffect(() => {
        if (item?.type === "call") {
            markSeen(activeChat.conversationId)
        }
    }, [])

    return (
        <Root
            own={own}
            initial={{ opacity: 0.6, y: 5 }}
            transition={{ duration: 0.2 }}
            animate={{ opacity: 1, y: 0 }}
        >

            {
                lastRead && <div className="bg-slate-300 rounded-full w-[20px] h-[20px] last-read-user">
                    <img src={activeChat?.user?.pic} alt="user profile" />
                </div>
            }

            {
                own && <BiDotsVerticalRounded
                    className="action-dots"
                    onClick={() => setOpenActionsModal(true)}
                />
            }

            {
                openActionsModal &&
                <ClickAwayListener onClickAway={() => setOpenActionsModal(false)}>
                    <RemoveModal>
                        <div className="content-bar" onClick={() => {
                            removeMessage(item?.id)
                            setOpenActionsModal(false)
                        }}>
                            <IoCloseCircleOutline className="text-lg" /> Remove
                        </div>
                    </RemoveModal>
                </ClickAwayListener>
            }

            {
                item.type == "text" &&
                <TextContainer own={own}>
                    <div className="content date-parent flex items-center relative">
                        <p className={own ? "ml-auto" : ""}>{item?.body}</p>
                        {own && <span>
                            {
                                uploading ?
                                    <BsClockHistory className="opacity-40 -mb-2 text-sm w-4" /> :
                                    readStatus === 1 ?
                                        <BiCheckDouble className="text-lg txt-primary opacity-80 -mb-2 w-4" />
                                        : <BiCheckDouble className="text-lg opacity-40 -mb-2 w-4" />
                            }
                        </span>}
                        <DateContainer own={own} className="dates flex">{formatDate(item?.createdAt)}</DateContainer>
                    </div>
                    {/* <div className={`time mt-[2px] ${own && "text-right"} w-full`}>{formatDate(item?.createdAt)}</div> */}
                </TextContainer>
            }

            {
                item.type == "picture" &&
                <>
                    <PictureContainer own={own} onClick={() => setImgView(true)} className="date-parent relative">
                        <img src={item?.localMediaPath || item?.mediaPath} alt="picture" />
                        {own && <span className="self-end mr-1 h-3">
                            {
                                uploading ?
                                    <BsClockHistory className="opacity-40 text-sm w-4 my-[3px]" /> :
                                    readStatus === 1 ?
                                        <BiCheckDouble className="text-lg txt-primary opacity-80 w-4 mb-[2px]" />
                                        : <BiCheckDouble className="text-lg opacity-40 w-4 mb-[2px]" />
                                // : <BsClockHistory className="opacity-40 text-sm w-4 my-[3px]" />
                            }
                        </span>}
                        {
                            item?.uploading && <ProgressBar
                                progress={progress}
                                onCancel={cancelProgress}
                            />
                        }
                        <DateContainer own={own} className="dates">{formatDate(item?.createdAt)}</DateContainer>
                        {/* <div className={`time mt-[2px] mb-[10px] ${own && "text-right"}`}>{formatDate(item?.createdAt)}</div> */}
                    </PictureContainer>
                </>
            }

            {
                item.type == "audio" &&
                <>
                    <AudioContainer own={own}>
                        <div className="flex flex-col date-parent relative">
                            <audio controls src={item?.mediaPath} />
                            <DateContainer own={own} className="dates">{formatDate(item?.createdAt)}</DateContainer>

                            {own && <span className="self-end block mr-1">
                                {
                                    uploading ?
                                        <BsClockHistory className="opacity-40 -mb-2 text-sm w-4" /> :
                                        readStatus === 1 ?
                                            <BiCheckDouble className="text-lg txt-primary opacity-80 -mb-2 w-4" />
                                            : <BiCheckDouble className="text-lg opacity-40 -mb-2 w-4" />
                                }
                            </span>}
                            {/* <div className="bg-slate-200 rounded flex items-center justify-center w-fit px-3 py-1">
                            <AudioPlayer uri={item?.mediaPath} />
                        </div> */}
                            {
                                item?.uploading && <ProgressBar
                                    progress={progress}
                                    onCancel={cancelProgress}
                                />
                            }
                        </div>
                    </AudioContainer>
                </>
            }

            {
                item.type == "video" &&
                <>
                    <VideoContainer own={own} onClick={() => setFullVideo(true)}>
                        {/* <video width="320" height="240" controls src={item?.mediaPath}>
                        </video> */}
                        <div className="img-container date-parent relative">
                            <VideoImageThumbnail videoUrl={item?.mediaPath} alt="spotlight image " />
                            <div className="overlay">
                                <div className="play-btn">
                                    <FaPlay className="text-white text-2xl ml-1" />
                                </div>
                            </div>

                            <DateContainer own={own} className="dates">{formatDate(item?.createdAt)}</DateContainer>
                        </div>
                        {own && <span className="self-end mr-1 h-3">
                            {
                                uploading ?
                                    <BsClockHistory className="opacity-40 text-sm w-4 my-[3px]" /> :
                                    readStatus === 1 ?
                                        <BiCheckDouble className="text-lg txt-primary opacity-80 w-4 mb-[2px]" />
                                        : <BiCheckDouble className="text-lg opacity-40 w-4 mb-[2px]" />
                                // : <BsClockHistory className="opacity-40 text-sm w-4 my-[3px]" />
                            }
                        </span>}
                        {
                            item?.uploading && <ProgressBar
                                progress={progress}
                                onCancel={cancelProgress} />
                        }
                    </VideoContainer>
                    {/* <div className={`time mt-[1px] mb-[10px] ${own && "text-right"}`}>{formatDate(item?.createdAt)}</div> */}
                </>
            }

            {
                item.type == "call" &&
                <CallContainer>
                    {
                        item?.room?.status === "started" ?
                            <></> : item?.room?.status === "finished" ?
                                <></> : item?.room?.status === "canceled" ?
                                    <></> : item?.room?.status === "missed" ?
                                        <></> : <></>
                    }

                    {/* <div className="bg-primary flex items-center justify-center text-white rounded-md py-[2px] gap-1">
                        <div className="text-xs">{formatDate(item?.room?.startTime * 1000)}</div>
                        <div> <span className="font-semibold">Call</span> - {secondsToHms(item?.room?.duration)}</div>
                    </div> */}
                    <div className="text-xs">{formatDate2(item?.room?.startTime)}</div>
                    <div className="flex items-center justify-center gap-1" > <span className="font-semibold flex items-center justify-center gap-1"><AiTwotoneVideoCamera /> Call</span> - {secondsToHms(item?.room?.duration)}</div>


                    {/* <div className="text-xs">{formatTime(item?.room?.startTime)}</div>
                    <div> <span className="font-semibold">{item?.room?.host ? "You" : item?.room?.startBy}</span> {item?.room?.status} call - {secondsToHms(item?.room?.duration)}</div> */}

                    {/* <div> <span className="font-semibold">{item?.room?.host ? "You" : item?.room?.startBy}</span> {item?.room?.status} call
                        ({secondsToHms(item?.room?.duration)}) {formatTime(item?.room?.startTime)} - {formatTime(item?.room?.endTime)}
                    </div> */}
                </CallContainer>
            }

            <ImageViewPop
                image={{
                    uri: item.mediaPath,
                    createdAt: 0,
                    hidden: false,
                    id: 1,
                    name: "",
                    primary: false,
                    size: 30000,
                    caption: "",
                }}
                onClose={() => setImgView(false)}
                open={imgView}
            />

            <VideoPlayerModal
                uri={item?.mediaPath}
                open={fullVideo}
                onClose={() => setFullVideo(false)}
            />
        </Root>
    )
}

const Root = styled(motion.div) <{ own: boolean }>`
transform-origin: ${p => p.own ? "right" : "left"};
position: relative;

.time {
    font-size: 12px;
    line-height: 15px;
    opacity: 0.6;
}

.last-read-user {
    position: absolute;
    bottom: 0;
    right: -23px;
    cursor: pointer;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.action-dots {
    position: absolute;
    top: 5px;
    right: -15px;
    cursor: pointer;
    opacity: 0;
}

&:hover .action-dots {
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
}

.dates {
    opacity: 0;
}

.date-parent:hover .dates {
    opacity: 1;
    transition: all 0.2s ease-in-out;
}
 
`
const Container = styled.div<{ own: boolean }>`
    margin-left: ${p => p.own ? "auto" : 0}; 
    display: flex;
    align-items: center;
    // margin-bottom: 10px; 
`
const TextContainer = styled(Container)`
    gap: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    width: fit-content;
    margin-left: ${p => p.own ? "auto" : 0}; 
    max-width: 70%; 
    display: flex;
    flex-direction: column;
    align-items: ${p => p.own ? "flex-end" : "flex-start"};
    justify-content: flex-start;

    .content {
        background: ${p => !p.own ? p.theme.primary : rgba(p.theme.border, 0.5)};
        border-radius: ${p => p.own ? "8px 0px 8px 8px" : "8px"};
        padding: 5px;
        color: ${p => !p.own ? "#fff" : p.theme.base};
    }

    
    @media (max-width: 500px) {
        max-width: 90%;
    }
    
    img {
        height: 36px;
        aspect-ratio: 1;
        border-radius: 100%;
        object-fit: cover;
    }
    
    p { 
        font-size: 15px;
        // background: ${p => !p.own ? p.theme.primary : rgba(p.theme.border, 0.5)};
        color: ${p => !p.own ? "#fff" : p.theme.base};
        font-weight: 500;
        padding: 2px 7px;
        border-radius: ${p => p.own ? "8px 0px 8px 8px" : "8px"};
        width: 100%;
        width: fit-content;
        // white-space: pre;
    }
`
const PictureContainer = styled(Container)`
    height: 230px;
    width: 320px;
    background: ${p => !p.own ? p.theme.primary : rgba(p.theme.border, 0.5)};
    border-radius: 3px;
    // overflow: hidden;  
    justify-content: center;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    
    img {
        height: ${p => p.own ? "87" : "97"}%;
        width: 98%;
        object-fit: cover;
        border-radius: 3px;
    }

    @media (max-width: 500px) {
        width: 260px;
    }
`
const AudioContainer = styled(Container)`
    width: fit-content;
    position: relative;
    height: 80px; 
    // background: red;
`
const VideoContainer = styled(Container)`
    background: ${p => !p.own ? p.theme.primary : rgba(p.theme.border, 0.5)};
    border-radius: 3px;
    // overflow: hidden;   
    height: 230px;
    width: 320px;
    @media (max-width: 500px) {
        width: 260px;
    }
    cursor: pointer;
    justify-content: center;
    border: 2px solid ${p => !p.own ? p.theme.primary : rgba(p.theme.border, 0.5)};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

    .img-container {
        height: ${p => p.own ? "200" : "222"}px;
        width: ${p => p.own ? "310" : "312"}px;
        position: relative;
        border-radius: inherit;
    }

    .react-video-thumbnail-image {
        border-radius: inherit;
        overflow: hidden;
    }

    img {
        height: ${p => p.own ? "200" : "222"}px;
        width: ${p => p.own ? "310" : "312"}px;
        @media ( max-width: 500px) {
            width: 260px;
        }
        object-fit: cover;
        border-radius: 3px;
    }

    .overlay {
        border-radius: inherit;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.3);
        // backdrop-filter: blur(1px);
        // backdrop-filter: blur(2px);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .play-btn { 
        padding: 13px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.3);

        &:hover {
            background-color: ${(p) => p.theme.red};
            transition: all .2s ease;
        }
    }
`
const RemoveModal = styled.div`
    background-color: ${(p) => p.theme.pure};
    padding: 7px 14px;
    border-radius: 5px;
    font-size: 14px;
    position: absolute;
    top: 5px;
    right: 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-weight: 500;
    z-index: 10;
    
    &, .content-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .content-bar {
        opacity: 0.7;
    }

    &:hover .content-bar{
        opacity: 1;
        transition: all 0.2s ease;
    }
`
const DateContainer = styled.div<{ own: boolean }>`
    background-color: rgba(0,0,0,0.7);
    box-shadow: 0 1.5px 5px 0 rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 12px;
    text-align: center;
    width: fit-content;
    white-space: pre;
    padding: 6px 10px;
    border-radius: 5px;
    backdrop-filter: blur(10px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    margin-left: ${p => p.own ? 0 : 5}px;
    margin-right: ${p => p.own ? 5 : 0}px;
    ${p => p.own ? "right: 100%" : "left: 100%"};
`
const CallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    color: ${p => p.theme.primary};
    opacity: 90%;
    font-size: 13px;
    text-align: center;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

type ChatItemProps = {
    own?: boolean;
    item: MessageItemTypeD;
    onMessageSuccess: ({ localId, res, isText }: { localId: number, res: {}, isText: boolean }) => any;
    onMessageFail: (localId: number) => any;
    cId: number;
    removeMessage: (id: any) => any;
    readStatus: 0 | 1;
    uploading: boolean;
}
