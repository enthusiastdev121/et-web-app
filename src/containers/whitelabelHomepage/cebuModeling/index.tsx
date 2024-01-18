import React from 'react'
import Brands from './Brands'
import Hero from './Hero'
import styled from "styled-components";
import AllCasting from './AllCasting';
import Features from './Features';
import CreateProfile from './CreateProfile';
import KidsProfile from './KidsProfile';
import JobSearch from './JobSearch';
import Testimonials from './Testimonials';
import FeaturedTalent from './FeaturedTalent';
import CastingCalls from './CastingCalls';
import LookingHire from './LookingHire';
import News from './News';
import { FontFamily } from './style';

export default function CebuModeling() {
    return (
        <div>
            <FontFamily>
                <BackGroungImages>
                    <img className='star_img' src='./images/cebuModeling/cebu-banner-bg.png' alt='bg start image' />
                    <Hero />
                    <Brands />
                    <CastingCalls />
                    <AllCasting />
                    <Features />
                    <CreateProfile />
                    <LookingHire />
                    <KidsProfile />
                    <JobSearch />
                    <Testimonials />
                    <FeaturedTalent />
                    <News />
                </BackGroungImages>
            </FontFamily>

        </div>
    )
}
const BackGroungImages = styled.div`
.star_img{
    position: absolute;
    top:-100px;
}
`