import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

const ProgressBar = ({ bgimg, bgcolor, progress, height }: any) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundImage: bgimg,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    color: "white",
    fontWeight: 900,
    backgroundColor: bgcolor,
    borderRadius: "100%",
    padding: "5px",
    right: "-3px",
    top: "-7px",
    height: "23px",
    width: "23px",
  };

  const star = {
    right: "-3px",
    top: "-10px",
  };

  return (
    <div style={Parentdiv} className="relative">
      <div style={Childdiv}>
        <span className="w-full relative">
          <TiTick className="absolute text-3xl" style={progresstext} />
        </span>
      </div>
      <span className="absolute" style={star}>
        <Image src="/svg/et-star.svg" alt="star" height={28} width={28} />{" "}
      </span>
    </div>
  );
};

export default ProgressBar;
