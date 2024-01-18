import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function HeroSection() {
  return (
    <CustomSec>
      <div className="px-10v 2xl:px-20v py-20 md:py-40 lg:py-60 relative hero-section">
        {/* <div className="absolute top-0 left-0 bg-[url('/images/banner.png')] bg-cover bg-left sm:bg-center h-full w-full -z-10 brightness-75 lg:brightness-100"></div> */}
        <Banner>
          {/* <Image
          src="/images/banner.png"
          className="banner-img"
          alt="banner"
          layout="fill"
          priority
        /> */}
          <video loop muted autoPlay>
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </Banner>

        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-bold  montserrat-semibold h1-tag text-white mb-5 relative mx-auto text-center tracking-normal"
        >
          Connecting Talent With Casting Professionals 
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-semibold text-white   text-center mx-auto drop-shadow-lg p-tag md:leading-snug	 md:tracking-wide"
        >
          Do you take pride in your body? Are you someone who would rather be at
          the gym than at a party.
        </motion.p>
        <motion.div
          className="mt-16 text-center lg:flex grid lg:justify-center"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link href="/">
            <a className="bg-white  text-black btn relative lg:mr-2 mr-0 h-15 leading-10 btn-tag lg:w-60 w-full md:tracking-wide">Join Now</a>
          </Link>
          <Link href="/">
            <a className="bg-primary  text-white btn relative lg:ml-2 ml-0 lg:mt-0 mt-5 btn-tag h-15 leading-10 lg:w-80 w-full md:tracking-wide">Post A Casting Call</a>
          </Link>
        </motion.div>
      </div>
    </CustomSec>
  );
}

const CustomSec = styled.div`
   .hero-section{
     height:900px;
     overflow:hidden;
     padding-bottom:px;

     @media (max-width:767px){
     height:600px;
      
    }
   }

   .bg-primary{
     background-color:#2C8BED;
   }

   .h1-tag{
     font-size:55px;
     margin-bottom:0;
     height:124px;
     line-height:62px;
     @media (max-width:991px){
      font-size:40px;
     line-height:50px;
    }

    @media (max-width:575px){
      font-size:40px;
     line-height:46px;
     height:180px;
    }

    @media (min-width:574px) and (max-width:767px){
      font-size:40px;
     line-height:46px;
     
    }

   }

   .p-tag{
    font-size:22px;
    height:56px;
    line-height:28px;
    max-width:694px;
    margin-top:30px;
    font-family: "Montserrat-Light";

    @media (max-width:991px){
      font-size:20px;
     line-height:26px;
    }


   }

   .btn-tag{
     font-size:20px;
     font-family: "Montserrat-Light";

     @media (max-width:991px){
      font-size:18px;
    }
   }


`;

const Banner = styled.div`
    video{
        position:absolute;
        top:0;
        width:100vw !important;
        left:0;
        height:100%;
        object-fit:cover;
        
        @media (max-width:767px){
          height:100%;
      
    }
      }
`;
