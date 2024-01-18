import styled from "styled-components";
import { Container } from "./styles";
import { motion } from "framer-motion";

export default function Hero() {
  return (

    <HeroSection>

      <div className="layer-one">
        <img src="/images/modeling-polygon.png" alt="" />
      </div>

      <div className="layer-two">
        <img src="/images/modeling-bg gradient.png" alt="" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-4  ">
          <div className="audition-section">
            <h3>Models <span> needed</span> <small>No experience needed.</small></h3>
            <p>Apply now to get hired for paid modeling gigs</p>
            <div className="btn-row">
              <button className="join-now-btn">Join Now</button>
              <button className="post-job-btn">Post a Casting Call</button>
            </div>
          </div>
          <motion.div className="introVideo "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="single-video lg:block hidden">
              <video loop muted autoPlay>
                <source src="/video/modeling1 (1).mp4" type="video/mp4" />
              </video>
            </div>
            <div className="single-video lg:block hidden">
              <video loop muted autoPlay>
                <source src="/video/modeling1 (3).mp4" type="video/mp4" />
              </video>
            </div>
            <div className="single-video lg:block hidden">
              <video loop muted autoPlay>
                <source src="/video/modeling1 (2).mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </Container>
    </HeroSection >
  );
}

const HeroSection = styled.div`
padding-top:68px;
position:relative;


.layer-one{
  position:absolute;
  top:-80px;
  left:0;
}

.layer-two{
  position:absolute;
  top:-80px;
  right:0;
}


.audition-section{
  padding-top:80px;
  position:relative;

  @media (max-width:1340px){
    padding-top:0px;
   }

  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: #ffffff;
    // max-width:520px;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    @media (max-width:1680px){
      font-size: 40px;
     }

     @media (max-width:786px){
      font-size: 30px;
    max-width:100%;

     }

    span{
      color:#0CCD85;
    }

    small{
      display:block;
    }
  }

  p{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    margin-top:10px;
    max-width:644px;
    line-height:32px;

    @media (max-width:1680px){
      font-size: 16px;
     }

     @media (max-width:786px){
      font-size: 14px;
     }

  }

  .btn-row{
    margin-top:86px;


    .join-now-btn{
      background: #0CCD85;      
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #FFFFFF;
      padding:12px 24px;

      @media (max-width:786px){
        font-size: 14px;
       }
    }
    .post-job-btn{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #ffffff;
      padding:12px 24px;
      margin-left:15px;

      @media (max-width:786px){
        font-size: 14px;
       }
    
    }
  }

}

.introVideo{
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;

  & >div :nth-child(2){
    margin-top:50px;
  }

  .single-video{
    width: 230px;
    height: 430px;
    
    @media (max-width:1680px) {
      width: 150px;
      height: 350px;
    }

    video{
      width:100%;
      height:100%;
      border-radius: 8px;
      object-fit:cover;
    }
  }
}

`;


