import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { SecondaryBtn } from "../../../styles/Btn.styled";

export default function Testimonial() {
  return (
    <div className="padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold md:text-center mb-10  md:mb-16 md:w-2/3 xl:w-3/5 mx-auto">
          Success Stories of ExploreTalent Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-top">
          <div>
            <Image
              src="/images/success-story.png"
              height={564}
              width={641}
              alt="Success stories of ExploreTalent"
            />
          </div>
          <div>
            <h3 className="text-3xl lg:text-5xl mb-9">
              Diamonde Helper has appeared on Reality & Network TV shows
            </h3>
            <p className="2.5xl:text-xl">
              Diamonde Helper talks with Explore Talent. Diamonde got discovered
              for A Shot At Love with Tila Tequila by being a member of Explore
              Talent. Diamonde is a true “overnight success” story.
            </p>
            <Link href="/" passHref>
              <SecondaryBtn className="btn mt-5 text-sm xl:px-12">
                Read More
              </SecondaryBtn>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="mt-5 flex flex-col md:flex-row xl:-mt-24 2xl:mt-0 2.5xl:-mt-24">
          <Card className="p-7 md:p-10 rounded mb-5 md:mb-0 md:mr-5">
            <span className="text-7xl font-bold text-slate-300">“</span>
            <p className="-mt-7">
              So many castings within 4 days!!! Wow!!! I’m so happy I have only
              been with Explore Talent about 4 days and I have already got so
              any casting directors contacting m…{" "}
            </p>
            <div className="flex items-center  mt-5">
              <div className="mr-5">
                <Image
                  src="/images/actor1.png"
                  height={82}
                  width={82}
                  alt="Success stories of ExploreTalent"
                />
              </div>
              <div>
                <p className="font-bold">- Chloe Terry</p>
                <small className="text-blue-600">Actor</small>
              </div>
            </div>
          </Card>
          <Card className="p-7 md:p-10 rounded">
            <span className="text-7xl font-bold text-slate-300">“</span>
            <p className="-mt-7">
              I got a role in an up coming movie It has been a great experience
              being with Explore Talent. Going in for an audition competing
              amongst ourselves for role that best fits us leaves….
            </p>
            <div className="flex items-center  mt-5">
              <div className="mr-5">
                <Image
                  src="/images/actor2.png"
                  height={82}
                  width={82}
                  alt="Success stories of ExploreTalent"
                />
              </div>
              <div>
                <p className="font-bold">- Marcela Manzano</p>
                <small className="text-blue-600">Actor</small>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

const Card = styled.div`
  /* background-color: ${(props) => props.theme}; */
  background-color: ${(props) => props.theme.testimonialCardBg};
  color: ${(props) => props.theme.testimonialCardText};
`;
