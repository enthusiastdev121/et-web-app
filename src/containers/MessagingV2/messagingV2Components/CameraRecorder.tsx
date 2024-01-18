import { MAIN_NAV_HEIGHT } from "@/utils/constants"
import { darken } from "polished";
import { useCallback, useRef, useState } from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import { BsFillCameraFill, BsPlayFill } from "react-icons/bs";
import 'react-h5-audio-player/lib/styles.css';
import { IoClose, IoPlay } from "react-icons/io5";
import { VideoRecordie } from "react-video-recordie";
import Webcam from "react-webcam";
import styled from "styled-components"
import SendBtn from "./SendBtn";
import { onMessageArgs } from "types/messagingV2";

export default function CameraRecorder({ state, setState, onMessage, onClose }: SendMedia) {
    const [captureVideo, setIsCaptureVideo] = useState(false);
    const webcamRef = useRef(null);
    const [showChatModal, setShowChatModal] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [recStarted, setRecStarted] = useState(false);

    const capture = useCallback(() => {
        setShowChatModal(true)
        const imageSrc = webcamRef.current.getScreenshot();
        const url = 'data:image/png;base6....';
        fetch(imageSrc)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "File name", { type: "image/png" })
                setState(file);
                setShowModal(false)
            })

    }, [webcamRef, setState]);

    return (
        <Root recStarted={recStarted}>
            <TopBar>
                <h3 className="font-semibold opacity-80">Capture Media</h3>
                <IoClose
                    className="text-3xl cursor-pointer opacity-70 absolute top-5 right-5"
                    onClick={onClose}
                />
            </TopBar>

            {
                showModal &&
                <CaputureModal>
                    {!captureVideo &&
                        <>
                            <div className="webcam-container">
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                />
                            </div>

                            <div className='btns-container flex items-center justify-center gap-2'>
                                <div className="action-btn" onClick={capture}>
                                    <BsFillCameraFill />
                                </div>
                                <div className="action-btn"
                                    onClick={() => { setIsCaptureVideo(true) }}
                                >
                                    <AiFillVideoCamera />
                                </div>
                            </div>
                        </>
                    }

                    {captureVideo &&
                        <VideoRecordie
                            mimeType='video/mp4'
                            allowDownload={false}
                            allowPlayback={false}
                            onPause={function noRefCheck() { }}
                            onPlay={function noRefCheck() { }}
                            onRecordingComplete={(video: Blob, videoUrl: string) => {
                                setShowChatModal(true)
                                fetch(videoUrl)
                                    .then(res => res.blob())
                                    .then(blob => {
                                        const file = new File([blob], "File name", { type: "video/mp4" })
                                        setState(file);
                                        setShowModal(false)
                                    })
                            }}
                            onRecordingStart={function noRefCheck() { setRecStarted(true) }}
                            onResume={function noRefCheck() { }} />
                    }
                </CaputureModal>
            }

            {showChatModal &&
                <div className="flex items-center justify-center mt-5">
                    <Preview>
                        {state &&
                            <>
                                {state.type.split("/")[0] == "video" &&
                                    <>
                                        <VideoContainer>
                                            <video controls src={URL.createObjectURL(state)}>
                                            </video>
                                        </VideoContainer>
                                    </>
                                }
                                {state.type.split("/")[0] == "image" &&
                                    <img src={URL.createObjectURL(state)} />
                                }
                            </>
                        }

                        <div className="send">
                            <SendBtn onClick={() => onMessage({ file: state, type: "capturedMedia" })} />
                        </div>
                    </Preview>
                </div>
            }

        </Root>
    )
}

const Root = styled.div<{ recStarted: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: calc(100vh - ${MAIN_NAV_HEIGHT + 70}px);
    background-color: ${p => p.theme.paper};
    border-top: 1px solid ${p => p.theme.border};
    // padding: 0 20px;
    color: ${p => p.theme.base};
    display: flex;
    flex-direction: column;


    ._2DM3r {
        background-color: ${p => p.theme.primary};
        padding: 10px;
        border-radius: 100%;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: ${p => !p.recStarted ? 50 : 53}%;
        transform: translateX(-${p => !p.recStarted ? 50 : 53}%);

        &:first-child {
            left: ${p => !p.recStarted ? 50 : 47}%;
            transform: translateX(-{${p => !p.recStarted ? 50 : 47}%});
        }

        @media (max-width: 768px) {
            left: ${p => !p.recStarted ? 50 : 56}%;
            transform: translateX(-${p => !p.recStarted ? 50 : 56}%);
    
            &:first-child {
                left: ${p => !p.recStarted ? 50 : 44}%;
                transform: translateX(-{${p => !p.recStarted ? 50 : 44}%});
            }
        }
    }
`
const CaputureModal = styled.div`
    position: relative;
    width: fit-content;
    padding: 30px;
    margin: 0 auto;

    .webcam-container {
        height: 350px;
        width: 800px;
        width: fit-content;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        overflow: hidden;
    }

    .action-btn {
        background-color: ${p => p.theme.primary};
        height: 50px;
        width: 50px;
        border-radius: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;

        &:hover {
            background-color: ${p => darken(0.05, p.theme.primary)};
            transition: all 0.2s ease;
        }
    }

    .btns-container {
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 20;
    }
`
const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${p => p.theme.border};
    background-color: ${p => p.theme.pure};
`
const Preview = styled.div`
    height: 400px;
    width: 80%; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        border-radius: 2px;
    }

    .send {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(40px);
        z-index: 20;
    }
`
const VideoContainer = styled.div`
  display: flex;
  height: 400px;
  width: 70%;
  align-items: center;
  justify-content: center;
  video {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

type SendMedia = {
    state: [];
    setState: (value: File) => void;
    onMessage: ({ }: onMessageArgs) => any;
    onClose: () => any;
}