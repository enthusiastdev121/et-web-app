import Button from "components/Button"
import useWindowDimensions from "components/Layout/useWindowDimensions"
import Image from "next/image"
import { darken, rgba } from "polished"
import { useEffect, useRef, useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import styled from "styled-components"

export default function Filters({ setProjectType, setRateMax, setRateMin, setPriceRange, setPage, priceRange, showPrices, setShowPrices, setSearchTerm, searchTerm, onReset }: any) {
    const paidRef = useRef(null)
    const unpaidRef = useRef(null)
    const [showPriceBox, setShowPriceBox] = useState(false)
    const [showTypeBox, setShowTypeBox] = useState(false)
    const [showFilter, setShowFiter] = useState(false)
    const [activeType, setActiveType] = useState('');
    const { width } = useWindowDimensions()

    useEffect(() => {
        if (width < 500 || showFilter) return;
        setShowFiter(true)
    }, [width])

    return (
        <SearchContainer className="-mx-5 sm:mx-0 rounded p-4 text-sm 2xl:text-base items-center">
            <div
                className="font-semibold txt-primary flex items-center sm:hidden"
                onClick={() => setShowFiter(!showFilter)}
            >
                <Image src="/images/filterIcon.png" height={24} width={24} alt="" />  <span className="ml-2">{showFilter ? "Hide Filter Search" : "Show Filter search"}</span> <span className="cursor-pointer ml-auto"> {showFilter ? <IoIosArrowDown /> : <IoIosArrowForward />} </span>
            </div>

            {
                showFilter ?
                    // <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 sm:mt-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 xl:gap-2 mt-5 sm:mt-0">
                        {/* TYPE */}
                        {/* <Select onChange={(e) => {
                            setProjectType(e.target.value)
                            setPage(1)
                        }}>
                            <option value="none" selected disabled hidden>Type</option>
                            <option>Any</option>
                            <option value={1}>Self response</option>
                            <option value={2}>Open call</option>
                        </Select> */}

                        {/* TYPE */}
                        {/* <option value={0}>E-Submission</option> */}
                        {/* <option value={3}>Hardcopy submission</option> */}
                        <div className="relative">
                            <RateContainer className="txt-primary" onClick={() => setShowTypeBox(true)}>
                                <span>Type</span>
                                <MdOutlineKeyboardArrowDown className="text-xl -mr-5 xl:m-0" />
                            </RateContainer>

                            {showTypeBox &&
                                <ClickAwayListener onClickAway={() => setShowTypeBox(false)}>
                                    <div className="absolute top-[50%] z-20 left-0">
                                        <div className="my-5 bg-pure rounded-[6px] shadow-md min-w-[200px]">
                                            <ul className='p-[3px]'>
                                                <ListItem
                                                    active={activeType === "Any"}
                                                    onClick={() => {
                                                        setProjectType("")
                                                        setPage(1)
                                                        setActiveType("Any")
                                                        setShowTypeBox(false)
                                                    }}>Any</ListItem>
                                                <ListItem
                                                    active={activeType === "Self response"}
                                                    onClick={() => {
                                                        setProjectType("1")
                                                        setPage(1)
                                                        setActiveType("Self response")
                                                        setShowTypeBox(false)
                                                    }}>Self response</ListItem>
                                                <ListItem
                                                    active={activeType === "Open call"}
                                                    onClick={() => {
                                                        setProjectType("2")
                                                        setPage(1)
                                                        setActiveType("Open call")
                                                        setShowTypeBox(false)
                                                    }}>Open call</ListItem>
                                            </ul>
                                        </div>
                                    </div>
                                </ClickAwayListener>
                            }
                        </div>

                        {/* LOCATION */}
                        {/* <Select>
                            <option>View all location</option>
                            <option>Any</option>
                            <option>Location one</option>
                            <option>Location two</option>
                        </Select> */}

                        {/* RATE */}
                        <RateContainer>
                            <div className="flex justify-between w-full" onClick={() => setShowPriceBox(!showPriceBox)}>
                                <span className="txt-primary cursor-pointer text-sm" >Rate/Pay</span>
                                <img src="/images/Icon.svg" className="txt-primary -mr-3 cursor-pointer" />
                            </div>

                            {/* {showPriceBox && */}
                            <div style={{ display: showPriceBox ? "block" : 'none' }}>
                                <ClickAwayListener onClickAway={() => {
                                    if (!showPriceBox) return;
                                    setShowPriceBox(false)
                                }}>
                                    <PriceBox>
                                        <div className="flex flex-col items-start gap-3">
                                            <div className="flex items-center gap-3" onClick={() => {
                                                setShowPrices(paidRef.current.checked)
                                                setPage(1)
                                            }}>
                                                <input type="radio" id="paid" name="pay-type" ref={paidRef} />
                                                <label htmlFor="paid" className="font-medium">Paid</label>
                                            </div>
                                            {
                                                showPrices &&
                                                <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                                                    <div>
                                                        <label className="block text-xs font-semibold" htmlFor="min">Min</label>
                                                        <input onChange={(e) => {
                                                            setPriceRange(p => ({ ...p, min: e.target.value }))
                                                            setPage(1)
                                                        }} value={priceRange.min} type="number" id="min" placeholder="MIN" className="border p-2 rounded-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold" htmlFor="max">Max</label>
                                                        <input onChange={(e) => {
                                                            setPriceRange(p => ({ ...p, max: e.target.value }))
                                                            setPage(1)
                                                        }} value={priceRange.max} type="number" id="max" placeholder="MAX" className="border p-2 rounded-sm" />
                                                    </div>
                                                </div>
                                            }

                                        </div>

                                        <div className="mt-3 flex items-center gap-3" onClick={() => {
                                            setShowPrices(!unpaidRef.current.checked)
                                            setPage(1)
                                            setRateMax("0")
                                            setRateMin("0")
                                        }}>
                                            <input type="radio" id="unpaid" name="pay-type" ref={unpaidRef} />
                                            <label htmlFor="unpaid" className="font-medium">No pay / deferred pay</label>
                                        </div>
                                        <div>

                                        </div>
                                    </PriceBox>
                                </ClickAwayListener>
                            </div>
                            {/* } */}
                        </RateContainer>

                        {/* SEARCH */}
                        <Input
                            placeholder="Search..."
                            value={searchTerm}
                            className="col-span-2 row-start-2 col-start-1 md:col-span-3 md:row-start-1 md:col-start-3"
                            onChange={e => {
                                setSearchTerm(e.target.value)
                                setPage(1)
                            }}
                        />

                        {/* RESET */}
                        <Button
                            primary
                            outlined
                            rounded
                            size="small"
                            onClick={() => {
                                onReset()
                                setActiveType("")
                                setShowPrices(false)
                                paidRef.current.checked = false
                                unpaidRef.current.checked = false
                            }}
                        >Reset</Button>
                    </div>
                    :
                    <></>
            }
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
  background-color: ${(props) => rgba(props.theme.primary, 0.25)};
  padding: 20px;

  select {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.pure};
  }

  .active {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

const Select = styled.select`
  background-color: ${(p: any) => p.theme.pure};
  border-radius: 40px;
  padding: 0.5em 1.5em;
  width: 100%;
  font-size: 14px;
`;

const RateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p: any) => p.theme.pure};
  border-radius: 40px;
  padding: 0.5em 1.5em;
  width: 100%;
  position: relative;
  cursor: pointer;
`

const Input = styled.input`
  background-color: ${(p: any) => p.theme.pure};
  border-radius: 40px;
  padding: 0.5em 1.5em;
  width: 100%;
  font-size: 14px;
`;

const PriceBox = styled.div`
  position: absolute;
  top: 110%;
  left: -20%;
  z-index: 20;
  padding: 15px;
  background: ${(p: any) => p.theme.pure};
  box-shadow: 0 0 10px rgba(0,0,0, 0.4);
  border-radius: 5px;
  min-width: 280px;
  max-width: 95vw;

  @media (max-width: 500px) {
    left: 0;
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



