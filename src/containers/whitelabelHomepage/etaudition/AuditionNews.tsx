import React from 'react'
import styled from 'styled-components'
import { Container } from './styles'

export default function AuditionNews() {
    return (
        <>
            <NewsSection className='md:my-28 my-12'>
                <Container>
                    <div className=' flex justify-center items-center mb-10 '><h2 className='h2 font-bold text-4xl'>Auditions News
                    </h2></div>
                    <div className='flex audition md:flex-row flex-col'>
                        <div className='md:pr-8 md:pt-8 md:pb-0 pb-5 left-content'>
                            <h4 className=' mb-2 h4 font-bold text-[#292930]'>HBO Max’s ‘DMZ’ Starring Rosario Dawson Now Casting Extras</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>

                            <div className="flex items-center mt-5">
                                <div className='relative'>
                                    <img className='mt-2' src="/images/audition/audition-news-group.png" alt="" />
                                    <h2 className='txt-primary lg:text-7xl md:text-5xl text-5xl font-bold audition-text md:left-[60%] left-[50%]'>Auditions</h2>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 mt-5'>
                                <div className='font-medium'>Learn More</div>
                                <img src="/images/audition/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                        <div className="lg:pl-8 md:pl-5 md:pt-8 md:pb-0 pt-5">
                            <h4 className=' font-bold  text-[#292930] mb-5 h4'>Tips, trends and tons of inspiration</h4>
                            <div className='flex gap-4 mb-3'>
                                <div>
                                    <img src="/images/audition/orange-women.png" alt="" />
                                </div>
                                <div>
                                    <p className='underline mb-2 leading-7'>Richard Linklater’s ‘Apollo 11’ Movie Casting Call For A Speaking Role</p>
                                    <p>{`${2} days ago | ${5} minute read`}</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mb-3'>
                                <div>

                                    <img src="images/audition/splashed.png" alt="" />
                                </div>
                                <div>
                                    <p className='underline mb-2 leading-7'>Richard Linklater’s ‘Apollo 11’ Movie Casting Call For A Speaking Role</p>
                                    <p>{`${2} days ago | ${5} minute read`}</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div>
                                    <img src="images/audition/children.png" alt="" />
                                </div>
                                <div>
                                    <p className='underline mb-2 leading-7'>Richard Linklater’s ‘Apollo 11’ Movie Casting Call For A Speaking Role</p>
                                    <p>{`${2} days ago | ${5} minute read`}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </NewsSection>


        </>
    )
}

const NewsSection = styled.div`
    /* margin-top: 4rem; */
    /* margin-bottom: 4rem; */
    .audition{
        border-top: 1px solid #D9D9D9;
        .left-content {
            border-right: 1px solid #D9D9D9;
        }
        @media screen and (max-width: 767px) {
            border-top: none; 
            .left-content {
                border-right: none;
                border-bottom: 1px solid #D9D9D9;
            }
        }
    }

    .audition-text{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    
        /* @media(max-width: 819px){
            .audition{
                display: flex;
                flex-direction: column;
            }
        }
     */
`