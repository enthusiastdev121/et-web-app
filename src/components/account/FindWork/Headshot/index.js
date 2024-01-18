import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import Modal from "../../Modal";
import HeadshotModal from "./HeadshotModal";
import { PhotoContainer } from "./Headshot.styled";

export default function HeadShot() {
  const [modalOpen, setModalOpen] = useState(true);
  const close = () => setModalOpen(false);

  return (
    <div className="py-10 px-10v 2xl:px-20v text-center min-h-screen flex flex-col items-center justify-center relative" style={{ minHeight: "100vh" }}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <HeadshotModal handleClose={close} />
          </Modal>
        )}
      </AnimatePresence>

      <h1 className="text-3xl md:text-5xl font-bold mb-5">Add a headshot</h1>
      <ul>
        <li className="my-2">
          <Image src="/svg/tick-blue.svg" height={12} width={12} alt="tick" />
          <span className="ml-2 font-semibold">
            Make sure you&apos;re looking straight on
          </span>
        </li>
        <li className="my-2">
          <Image src="/svg/tick-blue.svg" height={12} width={12} alt="tick" />
          <span className="ml-2 font-semibold">
            Use good lighting & a plain background
          </span>
        </li>
        <li className="my-2">
          <Image src="/svg/cross-red.svg" height={12} width={12} alt="cross" />
          <span className="ml-2 font-semibold">
            Skip the filters, effects, hats & Sun glasses
          </span>
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 cursor-pointer">
        <div>
          <Image
            src="/images/headshot1.png"
            height={235}
            width={200}
            alt="headshot"
          />
        </div>
        <div>
          <Image
            src="/images/headshot2.png"
            height={235}
            width={200}
            alt="headshot"
          />
        </div>
        <div>
          <Image
            src="/images/headshot3.png"
            height={235}
            width={200}
            alt="headshot"
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold">Examples of great headshots</h2>

      <div className="relative w-full">
        <input
          type="file"
          className="left-0 h-full w-full absolute opacity-0 z-50"
        />
        <PhotoContainer className="w-full p-20 mt-5">
          <div className="flex flex-col">
            <Image src="/svg/camera.svg" height={30} width={40} alt="camera" />
            <span className="text-xl mt-2">Select a Photo</span>
          </div>
        </PhotoContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
        <Link href="#question16" passHref>
          <TertiaryBtn
            border="1px solid"
            className="btn cursor-pointer lg:text-xl font-semibold"
            onClick={() => {
              document.getElementById("question16").classList.remove("hidden");
            }}
          >
            Cancel
          </TertiaryBtn>
        </Link>
        <Link href="#question16" passHref>
          <PrimaryBtn
            className="btn cursor-pointer lg:text-xl font-semibold"
            onClick={() => {
              document.getElementById("question16").classList.remove("hidden");
            }}
          >
            Next &rarr;
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}
