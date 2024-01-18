import { useAuth } from "context/AuthContext";
import { useMessagingV2 } from "context/MessagingContextV2";
import { finishCallApi } from "network/apis/call";
import { darken } from "polished";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import CallModal from "./CallModal";
import CallRinging from "./CallRinging";
import Controls from "./Controls";
import Header from "./Header";
import Room from "./Room";
import { useHMSActions } from "@100mslive/react-sdk";

export default function VideoCalling({ closeCall }: { closeCall: () => void }) {
    const [rootHeight, setRootHeight] = useState(100);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { activeChat, callSocketData } = useMessagingV2();

    const collapseContainer = () => {
        setRootHeight(40)
        setIsCollapsed(true)
    };
    const expandContainer = () => {
        setRootHeight(100)
        setIsCollapsed(false)
    };

    // useEffect(() => {
    //     if (callSocketData?.status === "rejected") {
    //         finishCallApi({ token, roomId: localStorage.getItem("latestRoomId") || roomId });
    //         setOpenVideoCalling(false);
    //         hmsActions.leave();
    //         closeCall();
    //         setCallSocketData({});
    //         toast.error("Call Rejected");
    //     }
    //     return;
    // }, [callSocketData?.status, token, roomId]);

    return (
        <Root height={rootHeight}>
            {/* HEADER */}
            {/* <Header collapseContainer={collapseContainer} expandContainer={expandContainer} closeCall={closeCall} /> */}

            {/* CALL RINGING */}
            {false &&
                <div className="h-full grid place-content-center">
                    <CallRinging img={activeChat?.user?.pic} name={activeChat?.user?.name} roomId={callSocketData?.roomId} closeCall={closeCall} />
                </div>
            }

            {/* VIDEO TILES */}
            <Room />

            {/* CALL ACTIONS */}
            <Controls closeCall={closeCall} isCollapsed={isCollapsed} />
        </Root>
    );
}

const Root = styled.div<{ height: number }>`
    position: absolute;
    top: 0;
    left: 0;
    height: ${p => p.height}%;
    width: 100%;
    z-index: 20;
    background-color: ${p => darken(0.02, p.theme.paper)};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`