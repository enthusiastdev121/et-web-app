import styled from "styled-components";
import AboutModal from "./AboutModal";
import AuditionFees from "./AuditionFees";
import AuditionFeesTwo from "./AuditionFeesTwo";
import Casting from "./Casting";
import ExtraFooter from "./ExtraFooter";
import FooterLink from "./FooterLink";
import Hero from "./Hero";
import Info from "./Info";
import TalentParts from "./TalentParts";
import Testimonial from "./Testimonial";
import VideoIntro from "./VideoIntro";

export default function TalentoPage() {
  return (
    <CustomLayer>
      <Hero />
      <Container>
        <FooterLink />
      </Container>
        <Container>
          <ExtraFooter />
        </Container>
    </CustomLayer>
  );
}

const CustomLayer = styled.div`
  background-color: #000;
  background-image: url("/images/talento-images/home-bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  max-width: 1332px;
  margin: 0 auto;
`;

const TalentColBg = styled.div`
  background: #000;
`;
