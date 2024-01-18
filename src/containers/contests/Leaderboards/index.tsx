import { getTimeRemaining } from '@/utils/helper';
import BackToTop from 'components/BackToTop';
import Advertisement from 'components/UpgradeToPro';
import CommunityBuzz from 'containers/CommunityBuzz';
import Item from 'containers/profile/photosListing/Item';
import SuccessStories from 'containers/SuccessStories';
import { useAuth } from 'context/AuthContext';
import { differenceInHours, format } from 'date-fns';
import { formatContestItem } from 'network/apiFormatter/contest';
import { getContestListApi, getCurrentContestLeaderboardByIdApi } from 'network/apis/contest';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { AboutSection, Container } from "./styles";

export default function Leaderboards() {

    const { token } = useAuth()

    const [LoadingTop, setLoadingTop] = useState(true)
    const [LoadingLeaderboard, setLoadingLeaderboard] = useState(true)
    const [seeAll, setSeeAll] = useState(false)
    const [currentContest, setCurrentContest] = useState<any[]>([])
    const [leaderboard, setLeaderboard] = useState<any>()
    const [selectedContest, setSelectedContest] = useState(0)
    const [localEnd, setLocalEnd] = useState(new Date());
    const [clock, setClock] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const getContenstentDetail = async () => {

            try {
                const res = await getContestListApi({
                    page: 1, perPage: 100
                });
                setCurrentContest(res.data.map((i: any) => formatContestItem(i)));
                setSelectedContest(res.data.map((i: any) => formatContestItem(i))[0]?.id)
                setLoadingTop(false)
            } catch (err) {
                console.log(err)
                setLoadingTop(false)
            }
        };
        getContenstentDetail()
    }, []);

    useEffect(() => {
        if (token && selectedContest) {
            setLoadingLeaderboard(true)
            const getLeaderboard = async () => {
                const res = await getCurrentContestLeaderboardByIdApi({
                    id: selectedContest, token: token
                });
                setLeaderboard(res);
                if (res) {
                    setLoadingLeaderboard(false)
                }
            };
            getLeaderboard()
        }

    }, [token, selectedContest]);

    useEffect(() => {
        let int: any;
        // if (differenceInHours(new Date(endTime * 1000), new Date()) < 0) {
        //   setIsActive(false);
        // }

        int = setInterval(() => {
            setLocalEnd(new Date());
        }, 1000);

        return () => {
            if (int) {
                clearInterval(int);
            }
        };
    }, [localEnd]);

    useEffect(() => {

        const timeinterval = setInterval(() => {
            const t = getTimeRemaining(new Date(leaderboard?.end_ts * 1000));
            setClock({ days: t.days, hours: t.hours, minutes: t.minutes, seconds: t.seconds })

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);

        return () => clearInterval(timeinterval)

    }, [leaderboard?.end_ts, clock])


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
                            <h3>Leaderboard</h3>
                            <p>Top contestant as of now. The Contest Leaderboard does not reflect the actual winners of the contests, only the top contestants at this point in time.</p>
                        </div>

                        <div className='tab-button'>

                            {LoadingTop && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                                {[1].map((i) => {
                                    return (
                                        <div key={i}>
                                            <Skeleton style={{ height: 30, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 20, width: "90%", borderRadius: 8, marginBottom: 4 }} />
                                            <Skeleton style={{ height: 10, width: "80%", borderRadius: 8, marginBottom: 4 }} />
                                        </div>
                                    );
                                })}
                            </div>}

                            {!LoadingTop &&
                                <>
                                    {currentContest && currentContest.map((item: any, index: number) => (
                                        <button key={index} className={`${selectedContest == item.id ? 'active-button' : 'deactive-button'}`} onClick={() => { setSelectedContest(item.id) }}>
                                            <img src={item.pic || ""} alt="" />
                                            <h6>{item?.name}</h6>
                                        </button>

                                    ))}
                                </>
                            }
                        </div>

                        <div className='winner-list'>

                            {LoadingLeaderboard && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
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
                                            <Skeleton style={{ height: 4, width: "9%", borderRadius: 8, marginBottom: 4 }} />
                                        </div>
                                    );
                                })}
                            </div>}

                            {!LoadingLeaderboard &&
                                <>
                                    <div className='relative'>
                                        <img src={leaderboard?.media_path_full} alt="" className='cover-images' />
                                        <div className='closing-soon'>
                                            <p><span>Closing in:&nbsp;&nbsp;&nbsp;</span>
                                                <span className="box">
                                                    {clock.days || 0}d
                                                </span>
                                                <span className="mx-1"></span>
                                                <span className="box">
                                                    {clock.hours || 0}h
                                                </span>
                                                <span className="mx-1"></span>
                                                <span className="box">{clock.minutes || 0}m</span>
                                                <span className="mx-1"></span>
                                                <span className="box">{clock.seconds || 0}s</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className='other-winner'>
                                        <div className='single-row'>
                                            <div className='heading-number'><p>Top Contestants</p></div>
                                            <div className='heading-iamage'><p>Score</p></div>
                                            <div className='heading-name'><p>Votes</p></div>
                                            <div className='heading-point'><p>Views</p></div>
                                        </div>
                                        {
                                            leaderboard?.contest_media &&
                                            leaderboard?.contest_media.slice(0, 4).map((item: any, index: number) => (
                                                <div key={index} className='single-row'>
                                                    <div className='sr-number'><p>{(index + 1)}</p></div>
                                                    <div className='user-iamage'><a href={`/${item.bam_talentci.talentlogin}`}><img src={item.bam_talentci?.profile_picture_path} alt="" /></a></div>
                                                    <div className='user-name'><a href={`/${item.bam_talentci.talentlogin}`}><p>{item.bam_talentci?.fname + " " + item.bam_talentci?.lname}</p></a></div>
                                                    <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score ?? 0}</p></div>
                                                    <div className='user-subpoint hidden md:block'><p>{item.score ?? 0}</p></div>
                                                    <div className='user-totalpoint'><p className='hidden md:block'>{item.views}</p></div>
                                                    <div className='view-entry hidden'><button>View Entry</button></div>
                                                </div>
                                            ))
                                        }
                                        {
                                            seeAll &&

                                            leaderboard?.contest_media &&
                                            leaderboard?.contest_media.slice(4, leaderboard?.contest_media?.length).map((item: any, index: number) => (
                                                <div key={index} className='single-row'>
                                                    <div className='sr-number'><p>{(index + 5)}</p></div>
                                                    <div className='user-iamage'><a href={`/${item.bam_talentci.talentlogin}`}><img src={item.bam_talentci?.profile_picture_path} alt="" /></a></div>
                                                    <div className='user-name'><a href={`/${item.bam_talentci.talentlogin}`}> <p>{item.bam_talentci?.lname + " " + item.bam_talentci?.fname}</p></a></div>
                                                    <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>{item.score ?? 0}</p></div>
                                                    <div className='user-subpoint hidden md:block'><p>{item.score ?? 0}</p></div>
                                                    <div className='user-totalpoint'><p className='hidden md:block'>{item.views}</p></div>
                                                    <div className='view-entry hidden'><button>View Entry</button></div>
                                                </div>
                                            ))
                                        }


                                        {!seeAll &&
                                            <div className='view-all-btn'>
                                                <button onClick={() => { setSeeAll(true) }}>See More</button>
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


/* <div className='single-row'>
                                          <div className='sr-number'><p>1</p></div>
                                          <div className='user-iamage'><img src="/images/headshot3.png" alt="" /></div>
                                          <div className='user-name'><p>Anna Taylorswift</p></div>
                                          <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>1.00</p></div>
                                          <div className='user-subpoint'><p>1000</p></div>
                                          <div className='user-totalpoint'><p>5000</p></div>
                                          <div className='view-entry'><button>View Entry</button></div>
                                      </div>
                                      <div className='single-row'>
                                          <div className='sr-number'><p>2</p></div>
                                          <div className='user-iamage'><img src="/images/headshot3.png" alt="" /></div>
                                          <div className='user-name'><p>Anna Taylorswift</p></div>
                                          <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>1.00</p></div>
                                          <div className='user-subpoint'><p>1000</p></div>
                                          <div className='user-totalpoint'><p>5000</p></div>
                                          <div className='view-entry'><button>View Entry</button></div>
                                      </div>
                                      <div className='single-row'>
                                          <div className='sr-number'><p>3</p></div>
                                          <div className='user-iamage'><img src="/images/headshot3.png" alt="" /></div>
                                          <div className='user-name'><p>Anna Taylorswift</p></div>
                                          <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>1.00</p></div>
                                          <div className='user-subpoint'><p>1000</p></div>
                                          <div className='user-totalpoint'><p>5000</p></div>
                                          <div className='view-entry'><button>View Entry</button></div>
                                      </div>
                                      <div className='single-row'>
                                          <div className='sr-number'><p>4</p></div>
                                          <div className='user-iamage'><img src="/images/headshot3.png" alt="" /></div>
                                          <div className='user-name'><p>Anna Taylorswift</p></div>
                                          <div className='user-point'><img src="/images/medal-star.svg" alt="" /><p>1.00</p></div>
                                          <div className='user-subpoint'><p>1000</p></div>
                                          <div className='user-totalpoint'><p>5000</p></div>
                                          <div className='view-entry'><button>View Entry</button></div>
                                      </div> */