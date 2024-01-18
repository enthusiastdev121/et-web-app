import { interest } from "@/utils/constants/profile";
import Button from "components/Button";
import React, { useEffect, useState } from "react";
import { RiGenderlessFill } from "react-icons/ri";
import BottomBar from "../../bits/BottomBar";
import Frame from "../../bits/Frame";
import { ChipBox, ContentBox, HeadingSmall, SlideHeading } from "../Styles";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Interest({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
}: any) {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const dem = Object.keys(interest).map((i) => {
      return {
        ...interest[i],
        // selected: value?.interest?.some((i4) => i4.selected === true)
        //   ? true
        //   : false,
        selected: false,
        sub: interest[i].sub.map((i2: any, index: number) => {
          // let sl = value.interest
          //   ?.filter((i5) => i5.selected === true)
          //   [index]?.sub.some((ii) => ii.id === i2.id);
          return {
            ...i2,
            // selected: sl || false,
            selected: false,
          };
        }),
      };
    });
    setList(dem);

    return () => { };
  }, []);

  console.log("list is: ", list);

  return (
    <Frame interest bannerChangeOne>
      <ToastContainer className="Toastify" />
      <div className="grow flex sm:mt-24">
        <ContentBox className="pt-10 sm:pt-0 relative" >
          <SlideHeading>Choose your interests</SlideHeading>
          <div className="-mt-7 mb-10">Select one or more</div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 relative justify-items-center sm:justify-items-start">
            {list.map((i) => (
              <Item
                key={i.id}
                {...i}
                onUpdate={onUpdate}
                value={value}
                setList={setList}
              />
            ))}
          </div>

          <div className="mt-5">
            <Button
              primary
              onClick={() => {
                if (!list?.some((i4: any) => i4.selected === true)) {
                  toast.warning("Please select your interests")
                  return;
                }

                onUpdate({ interest: list });
                setCurrentSlide(nextSlide);
              }}
            >
              OK
            </Button>
          </div>
        </ContentBox>
      </div>

      <div className="pb-10 sm:pb-0">
        <BottomBar
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          width={70}
          setCurrentSlide={setCurrentSlide}
          allFilled={value?.interest?.some((i4: any) => i4.selected === true)}
          warningText={"Please select your interests"}

        />
      </div>
    </Frame>
  );
}
