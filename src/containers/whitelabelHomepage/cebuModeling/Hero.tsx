import { BtnNoBack, BtnPrimary } from "components/home/buttons";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Hero() {
    return (
        <Root className="flex items-center flex-col lg:flex-row justify-center">
            <PinkGradient></PinkGradient>

            <div className="mb-20 relative z-10">
                <h1 className="mt-10 sm:mt-20 md:mt-28 lg:mt-36 font-['Raleway']">
                    <span>CEBU</span>
                    <span className="primary_text "> models on demand </span> <br />
                    <span style={{ fontSize: 35 }}>No experience needed</span>
                </h1>
                <p style={{ maxWidth: 616 }}>
                    Apply now to get hired for paid modeling gigs
                </p>
                <div className="mt-12 flex items-center gap-1 sm:gap-3">
                    <Link href="/join/talentb" passHref>
                        <div className="joinButton">Join&nbsp;Now</div>
                    </Link>
                    <Link href="https://cd.exploretalent.com">
                        <a target="_blank">
                            <div className="font-semibold">Post&nbsp;a&nbsp;Casting&nbsp;Call</div>
                        </a>
                    </Link>
                </div>
            </div>

            <VideosContainer className="hidden md:flex gap-5 mt-14">
                <div className="video-bg-gradient absolute top-0 left-0"></div>
                <VideoCard>
                    <video loop muted autoPlay>
                        <source src="/video/home-1.mp4" type="video/mp4" />
                    </video>
                </VideoCard>

                <VideoCard className="mt-10">
                    <video loop muted autoPlay>
                        <source src="/video/home-2.mp4" type="video/mp4" />
                    </video>
                </VideoCard>

                <VideoCard>
                    <video loop muted autoPlay>
                        <source src="/video/home-3.mp4" type="video/mp4" />
                    </video>
                </VideoCard>
            </VideosContainer>
        </Root>
    );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  z-index: 20;
  gap: 50px;

  h1 {
    font-weight: 700;
    font-size: 50px;
    color: #000000;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 100%;

    @media (max-width: 450px) {
      font-size: 45px;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    color: #000000;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 10px;

    @media (max-width: 450px) {
      font-size: 18px;
    }
  }
  .primary_text{
    color: ${p=>p.theme.primary};
    
  }
  .joinButton{
    background-color:${p=>p.theme.primary};
    color: ${p => p.theme.pure};
    border-radius: 40px;
    padding: 10px 25px;
  }
`;
const VideosContainer = styled.div`
  position: relative;

  .video-bg-gradient {
    background-image: linear-gradient(
      180deg,
      rgba(200, 225, 255, 0.25) 0%,
      rgba(44, 68, 98, 0.25) 100%
    );
    background: rgba(44, 68, 98, 0.75);
    filter: blur(200px);
    border-radius: 50%;
    height: 110%;
    width: 110%;
  }
`;

const VideoCard = styled.div`
  background: #c4c4c4;
  border-radius: 30px;
  position: relative;
  z-index: 10; 
  overflow: hidden;
  height: 330px;
  width: 150px;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1630px) {
    height: 430px;
    width: 230px;
  }
`;

const PinkGradient = styled.div`
  display: block;
  position: absolute;
  width: 784.94px;
  height: 784.94px;
  right: -200px;
  // right: 0;
  top: 75.05px;
  background: #ffcfcf;
  filter: blur(420px);
  @media (max-width: 1050px) {
    display: none;
  }
`;
