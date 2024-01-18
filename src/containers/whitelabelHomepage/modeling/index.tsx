import styled from "styled-components";
import Brands from "./Brands";
import Hero from "./Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import FooterLink from "./FooterLink";
import AuduionFooter from "./AuduionFooter";


export default function ModelingPage() {
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
      <FooterLink />
      <AuduionFooter />
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





