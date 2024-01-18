import React, { useState } from 'react';
import TimeAgo from 'javascript-time-ago';

import { Container, ContentMessage, FeedHeader, FeedMessage, Feeds, FollowButton, MainFeedContent, MatchJobCardContainer, MatchjobExplor, MatchJobList, MatchJobMain, ShareContent, TitleHeader } from "./Explore.styled";
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ExploreFeedPicItemD } from 'types/explore';
import { useAuth } from 'context/AuthContext';
import { feedLikeChangeApi } from 'network/apis/explore';
import Link from 'next/link';
import { BROKEN_IMAGE_FALLBACK } from '@/utils/constants/resources';


export default function PicPost(i: ExploreFeedPicItemD) {
    const [liked, setLiked] = useState(i.isLiked);
    const [likeCount, setLikeCount] = useState(i.likes);
    const { token } = useAuth();
    const timeAgo = new TimeAgo('en-US');


    const likeChange = async () => {
        try {
            if (liked) {
                setLikeCount(s => (s > 0 ? s - 1 : s));
            } else {
                setLikeCount(s => s + 1);
            }
            setLiked(s => !s);

            const res = await feedLikeChangeApi({
                token,
                talentnum: i.talentnum,
            });

            console.log('LIKE RES', res);
        } catch (err) {
            console.log('Err', err);
        }
    };

    return (
        <Feeds>
            <FeedMessage className="px-5 pt-5">
                <FeedHeader>
                    <Link href={`/${i.talentlogin}`}>
                        <a>
                            <img className="profile-image" src={i.profilePic} onError={({ currentTarget }) => {
                                console.log("ERR", currentTarget)
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = BROKEN_IMAGE_FALLBACK;
                            }} />
                        </a>
                    </Link>
                </FeedHeader>
                <TitleHeader>
                    <Link href={`/${i.talentlogin}`}>
                        <a>

                            <h3 className="title">
                                <span> {i?.name}</span>
                                {/* <FollowButton>Follow</FollowButton> */}
                            </h3>
                        </a>
                    </Link>
                    <h5 className='opacity-70'>
                        <span className='text-xs'>{timeAgo.format(new Date(i.createdAt * 1000))}</span> • <span className='text-xs font-medium'>Added new profile pic</span>
                    </h5>
                    {/* <h5>
                        8 min • <span style={{ color: "#191919", fontWeight: 600 }}>Editor’s</span> <span style={{ color: "#0070F4", fontWeight: 600 }}>Favorite Photo</span>
                      </h5> */}
                </TitleHeader>
                <HiDotsHorizontal style={{ color: "rgba(60, 60, 67, 0.6)", fontSize: "14px", fontWeight: 400, marginLeft: "auto", marginTop: 8 }} />
            </FeedMessage>
            <MainFeedContent className="testclass">
                <img src={i.pic} onError={({ currentTarget }) => {
                    // console.log("ERR", currentTarget)
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = BROKEN_IMAGE_FALLBACK;
                }} />
                <div className="flex justify-between items-center px-5 py-3">
                    <span className="flex justify-between items-center">
                        <span className="border rounded-full mr-2" style={{ background: !liked ? "transparent" : "#E53D3E" }}>
                            <span
                                className="active-fav block w-fit cursor-pointer"
                                onClick={() => likeChange()}
                            >
                                {!liked ? <><FaRegHeart style={{ fontSize: 16, }} /></> : <><FaHeart style={{ fontSize: 16, color: 'white' }} /></>}
                            </span>
                        </span>
                        <span className="text-sm font-semibold">{!liked ? "Like" : "Unlike"}</span>
                    </span>
                    <span className="text-sm font-medium"> {likeCount} {likeCount === 1 ? "Like" : "Likes"}</span>
                </div>
            </MainFeedContent>
        </Feeds>
    )
}
