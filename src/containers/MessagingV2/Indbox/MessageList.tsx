import Spinner from 'components/Spinner'
import { useMessagingV2 } from 'context/MessagingContextV2'
import { useProfileStore } from 'context/ProfileStore'
import { formatIndboxItems } from 'network/apiFormatter/messagingV2'
import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import IndboxItemSkel from '../skels/IndboxItemSkel'
import Item from './Item'

export default function MessageList() {

    const { profile } = useProfileStore();

    const { indbox, indboxLoading, fetchMoreIndboxMessages, indboxMessagesPage, setActiveChat, activeChat } = useMessagingV2()

    const onClick = (item: any) => {
        console.log("CHAT CLCIK", item);
        setActiveChat({
            conversationId: item.conversationsId,
            user: {
                id: item.user_id,
                name: item?.name,
                pic: item.pic,
                talentlogin: item.talentlogin,
                talentnum: item.talentnum
            }
        })
    }

    return (

        <InfiniteScroll
            dataLength={indbox.length}
            next={fetchMoreIndboxMessages}
            hasMore={indboxMessagesPage.current.total !== 0 && indboxMessagesPage.current.total > indboxMessagesPage.current.current}
            // hasMore={false}
            inverse={false}
            scrollableTarget="scrollableDiv"
            loader={
                <div className="flex items-center justify-center p-5">
                    <Spinner primary />
                </div>
            }>
            {
                indboxLoading ?
                    <IndboxItemSkel />
                    :
                    indbox.map(indboxItem => {
                        const item = formatIndboxItems({ res: indboxItem, userId: profile?.talentnum })
                        return (
                            <Item key={item.id} type='chat' onClick={onClick} data={item} />
                        )

                    })
            }
        </InfiniteScroll>

    )
}
