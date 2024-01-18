import { IGNORE_CALL_TIME } from "@/utils/constants/messagingV2";
import { BROKEN_IMAGE_FALLBACK, NEW_MESSAGE_SOUND, VIDEO_CALL_SOUND } from "@/utils/constants/resources"
import { useHMSActions } from "@100mslive/react-sdk";
import { useAuth } from "context/AuthContext"
import { useMessagingV2 } from "context/MessagingContextV2"
import { useProfileStore } from "context/ProfileStore";
import { AnimatePresence, motion } from "framer-motion"
import { acceptCallApi, cancelCallApi, rejectCallApi, startCallApi } from "network/apis/call"
import { useRouter } from "next/router";
import { darken } from "polished"
import { useCallback, useEffect, useRef, useState } from "react"
import { IoMdCall } from "react-icons/io"
import { MdCallEnd, MdClose } from "react-icons/md"
import styled from "styled-components"
import useSound from "use-sound"
import { MOBILE_BREAKPOINT } from "../const";

export default function CallModal() {
    const { callSocketMessage, acceptCall, rejectCall, callStatus, guestCallStatus } = useMessagingV2();
    const { pic, name } = callSocketMessage;
    const [show, setShow] = useState(false);
    const constraintsRef = useRef(null);

    useEffect(() => {
        if (guestCallStatus !== "") return;
        let timer: any;

        timer = setTimeout(() => {
            setShow(false)
        }, IGNORE_CALL_TIME);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [guestCallStatus])

    useEffect(() => {
        if (guestCallStatus === "incoming") {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [guestCallStatus]);

    return (
        <AnimatePresence>
            {show && <MotionConstraints ref={constraintsRef}>
                <Root
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                    drag
                    dragConstraints={constraintsRef}
                >
                    <div className="content">
                        <h2>Incoming Call...</h2>

                        <RipplePic>
                            <img src={pic || BROKEN_IMAGE_FALLBACK} alt="" />
                        </RipplePic>
                        <div>{name}</div>

                        <audio src={VIDEO_CALL_SOUND} autoPlay preload="auto"></audio>

                        {/* ACTIONS */}
                        {/* <MdClose className="icon" /> */}
                        <div className="flex items-center justify-center gap-6 w-full">
                            <button className="action-btn accept" onClick={acceptCall} >
                                <IoMdCall className="relative z-[1]" />
                            </button>

                            <button className="action-btn reject" onClick={rejectCall} >
                                <MdCallEnd className="relative z-[1]" />
                            </button>
                        </div>

                    </div>
                </Root>
            </MotionConstraints>}
        </AnimatePresence>
    )
}

const Root = styled(motion.div)`
    position: fixed;
    bottom: 6rem;
    right: 2rem; 
    z-index: 99;

    .content {
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
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
    }

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

    .action-btn {
        border-radius: 100%;
        padding: 0.8rem;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        position: relative; 
        
           &::before {
               content: "";
               position: absolute;
               width: 100%;
               height: 100%;
               top: 0;
               left: 0;
               background-color: inherit;
               border-radius: 50%;  
               animation: ripple 1.5s ease-out infinite;
           }
    }

    
    .accept {
        background-color: ${p => p.theme.abs.green};  
        &:hover {
            background-color: ${p => darken(0.05, p.theme.abs.green)};  
            transition: all 0.2s ease;
        }
    }
    
    .reject {
        background-color: ${p => p.theme.abs.danger}; 
        &:hover {
            background-color: ${p => darken(0.05, p.theme.abs.danger)};  
            transition: all 0.2s ease;
        }
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
const RipplePic = styled.div`
    height: 200px;
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
const MotionConstraints = styled(motion.div)` 
  height: 100vh;
  width: 100vw;
`;