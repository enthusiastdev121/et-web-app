import Button from "components/Button";
import RangeSlider from "components/RangeSlider";
import React, { useState } from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ChipBox, ContentBox, HeadingSmall, SlideHeading } from "./Styles";

export default function Height({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
}: any) {
  const [height, setHeight] = useState({});

  return (
    <Frame>
      <div className="grow flex items-center content">
        <ContentBox className="w-full">
          <SlideHeading>What is your height ?</SlideHeading>
          <RangeSlider
            value={value.height || 4}
            onChange={(val) => onUpdate({ height: val })}
            label="ft."
            marks={{
              0: "0",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
            }}
            max={8}
            step={0.1}
          />

          <Button primary onClick={() => setCurrentSlide(nextSlide)}>
            Ok
          </Button>
        </ContentBox>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={18}
        setCurrentSlide={setCurrentSlide}
      />
    </Frame>
  );
}
