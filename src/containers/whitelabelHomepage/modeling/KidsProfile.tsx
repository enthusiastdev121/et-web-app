import { BtnPrimaryWhite } from "components/modeling/buttons";
import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function KidsProfile() {
  return (
    <Bgcolor>
      <Root className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="flex items-start xl:absolute top-0 left-0 images-container lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/ch_1.png"
              alt="kid"
              width={198}
              height={400}
            />

            {/* <img src="/images/ch_1.png" alt="kid" style={{ width: '198px', height: '400px' }} /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/ch_2.png"
              alt="kid"
              width={198}
              height={600}
            />
            {/* <img src="/images/ch_2.png" alt="kid" style={{ width: '198px', height: '600px' }} /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/ch_3.png"
              alt="kid"
              width={198}
              height={488}
            />
            {/* <img src="/images/ch_3.png" alt="kid" style={{ width: '198px', height: '400px' }} /> */}
          </motion.div>
        </div>
        <div className="left"></div>
        <div className="right mb-20 xl:mb-0 text-center lg:text-left">
          <h2>Hello parents!</h2>
          <p>
            We have Casting Professionals looking for babies, children and teens
            for Acting and Modelling roles in TV, Film and Magazines. Create a
            profile for your child and start applying!
          </p>
          <BtnPrimaryWhite>
            <HiPlus className="inline-block text-lg" />
            Create&nbsp;your&nbsp;kid&nbsp;a&nbsp;profile
          </BtnPrimaryWhite>
        </div>
      </Root>
    </Bgcolor>
  );
}
const Bgcolor = styled.div`
    position: relative;
    background: #008646;
    overflow: hidden;
&:before{    content: ' ';
    background: #008C9F;
    position: absolute;
    width: 290px;
    left: 50%;
    top: 10%;
    height: 596px;
    filter: blur(160px);
    transform: translateX(-50%) rotate(28deg) translateY(-50%);}
`;
const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: auto;
  position: relative;
  z-index: 20;
  color: #fff;
  min-height: 450px;
  @media (min-width: 1640px) {
    min-height: 570px;
  }
  h2 {
    font-weight: 700;
    font-size: 50px;
    line-height: 150%;

    @media (max-width: 510px) {
      line-height: 110%;
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    margin-top: 20px;
    margin-bottom: 45px;
  }
  .right {
    width: 100%;
    @media (min-width: 1600px) {
      width: 60%;
    }
    @media (min-width: 1340px) {
      width: 40%;
    }
  }
  .left {
    width: 45%;
    align-self: center;
    @media (max-width: 1340px) {
      position: absolute;
    }
  }
  .images-container {
    @media (max-width: 1640px) {
      width: 500px;
    }
    @media (max-width: 1340px) {
      width: 800px;
    }
    @media (max-width: 1050px) {
      width: 400px;
    }
  }
  .image-box {
  }
`;
