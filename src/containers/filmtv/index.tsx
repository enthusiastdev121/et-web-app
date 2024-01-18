import styled from "styled-components";
import AboutModal from "./AboutModal";
import AuditionFees from "./AuditionFees";
import Casting from "./Casting";
import ExtraFooter from "./ExtraFooter";
import FooterLink from "./FooterLink";
import Hero from "./Hero";
import Info from "./Info";
import TalentParts from "./TalentParts";
import Testimonial from "./Testimonial";
import VideoIntro from "./VideoIntro";

export default function FilmTvPage() {
  return (
    <CustomLayer>
      <Hero />
      <Container>
        <Info />
        <AuditionFees />
        <AboutModal />
        <Testimonial />
      </Container>
      <Casting />
      <Container>
        {/* <VideoIntro /> */}
      </Container>
      <TalentColBg>
        <Container>
          <TalentParts />
        </Container>
      </TalentColBg>
      <Container>
        <FooterLink />
      </Container>
      <FooterColBg>
        <Container>
          <ExtraFooter />
        </Container>
      </FooterColBg>
    </CustomLayer>
  );
}

const CustomLayer = styled.div`
    background-color:#fff;
    // background-image:url('/images/layer-sketch.png');
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





