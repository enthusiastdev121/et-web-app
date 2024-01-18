import { MAIN_NAV_HEIGHT } from '@/utils/constants'
import Header from 'components/Layout/Header'
import ChatBox from 'containers/MessagingV2/ChatBox'
import VideoCalling from 'containers/MessagingV2/VideoCalling'
import { useMessagingV2 } from 'context/MessagingContextV2'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Chat() {
    const { openVideoCalling, hostCallStatus, guestCallStatus } = useMessagingV2()
    const [showVideoCallContainer, setShowVideoCallContainer] = useState(false);
    useEffect(() => {
        let gg: any;

        if (typeof window !== undefined) {
            document.getElementsByTagName("body")[0].classList.add("overflow-hidden");

            gg = document.getElementsByClassName("siq_noanim")[0]
            if (gg) {
                gg.style.display = 'none';
            }
        }
        return () => {
            if (typeof window !== undefined) {
                document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");

                if (gg) {
                    gg.style.display = 'unset';
                }
            }
        }
    }, [])

    return (
        <div className="bg-pure">
            <Header />
            <ContentOuter>
                {/* <Content id="scrollableDiv"> */}
                {(hostCallStatus === "joined" || guestCallStatus === "joined") && <VideoCalling closeCall={() => setShowVideoCallContainer(false)} />}
                <ChatBox ongoingCall={showVideoCallContainer} />
                {/* </Content> */}
            </ContentOuter>
        </div>
    )
}


const Content = styled.div`
    overflow: auto; 
    flex: 1;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }   
`
const ContentOuter = styled.div`
    position: fixed;
    height: calc(100% - ${MAIN_NAV_HEIGHT}px);
    top: ${MAIN_NAV_HEIGHT}px;  
    width: 100vw;
    background-color: ${p => p.theme.paper};
`