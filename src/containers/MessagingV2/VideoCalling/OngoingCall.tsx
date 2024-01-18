import { useMessagingV2 } from "context/MessagingContextV2";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router"
import styled from "styled-components"
import { MOBILE_BREAKPOINT } from "../const";

export default function OngoingCall() {
    const router = useRouter();
    const { hostCallStatus, guestCallStatus } = useMessagingV2();

    return (
        <AnimatePresence>
            {
                ((hostCallStatus === "joined" || guestCallStatus === "joined") && !router.pathname.includes('messages')) &&
                <Root
                    onClick={() => {
                        if (window.innerWidth <= MOBILE_BREAKPOINT) {
                            router.push("/messages/call");
                        } else {
                            router.push('/messages')
                        }
                    }}
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                >
                    <p className="mt-1">Click here to return to the call</p>
                </Root>
            }
        </AnimatePresence>
    )
}

const Root = styled(motion.div)`
    position: fixed;
    top: 5rem;
    right: 2rem; 
    z-index: 99;
    background-color: ${p => p.theme.primary};
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);  
    padding: 20px 20px;
    font-weight: 500;
`