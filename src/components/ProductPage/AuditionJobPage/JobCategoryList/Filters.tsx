import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { PrimaryBtnOutlineRounded, PrimaryBtnRounded } from "@/styles/Btn.styled";
import { SearchContainer } from "./JobCategoryLsit.styled";
import styled from "styled-components";
import { ethnicities } from "@/utils/constants/profile";
import { darken, rgba } from "polished";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ClickAwayListener from "react-click-away-listener";
import { GoSearch } from "react-icons/go";
import Button from "components/Button";
import useWindowDimensions from "components/Layout/useWindowDimensions";
import { OLD_JOB_CATEGORIES } from "@/utils/constants/et/jobs";
import MarketSelectPopup from "components/MarketSelectPopup";
import Popup from "reactjs-popup";
import { ChevronDownIcon } from "@heroicons/react/solid";
import TranslatedText from "components/TranslatedText";

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

const CAT = [
    {
        id: 1,
        label: "Show all auditions & jobs"
    },
    {
        id: 2,
        label: "Acting jobs"
    },
    {
        id: 3,
        label: "Modeling Jobs"
    },
    {
        id: 4,
        label: "Music Jobs"
    },
    {
        id: 5,
        label: "Dance Jobs"
    },
    {
        id: 6,
        label: "Extras Jobs"
    },
    {
        id: 7,
        label: "Crew Jobs"
    },
    {
        id: 8,
        label: "Episodic TV Jobs"
    },
    {
        id: 9,
        label: "Feature Film Jobs"
    },
    {
        id: 10,
        label: "Training Jobs"
    },
    {
        id: 11,
        label: "Infomericals Jobs"
    },
    {
        id: 12,
        label: "Internet Jobs"
    },
    {
        id: 13,
        label: "Theatre Jobs"
    },
    {
        id: 14,
        label: "Live Events Jobs"
    },
    {
        id: 15,
        label: "Voice-Over Jobs"
    }
]

export default function Filters({ ethnicity, searchTerm, setCategories, setSearchTerm, setEthnicity, gender, setGender, setPage, onFind, zip, setZip, worldWide, location, loadingLoc, setDistance, distance, ageRange, setAgeRange, onReset, markets, setMarkets }: any) {
    const [showAgeRange, setShowAgeRange] = useState(false)
    const [showGender, setShowGender] = useState(false)
    const [showWorldwide, setShowWorldwide] = useState(false)
    const [showCat, setShowCat] = useState(false)
    const [showFilter, setShowFiter] = useState(false)
    const [activeGender, setActiveGender] = useState("Gender")
    const { width } = useWindowDimensions()
    const [marketShow, setMarketShow] = useState(false);

    useEffect(() => {
        if (width < 500 || showFilter) return;
        console.log("RAN SET SHOW FILTER")
        setShowFiter(true)
    }, [width])


    return (
        <SearchContainer className="rounded px-4 py-4 xl:py-3 text-sm 2xl:text-base items-center">
            <div
                className="font-semibold txt-primary flex items-center sm:hidden"
                onClick={() => setShowFiter(!showFilter)}
            >
                <Image src="/images/filterIcon.png" height={24} width={24} alt="" />  <span className="ml-2">{showFilter ? "Hide Filter Search" : "Show Filter search"}</span> <span className="cursor-pointer ml-auto"> {showFilter ? <IoIosArrowDown /> : <IoIosArrowForward />} </span>
            </div>



            {
                showFilter ?
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 xl:gap-2 mt-5 sm:mt-0">
                        <Popup open={marketShow} onOpen={() => {
                            setMarketShow(true)
                        }} trigger={<button className="txt-primary rounded-full justify-between flex items-center bg-white px-3 py-2  "  > {markets.length > 0 ? "Multiple" : "Worldwide"}    <ChevronDownIcon className=" ml-2 h-5 w-5" aria-hidden="true" /></button>} position="bottom left" offsetY={10} >


                            <MarketSelectPopup initialList={markets} onApply={(e) => {
                                setMarkets(e);
                                setMarketShow(false);
                            }}

                            />

                        </Popup>

                        {/* 
                        <input type="number" onChange={(e) => setZip(e.target.value)} className="rounded-full border-blue-400 px-2" placeholder="Zip" /> */}

                        {/* CATEGORIES */}
                        <div className="relative">
                            <SelectBox onClick={() => {
                                setShowCat(true)
                            }}>
                                <div className="overflow-scroll no-scroll">
                                    <span className="min-w-[300px] block"><TranslatedText>All Auditions & Jobs</TranslatedText></span>
                                </div>
                                <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0 min-w-[20px]" />
                            </SelectBox>
                            {/* {showCat && */}
                            <div style={{ display: showCat ? "block" : 'none' }}>
                                <ClickAwayListener onClickAway={() => {
                                    if (!showCat) return;
                                    setShowCat(false)

                                }}>
                                    <div className="absolute top-[50%] z-20 left-0">
                                        <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[250px] p-3">
                                            {/* <InuptContainer className="mb-3">
                                                    <GoSearch className="absolute top-[50%] left-3 z-10 translate-y-[-50%] text-inherit icon" />
                                                    <input placeholder="Search..." className="w-full h-full border rounded-[100px] pl-8 py-2 pr-2" />
                                                </InuptContainer> */}

                                            {
                                                OLD_JOB_CATEGORIES.map(item => (
                                                    <div key={item.id} className="mb-1">
                                                        <input type="checkbox" id={item.label} onChange={(e) => {
                                                            setCategories(cat => e.target.checked ? [...cat, ...item.keys] : cat.filter(i => !item.keys.includes(i)))
                                                        }} />
                                                        <label htmlFor={item.label} className="ml-2 font-medium"><TranslatedText>{item.label}</TranslatedText></label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </ClickAwayListener>
                            </div>
                            {/* } */}
                        </div>

                        {/* LOCATION */}
                        {/* <div className="relative">
                            <SelectBox onClick={() => setShowWorldwide(true)}>
                                <span>Worldwide</span>
                                <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0" />
                            </SelectBox>

                            {showWorldwide &&
                                <ClickAwayListener onClickAway={() => setShowWorldwide(false)}>
                                    <div className="absolute top-[50%] z-20 left-0 ">
                                        <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[150px] p-5 ">
                                            Options
                                        </div>
                                    </div>
                                </ClickAwayListener>
                            }
                        </div> */}

                        {/* GENDER */}
                        <div className="relative">
                            <SelectBox onClick={() => setShowGender(true)}>
                                <span><TranslatedText>{activeGender}</TranslatedText></span>
                                <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0" />
                            </SelectBox>

                            {showGender &&
                                <ClickAwayListener onClickAway={() => setShowGender(false)}>
                                    <div className="absolute top-[50%] z-20 left-0">
                                        <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[200px]">
                                            <ul className='p-[3px]'>
                                                <ListItem
                                                    active={activeGender === "Any"}
                                                    onClick={() => {
                                                        setGender("")
                                                        setPage(1)
                                                        setActiveGender("Any")
                                                        setShowGender(false)
                                                    }}><TranslatedText>Any</TranslatedText></ListItem>
                                                <ListItem
                                                    active={activeGender === "Male"}
                                                    onClick={() => {
                                                        setGender("Male")
                                                        setPage(1)
                                                        setActiveGender("Male")
                                                        setShowGender(false)
                                                    }}><TranslatedText>Male</TranslatedText></ListItem>
                                                <ListItem
                                                    active={activeGender === "Female"}
                                                    onClick={() => {
                                                        setGender("Female")
                                                        setPage(1)
                                                        setActiveGender("Female")
                                                        setShowGender(false)
                                                    }}><TranslatedText>Female</TranslatedText></ListItem>
                                            </ul>
                                        </div>
                                    </div>
                                </ClickAwayListener>
                            }
                        </div>

                        {/* AGE RANGE */}
                        <div className="relative">
                            <SelectBox onClick={() => setShowAgeRange(true)}>
                                <span><TranslatedText>Age&nbsp;Range</TranslatedText></span>
                                <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0" />
                            </SelectBox>
                            {showAgeRange &&
                                <ClickAwayListener onClickAway={() => setShowAgeRange(false)}>
                                    <AgeRangeContainer className="absolute top-[50%] z-20 left-[-140%] sm:left-[-30%] md:left-0">
                                        <div className="shadow-md  my-5 p-5 bg-pure rounded-[6px] min-w-[375px]">
                                            <div className="txt-primary"><TranslatedText>Age&nbsp;range (years):</TranslatedText> <span className="font-semibold">{ageRange[0]} to {ageRange[1]}</span></div>
                                            <div className="mt-3 w-full pb-4">
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
                                                            setPage(1)
                                                        }}
                                                        marks={AGE_MARKS}
                                                    />
                                                </RangeContainer>
                                            </div>
                                        </div>
                                    </AgeRangeContainer>
                                </ClickAwayListener>
                            }
                        </div>

                        {/* SEARCH */}
                        <InuptContainer className="col-span-2">
                            <GoSearch className="absolute top-[50%] left-3 z-10 translate-y-[-50%] text-inherit icon" />
                            <input
                                value={searchTerm}
                                placeholder="Search..."
                                className="w-full rounded-[100px] py-[6px] pl-8 pr-2 bg-pure"
                                onChange={e => {
                                    setSearchTerm(e.target.value)
                                    setPage(1)
                                }}

                            />
                        </InuptContainer>

                        <ButtonOutline onClick={() => {
                            onReset()
                            setActiveGender("Gender")
                        }}>
                            <TranslatedText>Reset</TranslatedText>
                        </ButtonOutline>
                    </div>
                    :
                    <></>
            }
        </SearchContainer>
    );
}

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p: any) => p.theme.pure};
  border-radius: 40px;
  padding: 0.5em 2em;
  width: 100%;
  color: ${(p: any) => p.theme.primary};
  cursor: pointer;
  
  &:hover {
      background-color: ${(p: any) => p.theme.primary};
      color: #fff;
      transition: all 0.2s ease;
    }
    
    @media (min-width: 1340px){
      font-size: 13px;
      padding: 0.5em 0.6rem;
  }
`
const ListItem = styled.ul<{ active?: boolean }>` 
        padding: 0.5rem 1.25rem;
        cursor: pointer;
        font-weight: 500;
        background-color: ${(p) => p.active ? darken(0.05, p.theme.paper) : 'transparent'};
        border-radius: 5px;
 
    &:hover {
        background-color: ${(p) => darken(0.05, p.theme.paper)};
        border-radius: 5px;
        transition: all 0.2s ease;
    }
`
const InuptContainer = styled.div`
  position: relative;
  color: ${p => rgba(p.theme.base, 0.8)};
  
  .icon {
      color: ${p => rgba(p.theme.base, 0.5)};
  }

  @media (min-width: 1340px){
    font-size: 13px;
}
`
const ButtonOutline = styled.button`
  border: 1px solid ${(p: any) => p.theme.primary};
  border-radius: 40px;
  padding: 0.4em 0.5em;
  width: 100%;
  cursor: pointer;
  color: ${(p: any) => p.theme.primary};
  font-weight: 600;
  align-self: start;

  &:hover {
    background-color: ${(p: any) => p.theme.primary};
    color: #fff;
    transition: all 0.2s ease;
  }  
`;
const AgeRangeContainer = styled.div`
  left: -140%;

  @media(min-width: 380px) {
    left: -135%;
  }
  @media(min-width: 400px) {
    left: -130%;
  }
  @media(min-width: 420px) {
    left: -120%;
  }
  @media(min-width: 440px) {
    left: -110%;
  }
  @media(min-width: 470px) {
    left: -100%;
  }
  @media (min-width: 500px) { 
      right: 0; 
  }
  @media (min-width: 768px) { 
    left: 0px; 
  }
`
const RangeContainer = styled.div`
  .rc-slider-track {
    background-color: ${p => p.theme.primary};
  }
`;
