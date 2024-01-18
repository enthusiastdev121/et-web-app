import { motion } from "framer-motion";
import styled from "styled-components";

const item = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function Stats() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        staggerChildren: 0.2,
        duration: 0.3,
      }}
    >
      <Container className="padding py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center text-center">
        <motion.div className="w-3/5 md:w-2/5 2xl:w-3/6" variants={item}>
          <h2 className="text-white font-bold text-3xl mb-3">3,254</h2>
          <p className="text-white">New roles posted this week</p>
        </motion.div>
        <motion.div
          className="w-3/5 md:w-2/5 2xl:w-3/6 mt-5 sm:mt-0"
          variants={item}
        >
          <h2 className="text-white font-bold text-3xl mb-3">10,791,666</h2>
          <p className="text-white">ExploreTalent members and counting</p>
        </motion.div>
        <motion.div
          className="w-3/5 md:w-2/5 2xl:w-3/6 mt-5 md:mt-0"
          variants={item}
        >
          <h2 className="text-white font-bold text-3xl mb-3">521,782</h2>
          <p className="text-white">Creators looking for talent</p>
        </motion.div>
        <motion.div className="w-3/5 md:w-2/5 2xl:w-3/6" variants={item}>
          <h2 className="text-white font-bold text-3xl mb-3 mt-5 md:mt-0">
            62
          </h2>
          <p className="text-white">Years of insider knowledge</p>
        </motion.div>
      </Container>
    </motion.div>
  );
}

const Container = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.abs.gradColorBlue},
    ${(props) => props.theme.abs.gradColorViolet}
  );
`;
