import { BtnPrimaryWhite } from "components/home/buttons";
import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontFamily } from "./styles";

export default function KidsProfile() {
  return (
    <div
      style={{
        // background:
        //   "linear-gradient(90deg, rgba(213,180,255,1) 0%, rgba(8,129,240,1) 25%, rgba(33,107,252,1) 50%, rgba(57,43,223,1) 75%, rgba(213,180,255,1) 100%)",
        // background: "#D5B4FF",
        // background:
        //   "linear-gradient(217deg, #d5b4ff, #0881f0 70.71%), linear-gradient(127deg,  #d5b4ff, #216bfc 70.71%), linear-gradient(336deg, #392bdf, #d5b4ff 70.71%)",
        background:
          " linear-gradient(90deg, #DFAC60, #ac4821 65.71% ,#DFAC60)",
      }}
    >
     
      <Root className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="flex items-start xl:absolute top-0 left-0 images-container lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image
            className=""
              src="/images/manila_models/kid1.png"
              alt="kid"
              width={198}
              height={400}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image
              src="/images/manila_models/kid2.png"
              alt="kid"
              width={198}
              height={600}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image
              src="/images/manila_models/kid3.png"
              alt="kid"
              width={198}
              height={488}
            />
          </motion.div>
        </div>

        <div className="left"></div>

        <div className="right mb-20 xl:mb-0 text-center lg:text-left">
          <FontFamily><h2>Hello parents!</h2></FontFamily>
          <p>
            We have Casting Professionals looking for babies, children and teens
            for Acting and Modelling roles in TV, Film and Magazines. Create a
            profile for your child and start applying!
          </p>
          <Link href="/join/talentb" passHref>
            <BtnPrimaryWhite>
              <HiPlus className="inline-block text-lg" />{" "}
              Create&nbsp;your&nbsp;kid&nbsp;a&nbsp;profile
            </BtnPrimaryWhite>
          </Link>
        </div>
      </Root>
      
    </div>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 80px auto;
  position: relative;
  z-index: 20;
  color: #fff;
  min-height: 450px;

  @media (min-width: 1640px) {
    min-height: 533px;
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
