import React from "react";
import VideoTile from "./VideoTile";
import {
    useHMSStore,
    selectLocalPeer,
    selectPeers
} from "@100mslive/react-sdk";
import { useMessagingV2 } from "context/MessagingContextV2";
import styled from "styled-components";

const Room = () => {
    const { guestCallStatus, activeChat } = useMessagingV2();
    const localPeer = useHMSStore(selectLocalPeer);
    const peers = useHMSStore(selectPeers);

    return (
        <div className="flex flex-col flex-grow h-full min-w-[500px]">
            <div className="flex items-center justify-center gap-5 h-full ">
                {guestCallStatus !== "accepted" && <>
                    {(guestCallStatus !== "joined" || peers?.length === 0) &&
                        <div className="h-full w-full">
                            <PlaceHolder>
                                <div className="container">
                                    <p className="text-center font-medium text-white">{guestCallStatus === "calling" ? `Waiting for ${activeChat?.user?.name} to join!` :
                                        guestCallStatus === "left" ? `${activeChat?.user?.name} left the call` :
                                            guestCallStatus === "rejected" ? "Call was rejected" :
                                                ""}</p>
                                </div>
                            </PlaceHolder>
                        </div>
                    }
                </>
                }

                {/* <VideoRoot isl></VideoRoot> */}
                {
                    peers &&
                    peers
                        .filter((peer) => !peer?.isLocal)
                        .map((peer) => {
                            return (
                                <>
                                    <VideoTile isLocal={false} peer={peer} />
                                </>
                            );
                        })
                }
            </div>



            {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
        </div>
    );
};

export default Room;

const PlaceHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    height: 100%;

    .container {
        background: #191919;
        border-radius: 10px;
        height: 80%;
        max-height: 450px;
        width: 100%;
        min-width: 300px;
        max-width: 500px;
        max-height:  800px;
        overflow: hidden;
        
        @media (max-width: 500px) {
            min-width: 150px;
        }
    }
`
const VideoRoot = styled.div<{ host: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;    
    height: ${p => !p.host && "100%"};

    .container {
        background: #191919;
        border-radius: 10px;
        height: 80%;
        max-height: 450px;
        width: 100%;
        min-width: 300px;
        max-width: ${p => p.host ? 250 : 500}px;
        max-height: ${p => p.host ? 150 : 800}px;
        overflow: hidden;
        
        @media (max-width: 500px) {
            min-width: 150px;
        }
    }

    .mirror {
        transform: rotateY(180deg);
        -webkit-transform:rotateY(180deg);  
        -moz-transform:rotateY(180deg);  
    }
`