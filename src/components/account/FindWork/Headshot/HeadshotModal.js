import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, Frame } from "./Headshot.styled";

export default function HeadshotModal({ setHidden, handleClose }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Card className="max-w-4xl w-80v relative z-30 px-10 py-20 lg:px-20">
      <div
        className="absolute right-10 top-7 cursor-pointer"
        onClick={handleClose}
      >
        <Image src="/svg/cross.svg" height={20} width={20} alt="cross" />
      </div>
      <Slider {...settings}>
        <div className="my-8">
          <Frame className=" w-fit mx-auto">

            <Image src="/images/headshot3.png"
              height={260}
              width={200}
              alt="headshot" />
          </Frame>
          <p className="mt-10 text-xl">
            Professinal headshots are your passport to any audition. If the
            headshot is of poor quality, it is immediately overlooked.
          </p>
        </div>

        <div className="my-8">
          <Frame className=" w-fit mx-auto">

            <Image src="/images/headshot2.png"
              height={260}
              width={200}
              alt="headshot" />
          </Frame>
          <p className="mt-10 text-xl">
            Professinal headshots are your passport to any audition. If the
            headshot is of poor quality, it is immediately overlooked.
          </p>
        </div>

        <div className="my-8">
          <Frame className=" w-fit mx-auto">

            <Image src="/images/headshot1.png"
              height={260}
              width={200}
              alt="headshot" />
          </Frame>
          <p className="mt-10 text-xl">
            Professinal headshots are your passport to any audition. If the
            headshot is of poor quality, it is immediately overlooked.
          </p>
        </div>
      </Slider>
    </Card>
  );
}

{
  /* <div className="flex items-center justify-center mt-10">
    &larr;{" "}
    <span className="mx-5 mt-2">
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
    </span>{" "}
    &rarr;
  </div> */
}
