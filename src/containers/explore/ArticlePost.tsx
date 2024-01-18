import React from 'react';
import TimeAgo from 'javascript-time-ago';

import { Container, ContentMessage, FeedHeader, FeedMessage, Feeds, FollowButton, MainFeedContent, MatchJobCardContainer, MatchjobExplor, MatchJobList, MatchJobMain, ShareContent, TitleHeader } from "./Explore.styled";
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import { ExploreFeedArticleItemD, ExploreFeedPicItemD } from 'types/explore';
import styled from 'styled-components';


export default function ArticlePost(i: ExploreFeedArticleItemD) {
    const timeAgo = new TimeAgo('en-US');
    return (
        <Feeds>
            <FeedMessage className="px-5 pt-5">
                <FeedHeader>
                    <img className="profile-image" src="/images/explore-blog.png" />
                </FeedHeader>
                <TitleHeader>
                    <h4 className="font-semibold"> Explore Talent
                    </h4>
                    <h5 className="opacity-60">
                        <span className="text-xs">{timeAgo.format(new Date(i.createdAt))}</span>
                        {" "}• <span className='text-xs font-semibold'> Posted a <span className="txt-primary">New Blog</span></span>
                    </h5>
                    {/* <h5>
                        8 min • <span style={{ color: "#191919", fontWeight: 600 }}>Editor’s</span> <span style={{ color: "#0070F4", fontWeight: 600 }}>Favorite Photo</span>
                      </h5> */}
                </TitleHeader>

            </FeedMessage>
            <MainFeedContent className="testclass">

                <PicBox href={i.link} target="_blank" >

                    <img src={i.bannerPic} />
                </PicBox>

                <div className='px-4 py-4'>

                    <div className='text-xl font-bold' >

                        {i.title}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: i.desc1 }} className="mt-2" />

                </div>


            </MainFeedContent>
        </Feeds>
    )
}


const PicBox = styled.a`
width: 100%;
aspect-ratio: 2;
&&& img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0px;
}

`;