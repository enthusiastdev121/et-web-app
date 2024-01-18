import styled from "styled-components";
import OldBrands from "./OldBrands";
import Brands from "./Brands";
import Hero from "./Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingAudition from "./UpcomingAudition";
import AllCasting from "./AllCasting";
import OldJobAndCommunity from "./OldJobAndCommunity";
import OldProfile from "./OldProfile";
import Profile from "./Profile";
import CustomerFeedback from "./CustomerFeedback";
import LookingHire from "./LookingHire";
import OldHeyParent from "./OldHeyParent";
import HeyParent from "./HeyParent";
import SearchJob from "./SearchJob";
import Testimonial from "./Testimonial";
import FeatureTalent from "./FeatureTalent";
import News from "./News";
import FooterLink from "./FooterLink";
import AuduionFooter from "./AuduionFooter";
import { AuditionRoot } from "./styles";
import OngoingJobs from "./OngoingJobs";
import AuditionFooter from "./AuditionFooter";
import JobAndCommunity from "./JobAndCommunity";
import AuditionNews from "./AuditionNews";

export default function EtauditionPage() {
  return (
    <CustomLayer>
      <AuditionRoot>
        <Hero />
        <OngoingJobs />
        <Brands />
        <JobAndCommunity />
        <Profile />
        <LookingHire />
        <HeyParent />
        <CustomerFeedback />
        <FeatureTalent />
        <AuditionNews />
        {/* <OldBrands /> */}
        {/* <UpcomingAudition /> */}
        {/* <AllCasting /> */}
        {/* <OldJobAndCommunity /> */}
        {/* <OldProfile /> */}
        {/* <OldHeyParent /> */}
        {/* <SearchJob /> */}
        {/* <Testimonial /> */}
        {/* <News /> */}
        {/* <FooterLink /> */}
        {/* <AuduionFooter /> */}
        {/* <AuditionFooter /> */}

        
      </AuditionRoot>

    </CustomLayer>
  );
}

const CustomLayer = styled.div`
    background-color:#fff;
    background-size: contain;
    background-repeat: repeat;
    /* font-family: 'DM Sans', sans-serif; */
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