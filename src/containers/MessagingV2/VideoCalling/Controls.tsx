import { lighten } from "polished"
import { useEffect } from "react"
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai"
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs"
import { IoIosCall } from "react-icons/io"
import styled from "styled-components";
import { useHMSActions } from "@100mslive/react-sdk";
import { useAVToggle } from "@100mslive/react-sdk";
import toast from "react-hot-toast"
import { finishCallApi, leaveCallApi } from "network/apis/call"
import { useAuth } from "context/AuthContext"
import { useMessagingV2 } from "context/MessagingContextV2"
import { MOBILE_BREAKPOINT } from "../const"
import { Router, useRouter } from "next/router"

export default function Controls({ closeCall, isCollapsed }: { closeCall: () => void, isCollapsed: boolean }) {
    const hmsActions = useHMSActions();
    const {
        isLocalAudioEnabled,
        isLocalVideoEnabled,
        toggleAudio,
        toggleVideo
    } = useAVToggle();

    const { isHost, finishCall, leaveCall, guestCallStatus, cancelCall, activeChat, setActiveChat } = useMessagingV2();
    // const roomId = callSocketData.something.roomId;

    const leaveRoom = async () => {
        if (isHost) {
            finishCall();
        } else {
            leaveCall();
        }
    }

    useEffect(() => {
        window.onunload = () => {
            leaveRoom();
            closeCall();
        };
    }, []);

    return (
        <Root abs={isCollapsed}>
            <div
                onClick={toggleAudio}
                className="control"
            >{isLocalAudioEnabled ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}</div>

            <div
                onClick={toggleVideo}
                className="control"
            >{isLocalVideoEnabled ? <BsCameraVideo /> : <BsCameraVideoOff />}</div>

            <div
                onClick={guestCallStatus === "calling" ? () => cancelCall() : () => leaveRoom()}
                className="control end"
            ><IoIosCall /></div>

            {/* {
                guestCallStatus === "joined" ?
                    <div
                        onClick={leaveRoom}
                        className="control end"
                    ><IoIosCall /></div>
                    :
                    <div
                        onClick={cancelCall}
                        className="control exit"
                    >Exit Call</div>
            } */}
        </Root>
    )
}

const Root = styled.div<{ abs: boolean }>`
    position: ${p => p.abs ? "absolute" : "static"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border-radius: 3px;
    padding: 4px;
    background-color: #000;

    .control {
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        background-color: rgba(255,255,255,0.1);
        color: #fff;
        cursor: pointer;

        &:hover {
            background-color: rgba(255,255,255,0.15);
        }
    }   

    .end {
        background-color: ${p => p.theme.abs.danger};

        &:hover {
            background-color: ${p => lighten(0.03, p.theme.abs.danger)};
        }
    }

    .exit {
        background-color: ${p => p.theme.abs.danger};
        width: 100px;

        &:hover {
            background-color: ${p => lighten(0.03, p.theme.abs.danger)};
        }
    }
`
