import { MAIN_NAV_HEIGHT } from "@/utils/constants"
import Button from "components/Button"
import Spinner from "components/Spinner"
import ZSkel from "components/ZSkel"
import { useMessagingV2 } from "context/MessagingContextV2"
import { useProfileStore } from "context/ProfileStore"
import { formatIndboxItems } from "network/apiFormatter/messagingV2"
import { lighten, rgba } from "polished"
import { useEffect, useState } from "react"
import { AiFillAudio, AiFillVideoCamera } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { BsFillImageFill } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"

import styled from "styled-components"
import { IndboxItem } from "types/messagingV2"
import IndboxItemSkel from "../skels/IndboxItemSkel"
import InviteList from "./InviteList"
import Item from "./Item"
import MessageList from "./MessageList"

const HEADER_HEIGHT_DESKTOP = 100;
const HEADER_HEIGHT_TAB = 70;

export default function Indbox() {
    const [activeItem, setActiveItem] = useState(0)
    const [indboxQueue, setIndboxQueue] = useState<IndboxItem[]>([])
    const [tabsModalOpen, setTabsModalOpen] = useState(false)
    const { indbox, indboxLoading,
        messageCount, activeTab,
        setActiveTab, fetchMoreIndboxMessages, indboxMessagesPage, setActiveChat, activeChat, } = useMessagingV2()
    const { profile } = useProfileStore()

    useEffect(() => {
        setIndboxQueue(indbox)
    }, [indbox])

    useEffect(() => {
        setActiveTab('messages')
    }, [setActiveTab])

    return (
        <Root className="bg-pure">
            <Header>
                <h2>Messages</h2>

                {/* Dots */}
                {/* <div
                    className="dots text-3xl ml-2 cursor-pointer"
                    onClick={() => setTabsModalOpen(!tabsModalOpen)}
                ><BiDotsHorizontalRounded /></div> */}

                {/* Tabs */}
                <div className="flex gap-2 mt-3 tabs-container">
                    <Tab
                        isActive={activeTab === 'messages'}
                        onClick={() => {
                            setActiveTab('messages');
                            // setTabsModalOpen(false)
                        }}
                    >Messages</Tab>
                    <Tab
                        isActive={activeTab === 'invitations'}
                        onClick={() => {
                            setActiveTab('invitations');
                            // setTabsModalOpen(false)
                        }}
                    >Invitation</Tab>

                </div>

                {/* Tabs modal */}
                {/* {
                    tabsModalOpen && <TabsModal>
                        <div className="flex flex-col gap-2 mt-3">

                            <Tab
                                isActive={activeTab === 'messages'}
                                onClick={() => {
                                    setActiveTab('messages');
                                    // setTabsModalOpen(false)
                                }}
                            >Messages</Tab>
                            <Tab
                                isActive={activeTab === 'invitations'}
                                onClick={() => {
                                    setActiveTab('invitations');
                                    // setTabsModalOpen(false)
                                }}
                            >Invitation</Tab>
                        </div>
                    </TabsModal>
                } */}
            </Header>

            <Content id="scrollableDiv">
                {activeTab === 'messages' ?
                    <MessageList /> : activeTab === 'invitations' ? <InviteList /> : null}
            </Content>
        </Root>
    )
}

const Root = styled.div`
    background: ${p => p.theme.pure};
    height: 100%;
    width: 100%;
    border-right: 1px solid ${p => p.theme.border};
    display: flex;
    flex-direction: column;
    `
const Header = styled.div`
    padding: 1rem;
    position: relative;

    /* @media (max-width: 900px) {
        height: ${HEADER_HEIGHT_TAB}px;
    } */
    
    h2 {
        font-weight: 600;
        font-size: 1rem;
        /* line-height: 24px; */
        /* display: none;
        @media (min-width: 900px) {
            display: block;
        } */
    }

    /* .dots {
        display: none;
        
        @media (max-width: 900px) {
            display: block;
        }

        @media (max-width: 500px) {
            font-size: 20px;
            transform: rotate(90deg);
        }
    } */
    
    /* .tabs-container {
        display: none;
        @media (min-width: 900px) {
            display: flex;
        }
    } */
    `
const Tab = styled.button<{ isActive: boolean }>`
    background: ${p => p.isActive ? p.theme.primary : p.theme.pure};
    border: 1px solid ${p => p.isActive ? p.theme.primary : p.theme.border};
    color: ${p => p.isActive ? "#fff" : p.theme.base};
    border-radius: 200px;
    padding: 9px 15px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    
    /* @media (max-width: 900px) {
        display: block;
    } */
    `
const Content = styled.div`
    overflow: auto; 
    /* height: calc(100vh - ${MAIN_NAV_HEIGHT + HEADER_HEIGHT_DESKTOP + 20}px); */
    flex: 1;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    
    /* @media (max-width: 900px) {
        height: calc(100vh - ${MAIN_NAV_HEIGHT + HEADER_HEIGHT_TAB + 20}px);
    } */
    
    `

const TabsModal = styled.div`
    position: absolute;
    top: 30;
    left: 5;
    z-index: 20;
    background-color: ${p => p.theme.pure};
    padding: 10px 15px;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `

