import { FeedHeader, FeedMessage, Feeds, MainFeedContent } from 'containers/explore/Explore.styled';
import PicPost from 'containers/explore/PicPost';
import { useAuth } from 'context/AuthContext';
import Link from 'next/link';
import TimeAgo from 'javascript-time-ago';
import { formatExploreFeedArticleItem, formatExploreFeedPicItem } from 'network/apiFormatter/explore';
import { getExploreArticlesApi, getExploreFeedApi } from 'network/apis/explore';
import { rgba } from 'polished';
import React, { useCallback, useEffect, useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi';
import styled from "styled-components";
import { ExploreFeedPicItemD } from 'types/explore';
import en from "javascript-time-ago/locale/en.json";
import Skeleton from 'react-loading-skeleton';

TimeAgo.addDefaultLocale(en);
function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function SingleNofication({ list, loading }) {
    const timeAgo = new TimeAgo('en-US');

    return (
        <Container>
            <Nav>
                {
                    loading ?
                        <>
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                        </>
                        :
                        list.filter(i => i.type === 'pic').map((i: ExploreFeedPicItemD, index: number) => {
                            if (index < 3) {
                                return (
                                    <Feeds key={index}>
                                        <div className="flex gap-3 px-5 pt-5">
                                            <div className="w-[20%]">
                                                <Link href={`/${i.talentlogin}`}>
                                                    <a >
                                                        <img src={i.pic} className="h-20 mr-3 mb-4 object-cover" style={{ aspectRatio: "0.8" }} />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="text-sm">
                                                <Link href={`/${i.talentlogin}`}>
                                                    <a>
                                                        <h3 className="title cursor-pointer">
                                                            <span> {i?.name}</span>
                                                            {/* <FollowButton>Follow</FollowButton> */}
                                                        </h3>
                                                    </a>
                                                </Link>
                                                <h5 className='opacity-70' style={{ marginTop: 0 }}>
                                                    {timeAgo.format(new Date(i.createdAt * 1000))} • <span style={{ fontWeight: 600 }}>{i?.name} added new profile pic</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </Feeds >
                                )
                            }
                        }
                        )
                }
            </Nav >
        </Container >
    )
}

const Container = styled.div`
   h6{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color:${(p: any) => p.theme.base};
    padding-left:15px;
    padding-top:5.5px;
    padding-bottom:5px;
   }
`;

const Nav = styled.div`
    .active{
        background: ${(p: any) => p.theme.paper};
    }

    .single-notification{
        padding:7px 15px;
        display:flex;
        align-items:center;

        .notification-img{
            img{
                min-width:60px;
                height:60px;
                border-radius:50%;

                @media (max-width:768px) {
                    
                }
            }
        }

        .inner-content-notification{
            margin-left:10px;

            h4{
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                color: ${(p: any) => p.theme.base};
                line-height:16px;
                width:272px;

                @media (max-width:768px) {
                    width:220px;
                }

                span{
                font-weight: 600;

                }
            }
            h5{
                font-style: normal;
                font-weight: 400;
                font-size: 11px;
                color:${(p: any) => rgba(p.theme.base, 0.6)} ;
                margin-top:5px;
                height:13px;
                line-height:13px;
            }
        }
    }
`;

const TitleHeader = styled.div`
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${(p) => p.theme.base};
    display: flex;
    // justify-content: center;
    // align-items: center;

    span {
      width: 100%;

      @media (max-width: 497px) {
        max-width: 115px;
        width: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${(p) => p.theme.base};
    white-space: nowrap;
    margin-top: 10px;
  }
`;

// Users have requested the ability to search data within tables 5

// Fix JavaScript Errors in UI Kit 5
