
import styled from "styled-components";
import { Container, P1 } from "./styles";
import Link from "next/link";


export default function Hero() {

  return (

    <HeroSection>
      <div className="bg-overlay"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="hero-section relative">
            <div className="flex flex-col gap-5">

              <h1 className="text-white h1">Life Is An <br /> Audition.</h1>
              <P1 className="max-w-[400px] text-white">The easier way to find and book Auditions.com. We just have more jobs, superior tools and proven marketing, & sales automation designed for Artists, Influencers, Business & Sports Professionals to keep their finger on the pulse without missing a beat.
              </P1>
              <div className="flex items-center gap-5 py-2 btn-row">
                <div>
                  <Link href={'/join/talentb'}>

                    <button className="primary-btn hero-btn">Join Now</button>
                  </Link>
                </div>
                <div>
                  <button className="post-job-btn hero-btn">Post a Job</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </HeroSection >
  );
}

const HeroSection = styled.div`
background-image: url("/images/audition/hero-clear.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding-top: 8rem;
padding-bottom: 8rem;
position: relative;


.bg-overlay{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* background-color: #0000002e; */
  background-image: linear-gradient(to right,rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4) 50%  , rgba(0,0,0,0) 100%);
}

.post-job-btn {
  border: 1px solid #FFFFFF;
  border-radius: 150px;
  padding: 0.8rem 3rem;
  color: #fff;
  font-weight: 500;
}


.hero-btn {
 @media (max-width: 450px){
  padding: 0.8rem 2rem;
 }
}
@media (max-width: 767px){
  padding-top: 3rem;
  padding-bottom: 3rem;
 }
`;


