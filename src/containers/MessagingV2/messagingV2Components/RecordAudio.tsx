import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import { useAudioRecorder } from "@sarafhbk/react-audio-recorder"
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import styled from "styled-components"
import SendBtn from "./SendBtn";

export default function RecordAudio({ setAudioFile, onMessage, setShowAudioInput, audioFile }) {
    const {
        audioResult,
        timer,
        startRecording,
        stopRecording,
        pauseRecording,
        resumeRecording,
        status,
        errorMessage,
    } = useAudioRecorder()

    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        if (audioResult) {
            fetch(audioResult)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], "File name", { type: "audio/mp3" })
                    setAudioFile(file)
                })
        }
    }, [audioResult])

    return (
        <Root>
            <MdDelete
                className="close hidden lg:block"
                onClick={() => {
                    setAudioFile([])
                    setShowAudioInput(false)
                }} />

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full pl-[10px]">
                <audio controls src={audioResult} />
                <div className="flex items-center h-20 xl:justify-start lg:justify-center">
                    <MdDelete
                        className="close lg:hidden"
                        onClick={() => {
                            setAudioFile([])
                            setShowAudioInput(false)
                        }} />

                    <p className="ml-2 font-semibold text-black-500 w-[80px] text-center">{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
                    <div>
                        <button onClick={() => { startRecording(), setIsRecording(true) }} disabled={isRecording} className={`${isRecording ? "opacity-50" : ""} h-8 w-8 rounded p-2 bg-blue ml-2`}>
                            <img src="/images/play-button-arrowhead.png" alt="" />
                        </button>
                        <button onClick={() => { stopRecording(), setIsRecording(false) }} className={`${!isRecording ? "opacity-50" : ""} h-8 w-8 rounded p-2 bg-blue ml-2`} disabled={!isRecording}>
                            <img src="/images/stop.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <SendBtn onClick={() => onMessage({ file: audioFile, type: "audio" })} />
        </Root>
    )
}

const Root = styled.div`
    position: absolute;
    bottom: 10px;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.pure};
    border-top: 1px solid ${p => p.theme.border}; 
    color: ${p => p.theme.base};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1050px) {
        height: fit-content;
        padding-top: 20px;
    }

    .close {
        font-size: 24px;
        opacity: 0.7;
        margin-left: 10px;
        cursor: pointer;

        @media (max-width: 1050px) {
            margin-left: 10px;
        }

        &:hover {
            color: ${p => p.theme.abs.danger};
            opacity: 0.9;
            transition: all 0.2s ease;
        }
    }
`