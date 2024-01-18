import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./Hero";
import Brands from "./Brands";
import UpcomingAudition from "./UpcomingAudition";
import AllCasting from "./AllCasting";
import JobAndCommunity from "./JobAndCommunity";
import Profile from "./Profile";
import LookingHire from "./LookingHire";
import HeyParent from "./HeyParent";
import SearchJob from "./SearchJob";
import Testimonial from "./Testimonial";
import FeatureTalent from "./FeatureTalent";
import News from "./News";

export default function TalentoHome() {
    return (
        <CustomLayer>
            <Hero />
            <Brands />
            <UpcomingAudition />
            <AllCasting />
            <JobAndCommunity />
            <Profile />
            <LookingHire />
            <HeyParent />
            <SearchJob />
            <Testimonial />
            <FeatureTalent />
            <News />

        </CustomLayer>
    );
}
const CustomLayer = styled.div`
    background-color:#000;
    background-size: contain;
    background-repeat: repeat;
`;

const Container = styled.div`
      max-width:1332px;
      margin:0 auto;
    `;

const TalentColBg = styled.div`
    background:#EBEBEB;
  `;

const FooterColBg = styled.div`
    background:#222222;
  `;