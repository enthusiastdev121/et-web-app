import { FeedHeader, FeedMessage, Feeds, TitleHeader } from 'containers/explore/Explore.styled';
import TimeAgo from 'javascript-time-ago';
import Link from 'next/link';
import { rgba } from 'polished';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from "styled-components";
import en from "javascript-time-ago/locale/en.json";
import { ExploreFeedArticleItemD, ExploreFeedPicItemD } from 'types/explore';

TimeAgo.addDefaultLocale(en);
function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}


export default function EarlierMessage({ list, loading }) {
    const timeAgo = new TimeAgo('en-US');

    return (
        <Container>
            <h6>Latest Articles</h6>
            <Nav>
                {
                    loading ?
                        <>
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                        </>
                        :
                        list.filter(i => i.type === 'article').map((i: ExploreFeedArticleItemD, index: number) => {
                            if (index < 3) {
                                return (
                                    <Feeds key={index}>
                                        <div className="flex gap-3 px-5 pt-5">
                                            <FeedHeader>
                                                <Link href={`/${i.link}`}>
                                                    <a >
                                                        <img src={i.bannerPic} className="h-20 mr-3 mb-4" style={{ aspectRatio: "2", objectFit: "cover" }} />
                                                    </a>
                                                </Link>
                                            </FeedHeader>
                                            <TitleHeader>
                                                <Link href={`${i.link}`}>
                                                    <a target="_blank">
                                                        <h3 className="title cursor-pointer">
                                                            <span>ExploreTalent</span>
                                                            {/* <FollowButton>Follow</FollowButton> */}
                                                        </h3>
                                                    </a>
                                                </Link>
                                                <h5 className='opacity-70' style={{ marginTop: 0 }}>
                                                    {/* {timeAgo.format(new Date(i.createdAt * 1000))} •  */}
                                                    <span style={{ fontWeight: 600 }}>{i.authorName} posted a new blog</span>
                                                </h5>
                                            </TitleHeader>
                                        </div>
                                    </Feeds>
                                )
                            }
                        }
                        )
                }
            </Nav>

        </Container>
    )
}


const Container = styled.div`
   h6{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
     color: ${p => p.theme.base};
    padding-left:15px;
    padding-top:5.5px;
    padding-bottom:5px;
   }
`;

const Nav = styled.div`
   

    .confirm-and-decline-row{
        margin-top:4px;
        width: 100%;
        text-align: end;
    

        .confirm-btn{
            border-radius: 4px;
            background: ${p => p.theme.primary};
            padding:6px 43px;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            color: #FFFFFF;
            border: 1px solid ${p => p.theme.primary};

        }
        .decline-btn{
            border-radius: 4px;
            background: #fff;
            border: 1px solid ${p => p.theme.primary};
            padding:6px 43px;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            color: ${p => p.theme.primary};
            margin-left:6px;
        }
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

