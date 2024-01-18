import { SearchContainer } from "components/ProductPage/AuditionJobPage/JobCategoryList/JobCategoryLsit.styled"
import useWindowDimensions from "hooks/useWindowDimensions"
import Image from "next/image"
import { darken, rgba } from "polished"
import { useEffect, useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import { GoSearch } from "react-icons/go"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import styled from "styled-components"

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
    }
]
export default function ClassFilters({ ethnicity, searchTerm, setSearchTerm, setEthnicity, gender, setGender, onFind, zip, setZip, worldWide, location, loadingLoc, setDistance, distance, ageRange, setAgeRange, onReset }: any) {
    const [showRating, setShowRating] = useState(false)
    const [showDuration, setShowDuration] = useState(false)
    const [showLevels, setShowLevels] = useState(false)
    const [showCat, setShowCat] = useState(false)
    const [showFilter, setShowFiter] = useState(false)
    const [activeGender, setActiveGender] = useState("Gender")
    const { width } = useWindowDimensions()
    const [showSort, setShowSort] = useState(false)
    const [activeSort, setActiveSort] = useState("Sort by most popular")

    useEffect(() => {
        if (width < 500 || showFilter) return;
        setShowFiter(true)
    }, [width])

    return (
        <div className="">
            <h2>Search for all classes</h2>

            <SearchContainer className="rounded px-4 py-4 xl:py-3 text-sm 2xl:text-base items-center">
                <div
                    className="font-semibold txt-primary flex items-center sm:hidden"
                    onClick={() => setShowFiter(!showFilter)}
                >
                    <Image src="/images/filterIcon.png" height={24} width={24} alt="" />
                    <span className="ml-2">
                        {/* {showFilter ? "Hide Filter Search" : "Show Filter search"} */}
                        Filter search
                    </span>
                    <span className="cursor-pointer ml-auto"> {showFilter ? <IoIosArrowDown /> : <IoIosArrowForward />} </span>
                </div>

                {
                    showFilter ?
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 xl:gap-2 mt-5 sm:mt-0">
                            {/* CATEGORIES */}
                            <div className="relative">
                                <SelectBox onClick={() => setShowCat(true)}>
                                    <div className="overflow-scroll no-scroll">
                                        <span className="min-w-[300px] block">All Classes</span>
                                    </div>
                                    <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0 min-w-[20px]" />
                                </SelectBox>

                                {showCat &&
                                    <ClickAwayListener onClickAway={() => setShowCat(false)}>
                                        <div className="absolute top-[50%] z-20 left-0">
                                            <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[250px] p-3">
                                                {
                                                    CAT.map(item => (
                                                        <div key={item.id} className="cursor-pointer py-2 hover:bg-gray-100 rounded">
                                                            <span className="ml-2 font-medium">{item.label}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                }
                            </div>

                            {/* RATINGS */}
                            <div className="relative">
                                <SelectBox onClick={() => setShowRating(true)}>
                                    <div className="overflow-scroll no-scroll">
                                        <span className="min-w-[300px] block">All Ratings</span>
                                    </div>
                                    <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0 min-w-[20px]" />
                                </SelectBox>

                                {showRating &&
                                    <ClickAwayListener onClickAway={() => setShowRating(false)}>
                                        <div className="absolute top-[50%] z-20 left-0">
                                            <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[250px] p-3">
                                                {
                                                    CAT.map(item => (
                                                        <div key={item.id} className="cursor-pointer py-2 hover:bg-gray-100 rounded">
                                                            <span className="ml-2 font-medium">{item.label}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                }
                            </div>

                            {/* DURATION */}
                            <div className="relative">
                                <SelectBox onClick={() => setShowDuration(true)}>
                                    <div className="overflow-scroll no-scroll">
                                        <span className="min-w-[300px] block">All Durations</span>
                                    </div>
                                    <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0 min-w-[20px]" />
                                </SelectBox>

                                {showDuration &&
                                    <ClickAwayListener onClickAway={() => setShowDuration(false)}>
                                        <div className="absolute top-[50%] z-20 left-0">
                                            <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[250px] p-3">
                                                {
                                                    CAT.map(item => (
                                                        <div key={item.id} className="cursor-pointer py-2 hover:bg-gray-100 rounded">
                                                            <span className="ml-2 font-medium">{item.label}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                }
                            </div>


                            {/* LEVELS */}
                            <div className="relative">
                                <SelectBox onClick={() => setShowLevels(true)}>
                                    <div className="overflow-scroll no-scroll">
                                        <span className="min-w-[300px] block">All Levels</span>
                                    </div>
                                    <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0 min-w-[20px]" />
                                </SelectBox>

                                {showLevels &&
                                    <ClickAwayListener onClickAway={() => setShowLevels(false)}>
                                        <div className="absolute top-[50%] z-20 left-0">
                                            <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[250px] p-3">
                                                {
                                                    CAT.map(item => (
                                                        <div key={item.id} className="cursor-pointer py-2 hover:bg-gray-100 rounded">
                                                            <span className="ml-2 font-medium">{item.label}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                }
                            </div>

                            {/* SEARCH */}
                            <InuptContainer>
                                <GoSearch className="absolute top-[50%] left-3 z-10 translate-y-[-50%] text-inherit icon" />
                                <input
                                    value={searchTerm}
                                    placeholder="Search..."
                                    className="w-full rounded-[100px] py-[6px] pl-8 pr-2 bg-pure"
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </InuptContainer>

                            <ButtonOutline onClick={() => { }}>
                                Reset
                            </ButtonOutline>
                        </div>
                        :
                        <></>
                }
            </SearchContainer>

            <div className="flex justify-between items-center mt-5">
                <div className="text-lg">
                    <strong>1,253</strong> classes
                </div>

                {/* SORT */}
                <div className="relative">
                    <div
                        onClick={() => setShowSort(true)}
                        className="text-xs border-2 rounded-3xl bg-transparent 
                        cursor-pointer py-2 px-4 sm:text-sm flex justify-between items-center">
                        {activeSort}
                        <span className="txt-primary ml-3"><MdOutlineKeyboardArrowDown className="text-xl -mr-4 xl:m-0" /></span>
                    </div>

                    {showSort &&
                        <ClickAwayListener onClickAway={() => setShowSort(false)}>
                            <div className="absolute top-[55%] z-20 right-0 sm:left-[-10%] text-sm lg:text-base">
                                <div className="my-5 bg-pure rounded-[6px] min-w-[200px] shadow-md p-[3px]">
                                    <ul>
                                        <ListItem
                                            active={activeSort === "Sort by most popular"}
                                            onClick={() => {
                                                setActiveSort("Sort by most popular")
                                                setShowSort(false)
                                            }}>Sort by most popular</ListItem>
                                        <ListItem
                                            active={activeSort === "Sort by highest rated"}
                                            onClick={() => {
                                                setActiveSort("Sort by highest rated")
                                                setShowSort(false)
                                            }}>Sort by highest rated</ListItem>

                                    </ul>
                                </div>
                            </div>
                        </ClickAwayListener>
                    }
                </div>
            </div>
        </div>
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