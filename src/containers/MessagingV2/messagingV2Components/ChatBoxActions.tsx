import { useMessagingV2 } from "context/MessagingContextV2"
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { Camera, Image, Microphone2, Send } from "iconsax-react"
import { lighten } from "polished"
import { useEffect, useRef, useState } from "react"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import ReactTextareaAutosize from "react-textarea-autosize"
import styled from "styled-components"
import AddMedia from "./AddMedia"
import CameraRecorder from "./CameraRecorder"
import RecordAudio from "./RecordAudio"
import ClickAwayListener from "react-click-away-listener";
import toast from "react-hot-toast";
import { ChatboxActionsProps, onMessageArgs } from "types/messagingV2";

export default function ChatboxActions({ onMessage }: ChatboxActionsProps) {
    const [messageText, setMessageText] = useState('')
    const [searchHeight, setSearchHeight] = useState(1)
    const [showGallaryInput, setShowGallaryInput] = useState(false);
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);
    const [audioFile, setAudioFile] = useState<any>();
    const [showGalleryInput, setShowGalleryInput] = useState(false);
    const [showCameraInput, setShowCameraInput] = useState(false);
    const [showAudioInput, setShowAudioInput] = useState(false);
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState<any>();
    const [showChatModal, setShowChatModal] = useState(false);
    const [captureVideo, setIsCaptureVideo] = useState(false);

    const handleMultipleImages = (evnt: any) => {
        const selectedFIles: any = [...images];
        const targetFiles = evnt.target.files;
        const targetFilesObject = [...targetFiles]

        if (selectedFIles.length > 0) {
            for (const item of selectedFIles) {
                if (item?.name == targetFiles[0]?.name) {
                    evnt.target.value = ''
                    return false;
                }
            }
            targetFilesObject.map((file) => {
                return selectedFIles.push(file)
            })
        } else {
            targetFilesObject.map((file) => {
                return selectedFIles.push(file)
            })
        }

        if (selectedFIles.length > 3) {
            toast.error("You cannot add more than 3 items")
            return
        }

        setImages(selectedFIles)
        evnt.target.value = ''
    }

    const showGallery = () => {
        if (images.length == 0) {
            document.getElementById("selectfile")?.click()
        }
        setShowGalleryInput(true)
        setShowCameraInput(false)
        setShowAudioInput(false)
    }

    const showCamera = () => {
        if (showCameraInput == true) {
            setImgSrc(null)
        }
        setShowGallaryInput(false)
        setShowAudioInput(false)
        setShowChatModal(false)
        setShowCameraInput(true)
        setShowModal(true)
        setIsCaptureVideo(false)
    }

    const showMicro = () => {
        setShowAudioInput(true)
        setShowCameraInput(false)
        setShowGallaryInput(false)
    }

    const handleKeyDown = (e: any) => {
        if (messageText.trim().length === 0) return
        if (e.key == 'Enter' && !e.shiftKey) {
            onMessage({ file: messageText, type: 'text' })
            setMessageText("")
            e.target.value = ''
            e.preventDefault();
            return
        }
    };

    const addEmoji = (e: any) => {
        const emoji = e.native;
        setMessageText(s => s + emoji);
    };

    return (
        <Container>
            {images.length == 0 &&
                <input
                    type="file"
                    hidden
                    accept="video/*,image/*"
                    id="selectfile"
                    className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                    onChange={handleMultipleImages}
                    multiple
                />
            }
            {images.length > 0 && showGalleryInput &&
                <AddMedia
                    state={images}
                    setState={setImages}
                    onMessage={({ file, type }: onMessageArgs) => {
                        onMessage({ file, type })
                        setShowGalleryInput(false)
                        setShowCameraInput(false)
                        setShowAudioInput(false)
                        setImages([])
                    }}
                />
            }

            {
                showCameraInput && <CameraRecorder
                    state={imgSrc}
                    setState={setImgSrc}
                    onClose={() => {
                        setImgSrc(null)
                        setShowCameraInput(false)
                    }}
                    onMessage={({ file, type }: onMessageArgs) => {
                        onMessage({ file, type })
                        setShowCameraInput(!showCameraInput)
                        setShowAudioInput(false)
                        setShowGallaryInput(false)
                        setShowModal(false)
                        setImgSrc(null)
                    }}
                />
            }

            {
                showAudioInput && <RecordAudio
                    audioFile={audioFile}
                    setAudioFile={setAudioFile}
                    setShowAudioInput={setShowAudioInput}
                    onMessage={({ file, type }: onMessageArgs) => {
                        onMessage({ file, type })
                        setShowAudioInput(!showAudioInput)
                        setShowCameraInput(false)
                        setShowGallaryInput(false)
                        setAudioFile(null)
                    }}
                />
            }

            {isEmojiOpen && (
                <ClickAwayListener onClickAway={() => setIsEmojiOpen(false)}>
                    <div className="absolute right-0">
                        <Picker title={""} onSelect={(e: any) => addEmoji(e)} />
                    </div>
                </ClickAwayListener>
            )}

            <>
                <Image variant="Bold" className="cursor-pointer" onClick={showGallery} />
                <Camera variant="Bold" className="cursor-pointer" onClick={showCamera} />
                <Microphone2 variant="Bold" className="cursor-pointer" onClick={showMicro} />
                <Search searchHeight={searchHeight}>
                    <ReactTextareaAutosize
                        placeholder="Message..."
                        onKeyDown={handleKeyDown}
                        value={messageText}
                        onChange={e => setMessageText(e.target.value)}
                    />
                    <HiOutlineEmojiHappy className="emoji cursor-pointer hidden sm:block" onClick={() => {
                        setIsEmojiOpen(true)
                    }} />

                </Search>
                <Send
                    variant="Bold"
                    className="cursor-pointer"
                    onClick={() => {
                        onMessage({ file: messageText, type: 'text' })
                        setMessageText("")
                    }}
                />
            </>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${p => p.theme.primary};
    border-top: 1px solid ${p => p.theme.border};
    background: ${p => p.theme.pure}; 
    position: relative;
    min-height: 70px;
`
const Search = styled.div<{ searchHeight: number }>`
    display: flex;
    position: relative;
    padding: 8px;
    background: ${p => lighten(0.04, p.theme.border)}; 
    // border: 1px solid ${p => p.theme.border};
    border-radius: 100px;
    border-radius: 5px;
    flex-grow: 1; 
    color: ${p => p.theme.base};
    overflow: auto;
    // height: ${p => p.searchHeight}px;
    // height: calc(42px * ${p => p.searchHeight});
    height: fit-content;
    max-height: 150px;
    
    textarea {
        width: 100%;
        padding: 0 10px;
        outline: none;
        border: none;
        resize: none;
        background-color: inherit;
    }

    .emoji { 
        font-size: 20px;
        opacity: 0.5;
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        z-index: 10;
    }
`