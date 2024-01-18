import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import { VIDEO_CALL_SOUND } from "@/utils/constants/resources";
import Header from "components/Layout/Header";
import { useMessagingV2 } from "context/MessagingContextV2";
import { useState } from "react";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";
import ChatBox from "./ChatBox";
import { MOBILE_BREAKPOINT } from "./const";
import Indbox from "./Indbox";
import InvitationBox from "./InvitationBox";
import VideoCalling from "./VideoCalling";

export default function MessagingV2() {
    const { activeTab, activeChat, callStatus, hostCallStatus, guestCallStatus } = useMessagingV2();
    const [showVideoCallContainer, setShowVideoCallContainer] = useState(false);

    return (
        <div>
            <Header />

            <ContentOuter>
                <Content>
                    <div className="left">
                        <Indbox />
                    </div>

                    <div className="right h-full flex-grow relative">
                        {(hostCallStatus === "joined" || guestCallStatus === "joined") && <VideoCalling closeCall={() => setShowVideoCallContainer(false)} />}

                        {
                            activeTab === 'messages' ?
                                activeChat?.user && <ChatBox ongoingCall={showVideoCallContainer} /> :
                                activeTab === 'invitations' ? <InvitationBox ongoingCall={showVideoCallContainer} /> :
                                    <></>
                        }
                    </div>
                </Content>
            </ContentOuter>
        </div>
    )
}

const ContentOuter = styled.div`
    position: fixed;
    height: calc(100% - ${MAIN_NAV_HEIGHT}px);
    top: ${MAIN_NAV_HEIGHT}px;  
    width: 100vw;
    background-color: ${p => p.theme.paper};
    // height: calc(100vh - ${MAIN_NAV_HEIGHT + 2}px);
    `
const Content = styled.div`
display: flex;
height: 100%;
/* width: 100%; */
position: relative;
.left {

    width: 400px;
   
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
       max-width: 100%;
       width: 100%;
    }
    
    
    /* @media (min-width: 900px) {
        min-width: 380px;
        width: 30%;
    } */
}


.right{
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
       display: none;
    }

}
`;