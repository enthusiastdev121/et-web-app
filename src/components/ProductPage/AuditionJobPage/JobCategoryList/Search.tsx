import { AiOutlineSearch } from "react-icons/ai";
import Slider from "rc-slider";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

import { PrimaryBtnOutlineRounded, PrimaryBtnRounded } from "@/styles/Btn.styled";
import { SearchContainer } from "./JobCategoryLsit.styled";
import styled from "styled-components";
import { ethnicities } from "@/utils/constants/profile";
import { LockOpenIcon } from "@heroicons/react/solid";
import { rgba } from "polished";
import { useState } from "react";
import RangeSlider from "components/RangeSlider";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const DIST = [
  {
    value: 1,
    label: "1km",
  },
  {
    value: 3,
    label: "3km",
  },
  {
    value: 5,
    label: "5km",
  },
  {
    value: 8,
    label: "8km",
  },
  {
    value: 12,
    label: "12km",
  },
  {
    value: 20,
    label: "15+km",
  },
];

const AGE_MARKS = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  60: "60",
  70: "70",
  80: "80",
  90: "90",
  100: "100",
};

export default function Search({ ethnicity, setEthnicity, gender, setGender, onFind, zip, setZip, worldWide, location, loadingLoc, setDistance, distance, ageRange, setAgeRange, onReset, applyFilter }: any) {
  const [showFilter, setShowFiter] = useState(false)

  return (
    <div>
      <SearchContainer className="rounded p-4 text-sm 2xl:text-base items-center hidden sm:block">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {/* ETHINICITY */}
          <Select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
            <option >Ethnicity</option>
            <option>Any</option>
            {ethnicities.map((item: any, index: number) => (
              <option key={index}>{item.label}</option>
            ))}
          </Select>

          {/* GENDER */}
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option >Gender</option>
            <option>Any</option>
            <option>Male</option>
            <option>Female</option>
          </Select>

          {/* ZIP */}
          <Input placeholder="Enter Zip" value={zip} type="numer" onChange={(e: any) => setZip(e.target.value)} />
        </div>

        {/* AGE RANGE */}
        <div className="my-5 p-5 bg-pure rounded-lg">
          <div className="txt-primary">Age Range (Years)</div>
          <div className="mt-3 w-full pb-4">
            <div>
              {/* {ageRange.map((value: number, index: number) => (
              <span key={value}>{index === 0 ? <>{value} - </> : value}</span>
            ))} */}
            </div>

            {/* <RangeSlider
            value={10}
            max={100}
            label=""
            onChange={(e: any) => {
              setAgeRange(e);
            }}
            marks={AGE_MARKS}
          /> */}

            <RangeContainer>
              <Range
                range
                min={0}
                max={100}
                defaultValue={ageRange}
                value={ageRange}
                step={10}
                onChange={(value: any) => {
                  setAgeRange(value);
                }}
                marks={AGE_MARKS}
              />
            </RangeContainer>
          </div>
        </div>

        {/* LOCATION */}
        <div className="my-5 p-5 bg-pure rounded-lg">
          <div className="txt-primary">Location</div>
          {!worldWide && (
            <div className="mt-2">
              {/* {loadingLoc ? <div /> : <LockOpenIcon style={{ height: "16px" }} />} */}
              <div>{loadingLoc ? "Fethcing location" : location.city ? location.city + ", " + location.state : "Enter valid zip code"}</div>
            </div>
          )}

          {location.city ? (
            <>
              <div>
                <Distance className="flex flex-wrap gap-2">
                  {DIST.map((i, index) => {
                    return (
                      <button key={index} onClick={() => setDistance(i.value)}>
                        <Dist active={i.value === distance}>
                          <DistText active={i.value === distance}>{i.label}</DistText>
                        </Dist>
                      </button>
                    );
                  })}
                </Distance>
              </div>
            </>
          ) : null}
        </div>

        <div className="ml-auto flex items-center justify-end gap-5 lg:w-1/2">
          <PrimaryBtnOutlineRounded className="btn block w-full" style={{ padding: "0.5em" }} onClick={onReset}>
            Reset
          </PrimaryBtnOutlineRounded>

          <PrimaryBtnRounded className="btn block w-full" style={{ padding: "0.5em" }} onClick={() => {
            applyFilter()
            onFind()
          }}>
            Find Jobs
          </PrimaryBtnRounded>
        </div>


      </SearchContainer>

      <SearchContainer className="rounded p-4 text-sm 2xl:text-base items-center sm:hidden">
        <div
          className="font-semibold txt-primary flex items-center"
          onClick={() => setShowFiter(!showFilter)}
        >
          <Image src="/images/filterIcon.png" height={24} width={24} alt="" />  <span className="ml-2">{showFilter ? "Hide Filter Search" : "Show Filter search"}</span> <span className="cursor-pointer ml-auto"> {showFilter ? <IoIosArrowDown /> : <IoIosArrowForward />} </span>
        </div>

        {
          showFilter ?
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                {/* ETHINICITY */}
                <Select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
                  <option >Ethnicity</option>
                  <option>Any</option>
                  {ethnicities.map((item: any, index: number) => (
                    <option key={index}>{item.label}</option>
                  ))}
                </Select>

                {/* GENDER */}
                <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option >Gender</option>
                  <option>Any</option>
                  <option>Male</option>
                  <option>Female</option>
                </Select>

                {/* ZIP */}
                <Input placeholder="Enter Zip" value={zip} type="numer" onChange={(e: any) => setZip(e.target.value)} />
              </div>

              {/* AGE RANGE */}
              <div className="my-5 p-5 bg-pure rounded-lg">
                <div className="txt-primary">Age Range (Years)</div>
                <div className="mt-3 w-full pb-4">
                  <div>
                    {/* {ageRange.map((value: number, index: number) => (
              <span key={value}>{index === 0 ? <>{value} - </> : value}</span>
            ))} */}
                  </div>

                  {/* <RangeSlider
            value={10}
            max={100}
            label=""
            onChange={(e: any) => {
              setAgeRange(e);
            }}
            marks={AGE_MARKS}
          /> */}

                  <RangeContainer>
                    <Range
                      range
                      min={0}
                      max={100}
                      defaultValue={ageRange}
                      value={ageRange}
                      step={10}
                      onChange={(value: any) => {
                        setAgeRange(value);
                      }}
                      marks={AGE_MARKS}
                    />
                  </RangeContainer>
                </div>
              </div>

              {/* LOCATION */}
              <div className="my-5 p-5 bg-pure rounded-lg">
                <div className="txt-primary">Location</div>
                {!worldWide && (
                  <div className="mt-2">
                    {/* {loadingLoc ? <div /> : <LockOpenIcon style={{ height: "16px" }} />} */}
                    <div>{loadingLoc ? "Fethcing location" : location.city ? location.city + ", " + location.state : "Enter valid zip code"}</div>
                  </div>
                )}

                {location.city ? (
                  <>
                    <div>
                      <Distance className="flex flex-wrap gap-2">
                        {DIST.map((i, index) => {
                          return (
                            <button key={index} onClick={() => setDistance(i.value)}>
                              <Dist active={i.value === distance}>
                                <DistText active={i.value === distance}>{i.label}</DistText>
                              </Dist>
                            </button>
                          );
                        })}
                      </Distance>
                    </div>
                  </>
                ) : null}
              </div>

              <div className="ml-auto flex items-center justify-end gap-5 lg:w-1/2">
                <PrimaryBtnOutlineRounded className="btn block w-full" style={{ padding: "0.5em" }} onClick={onReset}>
                  Reset
                </PrimaryBtnOutlineRounded>

                <PrimaryBtnRounded className="btn block w-full" style={{ padding: "0.5em" }} onClick={() => {
                  applyFilter()
                  onFind()
                }}>
                  Find Jobs
                </PrimaryBtnRounded>
              </div>
            </>
            :
            <></>
        }

      </SearchContainer>
    </div>
  );
}

export const Select = styled.select`
  background-color: ${(p: any) => p.theme.pure};
  border-radius: 40px;
  padding: 0.5em 2em;
  width: 100%;
`;
export const Input = styled.input`
  background-color: ${(p: any) => p.theme.pure};
  border-radius: 40px;
  padding: 0.5em 2em;
  width: 100%;
  color: ${(p: any) => p.theme.primary};
`;
const Distance = styled.div`
  /* flex-direction: row; */
  margin-top: 10px;
`;
const Dist = styled.div<{ active: any }>`
  border-radius: 120px;
  overflow: hidden;
  padding: 6px 10px 6px 10px;
  border: 1px solid;
  border-color: ${(p) => (p.active ? p.theme.primary : rgba(p.theme.base, 0.2))};
  background-color: ${(p) => (p.active ? p.theme.primary : "transparent")};
`;
const DistText = styled.div<{ active: any }>`
  color: ${(p) => (p.active ? "#fff" : rgba(p.theme.base, 0.7))};
`;
const RangeContainer = styled.div`
  .rc-slider-track {
    background-color: ${p => p.theme.primary};
  }
`;
