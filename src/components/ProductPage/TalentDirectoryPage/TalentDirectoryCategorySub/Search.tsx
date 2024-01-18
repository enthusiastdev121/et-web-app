import react, { ChangeEvent, Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { PrimaryBtnOutlineRounded } from "@/styles/Btn.styled";
import { SearchContainer, SliderRange } from "./TalentDirectoryCategoryLsit.styled";
import { useRouter } from "next/router";
import { ETHNICITY_KEY_VALUES } from "@/utils/constants/profile";

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from "classnames";
import { WHITELABEL } from "@/utils/envProviders";
export default function SearchSub({ talentData, getLoading }: any) {
  let min = 1900;
  let max = WHITELABEL === "talento" ? new Date().getFullYear() - 18 : 2050;

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const [filterData, setFilterData] = useState({
    gender: "",
    ethnicity: "",
    search: "",
    dobMax: 0,
    dobMin: 0
  })

  const route = useRouter()

  const resetFilter = () => {
    getLoading(true)
    setFilterData({
      gender: "",
      ethnicity: "",
      search: "",
      dobMax: 0,
      dobMin: 0
    })
    const Filter = route.asPath.split("?")[1].split("&");
    let newString: any[] = [];
    for (const item of Filter) {

      switch (item.split("=")[0]) {
        case "gender":
          break;
        case "ethnicity":
          break;
        case "search":
          break;
        case "dobMax":
          break;
        case "dobMin":
          break;
        default:
          newString.push(item)
          break;
      }
    }
    route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
  }


  useEffect(() => {
    if (route.asPath.split("?").length > 1) {
      const Filter = route.asPath.split("?")[1].split("&");
      let newString: any[] = [];
      for (const item of Filter) {
        switch (item.split("=")[0]) {
          case "gender":
            newString.push({ title: "gender", value: item.split("=")[1] })
            break;
          case "ethnicity":
            newString.push({ title: "ethnicity", value: item.split("=")[1] })
            break;
          case "search":
            newString.push({ title: "search", value: item.split("=")[1] })
            break;
          case "dobMin":
            newString.push({ title: "dobMin", value: item.split("=")[1] })
            break;
          case "dobMax":
            newString.push({ title: "dobMax", value: item.split("=")[1] })
            break;
          default:
            break;
        }
      }

      setFilterData({
        ...filterData, gender: newString.filter((x: any) => x.title == "gender").length > 0 ? newString.filter((x: any) => x.title == "gender")[0].value : "",
        ethnicity: newString.filter((x: any) => x.title == "ethnicity").length > 0 ? newString.filter((x: any) => x.title == "ethnicity")[0].value : "",
        search: newString.filter((x: any) => x.title == "search").length > 0 ? newString.filter((x: any) => x.title == "search")[0].value : ""
      })
      if (newString.filter((x: any) => x.title == "dobMax").length > 0) {
        setMaxVal(parseInt(newString.filter((x: any) => x.title == "dobMax")[0].value.split("-")[0]))
      }
      if (newString.filter((x: any) => x.title == "dobMin").length > 0) {
        setMinVal(parseInt(newString.filter((x: any) => x.title == "dobMin")[0].value.split("-")[0]))
      }
    }


  }, [route])

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);


  return (
    <SearchContainer className="rounded p-4 grid grid-cols-2 md:grid-cols-3 2xl:grid 2xl:grid-cols-11 gap-5 text-sm 2xl:text-base items-center">
      <select
        className=" 2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
      >
        <option>Worldwide</option>
        <option>one</option>
        <option>two</option>
      </select>
      <select
        className="2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
        value={filterData.gender}
        onChange={(e) => {
          setFilterData({ ...filterData, gender: e.target.value })
          if (route.asPath.split("?").length == 2) {
            const Filter = route.asPath.split("?")[1].split("&");
            let newString: any[] = [];
            for (const item of Filter) {
              switch (item.split("=")[0]) {
                case "gender":
                  newString.push("gender=" + e.target.value)
                  break;
                case "ethnicity":
                  newString.push(item)
                  break;
                case "search":
                  newString.push(item)
                  break;
                default:
                  newString.push(item)
                  break;
              }
            }
            if (Filter.filter((y: any) => y.split("=")[0] == "gender").length > 0) {
              route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
            } else {
              route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&gender=" + e.target.value);
            }
          } else {
            route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?gender=" + e.target.value);
          }
          getLoading(true)
        }}
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <div className="2xl:col-span-2">
        <SliderRange>
          <Menu as="div" className="relative inline-block text-left w-full">
            <div>
              <Menu.Button className="option-range bg-pure">
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
              <Menu.Items className="origin-top-right absolute z-10  mt-2 w-56 rounded-md shadow-lg bg-pure ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="slidecontainer">


                  {/* <p>Age range slider</p>
              <input type="range" min="1" max="100" value="50" className="slider" id="myRange" /> */}


                  {/* <MultiRangeSlider
                    min={1900}
                    max={2050}
                    onChange={debouncedChangeHandler}
                  /> */}


                  <div className="bg-pure">
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={minVal}
                      ref={minValRef}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.min(+event.target.value, maxVal - 1);

                        setMinVal(value);
                        getLoading(true)
                        setFilterData({ ...filterData, dobMax: parseInt(event.target.value) })
                        if (route.asPath.split("?").length > 1) {
                          const Filter = route.asPath.split("?")[1].split("&");
                          let newString: any[] = [];
                          for (const item of Filter) {
                            switch (item.split("=")[0]) {
                              case "gender":
                                newString.push(item)
                                break;
                              case "ethnicity":
                                newString.push(item)
                                break;
                              case "search":
                                newString.push(item)
                                break;
                              case "dobMax":
                                newString.push(item)
                                break;
                              case "dobMin":
                                newString.push("dobMin=" + event.target.value)
                                break;
                              default:
                                newString.push(item)
                                break;
                            }
                          }
                          if (Filter.filter((y: any) => y.split("=")[0] == "dobMin").length > 0) {
                            route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
                          } else {
                            route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&dobMin=" + event.target.value);
                          }
                        } else {
                          route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?dobMin=" + event.target.value + "&dobMax=" + max);
                        }



                      }}
                      className={classNames("thumb thumb--zindex-3", {
                        "thumb--zindex-5": minVal > max - 100
                      })}
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={maxVal}
                      ref={maxValRef}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.max(+event.target.value, minVal + 1);

                        setMaxVal(value);
                        getLoading(true)
                        setFilterData({ ...filterData, dobMax: parseInt(event.target.value) })
                        if (route.asPath.split("?").length > 1) {
                          const Filter = route.asPath.split("?")[1].split("&");
                          let newString: any[] = [];
                          for (const item of Filter) {
                            switch (item.split("=")[0]) {
                              case "gender":
                                newString.push(item)
                                break;
                              case "ethnicity":
                                newString.push(item)
                                break;
                              case "search":
                                newString.push(item)
                                break;
                              case "dobMin":
                                newString.push(item)
                                break;
                              case "dobMax":
                                newString.push("dobMax=" + event.target.value)
                                break;
                              default:
                                newString.push(item)
                                break;
                            }
                          }
                          if (Filter.filter((y: any) => y.split("=")[0] == "dobMax").length > 0) {
                            route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
                          } else {
                            route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&dobMax=" + event.target.value);
                          }
                        } else {
                          route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?dobMin=" + min + "?dobMax=" + event.target.value);
                        }

                      }}
                      className="thumb thumb--zindex-4"
                    />

                    <div className="slider">
                      <div className="slider__track"></div>
                      <div ref={range} className="slider__range"></div>
                      <div className="slider__left-value">{minVal}</div>
                      <div className="slider__right-value">{maxVal}</div>
                    </div>
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
        onChange={(e) => {

          setFilterData({ ...filterData, ethnicity: e.target.value })
          if (route.asPath.split("?").length == 2) {
            const Filter = route.asPath.split("?")[1].split("&");
            let newString: any[] = [];
            for (const item of Filter) {
              switch (item.split("=")[0]) {
                case "gender":
                  newString.push(item)
                  break;
                case "ethnicity":
                  newString.push("ethnicity=" + e.target.value)
                  break;
                case "search":
                  newString.push(item)
                  break;
                default:
                  newString.push(item)
                  break;
              }
            }
            if (Filter.filter((y: any) => y.split("=")[0] == "ethnicity").length > 0) {
              route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
            } else {
              route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&ethnicity=" + e.target.value);
            }
          } else {
            route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?ethnicity=" + e.target.value);
          }
          getLoading(true)
        }}
      >
        <option value="">ethnicity</option>
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
          style={{ top: "10px" }}
        />
        <input
          type="text"
          placeholder="search talent"
          value={filterData.search}
          className="block w-full text-inherit bg-pure"
          style={{ padding: "0.5em 2.5em", borderRadius: "50px" }}
          onChange={(e) => {
            setFilterData({ ...filterData, search: e.target.value })
            // if (e.target.value.length > 2) {
            getLoading(true)

            if (route.asPath.split("?").length == 2) {
              const Filter = route.asPath.split("?")[1].split("&");
              let newString: any[] = [];
              for (const item of Filter) {
                switch (item.split("=")[0]) {
                  case "gender":
                    newString.push(item)
                    break;
                  case "ethnicity":
                    newString.push(item)
                    break;
                  case "search":
                    newString.push("search=" + e.target.value)
                    break;
                  default:
                    newString.push(item)
                    break;
                }
              }
              if (Filter.filter((y: any) => y.split("=")[0] == "search").length > 0) {
                route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
              } else {
                route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&search=" + e.target.value);
              }
            } else {
              route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?search=" + e.target.value);
            }
            // }


          }}
        />
      </div>

      <PrimaryBtnOutlineRounded
        className="btn block"
        style={{ padding: "0.5em" }}

        onClick={resetFilter}

      >
        Reset
      </PrimaryBtnOutlineRounded>
    </SearchContainer>
  );
}
