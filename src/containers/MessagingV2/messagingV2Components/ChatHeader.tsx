import Link from "next/link"
import { darken } from "polished"
import { IoVideocam } from "react-icons/io5"
import styled from "styled-components";
import { useMessagingV2 } from "context/MessagingContextV2";
import { BROKEN_IMAGE_FALLBACK } from "@/utils/constants/resources";

export default function ChatHeader({ url, name, onlineStatus = false, talentnum }: {
    url: string,
    name: string,
    onlineStatus: boolean,
    talentnum: number,
}
) {
    const { startCall } = useMessagingV2();

    return (
        <Container>
            <Link href={"/" + talentnum} passHref>
                <div className="pic-container">
                    <img src={url || "/images/user_profile.png"} alt="profile pic" onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = BROKEN_IMAGE_FALLBACK;
                    }} />
                    {onlineStatus && <span className="status-indicator"></span>}
                </div>
            </Link>

            <div>
                <Link href={"/" + talentnum} passHref>
                    <div className="name">{name}</div>
                </Link>
                <div className="status">{onlineStatus && "Online"}</div>
            </div>

            {/* <IoVideocam className="video-icon" onClick={startCall} /> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
    border-bottom: 1px solid ${p => p.theme.border};
    background-color: ${p => p.theme.pure};
    /* height: 70px; */ 

    .pic-container {
        position: relative;
        cursor: pointer;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        object-fit: cover;
    }

    .status-indicator {
        display: inline-block;
        height: 10px;
        width: 10px;
        background-color: #37C96A;
        border-radius: 100%; 
        position: absolute;
        bottom: 0;
        right: 2px;
    }

    .name {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
    }

    .status {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        opacity: 0.5;
    }

    .video-icon {
        color: ${p => p.theme.primary};
        font-size: 28px;
        margin-left: auto;
        // margin-right: 20px;
        cursor: pointer;

        &:hover {
            color: ${p => darken(0.1, p.theme.primary)};
            transition: all 0.2s ease;
        }
    }
`


