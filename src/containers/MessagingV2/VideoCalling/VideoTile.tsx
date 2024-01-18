import { useEffect, useRef } from "react"
import styled from "styled-components"
import { useHMSActions, useHMSStore, selectCameraStreamByPeerID } from "@100mslive/react-sdk";

export default function VideoTile({ peer, isLocal }: { peer: { id: string, name: string }, isLocal: boolean }) {
    const hmsActions = useHMSActions();
    const videoRef = useRef(null);
    const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id))

    useEffect(() => {
        (async () => {
            console.log(videoRef.current);
            console.log(videoTrack);
            if (videoRef.current && videoTrack) {
                if (videoTrack.enabled) {
                    await hmsActions.attachVideo(videoTrack.id, videoRef.current);
                } else {
                    await hmsActions.detachVideo(videoTrack.id, videoRef.current);
                }
            }
        })();
    }, [videoTrack]);

    return (
        <Root host={isLocal}>
            <div className="container">
                <video
                    ref={videoRef}
                    autoPlay={true}
                    playsInline
                    muted={true}
                    className={`h-full w-full ${isLocal && 'mirror'}`}
                />
            </div>

            <div className="flex justify-center">
                <div className="px-2 py-1 text-sm bg-gray-600 text-white ml-2 rounded-lg">{`${peer?.name}`}</div>
            </div>
        </Root>
    )
}

const Root = styled.div<{ host: boolean }>`
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