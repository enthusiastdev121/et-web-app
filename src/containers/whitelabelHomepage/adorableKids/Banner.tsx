import styled from "styled-components";
import { Container } from "./styles";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <HeroSection>


      <Container>
        <div className="grid lg:grid-cols-2 gap-4  ">
          <div className="audition-section">
            <h3>Join <span>DiscoverKid</span> to share photos of your cutie and win prizes </h3>
            <p>Do you take pride in your body? Are you someone who would rather be the gym than
              at a party.
            </p>
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
            <div className="single_video lg:block hidden">
              <img src='./images/banner_child_img1.png' />
              {/* <video loop muted autoPlay>
                                <source src="/video/modeling1 (1).mp4" type="video/mp4" />
                            </video> */}
            </div>
            <div className="single_video lg:block hidden">
              <img src='./images/banner_child_img2.png' />
              {/* <video loop muted autoPlay>
                                <source src="/video/modeling1 (3).mp4" type="video/mp4" />
                            </video> */}
            </div>
            <div className="single_video lg:block hidden">
              <img src='./images/banner_child_img3.png' />
              {/* <video loop muted autoPlay>
                                <source src="/video/modeling1 (2).mp4" type="video/mp4" />
                            </video> */}
            </div>
          </motion.div>
        </div>

      </Container>
      <img src="/images/adorable-kids-banner.png" alt="" className="bg__img" />
    </HeroSection >
  );
}

const HeroSection = styled.div`
padding-top:68px;
position:relative;
overflow:hidden;
.bg__img{
    object-fit: cover;
    width: 100%;
    margin-top: 70px;
    @media (max-width:450px){
      margin-top:0px;
   }
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
    color: ${p => p.theme.base};
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
      color:#38B6CD;
    }

    small{
      display:block;
    }
  }

  p{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${p => p.theme.base};
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
    margin-top:66px;


    .join-now-btn{
      background: ${p => p.theme.primary};      
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
  justify-content:center;
  position:relative;
  gap: 18px;
  & >div :nth-child(2){
    margin-top:50px;
  }
  div:nth-child(1)::before {
    content: '';
    background:url("./images/teddystar.png") no-repeat;
    width: 49px;
    height: 53px;
    left: 30%;
    position: absolute;
    top: -50px;
}
div:nth-child(1)::after {
    content: '';
    background:url("./images/teddy.png") no-repeat;
    width: 49px;
    height: 53px;
    left: -100px;
    position: absolute;
    bottom: 0px;
}
div:nth-child(2)::before {
    content: '';
    background:url("./images/teddy.png") no-repeat;
    width: 49px;
    height: 53px;
    left: 30%;
    position: absolute;
    top: -70px;
}
div:nth-child(3)::before {
    content: '';
    background:url("./images/teddy.png") no-repeat;
    width: 49px;
    height: 53px;
    right: -70px;
    position: absolute;
    top: 0px;
}
div:nth-child(3)::after {
    content: '';
    background:url("./images/cup.png") no-repeat;
    width: 49px;
    height: 53px;
    left: 0px;
    position: absolute;
    bottom: -80px;
}

  .single_video{
    width: 230px;
    height: fit-content;
    position: relative;
    
    @media (max-width:1680px) {
      width: 180px;
      height: fit-content;
    }

    video{
      width:100%;
      height:100%;
      border-radius: 30px;
      object-fit:cover;
    }
  }
}

`;


