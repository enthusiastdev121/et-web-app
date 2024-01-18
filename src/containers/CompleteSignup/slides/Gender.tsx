import React from "react";
import { RiGenderlessFill } from "react-icons/ri";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ChipBox, HeadingSmall, SlideHeading } from "./Styles";

export default function Gender({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
}: any) {
  return (
    <Frame>
      <div className="grow flex items-center content">
        <div>
          <SlideHeading>What is your gender?</SlideHeading>

          <div className="flex gap-2">
            <ChipBox
              active={value?.gender === "Male"}
              onClick={() => {
                onUpdate({ gender: "Male" });
                setCurrentSlide(nextSlide);
              }}
            >
              Male
            </ChipBox>
            <ChipBox
              active={value?.gender === "Female"}
              onClick={() => {
                onUpdate({ gender: "Female" });
                setCurrentSlide(nextSlide);
              }}
            >
              Female
            </ChipBox>
            <ChipBox
              active={value?.gender === "Others"}
              onClick={() => {
                onUpdate({ gender: "Others" });
                setCurrentSlide(nextSlide);
              }}
            >
              Others
            </ChipBox>
          </div>
        </div>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={0}
        setCurrentSlide={setCurrentSlide}
        allFilled={value.gender !== undefined}
        warningText={"Please select your gender"}
      />
    </Frame>
  );
}
