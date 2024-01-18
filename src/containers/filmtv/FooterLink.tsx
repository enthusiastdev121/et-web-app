import Link from 'next/link'
import React from 'react'
import { TalentPartsSection, Heading, UesrInfo, FooterLinkSection } from './styles'
import { WHITELABEL_NAME } from '@/utils/envProviders'

export default function FooterLink() {

    return (
        <>

            <FooterLinkSection className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-10 gap-4 xl:px-1 px-5">

                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Auditions & Jobs</h5>
                    <Link href="">
                        Acting Auditions</Link>
                    <Link href="">Modeling Auditions</Link>
                    <Link href="">Dance Auditions</Link>
                    <Link href="">Music Auditions</Link>
                    <Link href="">Crew Auditions</Link>
                    <Link href="">All Auditions/Jobs
                    </Link>
                </div>

                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Videos</h5>

                    <Link href="">Video Testimonials</Link>
                    <Link href="">More Videos</Link>
                    <Link href="">Hip Hop Musicians Advice</Link>
                    <Link href="">Acting Workshop</Link>
                    <Link href="">Celebrity Videos</Link>
                    <Link href="">Member Video Search</Link>


                </div>

                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Find Talent</h5>

                    <Link href="">Search Models and Actors</Link>
                    <Link href="">Search Musicians</Link>
                    <Link href="">Featured Talents</Link>
                    <Link href="">Featured Contestants</Link>
                    <Link href="">See Who Just Joined ET</Link>
                    <Link href="">Who's Online</Link>
                    <Link href="">Talent Activity Feed</Link>
                    <Link href="">All Talents</Link>


                </div>


                <div className='link-section lg:mt-0 mt-2'>
                    <h5>About {WHITELABEL_NAME}</h5>

                    <Link href="">About Us</Link>
                    <Link href="">FAQ</Link>
                    <Link href="">Affiliates/Advertising</Link>
                    <Link href="">Testimonials</Link>

                    <h5 className='mt-5'>More on Explore Talent</h5>
                    <Link href="">Articles</Link>
                    <Link href="">News</Link>
                    <Link href="">Links</Link>



                </div>

            </FooterLinkSection>
        </>
    )
}
