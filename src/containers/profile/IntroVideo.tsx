import VideoPlayer from "components/profile/VideoPlayer";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

export default function IntroVideo({ data, own, editable }: any) {
  const [showPlayer, setShowPlayer] = useState(false);
  const open = () => {
    setShowPlayer(true);
  };
  const close = () => {
    setShowPlayer(false);
  };
  const box_shadow = editable ? "edit-profile-shadow" : "profile-shadow";

  return (
    <IntroVideoContainer
      className={`py-10 px-5 md:px-10 mt-5 ${box_shadow}`}
      id="intro-video"
    >
      <div className="flex items-center justify-between flex-wrap mb-5">
        <h2 className="font-bold sm:text-xl lg:text-2xl 2xl:text-3xl">
          Video Introduction
        </h2>
        <span className="secondary-text text-xs md:text-base">
          <span className="hidden dis-block">Uploaded</span> 1 year ago
        </span>
      </div>
      <div className="relative video-img-container">
        <img src={data?.thumb} alt="video thumbnail" />
        <div
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        ></div>
        <FaPlay
          className="absolute text-white text-xl md:text-5xl cursor-pointer"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          onClick={open}
        />
      </div>

      {showPlayer && <VideoPlayer uri={data?.uri} handleClose={close} />}
    </IntroVideoContainer>
  );
}

const IntroVideoContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  .dis-block {
    @media (min-width: 500px) {
      display: inline-block;
    }
  }

  .video-img-container {
    height: 30vh;
    width: 100%;
    overflow: hidden;

    @media (min-width: 600px) {
      height: 60vh;
    }

    @media (min-width: 1050px) {
      height: 75vh;
    }

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
`;
