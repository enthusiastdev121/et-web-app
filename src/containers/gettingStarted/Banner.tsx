import Link from "next/link";
import { motion } from "framer-motion";
import { Btn } from "./StyledComponent";
import { Bgimg } from "./StyledComponent";
import { Bannersec } from "./StyledComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadein = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

export const BannerComp1 = () => {

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <Bannersec variants={fadein} initial="hidden" animate="visible">
        <h1>Getting started</h1>
        <img src="/images/3dpay.png" />
        <h1>
          Want to maximize your results and stand out from the competition ?{" "}
        </h1>
        <p>Of course you do, so make sure you follow these steps: </p>
        <Btn>
          <Link href="/profile/edit?keyword=app-tour">
            <a>
              <img src={"/svg/about-us.svg"} />
              Learn more and start the tour
            </a>
          </Link>
        </Btn>
        {/* <div className="slider-modal">
                      <Slider {...settings}>
                        <div className="pr-2">
                          <div className="single-slide ">
                            <img src="/images/bubble.png" alt="" />
                            <h5>Add social links</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-2.png" alt="" />
                            <h5>Add a video greeting</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-3.png" alt="" />
                            <h5>Add stunning photos</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-4.png" alt="" />
                            <h5>Add incredible videos</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-5.png" alt="" />
                            <h5>Add audio recordings</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-6.png" alt="" />
                            <h5>Add spotlights</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-7.png" alt="" />
                            <h5>List your credits & experience</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-8.png" alt="" />
                            <h5>Add acting interest</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-9.png" alt="" />
                            <h5>Add modeling information</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-10.png" alt="" />
                            <h5>Add extras information</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-12.png" alt="" />
                            <h5>Add professional documents</h5>
                          </div>
                        </div>
                      </Slider>

                      <button className="take-tour-btn" >
                        <img src="/images/play-icon.svg" alt="" />
                        Learn more and start the tour
                      </button>
                    </div> */}
      </Bannersec>
    </>
  );
};

export const BannerComp2 = () => {
  return (
    <>
      <Bannersec variants={fadein} initial="hidden" animate="visible">
        <h1>Activity guide</h1>
        <img src="/images/activity-guide.png" />
        <h1>Complete these activity and get ahead of the competition</h1>
        <p> </p>
        <Btn>
          <Link href="/">
            <a>
              <img src={"/svg/about-us.svg"} />
              Learn more and start the tour
            </a>
          </Link>
        </Btn>
      </Bannersec>
    </>
  );
};
export const BannerComp3 = () => {
  return (
    <>
      <Bannersec variants={fadein} initial="hidden" animate="visible">
        <h1>Video guide</h1>
        <img src="/images/video-guide.png" />
        <h1>Watch ET videos guide</h1>
        <p> This will help you get started with explore talent</p>
        <Btn>
          <Link href="/">
            <a>
              <img src={"/svg/about-us.svg"} />
              Learn more and start the tour
            </a>
          </Link>
        </Btn>
      </Bannersec>
    </>
  );
};

function Banner(props: any) {
  return <></>;
}
export default Banner;
