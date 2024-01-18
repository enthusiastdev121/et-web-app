import react, { ChangeEvent, ChangeEventHandler, Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { PrimaryBtnOutlineRounded } from "@/styles/Btn.styled";
import { SearchContainer, SliderRange } from "./TalentDirectoryCategoryLsit.styled";
import { useRouter } from "next/router";
import { ETHNICITY_KEY_VALUES } from "@/utils/constants/profile";

import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from "classnames";
import styled from "styled-components";
import { WHITELABEL } from "@/utils/envProviders";
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import ClickAwayListener from "react-click-away-listener";
import { countryRegion, usStates } from "@/utils/constants/country-region";
import { CountryTreeStyles } from "components/Styles";
import CountryRegionSelect from "components/CountryRegionSelect";

import Popup from 'reactjs-popup';



const DATA = [
  {

    label: 'search me',
    value: 'searchme',
    children: [
      {
        label: 'search me too',
        value: 'searchm2etoo',
      },
      {
        label: 'search me too',
        value: 'searchme3too',
      },
      {
        label: 'search me too',
        value: 'searchme4too',
      },
    ],
  },
  {

    label: 'search me',
    value: 'searchme2',
    children: [
      {
        label: 'search me too',
        value: 'searchm2etoo',
      },
      {
        label: 'search me too',
        value: 'searchme3too',
      },
      {
        label: 'search me too',
        value: 'searchme4too',
      },
    ],
  },
  {

    label: 'search me',
    value: 'searchme3',
    children: [
      {
        label: 'search me too',
        value: 'searchm2etoo',
      },
      {
        label: 'search me too',
        value: 'searchme3too',
      },
      {
        label: 'search me too',
        value: 'searchme4too',
      },
    ],
  },
]



export default function Search({ talentData, getLoading, filterData, setFilterData, onReset, ageRange, setAgeRange }: any) {



  // const {gender,search,worldWide,ethnicity} = filterData;

  let min = 1900;
  let max = WHITELABEL === "talento" ? new Date().getFullYear() - 18 : 2050;
  // 
  // let min = 10;
  // let max = 100 

  // const [minVal, setMinVal] = useState(min);
  // const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  // const [ageRange, setAgeRange] = useState([10, 40]);
  const range = useRef<HTMLDivElement>(null);
  const [showCountry, setShowCountry] = useState(false);
  const [countryList, setCountryList] = useState([]);



  const route = useRouter()
  // useEffect(() => {
  //   if (route.asPath.split("?").length > 1) {
  //     const Filter = route.asPath.split("?")[1].split("&");
  //     let newString: any[] = [];
  //     for (const item of Filter) {
  //       switch (item.split("=")[0]) {
  //         case "gender":
  //           newString.push({ title: "gender", value: item.split("=")[1] })
  //           break;
  //         case "ethnicity":
  //           newString.push({ title: "ethnicity", value: item.split("=")[1] })
  //           break;
  //         case "search":
  //           newString.push({ title: "search", value: item.split("=")[1] })
  //           break;
  //         case "dobMin":
  //           newString.push({ title: "dobMin", value: item.split("=")[1] })
  //           break;
  //         case "dobMax":
  //           newString.push({ title: "dobMax", value: item.split("=")[1] })
  //           break;
  //         default:
  //           break;
  //       }
  //     }

  //     setFilterData({
  //       ...filterData, gender: newString.filter((x: any) => x.title == "gender").length > 0 ? newString.filter((x: any) => x.title == "gender")[0].value : "",
  //       ethnicity: newString.filter((x: any) => x.title == "ethnicity").length > 0 ? newString.filter((x: any) => x.title == "ethnicity")[0].value : "",
  //       search: newString.filter((x: any) => x.title == "search").length > 0 ? newString.filter((x: any) => x.title == "search")[0].value : ""
  //     })
  //     if (newString.filter((x: any) => x.title == "dobMax").length > 0) {
  //       setMaxVal(parseInt(newString.filter((x: any) => x.title == "dobMax")[0].value.split("-")[0]))
  //     }
  //     if (newString.filter((x: any) => x.title == "dobMin").length > 0) {
  //       setMinVal(parseInt(newString.filter((x: any) => x.title == "dobMin")[0].value.split("-")[0]))
  //     }
  //   }


  // }, [route])

  // const getPercent = useCallback(
  //   (value: number) => Math.round(((value - min) / (max - min)) * 100),
  //   [min, max]
  // );

  // useEffect(() => {
  //   if (maxValRef.current) {
  //     const minPercent = getPercent(minVal);
  //     const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

  //     if (range.current) {
  //       range.current.style.left = `${minPercent}%`;
  //       range.current.style.width = `${maxPercent - minPercent}%`;
  //     }
  //   }
  // }, [minVal, getPercent]);

  // // Set width of the range to decrease from the right side
  // useEffect(() => {
  //   if (minValRef.current) {
  //     const minPercent = getPercent(+minValRef.current.value);
  //     const maxPercent = getPercent(maxVal);

  //     if (range.current) {
  //       range.current.style.width = `${maxPercent - minPercent}%`;
  //     }
  //   }
  // }, [maxVal, getPercent]);



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

  return (
    <SearchContainer className="rounded p-4 flex flex-wrap gap-3 text-sm 2xl:text-base items-center">

      {/* <select
        className="2xl:col-span-2"
        style={{ padding: "0.5em 2em", maxWidth: 180, borderRadius: "50px" }}
      >
        <option value="">Worldwide</option>
        {usStates.map(i => {
          return (
            <option key={i.label} value={i.label}>{i.label}</option>
          )
        })}
      </select> */}
      {/* <button onClick={() => setShowCountry(s => !s)} >asd</button> */}

      <Popup open={showCountry} onOpen={() => {
        setShowCountry(true)
      }} trigger={<button className="txt-primary rounded-full flex items-center bg-white px-3 py-2 "  > {countryList?.length > 0 ? "Multiple" : "Worldwide"}    <ChevronDownIcon className=" ml-2 h-5 w-5" aria-hidden="true" /></button>} position="bottom left" offsetY={10} >


        {/* <div className="relative" >
          CC */}
        <CountryRegionSelect initialList={countryList} onApply={(e) => {

          const ss = e.filter(i => i.checked);

          setFilterData(s => ({ ...s, states: ss.map(i => i.children.filter(i2 => i2.checked)).flat().map(i2 => i2.value + "," + i2.label), countries: ss.map(i => i.label) }))
          setCountryList(e);
          setShowCountry(false);
        }} />
        {/* </div> */}
      </Popup>

      {/* <ClickAwayListener onClickAway={() => setShowCountry(false)} >
        <div className="" >
          <div onClick={() => setShowCountry(s => !s)} className='txt-primary flex bg-white py-2 rounded-full px-4' >
            Worldwide
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </div>
          <CountryTreeStyles>
          <CountryPop className="" style={{ display: showCountry ? 'block' : 'none' }} >

            <DropdownTreeSelect data={countryRegion} onChange={(_, e) => console.log("CHANG", e)} onAction={(e) => console.log("ON ACTION", e)} onNodeToggle={(e) => console.log("TOGGLE", e)} texts={{ label: 'sd' }} showDropdown='always' inlineSearchInput />
          </CountryPop>
          </CountryTreeStyles>
        </div>

      </ClickAwayListener> */}


      <select
        className="2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
        value={filterData.gender}
        onChange={(e) => { setFilterData({ ...filterData, gender: e.target.value }); }
        }
      >

        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <div className="2xl:col-span-2">
        <SliderRange>
          <Menu as="div" className="relative inline-block text-left w-full ">
            <div>
              <Menu.Button className="option-range">
                Age Range
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute z-10  mt-2 w-[330px] md:w-[260px] lg:w-96 rounded-md shadow-lg bg-pure ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-4 py-5 pb-10  bg-pure rounded-lg">
                  <div className="txt-primary">Age&nbsp;range (years): <span className="font-semibold">{ageRange[0]} to {ageRange[1]}</span></div>
                  <div className="mt-3 w-full ">
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
                      {/* <Range
              range
              min={min}
              max={max}
              defaultValue={ageRange}
              value={ageRange}
              step={10}
              onChange={(value: any) => {
                setAgeRange(value);
              }}
              marks={AGE_MARKS}
            /> */}
                    </RangeContainer>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </SliderRange>
      </div>

      <select
        className="2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
        value={filterData.ethnicity}
        onChange={(e) => setFilterData({ ...filterData, ethnicity: e.target.value })}
      // onChange = {(e)=>{setFilterData({...filterData,gender:e.target.value});console.log(filterData.gender)}
      >
        <option value="">Ethnicity</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_african}>{ETHNICITY_KEY_VALUES.ethnicity_african}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_african_am}>{ETHNICITY_KEY_VALUES.ethnicity_african_am}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_any}>{ETHNICITY_KEY_VALUES.ethnicity_any}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_asian}>{ETHNICITY_KEY_VALUES.ethnicity_asian}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_caribbian}>{ETHNICITY_KEY_VALUES.ethnicity_caribbian}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_caucasian}>{ETHNICITY_KEY_VALUES.ethnicity_caucasian}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_east_indian}>{ETHNICITY_KEY_VALUES.ethnicity_east_indian}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_hispanic}>{ETHNICITY_KEY_VALUES.ethnicity_hispanic}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_mediterranean}>{ETHNICITY_KEY_VALUES.ethnicity_mediterranean}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_middle_est}>{ETHNICITY_KEY_VALUES.ethnicity_middle_est}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_mixed}>{ETHNICITY_KEY_VALUES.ethnicity_mixed}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_native_am}>{ETHNICITY_KEY_VALUES.ethnicity_native_am}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_x_asian}>{ETHNICITY_KEY_VALUES.ethnicity_x_asian}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_x_black}>{ETHNICITY_KEY_VALUES.ethnicity_x_black}</option>
        <option value={ETHNICITY_KEY_VALUES.ethnicity_x_white}>{ETHNICITY_KEY_VALUES.ethnicity_x_white}</option>
      </select>



      <div className="relative 2xl:col-span-2">
        <AiOutlineSearch
          className="absolute left-3 opacity-50"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
        <input
          type="text"
          placeholder="Search talent"
          className="block w-full text-inherit bg-pure"
          style={{ padding: "0.5em 2em", borderRadius: "50px" }}
          value={filterData.search}
          onChange={(e) => {
            setFilterData({ ...filterData, search: e.target.value })
          }}
        />
      </div>

      <PrimaryBtnOutlineRounded
        className="btn block px-6"
        style={{}}
        onClick={onReset}

      >
        Reset
      </PrimaryBtnOutlineRounded>
    </SearchContainer>
  );
}



const RangeContainer = styled.div`
  .rc-slider-track {
    background-color: ${p => p.theme.primary};
    /* background-color: red; */
  }
  `;
const CountryPop = styled.div`
  
  .dropdown-trigger.arrow {
    display: none;
  }
  .dropdown-content{
    max-height: 240px;
    overflow: auto;
    min-width:300px;
  }

  `;
