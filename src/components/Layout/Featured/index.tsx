import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getFeaturedTalentApi } from "network/apis/featuredTalent";
import Skel from "./skel";
import { Container } from "./Styles";
import Link from "next/link";
import TranslatedText from "components/TranslatedText";

const item = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function Featured() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {

      try {


        const res = await getFeaturedTalentApi();
        setData(res.data);
        setLoading(false);
      }
      catch (err) {
        console.log("ERR", err)
      }
    };
    getData();
  }, []);

  return (
    <Container className="py-20 text-center px-10v 2xl:px-15v 3xl:px-20v bg-paper txt-base">
      <h2 className="font-bold text-3xl mb-10"><TranslatedText>Featured Talent</TranslatedText></h2>
      {loading && <Skel />}
      <motion.div
        // className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5"
        // className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 justify-items-center"
        className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 md:gap-5 w-fit mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          staggerChildren: 0.2,
          duration: 0.3,
        }}
      >
        {data
          ?.filter(
            (i: any) =>
              i?.profile_picture_path !== "" && i?.profile_picture_path !== null
          )
          .map((talent: any, index: number) => {
            if (index < 4) {
              return (

                <Link href={`/${talent?.talentlogin}`} key={index} >
                  <a className="img-container" key={index}>
                    <img src={talent?.profile_picture_path} alt="model" />
                  </a>
                </Link>

              );
            }
          })}
      </motion.div>
    </Container>
  );
}

/* <motion.div className="m-2" variants={item}>
  <Image src="/images/men.png" height={363} width={270} alt="model" />
</motion.div>
 */
