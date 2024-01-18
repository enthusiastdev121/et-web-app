import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export default function ExclusiveInterview() {
  return (
    <StyledContainer className="text-white font-bold padding">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
        <h2 className="text-3xl lg:text-4xl mb-7 lg:text-center">
          Exclusive <br /> Celebrity Interviews & Advice
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-9 lg:mt-16 gap-4 xl:gap-0">
          <div className="mb-7 md:mb-0">
            <video controls height={338} width={465} hidden>
              <source src="/media/vidio.webm" type="video/webm" />
              <source src="/media/vidio.mp4" type="video/mp4" />
              Sorry, your browser doesn&#39;t support embedded videos.
            </video>
            <Image src="/images/celeb-btn.png" height={338} width={465} alt="plers morgan" />
          </div>
          <div>
            <p className="font-normal">A few words from</p>
            <h3 className="font-bold text-3xl mb-5">Plers Morgan</h3>
            <p className="font-normal italic">
              On its launch Morgan claimed that the paper was to be “Britain’s first nationwide newspaper for children”, though this claim was without foundation: other papers directed at young audiences have included The Boy’s Paper (
              18801882 ), The Children’s Paper ( 19191965 ), and Early Times ( launched in the latter 1980s ). Morgan was editorial director initially Stories, answerable for bringing in celebrity participation.{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-image: linear-gradient(to right, ${(props) => props.theme.abs.gradColorPurple}, ${(props) => props.theme.abs.gradColorPink});
`;
