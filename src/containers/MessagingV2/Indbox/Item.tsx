import { BROKEN_IMAGE_FALLBACK } from '@/utils/constants/resources'
import { useMessagingV2 } from 'context/MessagingContextV2'
import Router from 'next/router'
import { lighten, rgba } from 'polished'
import React from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { BsFillImageFill } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { ImPhoneHangUp } from 'react-icons/im'
import styled from 'styled-components'
import { useWindowSize } from 'usehooks-ts'
import { MOBILE_BREAKPOINT } from '../const'

export default function Item({ type, onClick, data: item }: { type: 'invite' | 'chat'; onClick: (item: any) => any; data: any }) {
    const { activeChat, setActiveChat, activeInvite, setActiveInvite } = useMessagingV2();
    const { width } = useWindowSize();

    if (type === 'chat') {
        return (
            <Root key={item?.id} isActive={activeChat?.conversationId === item?.conversationsId}
                onClick={() => {
                    onClick(item)
                    if (width <= MOBILE_BREAKPOINT) {
                        Router.push(`/messages/${item.conversationsId}`)
                    }
                }}>
                <img src={item?.pic || "/images/user_profile.png"} alt="user profile pic" onError={({ currentTarget }) => {
                    // console.log("ERR", currentTarget)
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = BROKEN_IMAGE_FALLBACK;
                }} />
                <div className="flex flex-col gap-[5px] text-content w-full">
                    <div className="flex justify-between mb-1 w-full">
                        <div className="name">{item?.name}</div>
                        <div className="time ml-auto mr-4">{item?.time}</div>
                    </div>
                    <div className="flex items-center">
                        {item?.type == "text" &&
                            <p className="message">{item?.message}</p>
                        }
                        {item?.type == "picture" &&
                            <p className="message flex items-center gap-1"><BsFillImageFill className="opacity-70" /> Image</p>
                        }
                        {item?.type == "audio" &&
                            <p className="message flex items-center gap-1"><AiFillAudio className="opacity-70" /> Audio</p>
                        }
                        {item?.type == "video" &&
                            <p className="message flex items-center gap-1"><FaVideo className="opacity-70" /> Video</p>
                        }
                        {item?.type == "call" &&
                            <p className="message flex items-center gap-1"><ImPhoneHangUp className="opacity-70" /> Video Call</p>
                        }
                        {/* <p className="message">{item?.message}</p> */}
                        <div className="ml-auto">
                            {item?.unreadCount > 0 && <span className="unread">{item?.unreadCount}</span>}
                        </div>
                    </div>
                </div>

            </Root>
        )
    }
    else {
        return (
            <Root isActive={activeInvite?.bam_role_id === item.bam_role_id} onClick={() => {
                setActiveInvite(item);

            }}>
                <img src={"" || "/images/user_profile.png"} alt="user profile pic" className="self-start" />
                <div className="flex flex-col gap-[5px] text-content w-full">
                    <div className="flex justify-between mb-1 w-full">
                        <div className="name"><span className="text-sm font-normal"> You have received an invitation for the role <span className="txt-base font-semibold">&ldquo;{item.bam_role?.name}&rdquo;</span></span></div>
                        <div className="time ml-auto mr-4">{"30 mins"}</div>
                    </div>
                    <div className="flex items-center">
                        <p className="message">{item.bam_role?.bam_casting?.name}</p>
                        <div className="ml-auto">
                            {/* {0 === 0 && <span className="unread"></span>} */}
                        </div>
                    </div>
                    <PrimaryButton className="flex-start mt-2" onClick={() => {
                        onClick(item);

                    }} >Open Invitation</PrimaryButton>
                </div>
            </Root>
        )
    }
}


const Root = styled.div<{ isActive: boolean }>`
    background-color: ${p => p.isActive ? rgba(p.theme.primary, 0.05) : "transparent"};
    border-radius: 3px;
    border-left: 3px solid ${p => p.isActive ? p.theme.primary : "transparent"};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 1rem 0;
    
    img {
        height: 60px;
        // width: 70px;
        aspect-ratio: 1;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 5px;
        object-fit: cover;
        
        /* @media (max-width: 500px) {
            height: 40px;
        } */
    }
    
    .name {
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        opacity: 0.8;
    }
    
    .message {
        font-size: 14px;
        line-height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 260px;
    }
    
    .time {
        font-size: 13px;
        line-height: 13px;
        opacity: 0.5;
    }
    
    .unread { 
        height: 16px;
        width: 16px;
        padding: 3px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: ${p => p.theme.primary};
        border-radius: 100%;
        margin-right: 20px;
        display: flex;
        
        // display: none;
        //  @media (min-width: 900px) {
        // } 
    }
    
    .text-content {
        /* @media (max-width: 900px) {
            display: none;
        } */
    }
    
    &:hover {
        background-color: ${p => rgba(p.theme.primary, 0.05)}; 
        border-left: 3px solid ${p => p.theme.primary};
        transition: all 0.3s ease-in-out;
    }
    
    /* @media (max-width: 900px) {
        min-width: fit-content;
    } */
    `;

const PrimaryButton = styled.button`
font-size: 14px;
color: #fff;
padding: 5px 15px;
border-radius: 5px;
background: ${p => lighten(0.1, p.theme.primary)};
align-self: start;
font-weight: 500;

&:hover {
    background: ${p => lighten(0, p.theme.primary)};
    transition: all 0.2s ease;
}
`;