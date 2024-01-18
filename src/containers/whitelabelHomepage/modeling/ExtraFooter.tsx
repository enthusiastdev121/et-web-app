import Link from 'next/link'
import React from 'react'
import { TalentPartsSection, Heading, UesrInfo, FooterLinkSection, FooterLinkExtra } from './styles'

export default function ExtraFooter() {

    return (
        <>

            <FooterLinkExtra className='xl:px-1 px-5'>

                <div className='grid md:grid-cols-2 gap-10'>
                    <div className='red-box'>
                        <h5>Find acting auditions by city: </h5>
                        <h6>Acting Auditions in New York , Acting Auditions Los Angeles , Acting Auditions Chicago , the Acting Auditions Atlanta , Acting Auditions MiamiActing Auditions Los Angeles</h6>
                    </div>
                    <div className='red-box'>
                        <h5>
                            Find Modeling jobs by city:</h5>
                        <h6>Modeling Jobs in New York , Modeling Jobs in Los Angeles , Modeling Jobs in Chicago , the Acting Auditions Atlanta , Modeling Jobs in Atlanta</h6>
                    </div>
                </div>

                <div className='info-footer'>
                    <p>
                        ExploreTalent is neither an employment agent nor a modeling agency. We do not guarantee employment, jobs or bookings. Explore Talent only provides Internet exposure, resources, and tools for you to match your talent with auditions and casting directors. If you have any questions, contact our Customer Service department at (702) 553-2700. Here is our User Agreement, Privacy Policy and Kids Privacy Policy.
                    </p>
                    <p>
                        ExploreTalent.com is the worldwide leader in acting Modeling Auditions. We are offering thousands of casting calls and Auditions. Get more Casting, auditions resources and Talent Agents than all other sites combined. Spending hours and not finding the Acting Jobs & Modeling Jobs you need? Find Reality TV Shows Casting Calls the modeling auditions Acting Auditions, modeling jobs, acting jobs, all in one place. Stop spending hours searching for casting & auditions. Submit yourself to casting calls, auditions - Get a call when Casting directors wants you.
                    </p>
                </div>

                <div className='extra-footer-link'>
                    <Link href="">About ExploreTalent.com</Link>
                    <Link href="">Tour   </Link>
                    <Link href="">Home   </Link>
                    <Link href="">Privacy Policy </Link>
                    <Link href="">Acting Auditions</Link>
                    <Link href=""> Terms of use</Link>
                    <Link href="">Articles   </Link>
                    <Link href="">Community Post</Link>
                    <Link href="">Become an Affiliate</Link>
                    <Link href=""> Contact Us Disclaimer </Link>
                    <Link href=""> DMCA Fair Use Disclaimer </Link>
                    <Link href="">Site Map</Link>


                </div>


                <div className='footer-credits'>
                    <Link href="#">
                        <img src="/images/footer-modeling.svg" alt="" className='logo' />


                    </Link>
                    <Link href="#">

                        <img src="/images/secure-logo.svg" alt="" className='secure-logo' />

                    </Link>
                    <p>© Modeling.net</p>
                </div>


            </FooterLinkExtra>
        </>
    )
}
