import FeaturedTalent from "components/reviews/FeaturedTalent";
import { motion } from "framer-motion";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "pages/testimonials";
import styled from "styled-components";
import AllCasting from "./HomePage/AllCasting";
import Brands from "./HomePage/Brands";
import CreateProfile from "./HomePage/CreateProfile";
import Features from "./HomePage/Features";
import Hire from "./HomePage/Hire";
import HomePage from "./HomePage/index";
import JobSearch from "./HomePage/JobSearch";
import KidsProfile from "./HomePage/KidsProfile";
import News from "./HomePage/News";
export default function Hero() {
  return (
    <div
      style={{
        background: "url(" + "public/images/talento-images/home-bg.png)",
      }}
    >
      <HomePage />
    </div>

    // <CustomSec>
    //   <div
    //     className="py-10 md:py-40 xl:px-1 px-5 lg:py-60 relative hero-section"
    //     style={{ paddingTop: "136px" }}
    //   >
    //     <Banner>
    //       <div className="video-animation">
    //         <img
    //           src="../../../images/talento/BG.png"
    //           height="100%"
    //           width="100%"
    //         />
    //       </div>
    //       {/* <video loop muted autoPlay>
    //         <source src="/video/talento.mp4" type="video/mp4" />
    //       </video> */}
    //     </Banner>
    //     <div
    //       className="text-sm lg:text-base py-5 font-semibold bg-black"
    //       style={{ maxWidth: "1332px", margin: "0 auto" }}
    //     >
    //       <motion.h1
    //         initial={{
    //           opacity: 0,
    //           y: 10,
    //         }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.4 }}
    //         className="font-bold  montserrat-semibold h1-tag text-white mb-5 relative tracking-normal"
    //       >
    //         <p style={{ fontSize: "50px" }}>
    //           Conectando <span style={{ color: "#F31212" }}>talento con</span>
    //         </p>
    //         <p style={{ fontSize: "40px" }}>Profesionales del Casting</p>
    //       </motion.h1>
    //       <motion.p
    //         initial={{
    //           opacity: 0,
    //           y: 10,
    //         }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.4, delay: 0.2 }}
    //         className="font-semibold text-black    drop-shadow-lg p-tag md:leading-snug	 md:tracking-wide"
    //         style={{ color: "#FFFFFF", fontSize: "20px" }}
    //       >
    //         ¿Te enorgulleces de tu cuerpo? ¿Eres alguien que prefiere estar en
    //         el gimnasio que en una fiesta?
    //       </motion.p>
    //       <motion.div
    //         className="mt-16 text-center lg:flex grid "
    //         initial={{
    //           opacity: 0,
    //           y: 10,
    //         }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.4, delay: 0.5 }}
    //       >
    //         <Link href="/">
    //           <a className="bg-danger  text-white btn relative lg:mr-2 mr-0 h-15 leading-10 btn-tag lg:w-60 md:tracking-wide">
    //             Únete ahora
    //           </a>
    //         </Link>
    //         <Link href="/">
    //           <a className="text-white btn relative lg:ml-2 ml-0 lg:mt-0 mt-2 btn-tag h-15 leading-10  md:tracking-wide">
    //             Post a Casting Call
    //           </a>
    //         </Link>
    //       </motion.div>
    //     </div>
    //     <div>
    //       <motion.p
    //         initial={{
    //           opacity: 0,
    //           y: 10,
    //         }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.4, delay: 0.2 }}
    //         className="flex gap-5 flex-col lg:flex-row items-center lg:gap-10 justify-center"
    //         style={{
    //           color: "rgba(60, 60, 67, 0.6)",
    //           fontSize: "20px",
    //           maxWidth: "1530px",
    //           width: "80vw",
    //           margin: "80px auto",
    //           position: "relative",
    //           zIndex: "20",
    //         }}
    //       >
    //         <h2>Our talents have been featured on</h2>
    //       </motion.p>
    //     </div>
    //     <div>
    //       <div
    //         style={{
    //           visibility: "visible",
    //           flex: "0 1 auto",
    //           gap: "5px",
    //           marginTop: "14px",
    //           background: "blue",
    //         }}
    //       ></div>
    //       <div>
    //         <video loop muted autoPlay>
    //           <source
    //             src="../../../video/videos/video-1.mp4"
    //             type="video/mp4"
    //           />
    //         </video>
    //       </div>
    //       <div>
    //         <video loop muted autoPlay>
    //           <source
    //             src="../../../video/videos/video-2.mp4"
    //             type="video/mp4"
    //           />
    //         </video>
    //       </div>
    //       <div>
    //         <video loop muted autoPlay>
    //           <source
    //             src="../../../video/videos/video-3.mp4"
    //             type="video/mp4"
    //           />
    //         </video>
    //       </div>
    //     </div>

    //     <div>Our talents have been featured on</div>
    //   </div>
    // </CustomSec>
  );
}
<style>background-image: url(''); background-size: 100%;</style>;

const CustomSec = styled.div`
  .hero-section {
    height: 900px;
    overflow: hidden;
    padding-bottom: px;

    @media (max-width: 767px) {
      height: 600px;
    }
  }

  .bg-primary {
    background-color: #2c8bed;
  }

  .h1-tag {
    font-size: 55px;
    margin-bottom: 0;
    height: 124px;
    line-height: 62px;
    max-width: 860px;
    width: 100%;
    @media (max-width: 991px) {
      font-size: 40px;
      line-height: 50px;
    }

    @media (max-width: 575px) {
      font-size: 40px;
      line-height: 46px;
      height: 180px;
    }

    @media (min-width: 574px) and (max-width: 767px) {
      font-size: 40px;
      line-height: 46px;
    }
  }

  .p-tag {
    font-size: 22px;
    height: 56px;
    line-height: 28px;
    max-width: 694px;
    margin-top: 30px;
    font-family: "Montserrat-Light";
    max-width: 619px;

    @media (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
  }

  .bg-danger {
    background-color: #f31212;
  }

  .btn-tag {
    font-size: 20px;
    font-family: "Montserrat-Light";
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 991px) {
      font-size: 18px;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const Banner = styled.div`
  video {
    position: absolute;
    top: 0;
    width: 100vw !important;
    left: 0;
    height: 100%;
    object-fit: cover;

    @media (max-width: 767px) {
      height: 100%;
    }
  }

  .video-animation {
    position: absolute;
    top: 0;
    width: 100vw !important;
    left: 0;
    height: 100%;
    object-fit: cover;
    background-image: ;
  }
`;
