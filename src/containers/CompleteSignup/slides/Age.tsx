import React from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ChipBox, HeadingSmall, SlideHeading } from "./Styles";
import toast from "react-hot-toast";

const AGES = [
  {
    id: 1,
    min: 0,
    max: 5,
  },
  {
    id: 2,
    min: 6,
    max: 12,
  },
  {
    id: 3,
    min: 13,
    max: 17,
  },
  {
    id: 4,
    min: 18,
    max: 29,
  },
  {
    id: 5,
    min: 30,
    max: 39,
  },
  {
    id: 6,
    min: 40,
    max: 49,
  },
  {
    id: 7,
    min: 50,
    max: 59,
  },
  {
    id: 8,
    min: 60,
    max: 120,
  },
];

export default function Age({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
  setIsChild
}: any) {
  return (
    <Frame>
      <div className="grow flex items-center content">
        <div>
          <SlideHeading>What age rage do you belong?</SlideHeading>
          <div className="flex gap-4 flex-wrap xl:grid xl:grid-cols-4">
            {AGES.map((i) => {
              return (
                <div key={i.id}>
                  <ChipBox
                    active={value?.ageRange === i.id}
                    onClick={() => {
                      onUpdate({ ageRange: i.id });
                      setIsChild(i.id < 3 ? true : false)
                      i.id < 3 && toast(
                        "Only Parent / Guardian can create and use a profile for a child under 13. \n\nPlease continue only if you are the parent.",
                        {
                          // position: "top-right",
                          duration: 5000,
                          style: {
                            // background: "rgba(255, 0, 0, 0.1)",
                            background: "hsl(358, 100%, 97%)",
                            color: "red",
                          },
                        }
                      );
                      setCurrentSlide(nextSlide);
                    }}
                  >
                    <>
                      {i.min === 60 ? (
                        <>{i.min}+</>
                      ) : (
                        <>
                          {i.min}-{i.max}
                        </>
                      )}
                    </>
                  </ChipBox>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={10}
        setCurrentSlide={setCurrentSlide}
        allFilled={value.ageRange !== undefined}
        warningText={"Please select your age range"}
      />
    </Frame>
  );
}
