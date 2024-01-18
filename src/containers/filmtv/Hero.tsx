import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Hero() {
  return (

    <CustomSec
    >
      <div className="py-10 md:py-40 xl:px-1 px-5 lg:py-60 relative hero-section">

        <Banner>
          <video loop muted autoPlay>
            <source src="/video/Film and TV auditions.mp4" type="video/mp4" />
          </video>
        </Banner>
        <div className="text-sm lg:text-base py-5 font-semibold bg-black"
          style={{ maxWidth: "1332px", margin: "0 auto" }}>
          <motion.h1
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-bold  montserrat-semibold h1-tag text-white mb-5 relative tracking-normal"
          >
            Get cast in your next role today.
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-semibold text-white    drop-shadow-lg p-tag md:leading-snug	 md:tracking-wide"
          >
            The future of casting is here. We help performers find great roles and industry professionals find great talent.
          </motion.p>
          <motion.div
            className="mt-16 text-center lg:flex grid "
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {/* <Link href="/">
              <a className="bg-white  text-black btn relative lg:mr-2 mr-0 h-15 leading-10 btn-tag lg:w-60 md:tracking-wide">Únete ahora</a>
            </Link> */}
            <Link href="/">
              <a className="bg-red  text-white btn relative lg:ml-2 ml-0 lg:mt-0 mt-2 btn-tag h-15 leading-10  md:tracking-wide">Get Cast Today</a>
            </Link>
          </motion.div>
        </div>
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
     max-width:860px;
     width:100%;
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
    max-width:619px;

    @media (max-width:991px){
      font-size:20px;
     line-height:26px;
    }


   }

   .bg-danger{
     background-color:#F31212;
   }

   .btn-tag{
     font-size:20px;
     font-family: "Montserrat-Light";
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

     @media (max-width:991px){
      font-size:18px;
      padding-left:0;
      padding-right:0;
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

