import InviteActivateModal from 'components/jobs/InviteActivateModal'
import Spinner from 'components/Spinner'
import { useMessagingV2 } from 'context/MessagingContextV2'
import { useProfileStore } from 'context/ProfileStore'
import { formatCDInviteItem } from 'network/apiFormatter/jobs'
import { formatIndboxItems } from 'network/apiFormatter/messagingV2'
import Router from 'next/router'
import React, { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import { CDInviteItemD } from 'types/jobs'
import IndboxItemSkel from '../skels/IndboxItemSkel'
import Item from './Item'

export default function InviteList() {

    const { profile } = useProfileStore();
    const { invites, invitesLoading, fetchMoreInvites, invitePage, setActiveInvite, activeInvite } = useMessagingV2()
    const [blockOpen, setBlockOpen] = useState(false)

    const onClick = (item: any) => {
        if (item) {
            setActiveInvite(item);



            const formatedInvite = formatCDInviteItem(item);

            if (formatedInvite.vip || profile.joinStatus === 5) {
                Router.push({
                    pathname: "/auditions/cd-invite/" + formatedInvite.id,
                });


            } else {
                setBlockOpen(true);
            }
        }
    }

    return (
        <>
            <InfiniteScroll
                dataLength={invites.length}
                next={fetchMoreInvites}
                hasMore={invitePage.total !== 0 && invitePage.total > invitePage.current}
                inverse={false}
                scrollableTarget="scrollableDiv"
                loader={
                    <div className="flex items-center justify-center p-5">
                        <Spinner primary />
                    </div>
                }>
                {
                    invitesLoading ?
                        <IndboxItemSkel />
                        :
                        invites.map(item => {
                            return (
                                <Item key={item.id} type="invite" data={item} onClick={onClick} />
                            )

                        })
                }
            </InfiniteScroll>
            <InviteActivateModal open={blockOpen} onClose={() => setBlockOpen(false)} invite={activeInvite.bam_role ? formatCDInviteItem(activeInvite) : {} as CDInviteItemD} />
        </>

    )
}
