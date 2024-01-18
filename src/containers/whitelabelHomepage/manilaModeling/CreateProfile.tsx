import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import { BtnNoBack, BtnPrimary } from "components/home/buttons";
import { FontFamily } from "./styles";

export default function CreateProfile() {
  return (
   
     <section className="relative">
      <div
        className="absolute bottom-0 left-0 w-full hidden lg:block"
        style={{
          background:
            "linear-gradient(93.74deg, rgba(255, 255, 255, 0) 28.56%, rgba(247, 239, 255, 0) 28.56%, #FFF4E4 67.14%, #FFF4E4 100%)",
          height: "330px",
        }}

        
      ></div>
      <Width>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mx-auto">
          <motion.div
            className="md:w-1/2 hidden md:block"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image
              src="/images/payment-graphic-3.png"
              alt="auditions & jobs webpage on mobile"
              height={430}
              width={382}
            // priority
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left relative z-10 -mt-20 md:mt-0 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.8 }}
          >

            <div className="text-center">
              <span className="md:-ml-28">
                <Image
                  src="/images/manila_models/user-octagon.svg"
                  width={65}
                  height={65}
                  alt="person vector"
                // priority
                />
              </span>
            </div>

            <FontFamily> <h3 className="">Create your <span style={{  }}>amazing profile</span></h3> </FontFamily>
            <p className="mt-5 lg:w-3/4 text-lg">
              Design your own profile with photos & videos to showcase your talent
              and catch the eye of casting professionals.
            </p>

            <div className="mt-4">
            <Link href="/join/talentb" passHref>
                        <BtnPrimary>+&nbsp;Create&nbsp;free&nbsp;profile</BtnPrimary>
                    </Link>
            </div>
          </motion.div>
        </div>
      </Width>
    </section>
   
  );
}

export const Width = styled.div`
  max-width: 1100px;
  width: 80vw;
  margin: 0 auto;
  color: ${p => p.theme.base};

  h3 {
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
  }
`;
