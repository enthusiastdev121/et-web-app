import { Container, P1 } from './styles'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

export default function LookingHire() {
    return (
        <>
            <Container>
                <HireSection className='md:p-14 p-6 md:rounded-[40px] rounded-[20px] md:my-24 my-12'>
                    <div className='text-[white] max-w-[500px]'>

                        <div className='flex flex-col gap-4'>

                            <h2 className='font-semiboldsss h2'>Looking To Hire?</h2>
                            <P1 className='txt-white font-normal tracking-wide'>Reach professional talent and fresh faces by placing a free casting call. See applicants' experience, photos, videos, audio and more. Easily sort applications, make notes on them and cast the perfect talent. Contact and book talent direct.
                            </P1>
                            <div className='pb-3 md:pt-3'>
                                <Link href='join/talentb'>
                                    <a>
                                        <button className='yellow-btn'>{`List A Job {Free}`}</button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </HireSection>
            </Container>

        </>
    )
}
const HireSection = styled.div`
background-image: url('/images/audition/girl-camera.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;