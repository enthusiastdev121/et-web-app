import VideoPlayerModal from "components/VideoPlayerModal";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TiVideo } from "react-icons/ti";
import styled from "styled-components";

export const ReviewCard = ({
  name,
  pic,
  category,
  rating,
  date,
  desc,
  type,
  uri,
  thumbnail,
}: ReviewCardD) => {
  const starred: Array<number> = [];
  const unstarred: Array<number> = [];

  const [fullVideo, setFullVideo] = useState(false);

  for (let i = 0; i < rating; i++) {
    starred.push(i);
  }

  for (let i = 0; i < 5 - rating; i++) {
    unstarred.push(i);
  }

  return (
    <Card>
      <VideoPlayerModal
        uri={uri}
        open={fullVideo}
        onClose={() => setFullVideo(false)}
      />

      <div
        className="text-5xl absolute top-5 right-10 xl:block quotes"
        style={{ color: "#E5E7EB" }}
      >
        {type === "message" ? <RiDoubleQuotesL /> : <TiVideo />}
      </div>

      <div className="flex gap-3 mb-2">
        <div>
          <img src={pic} alt="talent" />
        </div>

        <div>
          <h3>{name}</h3>
          <div className="text-sm" style={{ color: "#7A7A7A" }}>
            {category}
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center mb-3">
        <div className="flex gap-1 stars-container">
          {starred.map((i) => (
            <AiFillStar key={i} className="star-filled" />
          ))}
          {unstarred.map((i) => (
            <AiFillStar key={i} className="star" />
          ))}
        </div>
        <div className="text-sm" style={{ color: "#7A7A7A" }}>
          {date}
        </div>
      </div>

      {type === "message" ? (
        <p>{desc}</p>
      ) : (
        <div className="video-container">
          <img src={thumbnail} alt={name} className="thumbnail" />
          <div className="play">
            <BsFillPlayFill onClick={() => setFullVideo(true)} />
          </div>
        </div>
      )}
    </Card>
  );
};

const Card = styled.div`
  background: ${(p: any) => p.theme.pure};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  max-width: 530px;
  padding: 30px 25px;
  position: relative;
  font-size: 15px;

  img {
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    height: 49px;
    width: 49px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #414042;
  }

  .stars-container {
    .star {
      color: #c5c5c5;
    }
    .star-filled {
      color: #ffb543;
    }
    font-size: 20px;
  }

  .video-container {
    height: 270px;
    max-width: 480px;
    width: 100%;
    background-color: #000;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .play {
    color: #fff;
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .thumbnail {
    width: fit-content;
    height: 100%;
    border-radius: 0;
  }
`;

type ReviewCardD = {
  name: string;
  pic: string;
  category: string;
  rating: number;
  date: string;
  desc?: string;
  type: "message" | "video";
  uri: string;
  thumbnail: string;
};
