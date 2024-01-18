import { THEME } from "@/utils/constants/theme";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { iconBtnCommon } from "components/Styles";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default function HeadshotInstructions({ onClose, onFinish }: Props) {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <InstructionContainer className="w-full">
      {onClose && (
        <CloseBtn
          onClick={() => {
            setActiveCard(1);
            onClose();
          }}
        >
          <IoClose size={THEME.iconSize.root} />
        </CloseBtn>
      )}

      {/* card content */}
      <Content
        style={{
          overflowX: "auto",
          display: "flex",
          width: "100%",
        }}
        className="no-scroll"
      >
        {/* CARD 1 */}
        <li className="flex flex-col items-center justify-center" id="card-1">
          {/* heading */}
          <h4 className="font-bold text-2xl test-class-one">Add a headshot</h4>
          {/* content photos, etc. */}
          <AnimatePresence>
            {activeCard && (
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                <ImageBg rotate={-3.81} zIndex={3} className="correct-headshot">
                  <Image src="/images/correct-headshot.png" alt="correct headshot" height={300} width={200} />
                </ImageBg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* text */}
          <p className="md:text-lg" style={{ maxWidth: "400px" }}>
            Your headshot is the first thing
            <br />a casting director sees, let’s do it right...
          </p>
        </li>

        {/* CARD 2 */}
        <li className="md:mt-10" id="card-2">
          <div className="flex gap-2 items-end">
            <div className="relative">
              <AnimatePresence>
                {activeCard === 2 && (
                  <>
                    <motion.div className="absolute z-10 md:-left-10 md:-top-5 txt-base" initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}>
                      <Image src="/svg/front-facing.svg" alt="front facing photo text" height={200} width={339} />
                    </motion.div>
                    <ImageBg rotate={-3.81} zIndex={2} className="">
                      <Image src="/images/correct-headshot.png" alt="correct headshot" height={314.51} width={210} />
                    </ImageBg>

                    <motion.div className="absolute z-10 bottom-0 sm:left-0 -left-2" initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                      <Image src="/images/ch.png" className="cross-check" alt="tick" height={90} width={90} />
                    </motion.div>

                    <motion.div className="absolute z-10 -bottom-5 md:-bottom-10 -right-10 md:-right-16" initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}>
                      <Image src="/svg/clean-bg.svg" alt="front facing photo text" height={230} width={339} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <AnimatePresence>
                {activeCard === 2 && (
                  <>
                    <motion.div initial={{ opacity: 0, x: 400 }} animate={{ opacity: 1, x: 0 }}>
                      <ImageBg rotate={5.32} zIndex={1}>
                        <Image src="/images/wrong-headshot-1.png" alt="wrong headshot" height={261.87} width={174.85} />
                      </ImageBg>
                    </motion.div>

                    <motion.div className="absolute z-10 bottom-0 sm:right-0 -right-2" initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                      <Image src="/images/x.png" className="cross-check" alt="tick" height={90} width={90} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </li>

        {/* CARD 3 */}
        <li className="md:mt-10" id="card-3">
          <div className="flex gap-2 items-end">
            <div className="relative">
              <ImageBg rotate={-3.81} zIndex={2} className="mb-10">
                <Image src="/images/correct-headshot.png" alt="correct headshot" height={314.51} width={210} />
              </ImageBg>

              <div className="absolute z-10 bottom-0 sm:left-0 -left-2">
                <AnimatePresence>
                  {activeCard === 3 && (
                    <>
                      <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <Image src="/images/ch.png" className="cross-check" alt="tick" height={90} width={90} />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="relative">
              <div className="absolute z-10 md:-right-10 md:-top-5">
                <AnimatePresence>
                  {activeCard === 3 && (
                    <>
                      <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}>
                        <Image src="/svg/no-filter.svg" alt="no filter or effect" height={200} width={360} />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {activeCard === 3 && (
                  <motion.div initial={{ opacity: 0, x: 400 }} animate={{ opacity: 1, x: 0 }}>
                    <ImageBg rotate={5.32} zIndex={1}>
                      <Image src="/images/wrong-headshot-2.png" alt="wrong headshot" height={261.87} width={174.85} />
                    </ImageBg>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute z-10 bottom-0 sm:right-0 -right-2">
                <AnimatePresence>
                  {activeCard === 3 && (
                    <>
                      <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <Image src="/images/x.png" className="cross-check" alt="cross" height={90} width={90} />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </li>

        {/* CARD 4 */}
        <li className="md:mt-10" id="card-4">
          <div className="flex gap-2 items-end">
            <div className="relative">
              <ImageBg rotate={-3.81} zIndex={2} className="mb-10">
                <Image src="/images/correct-headshot.png" alt="correct headshot" height={314.51} width={210} />
              </ImageBg>

              <div className="absolute z-10 bottom-0 sm:left-0 -left-2">
                <AnimatePresence>
                  {activeCard === 4 && (
                    <>
                      <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <Image src="/images/ch.png" className="cross-check" alt="tick" height={90} width={90} />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence>
                {activeCard === 4 && (
                  <>
                    <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="absolute z-10 -top-5 right-0 md:-top-10">
                      <Image src="/svg/no-hats.svg" alt="no hats or bandanas" height={200} width={360} />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 400 }} animate={{ opacity: 1, x: 0 }}>
                      <ImageBg rotate={5.32} zIndex={1}>
                        <div className="special-img">
                          <Image src="/images/headshot-4.png" alt="wrong headshot" height={261.87} width={174.85} />
                        </div>
                      </ImageBg>
                    </motion.div>

                    <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute z-10 bottom-0 sm:right-0 -right-2">
                      <Image src="/images/x.png" className="cross-check" alt="cross" height={90} width={90} />
                    </motion.div>

                    <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="absolute z-10 -left-28 -bottom-10" style={{ zIndex: 99999 }}>
                      <Image src="/svg/no-props.svg" alt="no sunnies or props" height={200} width={360} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </li>

        {/* CARD 5 */}
        <li className="md:mt-10" id="card-5">
          <div className="flex gap-2 flex-col relative">
            <div className="absolute -top-7">
              <AnimatePresence>
                {activeCard === 5 && (
                  <>
                    <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}>
                      <Image src="/svg/good-quality.svg" alt="use good quality and latest photo" height={50} width={451} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="flex gap-2 items-end">
              <div className="relative">
                <ImageBg rotate={-3.81} zIndex={2} className="mb-10">
                  <Image src="/images/correct-headshot.png" alt="correct headshot" height={314.51} width={210} />
                </ImageBg>

                <div className="absolute z-10 bottom-0 sm:left-0 -left-2">
                  <AnimatePresence>
                    {activeCard === 5 && (
                      <>
                        <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                          <Image src="/images/ch.png" className="cross-check" alt="tick" height={90} width={90} />
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative">
                <AnimatePresence>
                  {activeCard === 5 && (
                    <>
                      <motion.div initial={{ opacity: 0, x: 400 }} animate={{ opacity: 1, x: 0 }}>
                        <ImageBg rotate={5.32} zIndex={1}>
                          <Image src="/images/wrong-headshot-4.png" alt="wrong headshot" height={261.87} width={174.85} />
                        </ImageBg>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <div className="absolute z-10 bottom-0 sm:right-0 -right-2">
                  <AnimatePresence>
                    {activeCard === 5 && (
                      <>
                        <motion.div initial={{ scale: 0.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
                          <Image src="/images/x.png" className="cross-check" alt="cross" height={90} width={90} />
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Content>

      {/* dots */}
      <div className="md:mt-10 flex items-center justify-center gap-5 mx-auto text-center">
        {activeCard !== 1 && (
          <Arrow
            onClick={() => {
              let num = activeCard;
              if (activeCard > 1) {
                setActiveCard((n) => n - 1);
                num--;
              }
              location.href = `#card-${num}`;
            }}
          >
            <HiOutlineArrowLeft size={THEME.iconSize.root} className="txt-primary" />
          </Arrow>
        )}

        <span className="flex items-center gap-2" style={activeCard === 1 ? { marginLeft: "70px" } : {}}>
          <a href="#card-1" onClick={() => setActiveCard(1)}>
            <Dot className={activeCard === 1 ? "bg-primary-clr" : ""} />
          </a>
          <a href="#card-2" onClick={() => setActiveCard(2)}>
            <Dot className={activeCard === 2 ? "bg-primary-clr" : ""} />
          </a>
          <a href="#card-3" onClick={() => setActiveCard(3)}>
            <Dot className={activeCard === 3 ? "bg-primary-clr" : ""} />
          </a>
          <a href="#card-4" onClick={() => setActiveCard(4)}>
            <Dot className={activeCard === 4 ? "bg-primary-clr" : ""} />
          </a>
          <a href="#card-5" onClick={() => setActiveCard(5)}>
            <Dot className={activeCard === 5 ? "bg-primary-clr" : ""} />
          </a>
        </span>

        <Arrow
          primary
          done={activeCard === 5}
          onClick={() => {
            if (activeCard === 5) {
              onFinish();
              setActiveCard(1);
            }

            let num = activeCard;
            if (activeCard < 5) {
              setActiveCard((n) => n + 1);
              num++;
            }
            location.href = `#card-${num}`;
          }}
        >
          {activeCard === 5 ? <BsCheckLg size={THEME.iconSize.root} style={{ color: "white" }} /> : <HiOutlineArrowRight size={THEME.iconSize.root} />}
        </Arrow>
      </div>

      <div
        onClick={() => {
          setActiveCard(1);
          onFinish();
        }}
        className="text-center"
      >
        <a className="txt-link mt-3 md:mt-5 cursor-pointer">Skip & Continue Upload</a>
      </div>
    </InstructionContainer>
  );
}

// Types
type Props = {
  onClose?: () => any;
  onFinish: () => any;
};

type ImageProps = {
  rotate?: number;
  zIndex?: number;
};

type ArrowD = {
  primary?: boolean;
  done?: boolean;
};

// Styles

const CloseBtn = styled.div`
  ${iconBtnCommon};
  color: ${(p) => p.theme.base};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: #fff;
    background: ${(p) => p.theme.red};
  }
`;

const ImageBg = styled.div<ImageProps>`
  padding: 10px 10px 20px 10px;
  background: #ffffff;
  box-shadow: 0px 1.79738px 17.9738px 5.39215px rgba(0, 0, 0, 0.05), 0px 3.59477px 3.59477px rgba(0, 0, 0, 0.05);
  border-radius: 1.79738px;
  transform: rotate(${(p: any) => p.rotate}deg);
  margin: 2em 0;
  position: relative;
  z-index: ${(p: any) => p.zIndex};

  .special-img {
    transform: rotate(-5.32deg);
  }
`;

const Dot = styled.span`
  display: inline-block;
  background: rgba(0, 112, 244, 0.15);
  height: 12px;
  width: 12px;
  border-radius: 100%;
`;

const Arrow = styled.span<ArrowD>`
  background: ${(p: any) => (p.done ? p.theme.primary : p.theme.abs.white)};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  height: 50px;
  width: 50px;
  border-radius: 100%;
  padding-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p: any) => (p.primary ? p.theme.primary : p.theme.textDisabled)};
  cursor: pointer;
`;

const InstructionContainer = styled.div`
  @media (min-width: 600px) {
    width: 60vw;
  }
  margin: 20px;
`;

const Content = styled.ul`
  gap: 100px;
  align-items: flex-start;

  @media (max-width: 500px) {
    align-items: center;
  }

  li {
    min-width: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .correct-headshot {
      @media (max-width: 500px) {
        margin: 1em;
      }
    }

    .cross-check {
      @media (max-width: 500px) {
        height: 60px !important;
        width: 60px !important;
        min-width: 60px !important;
        max-width: 60px !important;
        min-height: 60px !important;
        max-height: 60px !important;
      }
    }
  }
`;

/* 
<AnimatePresence>
  {activeCard === 5 && (
    <>
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Image
          src="/svg/front-facing.svg"
          alt="front facing photo text"
          height={200}
          width={339}
        />
      </motion.div>
    </>
  )}
</AnimatePresence> 
*/
