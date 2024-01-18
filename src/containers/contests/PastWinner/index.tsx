import { formatContestantDetailSlug, formatContestDetailSlug } from '@/utils/helper';
import BackToTop from 'components/BackToTop';
import Advertisement from 'components/UpgradeToPro';
import CommunityBuzz from 'containers/CommunityBuzz';
import SuccessStories from 'containers/SuccessStories';
import { useAuth } from 'context/AuthContext';
import { formatPastContestItem } from 'network/apiFormatter/contest';
import { getContestPastByIdApi, getContestUpcomingListApi } from 'network/apis/contest';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { AboutSection, Container } from "./styles";

export default function PastWinner({ contest_id }: any) {
    const {
        token,
        auth: { authenticated },
    } = useAuth();
    const [loadingTop, setLoadingTop] = useState(true);
    const [loadingWinner, setLoadingWinner] = useState(true);
    const [fullResult, setFullResult] = useState(false);
    const [pastContest, setPastContest] = useState<any>()
    const [contestWinner, setContestWinner] = useState<any>()
    const route = useRouter()

    useEffect(() => {
        if (contest_id != "-1") {
            if (token) {
                setLoadingTop(true)
                const getPastContenstDetail = async () => {
                    const res = await getContestUpcomingListApi({ perPage: 100, page: 1, filterBy: 'past', token: token });
                    setPastContest(res);
                    if (res) {
                        setLoadingTop(false)
                    }
                };
                getPastContenstDetail()
            }
        } else {
            if (token) {
                const getPastContenstDetail = async () => {
                    const res = await getContestUpcomingListApi({ perPage: 100, page: 1, filterBy: 'past', token: token });


                    route.push("/contests/past-winner/" + res?.data?.filter((y: any) => y.contest_media.length > 0).map((i: any) => formatPastContestItem(i))[0].id)
                    // setPastContest(res);
                    // if (res) {
                    //     setLoadingTop(false)
                    // }
                };
                getPastContenstDetail()
            }
        }

    }, [token, contest_id])

    useEffect(() => {
        if (contest_id != "-1") {
            setLoadingWinner(true)
            setContestWinner([])
            const getContenstWinner = async () => {
                const res = await getContestPastByIdApi({ id: contest_id, filterBy: 'past', token: token });
                setContestWinner(res);
                if (res) {
                    setLoadingWinner(false)
                }
            };
            getContenstWinner()
        }
    }, [contest_id])

    const goToWinnerPage = (contest_id: number) => {
        route.push("/contests/past-winner/" + contest_id)
    }

    const goToEntryPage = (contest_name: any, contest_id: number, name: any, talentnum: number) => {
        route.push(`/contestants/${formatContestDetailSlug(contest_name, contest_id)}/${formatContestantDetailSlug(name, name, talentnum)}`)
    }

    return (
        <Container className="padding-small">
            <BackToTop />
            <main
                className="padding-x lg:flex gap-10"
                style={{ maxWidth: "1530px", margin: "0 auto" }}
            >
                <div className="left">

                    <AboutSection>
                        <div className='about-section-title'>
                            <h3>Past Winners</h3>
                            <p>These are the contest winners</p>
                        </div>
                        {loadingTop && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                            {[1].map((i) => {
                                return (
                                    <div key={i}>
                                        <Skeleton style={{ height: 30, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                                        <Skeleton style={{ height: 20, width: "70%", borderRadius: 8, marginBottom: 4 }} />
                                        <Skeleton style={{ height: 10, width: "40%", borderRadius: 8, marginBottom: 4 }} />
                                    </div>
                                );
                            })}
                        </div>}
                        {!loadingTop &&
                            <div className='tab-button'>
                                <>
                                    {pastContest?.data && pastContest?.data?.filter((y: any) => y.contest_media.length > 0).map((i: any) => {
                                        const res = formatPastContestItem(i)
                                        return (<button className={`${res.id == contest_id ? 'active-button' : 'deactive-button'}`} key={i} onClick={() => { goToWinnerPage(res.id), setFullResult(false) }}>
                                            <img src={res.pic || ""} alt="" />
                                            <h6>{res?.name}</h6>
                                        </button>);
                                    })}
                                </>
                            </div>
                        }
                        <div className='winner-list'>
                            {loadingWinner && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                                {[1].map((i) => {
                                    return (
                                        <div key={i}>
                                            <Skeleton style={{ height: 100, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 90, width: "90%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 80, width: "80%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 70, width: "70%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 60, width: "60%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 50, width: "50%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 40, width: "40%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 30, width: "30%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 20, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 10, width: "10%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 9, width: "9%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 8, width: "8%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 7, width: "7%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 4, width: "4%", borderRadius: 8, marginBottom: 4 }} />
                                        </div>
                                    );
                                })}
                            </div>}

                            {!loadingWinner &&
                                <>
                                    <div className='relative'>
                                        <img src={contestWinner?.media_path_full || ""} alt="" className='cover-images' />
                                        <div className='main-winner-section'>
                                            {
                                                contestWinner?.contest_media &&
                                                <>
                                                    <div className='second-winner'>
                                                        <img src={contestWinner?.contest_media[1].bam_talentci.profile_picture_path} alt="" className='user-image' />
                                                        <h6>2</h6>
                                                        <p>{contestWinner?.contest_media[1].bam_talentci.fname + " " + contestWinner?.contest_media[1].bam_talentci.lname}</p>
                                                        <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{contestWinner?.contest_media[1].score}</p></div>
                                                    </div>



                                                    <div className='first-winner'>
                                                        <img src="/images/Crown.svg" alt="crown" className='crown-image' />
                                                        <img src={contestWinner?.contest_media[0].bam_talentci.profile_picture_path} alt="" className='user-image' />
                                                        <h6>1</h6>
                                                        <p>{contestWinner?.contest_media[0].bam_talentci.fname + " " + contestWinner?.contest_media[0].bam_talentci.lname}</p>
                                                        <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{contestWinner?.contest_media[0].score}</p></div>
                                                    </div>

                                                    <div className='third-winner'>

                                                        <img src={contestWinner?.contest_media[2].bam_talentci.profile_picture_path} alt="" className='user-image' />
                                                        <h6>3</h6>
                                                        <p>{contestWinner?.contest_media[2].bam_talentci.fname + " " + contestWinner?.contest_media[2].bam_talentci.lname}</p>
                                                        <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{contestWinner?.contest_media[2].score}</p></div>
                                                    </div>



                                                    {/* {index == 1 &&

                                                            <div className='second-winner'>
                                                                <img src={item.bam_talentci.profile_picture_path || ""} alt="" className='user-image' key={index} />
                                                                <h6>2</h6>
                                                                <p>{item.bam_talentci.fname + " " + item.bam_talentci.lname}</p>
                                                                <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score}</p></div>
                                                            </div>


                                                        }
                                                        {index == 0 &&

                                                            <div className='first-winner'>
                                                                <img src="/images/Crown.svg" alt="crown" className='crown-image' />
                                                                <img src={item.bam_talentci.profile_picture_path || ""} alt="crown" className='crown-image' key={index} />
                                                                <h6>1</h6>
                                                                <p>{item.bam_talentci.fname + " " + item.bam_talentci.lname}</p>
                                                                <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score}</p></div>
                                                            </div>
                                                        }
                                                        {index == 2 &&

                                                            <div className='third-winner'>

                                                                <img src={item.bam_talentci.profile_picture_path || ""} alt="" className='user-image' key={index} />
                                                                <h6>3</h6>
                                                                <p>{item.bam_talentci.fname + " " + item.bam_talentci.lname}</p>
                                                                <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score}</p></div>
                                                            </div>
                                                        } */}
                                                </>

                                            }


                                        </div>
                                    </div>

                                    <div className='other-winner'>

                                        {
                                            contestWinner?.contest_media &&
                                            contestWinner?.contest_media?.slice(0, 3).map((item: any, index: number) => (

                                                <>
                                                    {index <= 3 &&
                                                        <div className='single-row' key={index + 1}>
                                                            <div className='sr-number'><p>{(index + 1)}</p></div>
                                                            <div className='user-iamage'>
                                                                <a href={`/${item.bam_talentci.talentlogin}`}>
                                                                    <img src={item.bam_talentci.profile_picture_path || ""} alt="" />
                                                                </a>
                                                            </div>
                                                            <div className='user-name'><p>
                                                                <a href={`/${item.bam_talentci.talentlogin}`}>
                                                                    {item.bam_talentci.fname} {item.bam_talentci.lname !== null && " " + item.bam_talentci.lname}
                                                                </a>
                                                            </p></div>
                                                            <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score}</p></div>
                                                            <div className='user-subpoint hidden md:block'><p>{item.score}</p></div>
                                                            <div className='user-totalpoint hidden md:block'><p>{item.views}</p></div>
                                                            {/* <div className='view-entry'><button onClick={() => { goToEntryPage(contestWinner?.contest_name, contestWinner?.contest_id, item.bam_talentci.fname + " " + item.bam_talentci.lname, item.talentnum) }}>View Entry</button></div> */}
                                                            <div className='view-entry hidden'><button>View Entry</button></div>
                                                        </div>
                                                    }
                                                </>

                                            ))
                                        }
                                        {
                                            fullResult &&
                                            <>
                                                {contestWinner?.contest_media?.slice(3, contestWinner?.contest_media?.length).map((item: any, index: number) => (

                                                    <>

                                                        <div className='single-row' key={index + 4}>
                                                            <div className='sr-number'><p>{(index + 4)}</p></div>

                                                            <div className='user-iamage'>
                                                                <a href={`/${item.bam_talentci.talentlogin}`}>
                                                                    <img src={item.bam_talentci.profile_picture_path || ""} alt="" />
                                                                </a>
                                                            </div>


                                                            <div className='user-name'>
                                                                <a href={`/${item.bam_talentci.talentlogin}`}>
                                                                    <p>{item.bam_talentci.fname} {item.bam_talentci.lname !== null && " " + item.bam_talentci.lname}
                                                                    </p>
                                                                </a>
                                                            </div>

                                                            <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score}</p></div>
                                                            <div className='user-subpoint hidden md:block'><p>{item.score}</p></div>
                                                            <div className='user-totalpoint hidden md:block'><p>{item.views}</p></div>
                                                            <div className='view-entry hidden'><button>View Entry</button></div>
                                                        </div>

                                                    </>

                                                ))
                                                }
                                            </>
                                        }


                                        {/* <div className='single-row'>
                                            <div className='sr-number'><p>1</p></div>
                                            <div className='user-iamage'><img src="/images/headshot3.png" alt="" /></div>
                                            <div className='user-name'><p>Anna Taylorswift</p></div>
                                            <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>1.00</p></div>
                                            <div className='user-subpoint'><p>1000</p></div>
                                            <div className='user-totalpoint'><p>5000</p></div>
                                            <div className='view-entry'><button>View Entry</button></div>
                                        </div>
                                        <div className='single-row'>
                                            <div className='sr-number'><p>1</p></div>
                                            <div className='user-iamage'><img src="/images/headshot3.png" alt="" /></div>
                                            <div className='user-name'><p>Anna Taylorswift</p></div>
                                            <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>1.00</p></div>
                                            <div className='user-subpoint'><p>1000</p></div>
                                            <div className='user-totalpoint'><p>5000</p></div>
                                            <div className='view-entry'><button>View Entry</button></div>
                                        </div> */}
                                        {!fullResult &&
                                            <div className='view-all-btn'>
                                                <img src="/images/shadow-table.svg" alt="" />
                                                <button onClick={() => { setFullResult(true) }}>See contest full result</button>
                                            </div>
                                        }

                                    </div>
                                </>
                            }
                        </div>
                    </AboutSection>

                </div>
                <aside className="right mt-5 lg:mt-0">
                    <Advertisement />
                    <div className="mb-5">
                        <CommunityBuzz />
                    </div>
                </aside>
            </main>
        </Container>
    )
}
