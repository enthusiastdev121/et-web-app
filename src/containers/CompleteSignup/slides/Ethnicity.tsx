import { ethnicities } from "@/utils/constants/profile";
import React from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ChipBox, HeadingSmall, SlideHeading } from "./Styles";

const ITEMS = [
  "Caucasian",
  "Hispanic",
  "Asian",
  "African American",
  "American Indian",
  "African",
  "East India",
];

export default function Ethnicity({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
  isChild
}: any) {
  return (
    <Frame>
      <div className="grow flex items-center content">
        <div>
          <SlideHeading>What is {isChild ? "your child's" : 'your'} ethnicity?</SlideHeading>
          <div className="flex gap-4 flex-wrap" style={{ maxWidth: 500 }}>
            {ethnicities.map((i, index) => {
              return (
                <ChipBox
                  key={i.id}
                  active={value?.ethnicity === i.label}
                  onClick={() => {
                    onUpdate({ ethnicity: i.label });
                    setCurrentSlide(nextSlide);
                  }}
                >
                  {i.label}
                </ChipBox>
              );
            })}
          </div>
        </div>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={40}
        setCurrentSlide={setCurrentSlide}
        allFilled={value.ethnicity !== undefined}
        warningText={"Please select your ethnicity"}
      />
    </Frame>
  );
}
