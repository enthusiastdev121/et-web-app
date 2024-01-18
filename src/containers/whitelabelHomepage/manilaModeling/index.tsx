import React from 'react'
import { BtnNoBack, BtnPrimary } from "components/home/buttons";
import Features from './Features'
import AllCasting from './AllCasting'
import Brands from './Brands'
import CastingCalls from './CastingCalls'
import Hero from './Hero'
import CreateProfile from './CreateProfile'
import Hire from './Hire'
import KidsProfile from './KidsProfile'
import JobSearch from './JobSearch'
import Testimonials from "./Testimonials";
import FeaturedTalent from "./FeaturedTalent";
import News from './News'
import styled from 'styled-components'


export default function ManilaModeling() {
    return (
        <Root>
            <div>
                <BackgroundImage>
                    <img className='star_home' src='/images/manila_models/star_home.png' alt='loading'/>
                    <Hero />
                    <Brands />
                    <CastingCalls />
                    <AllCasting />
                    <Features />
                    <CreateProfile />
                    <Hire />
                    <KidsProfile />
                    <JobSearch />
                    <Testimonials />
                    <FeaturedTalent />
                    <News />
                </BackgroundImage>



            </div>
        </Root>
    )
}

const Root = styled.div`
    p{
        font-family: 'Poppins';
    }
    h3{
        font-family: 'Poppins';
    }
    h5{
        font-family: 'Montserrat';
    }
    h6{
        font-family: 'Montserrat';
    }
    span{
        color:  ${(p) => p.theme.primary};
    }

    
`
const BackgroundImage = styled.div`
   .star_home{
    position: absolute;
   
   }
`