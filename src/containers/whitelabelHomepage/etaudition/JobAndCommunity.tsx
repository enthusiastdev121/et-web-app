import React from 'react'
import styled from 'styled-components'
import { P1 } from './styles'

export default function JobAndCommunity() {
    return (
        <>

            <div className="job-container max-w-[1450px] m-auto">
                <JobSection>
                    <div className='flex lg:gap-14 md:gap-8 md:flex-row flex-col flex-auto'>
                        <div className=''>
                            <img className='' src="/images/audition/community.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-6 pr-3 lg:pt-10 md:pt-3 right-content'>
                            <h2 className='font-bold txt-secondary lg:mb-4 h2 h2-br'>Community And <br /> Job Opportunity <br /> For EveryBody!</h2>


                            <div className='grid grid-cols-2 gap-10'>
                                <div className='flex flex-col md:items-start items-center md:text-left text-center '>
                                    <img className='mb-2 max-w-[80px]' src="/images/audition/community-people.svg" alt="" />
                                    <h5 className='mb-2 txt-primary lg:text-3xl text-2xl font-semibold underline'>1,635,971</h5>
                                    <P1 className='font-semibold txt-secondary p-br'>Audition Members <br /> and Counting</P1>
                                </div>
                                <div className='flex flex-col md:items-start items-center md:text-left text-center '>
                                    <img className='mb-2 max-w-[80px]' src="/images/audition/community-people.svg" alt="" />
                                    <h5 className='mb-2 txt-primary underline lg:text-3xl text-2xl font-semibold'>1,635,971</h5>
                                    <P1 className='font-semibold txt-secondary p-br'>Audition Members and <br /> Counting</P1>
                                </div>  

                                <div className='flex flex-col md:items-start items-center md:text-left text-center '>
                                    <img className='mb-2 max-w-[80px]' src="/images/audition/community-people.svg" alt="" />
                                    <h4 className='mb-2 txt-primary underline lg:text-3xl text-2xl font-semibold'>226,371</h4>
                                    <P1 className='font-semibold txt-secondary p-br'>Creators looking for <br /> talent</P1>
                                </div>
                                <div className='flex flex-col md:items-start items-center md:text-left text-center '>
                                    <img className='mb-2 max-w-[80px]' src="/images/audition/community-people.svg" alt="" />
                                    <h5 className='mb-2 txt-primary underline lg:text-3xl text-2xl font-semibold'>60</h5>
                                    <P1 className='font-semibold txt-secondary p-br'>Years of insider <br /> knowledge</P1>
                                </div>
                            </div>
                        </div>
                    </div>
                </JobSection>
            </div>
        </>
    )
}
const JobSection = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1025px) {
    .p-br br{
        display: none;
    }
}

@media(max-width: 767px){
    .h2{
        margin: auto;
        text-align: center;
        padding-bottom: 10px;
    }
    .h2-br br{
        display: none;
    }
    .right-content {
        max-width: 90%;
        margin: auto;
        padding-top: 1.5rem;
    }
}

   
`