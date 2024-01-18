import React from 'react'
import styled from 'styled-components'
import { Container, P1 } from './styles'
import { WHITELABEL_NAME } from '@/utils/envProviders'

export default function AuditionFooter() {

    const navigationList = [
        {
            id: 1,
            label: "Navigation"
        },
        {
            id: 2,
            label: "Acting Audition"
        },
        {
            id: 3,
            label: "Modeling Audition"
        },
        {
            id: 4,
            label: "Dance Audition"
        },
        {
            id: 5,
            label: "Music Audition"
        },
        {
            id: 6,
            label: "Crew Audition"
        },
        {
            id: 7,
            label: "All Audition/Jobs"
        },
    ]

    const videosList = [
        {
            id: 1,
            label: "Videos"
        },
        {
            id: 2,
            label: "Video Testimonial"
        },
        {
            id: 3,
            label: "More Video"
        },
        {
            id: 4,
            label: "Hip Hop Musician Advice"
        },
        {
            id: 5,
            label: "Acting Workshow"
        },
        {
            id: 6,
            label: "Celebrity Videos"
        },
        {
            id: 7,
            label: "Member Video Search"
        },
    ]
    const talentList = [
        {
            id: 1,
            label: "Find Talent"
        },
        {
            id: 2,
            label: "Search Models and Actors"
        },
        {
            id: 3,
            label: "Search Musicians"
        },
        {
            id: 4,
            label: "Featured Talents"
        },
        {
            id: 5,
            label: "Featured Contestants"
        },
        {
            id: 6,
            label: "See Who Just Joined ET"
        },
        {
            id: 7,
            label: "Who's Online"
        },
        {
            id: 7,
            label: "Talent Activity Feed"
        },
        {
            id: 7,
            label: "All Talents"
        },

    ]
    const aboutList = [
        {
            id: 1,
            label: "About " + WHITELABEL_NAME
        },
        {
            id: 2,
            label: "About Us"
        },
        {
            id: 3,
            label: "FAQ"
        },
        {
            id: 4,
            label: "Affiliates/Advertising"
        },
        {
            id: 5,
            label: "Testimonials"
        },
        {
            id: 6,
            label: "Articles"
        },
        {
            id: 7,
            label: "News"
        },
        {
            id: 7,
            label: "Links"
        },


    ];
    return (
        <>
            <AuditionRoot>
                <Container>
                    <div className='md:py-16 py-10 footer-item grid gap-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 text-lg font-thin text-left'>
                        <ul>
                            {
                                navigationList.map((item) => {
                                    return (
                                        <li className={`mb-3 ${item.id === 1 ? 'font-bold mb-6 text-2xl ' : "font-normal txt-yellow md:text-lg footer-link"}`}>{item.label}</li>
                                    )
                                })
                            }

                        </ul>
                        <ul>
                            {
                                videosList.map((item) => {
                                    return (

                                        <li className={`mb-3 ${item.id === 1 ? 'font-bold mb-6 text-2xl' : "font-normal md:text-lg text-base footer-link"}`}>{item.label}</li>
                                    )
                                })
                            }

                        </ul>
                        <ul>
                            {
                                talentList.map((item) => {
                                    return (

                                        <li className={`mb-3 ${item.id === 1 ? 'font-bold mb-6 text-2xl' : " font-normal md:text-lg text-base footer-link"}`}>{item.label}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul>
                            {
                                aboutList.map((item) => {
                                    return (

                                        <li className={`mb-3 ${item.id === 1 ? 'font-bold mb-6 text-2xl' : "font-normal md:text-lg text-base footer-link"}`}>{item.label}</li>

                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className='bg-[#3A3A42] pt-8 px-8 lg:pb-8 md:pb-14 pb-10'>
                        <div className=' footer-img flex items-center justify-between mb-8'>
                            <div >
                                <img className='footer-logo' src="/images/audition/footer-logo.png" alt="" />
                            </div>
                            <div className='flex gap-2 justify-between'>
                                {['/images/audition/facebook.svg', '/images/audition/instagram.svg ', '/images/audition/twitter.svg ', '/images/audition/pinterest.svg ', '/images/audition/youtube.svg'].map(i => {
                                    return (
                                        <div className='bg-primary flex items-center justify-center h-10 aspect-square p-2 rounded-full'>
                                            <img className='h-full w-full' src={i} alt="" />
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                        <P1 className='footer-txt text-left '>Auditions.com is neither an employment agent nor a modeling agency. We do not guarantee employment, jobs or bookings. Auditions only provides Internet exposure, resources, and tools for you to match your talent with auditions and casting directors. If you have any questions, contact our Customer Service department at (702) 553-2700. Here is our User Agreement, Privacy Policy and Kids Privacy Policy.</P1 >
                        <P1 className='footer-txt text-left'>
                            Auditions.com is the worldwide leader in acting Modeling Auditions. We are offering thousands of casting calls and Auditions. Get more Casting, auditions resources and Talent Agents than all other sites combined. Spending hours and not finding the Acting Jobs & Modeling Jobs you need? Find Reality TV Shows Casting Calls the modeling auditions Acting Auditions, modeling jobs, acting jobs, all in one place. Stop spending hours searching for casting & auditions. Submit yourself to casting calls, auditions - Get a call when Casting directors wants you.
                        </P1>
                    </div>
                </Container>
            </AuditionRoot >
        </>
    )
}

const AuditionRoot = styled.div`

    @media(max-width:1049px){

        padding-bottom: 3.8rem;
    }
    background-color: #292930;
    
    p{
        margin-bottom: 1rem;
    }

    @media(max-width:820px){
        .footer-logo{
            max-width: 90%;
        }
    }
    @media(max-width:767px){
        .footer-item{
        padding-left: 10%;
        }

        .footer-img{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .footer-logo{
            max-width: 80%;
            margin: auto;
        }
        .footer-txt{
            line-height: 150%;
        }
    }
    .footer-link{
        color: white;
        transition: all 0.3s;
        cursor: pointer;

        &:hover{
            color: ${(p) => p.theme.yellow};

            transition: all 0.3s;
        }
    }
`