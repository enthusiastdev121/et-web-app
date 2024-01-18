import { useAuth } from "context/AuthContext"
import { useMessagingV2 } from "context/MessagingContextV2"
import { cancelCallApi, finishCallApi } from "network/apis/call"
import { useEffect } from "react"
import { GrFormClose } from "react-icons/gr"
import { MdClose } from "react-icons/md"
import styled from "styled-components"
import { useHMSActions } from "@100mslive/react-sdk";
import toast from "react-hot-toast"
import { IGNORE_CALL_TIME } from "@/utils/constants/messagingV2"

export default function CallRinging({ img, name, roomId, closeCall }: { img: string, name: string, roomId: string, closeCall: () => void }) {
    const { token } = useAuth();
    const { callSocketData, setOpenVideoCalling } = useMessagingV2();
    const hmsActions = useHMSActions();

    const cancelCall = async () => {
        await cancelCallApi({ token, roomId: roomId });
        setOpenVideoCalling(false);
        finishCallApi({ token, roomId: localStorage.getItem("latestRoomId") || roomId });
        setOpenVideoCalling(false);
        hmsActions.leave();
        closeCall();
    }

    useEffect(() => {
        if (callSocketData?.joinStatus === 1 || callSocketData?.rejectStatus === 1) {
            cancelCall();
        }
    }, [callSocketData])

    useEffect(() => {
        // if (callSocketData?.status !== null) return;
        let timer: any;

        timer = setTimeout(() => {
            setOpenVideoCalling(false);
            finishCallApi({ token, roomId: localStorage.getItem("latestRoomId") || roomId });
            setOpenVideoCalling(false);
            hmsActions.leave();
            closeCall();
            toast.error("Call not answered");
        }, IGNORE_CALL_TIME)

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [callSocketData])

    return (
        <Root>
            <h2>Calling...</h2>

            <RipplePic>
                <img src={img} alt="" />
            </RipplePic>
            <div>{name}</div>

            {/* ACTIONS */}
            <MdClose className="icon" onClick={cancelCall} />
        </Root>
    )
}

const Root = styled.div`
    color: ${p => p.theme.base}; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    background-color: ${p => p.theme.pure};
    min-width: 320px;
    padding: 1.5em;
    border-radius: 5px;
    position: relative;

    h2 {
        font-size: 24px;
        font-weight: 500;
    }

    .icon {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 16px;
        cursor: pointer;
        opacity: 0.7;

        &:hover {
            opacity: 1;
            background-color: ${p => p.theme.abs.danger};
            color: #fff;
            border-radius: 100%;
            transition: all 0.2s ease;
        }
    }
`

const RipplePic = styled.div`
    height: 180px;
    aspect-ratio: 1;
    border-radius: 100%; 
    position: relative;
    margin-top: 15px;
    
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 100%; 
        position: relative;
        z-index: 1;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${p => p.theme.primary};
        border-radius: 50%; 
        animation: ripple 1.5s ease-out infinite;
    }

    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(1.3);
        }
    }
`