import { formatAudtionDetailSlug } from '@/utils/helper';
import { useAuth } from 'context/AuthContext';
import { formatJobRes } from 'network/apiFormatter/jobs';
import { getMatchedJobsApi } from 'network/apis/jobs';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
import { HiBriefcase } from 'react-icons/hi';
import { TiLocation } from 'react-icons/ti';
import Skeleton from 'react-loading-skeleton';
import styled from "styled-components";
import { JobItemD } from 'types/jobs';

const LIMIT = 3

export default function MatchJobs() {
    const [loading, setLoading] = useState(false);
    const { token } = useAuth()
    const [total, setTotal] = useState(0);
    const [list, setList] = useState([])

    const fetchList = useCallback(
        async (more = false) => {
            if (!token) {
                return;
            }

            try {
                setLoading(true);
                const res = await getMatchedJobsApi({
                    token,
                    page: 1,
                    perPage: LIMIT,
                });

                const data = res.data.map((i: any) => formatJobRes(i));
                setTotal(Number(res.total));
                if (more) {
                    setList((s) => [...s, ...data]);
                } else {
                    setList(data);
                }

                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Err", err);
            }
        },
        [token]
    );
    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return (
        <Container>
            <div className='match-job'><img src="/images/img-star.png" alt="" /><h4>Matched jobs for you</h4></div>
            <Nav>
                {
                    loading ?
                        <>
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                        </>
                        :

                        list.map((i: JobItemD, index: number) => {
                            if (index < 3) {
                                return (
                                    <div className='single-jobs' key={index}>
                                        <h5 style={{ fontSize: 16 }}>{i.desc}</h5>
                                        <h6>{i.title}</h6>
                                        <div className='location-job-sec'>
                                            <div className='location-and-job'>
                                                <div className='location'>
                                                    <TiLocation className='mr-2 txt-primary' />
                                                    <p>{i.location}</p>
                                                </div>
                                                <div className='apply-btn mt-2'>
                                                    <Link href={`/auditions/${formatAudtionDetailSlug(i.title + " " + i.location + " " + i.zip, i.id)}`}>
                                                        <a>
                                                            <button>Apply</button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                }

                <Link href={"/auditions/matched-castings"}>
                    <a className='see-all'>
                        <button>See all</button>
                    </a>
                </Link>

            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding:15px;
    border-top:1px solid #E5E7EB;
    border-bottom:1px solid #E5E7EB;

    .match-job{
        display:flex;
        align-items:center;
        margin-bottom:12px;

        img{
            width: 14px;
            height: 14px;
            border-radius:50%;
        }
        h4{
            color:#D97706;
            margin-left:5px;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
        }
    }

`;

const Nav = styled.div`

    .see-all{
        width:100%;
        margin-top:15px;

        button{
            width:100%;
            border: 1px solid ${p => p.theme.primary};
            border-radius: 4px;
            background: #FFFFFF;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            color: ${p => p.theme.primary};
            padding:6px 0;
        }
    }

        & >div:first-child{
            margin-top:0px !important;
        }

    .single-jobs{
        margin-top:25px;

        h5{
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
             color: ${p => p.theme.base};
            height:16px;
            line-height:16px;
            width:360px;
            overflow:hidden;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media (max-width:768px) {
                width:290px;
            }
        }

        h6{
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
             color: ${p => p.theme.base};
            height:18px;
            line-height:18px;
            margin-top:12px;
        }

        .apply-btn{
            button{
                background: ${p => p.theme.primary};
                border-radius: 4px;
                padding:6px 16px;
                font-style: normal;
                font-weight: 600;
                font-size: 13px;
                color:#ffffff;
            }
        }

        .location-job-sec{
            margin-top:14px;
            display:flex;
            align-items: flex-end;
            justify-content: space-between;

            .location-and-job{
                

                .location{
                    display:flex;
                    align-items:center;

                    img{
                        margin-right:10.13px;
                    }

                    p{
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        color: ${p => p.theme.primary};
                        height:15px;
                        line-height:15px;
                    }
                }

                .jobs-match{
                    margin-top:10px;
                    display:flex;
                    align-items:center;

                    img{
                        margin-right:8.73px;
                    }

                    p{
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        color: ${p => p.theme.primary};
                        height:15px;
                        line-height:15px;
                    }
                }

            }
        }
    }

`;
// Users have requested the ability to search data within tables 1

// Fix JavaScript Errors in UI Kit 1
