import { PrimaryBtn } from '@/styles/Btn.styled';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function CallTransfer() {
    const [tens, setTens] = useState<number>(10);
    const [seconds, setSeconds] = useState<number>(59);
    const [endTimer, setEndTimer] = useState(false)

    const Timer = () => {
        setTens((tens) => {
            if (tens <= 1) {
                return 10;
            } else {
                return tens - 1;
            }
        })
    }

    useEffect(() => {
        if (tens !== 1) return
        setSeconds(seconds - 1);
    }, [tens])

    useEffect(() => {
        if (seconds !== 0) return
        setEndTimer(true);
        setSeconds(0);
        setTens(0);

    }, [seconds])

    useEffect(() => {
        let cTimer: any;
        if (!endTimer) {
            cTimer = setInterval(() => {
                Timer();
            }, 100);
        }
        return () => clearInterval(cTimer)
    }, [endTimer])


    return (
        <Root>
            <div className='flex flex-col justify-center items-center gap-5 pb-10'>
                <h4 className="text-xl font-semibold">Leaving call in:</h4>
                <div className="timer text-4xl font-bold text-center"><span className='w-14 inline-block'>{`${seconds > 9 ? seconds : `0${seconds}`}`}</span> : <span className='w-14 inline-block'>{`${tens > 9 ? tens : `0${tens}`}`}</span></div>
                <h5 className='font-medium text-base'>Select outcome (disposition):</h5>
                <div className='flex flex-col gap-2 items-center btn-wrapper'>
                    <div>
                        <PrimaryBtn className='btn caller'>Caller hangup on transfer</PrimaryBtn>
                    </div>
                    <div>
                        <PrimaryBtn className='btn voicemail'>Closer - Voicemail or IVR</PrimaryBtn>
                    </div>
                    <div>
                        <PrimaryBtn className='btn answer'>Closer - Too long to answer</PrimaryBtn>
                    </div>
                    <div>
                        <PrimaryBtn className='btn transfer'>Closer accepted transfer</PrimaryBtn>
                    </div>
                    <div>
                        <PrimaryBtn className='btn end'>End this call (hangup)</PrimaryBtn>
                    </div>
                    <div>
                        <PrimaryBtn className='btn retry'>Retry transfer</PrimaryBtn>
                    </div>
                </div>
                <div className='script-box script-box-top py-5 md:px-8 px-4'>
                    <div className='text-xl font-semibold mb-2'>SCRIPT CALLER:</div>
                    <div className='text-lg'>The agent will be joining the call shortly. Please hold with me for just a few more seconds. (Repeat every 20 seconds)</div>
                </div>
                <div className='script-box script-box-bottom py-5 md:px-8 px-4'>
                    <div className='text-xl font-semibold mb-2'>SCRIPT CLOSER:</div>
                    <div className='text-lg'>Hello. I have someone on the line looking for a quote. I will leave you two to discuss.</div>
                </div>
            </div>
        </Root>
    )
}

const Root = styled.div`
    .timer {
        background-color: ${(p: any) => p.theme.bgFooterUpper};
        padding: 0.5rem 2rem;
        color: ${(p: any) => p.theme.abs.white};
        /* border: 5px solid ${(p: any) => p.theme.textSecondary}; */
        border-radius: 5px;
    }
    .btn-wrapper > div > .btn {
        width: 294px;
        border: 0;
    }
    .btn-wrapper{
        .caller {
            background-color: ${(p: any) => p.theme.abs.yellow};
        }
        .voicemail {
            background-color: ${(p: any) => p.theme.abs.graySecondary};
        }
        .answer {
            background-color: ${(p: any) => p.theme.abs.gradColorPink};
        }
        .transfer {
            background-color: ${(p: any) => p.theme.abs.green};
        }
        .end {
            background-color: ${(p: any) => p.theme.abs.graySecondary};
        }
        .retry {
            background-color: ${(p: any) => p.theme.abs.red};
        }
    }


    .script-box {
        max-width: 550px;
        text-align: center;
        border-radius: 5px;
        background-color: ${(p: any) => p.theme.bgFooterLower};
    }
    .script-box-top {
        color: ${(p: any) => p.theme.abs.yellow};
        border: 2px solid ${(p: any) => p.theme.abs.yellow};
    }
    .script-box-bottom {
        color: ${(p: any) => p.theme.abs.green};
        border: 2px solid ${(p: any) => p.theme.abs.green};
    }
`;