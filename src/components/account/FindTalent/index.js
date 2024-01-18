import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import CategoryPopup from "./CategoryPopup";
import Modal from "../Modal";
import { H2 } from "@/styles/Typography.styled";

export default function CategoryPage() {
  const [showModal, setShowModal] = useState(false);

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  return (
    <div className="page-padding text-center">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal && (
          <Modal handleClose={close}>
            <CategoryPopup handleClose={close} />
          </Modal>
        )}
      </AnimatePresence>

      <H2 size={48}>What are you looking for?</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 justify-items-center mt-10 lg:mt-20 mx-auto max-w-5xl ">
        <Card text="Actors" image="actors" id="actor" open={open} />
        <Card text="Extras" image="extras" id="extra" open={open} />
        <Card text="Models" image="models" id="model" open={open} />
        <Card
          text="Influencers"
          image="influencers"
          id="influencer"
          open={open}
        />
        <Card text="Musicians" image="musicians" id="musician" open={open} />
        <Card
          text="Tv show participants"
          image="tv-participants"
          id="tv-participant"
          open={open}
        />
        <Card
          text="Dancers & teachers"
          image="dancers"
          id="dancer"
          open={open}
        />
        <Card
          text="Film & stage crew"
          image="film-stage-crew"
          id="film-stage-crew"
          open={open}
        />
        <Card
          text="Photographers"
          image="photographers"
          id="photographer"
          open={open}
        />
        <Card
          text="Makeup artists, hair & fashion stylists"
          image="makeup-artists"
          id="makeup"
          open={open}
        />
        <Card text="Presenters" image="presenters" id="presenter" open={open} />
        <Card
          text="Staff/temps"
          image="staff-temps"
          id="staff-temp"
          open={open}
        />
      </div>
    </div>
  );
}

function Card({ image, text, id, open }) {
  return (
    <div className="relative w-fit text-center" onClick={open}>
      <input
        type="checkbox"
        id={id}
        className="check-with-label-category opacity-0"
      />
      <label
        htmlFor={id}
        className="label-for-check-category cursor-pointer hover:brightness-75 transition ease-in-out delay-150"
      >
        <div>
          <Image
            src={`/images/${image}.png`}
            height={220}
            width={220}
            alt={image}
          />
        </div>

        <h2
          className="absolute bottom-4 font-bold text-white text-lg"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          {text}
        </h2>
      </label>
    </div>
  );
}
