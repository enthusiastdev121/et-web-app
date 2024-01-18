import HideChatNow from 'components/HideChatNow'
import React from 'react'
import FloatingMessage from './MessagingV2/FloatingMessage'
import CallModal from './MessagingV2/VideoCalling/CallModal'
import OngoingCall from './MessagingV2/VideoCalling/OngoingCall'
import PasswordSet from 'components/modals/PasswordSet'

export default function GlobalComponents() {
    return (
        <>
            <FloatingMessage />
            <HideChatNow />
            <PasswordSet />
            {/* <CallModal />
            <OngoingCall /> */}
        </>
    )
}
