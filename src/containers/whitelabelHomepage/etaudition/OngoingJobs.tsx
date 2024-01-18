import React from 'react'
import { Container } from './styles'
import { GoLocation } from 'react-icons/go'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { formatAudtionDetailSlug, getTimeRemaining } from "@/utils/helper";
import { useCountdown } from "hooks/useCountdown";
import ZSkel from 'components/ZSkel';
import { searchJobsApi } from 'network/apis/jobs';
import { useAuth } from 'context/AuthContext';
import { JobItemD } from 'types/jobs';
import { useRouter } from 'next/router';

const ExpiredTime = ({ time }: { time: number }) => {

    const [clock, setClock] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const timeinterval = setInterval(() => {
            const t = getTimeRemaining(new Date(time * 1000));
            setClock({ days: t.days, hours: t.hours, minutes: t.minutes, seconds: t.seconds })

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);

        return () => clearInterval(timeinterval)

    }, [time, clock])

    const [days, hours, minutes, seconds] = useCountdown(time * 1000);

    return (
        !(seconds < 0) ?
            <div className="flex items-center">
                <h6 className="font-medium mb-1 item text-base">Ending in:</h6>
                <div className="flex items-center justify-center font-medium mb-1 item text-base">
                    <span className="mx-1"> {days}d </span>
                    <span className="mx-1"> {hours}h </span>
                    <span className="mx-1">{minutes}m</span>
                    <span className="mx-1">{seconds}s</span>
                </div>
            </div> : <></>
    )
};

function OngoingJobs() {
    const [loading, setLoading] = useState(true)
    const [castingData, setCastingData] = useState([]);
    const { token } = useAuth();
    const router = useRouter()

    // SIDE EFFECTS
    useEffect(() => {
        if (!token) return;

        const getAllJobs = async () => {
            try {
                let res = await searchJobsApi({
                    token: token || '',
                    perPage: 10,
                    page: 1
                })
                console.log(res.data, "mytalentoall")

                setLoading(false)

                setCastingData(res.data)

            } catch (err) {
                console.log("Err", err)

                setLoading(true)
            }
        }

        getAllJobs();
    }, [token])

    return (
        <>
            <JobSection>
                <Container>
                    <div>
                        <div className='flex flex-col items-center justify-center mb-10 '>
                            <p className='mb-5 text-2xl  font-6 txt-primary'>Auditions & Jobs</p>
                            <h2 className='md:mb-5 font-bold h2 text-center' >Ongoing Featured Jobs For Today</h2>
                        </div>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 `}>


                            {loading ? (
                                <>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                                        return (
                                            <div
                                                key={i} className='aspect-video relative loader-box' >
                                                <ZSkel />
                                            </div>
                                        );
                                    })}
                                </>
                            ) :
                                <>
                                    {
                                        castingData.map((i: any, index: number) => (
                                            <div key={index} className='p-6 rounded-[26px] items cursor-pointer' onClick={() => router.push(`/auditions/${formatAudtionDetailSlug(i.name + " " + i.location + " " + i.zip, i.casting_id)}`)} >
                                                <div className='flex item link gap-1 items-center mb-3 '>
                                                    <div className=''>
                                                        <GoLocation />
                                                    </div>
                                                    <span>{i.location}</span>
                                                </div>
                                                {/* <p className='font-semibold item text-lg mb-1'>{i.name}</p> */}
                                                {/* <p className='font-bold text-2xl item mb-1'>${i.rate} Rate</p> */}
                                                {/* <p className='font-medium mb-1 item text-base'>{i.asap}</p> */}
                                                <div className='font-semibold item text-lg mb-1'>{i.name}</div>
                                                {i.rate !== "0.00" && <div className="font-bold text-2xl item mb-1">${i.rate} Rate</div>}
                                                <ExpiredTime time={i.asap} />
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        </div>
                    </div>
                </Container>
            </JobSection>
        </>
    )
};

export default OngoingJobs;

const JobSection = styled.div`
   padding-top: 4rem;
   padding-bottom: 4rem;

   .loader-box *{
        border-radius: 26px;
   }
 
    .item{
        transition: all 0.3s;
        color: #292930;
    }
    .link {
        text-decoration: underline;
        color: #5956E9;
    }
    

    .items{
        border: 1px solid #F3F3F3;
        box-shadow: 10px 14px 74px rgba(0, 0, 0, 0.05);
        transition: all 0.3s;
    }
    .items:hover{
        .item{
            color:#FFFFFF;
            transition: all 0.2s;
        }
   
        background-color: #5956E9;
        color:#FFFFFF;
        transition: all 0.3s;
    }
    @media screen and (max-width: 767px) {
        padding-top: 2rem;
        padding-bottom: 0;
    }
`;