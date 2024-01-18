import AgeConfirmation from "components/AgeConfirmation";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import AllCasting from "./AllCasting";
import Brands from "./Brands";
import CastingCalls from "./CastingCalls";
import CreateProfile from "./CreateProfile";
import FeaturedTalent from "./FeaturedTalent";
import Features from "./Features";
import Hero from "./Hero";
import Hire from "./Hire";
import JobSearch from "./JobSearch";
import KidsProfile from "./KidsProfile";
import News from "./News";
import SnoopDogg from "./SnoopDog";
import Testimonials from "./Testimonials";

export default function HomePage() {
  const [ageConfirmationOpen, setAgeConfirmationOpen] = useState(false);
  const [ageConfirmation, setAgeConfirmation] = useState(true)
  // TODO: Make nav fixed and bg-white on scroll up

  return (
    <div>
      <SquareBlob />

      {/* Hero Section */}
      <Hero />
      {/* <AgeConfirmation open={ageConfirmation}  onClose={() => setAgeConfirmationOpen(false)}/> */}

      {/* Brands */}
      <Brands />

      {/* Casting Calls */}
      <CastingCalls />
      {/* Snoop Dogg */}
      <SnoopDogg />
      {/* All casting by category */}
      <AllCasting />

      {/* Features section */}
      <Features />

      {/* Create Profile */}
      <CreateProfile />

      {/* List a job */}
      {/* HIRE SECTION IS TEMPRORELY REMOVED FROM HOMEPAGE */}
      {/* <Hire /> */}

      {/* Kids Profile */}
      <KidsProfile />

      {/* Job Search */}
      <JobSearch />

      {/* Testimonials */}
      <Testimonials />

      {/* Featured Talent */}
      {/* HIRE SECTION IS TEMPRORELY REMOVED FROM HOMEPAGE */}

      <FeaturedTalent />

      {/* News */}
      {/* <News /> */}
    </div>
  );
}

const SquareBlob = styled.div`
  background: linear-gradient(
    134.77deg,
    rgba(243, 247, 255, 0.3) 0.02%,
    rgba(215, 215, 255, 0.5) 97.89%
  );
  position: absolute;
  top: -200px;
  left: -273px;
  z-index: 10;
  opacity: 0.5;
  border-radius: 140px;
  height: 678px;
  width: 678px;
  transform: rotate(-27.42deg);
  animation: mymove 40s infinite;
  // animation: mymove 10s infinite;

  @keyframes mymove {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
