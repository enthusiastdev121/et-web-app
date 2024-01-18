import styled from "styled-components";
import JobCategoryList from "../../../components/ProductPage/AuditionJobPage/JobCategoryList";
import JobsList from "../../../components/ProductPage/AuditionJobPage/JobsList";
import SuccessStories from "../../SuccessStories";
import { useAuth } from "context/AuthContext";
import CommunityBuzz from "containers/CommunityBuzz";
import JobCart from "components/jobs/JobCart";
import Advertisement from "components/UpgradeToPro";
import BackToTop from "components/BackToTop";
import { useProfileStore } from "context/ProfileStore";
import { useCallback, useEffect, useRef, useState } from "react";
import { JobItemD } from "types/jobs";
import { fetchZipApi } from "network/apis/auth";
import {
  addFavJobApi,
  getAllJobsApi,
  removeFavJobApi,
  searchJobsApi,
} from "network/apis/jobs";
import { formatJobRes } from "network/apiFormatter/jobs";
import Search from "components/ProductPage/AuditionJobPage/JobCategoryList/Search";
import { H1 } from "@/styles/Typography.styled";
import Pagination from "components/Pagination";
import Filters from "components/ProductPage/AuditionJobPage/JobCategoryList/Filters";
import { debounce } from "lodash";
import JobCategoryListNew from "components/ProductPage/AuditionJobPage/JobCategoryList/JobCategoryListNew";
import ClickAwayListener from "react-click-away-listener";
import { darken } from "polished";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInView } from "react-intersection-observer";
import Skel from "components/ProductPage/AuditionJobPage/JobsList/Skel";
import JobCard from "components/jobs/JobCard";
import { CASTING_LIMIT } from "@/utils/constants";
import { faL } from "@fortawesome/free-solid-svg-icons";
import TranslatedText from "components/TranslatedText";

export default function AllJobs({ res }: any) {
  const {
    auth: { authenticated },
  } = useAuth();

  const { profile } = useProfileStore();

  const [selected, setSelected] = useState([]);

  // const [categoryOpen, setCategoryOpen] = useState(false);
  // const [ageRange, setAgeRange] = useState([AGE.MIN, AGE.MAX]);
  // const [ethnicity, setEthnicity] = useState(profile.ethnicity || "");
  // const [zip, setZip] = useState<string>(profile.zip || "");
  // const [gender, setGender] = useState("Male");

  const [ethnicity, setEthnicity] = useState("");
  const [zip, setZip] = useState<string>("");
  const [gender, setGender] = useState(null);
  const [worldWide, setWorldWide] = useState(false);
  const [loadingLoc, setLoadingLoc] = useState(false);
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
    city: null,
    state: null,
  });
  const [distance, setDistance] = useState(1);
  const { token } = useAuth();
  // const scrollPos = useRef<any>();

  //LIST
  const [selectedJob, setSelectedJob] = useState<JobItemD>({} as JobItemD);
  const [list, setList] = useState<JobItemD[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [filterApplied, setFilterApplied] = useState(false);
  const [reset, setReset] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [orderDirection, setOrderDirection] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [activeSort, setActiveSort] = useState("Sort Job listing");
  const [lastPage, setlastPage] = useState<number>(res?.last_page);
  const { ref, inView, entry } = useInView();
  const [categories, setCategories] = useState([]);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    if (!res.data) return;
    const data = res?.data?.map((i: any) => formatJobRes(i))
    setList(data)
    setTotal(res?.total)
  }, [res])


  useEffect(() => {
    const fetchZip = async () => {
      try {


        setLoadingLoc(true);
        const res = await fetchZipApi({ zip: zip });
        setLoadingLoc(false);
        if (res.city) {
          setLocation((s) => {
            return {
              ...s,
              city: res.city,
              state: res.state,
              lat: res.lat,
              lon: res.lon,
            };
          });
        }
      } catch (err) {
        setLoadingLoc(false);
        console.log("Err", err);
      }
    };

    if (zip) {
      fetchZip();
    } else {
      setLocation((s: any) => ({ ...s, city: "", state: "", lat: 0, lon: 0 }));
    }
  }, [zip]);

  let catLabel = [...selected]
    .splice(0, 2)
    .map((i: any) => i.label)
    .join(", ");

  if (selected.length > 2) {
    catLabel = catLabel + " +" + (selected.length - 2);
  }

  /**
   * JOB LISTING
   */
  useEffect(() => {
    let active = true;

    let filtersApplied = false;

    let tt: string = "";
    const tt1 = localStorage.getItem("creds");
    if (tt1 && JSON.parse(tt1)?.token) {
      tt = JSON.parse(tt1)?.token;
    }


    const fetchAllJobs = debounce(async (applied) => {


      try {
        if (applied) {
          setLoading(true);
        } else {
          setLoading(false)
        }




        let res = await searchJobsApi({
          token: token || tt,
          ageMax: ageRange[1],
          ageMin: ageRange[0],
          categories: selected.map((i: any) => i.id),
          subcategories: selected
            .map((i: any) => i.sub?.map((i2: any) => i2.id))
            .flat(),
          distance: location.city ? distance : null,
          gender: gender,
          lat: location.lat || null,
          lon: location.lon || null,
          nationwide: zip.length > 0 ? true : null,
          searchstring: searchTerm,
          page: page,
          ethnicity: ethnicity
            ? ethnicity === "Any"
              ? null
              : ethnicity
            : null,
          perPage: CASTING_LIMIT,
          orderBy: orderBy,
          orderDirection: orderDirection,
          // categories: categories,
          casting_preferences_categories: categories,
        });

        setlastPage(res?.last_page);
        const data = res?.data?.map((i: any) => formatJobRes(i));

        if (active) {
          setTotal(Number(res.total));
          if (inView) {
            setList((s) => [...s, ...data]);
          } else {
            setList(data);
          }
        }

        setLoading(false)
      } catch (err) {
        setLoading(false);
        console.error("Err", err);
      }
    }, 1000);


    filtersApplied = (categories.length > 0 || gender !== null || ageRange[1] !== 100 || reset) ? true : false;
    // console.log("PPP,", (categories.length > 0 || gender !== null || ageRange[1] !== 100 || reset) ? true : false)




    if (filtersApplied || page > 1) {
      if (reset) {
        setReset(false);
      }
      fetchAllJobs(filtersApplied);
    }

    return () => {
      active = false;
    };
  }, [
    token,
    page,
    reset,
    gender,
    searchTerm,
    ageRange,
    orderDirection,
    orderBy,
    categories,
    markets,
  ]);

  // FAV JOBS

  const onFav = (id: number) => {
    const changeFav = async (val: boolean) => {
      try {
        if (!val) {
          const res = await removeFavJobApi({
            token,
            id: id,
          });
        } else {
          const res = await addFavJobApi({
            token,
            raw: {
              bam_casting_id: id,
            },
          });
        }
      } catch (err) {
        console.log("ERR", err);
      }
    };
    setList((s) =>
      s.map((i) => {
        if (i.id === id) {
          changeFav(!i.favorite);
          return {
            ...i,
            favorite: !i.favorite,
          };
        } else {
          return i;
        }
      })
    );
  };

  useEffect(() => {
    if (!inView) return;
    if (lastPage > page) {
      setPage((prev: number) => prev + 1);
    }
  }, [inView]);

  return (
    <Container className="padding-small">
      <BackToTop />
      <main
        className="lg:flex gap-10"
        style={{ maxWidth: "1530px", margin: "0 auto" }}
      >
        <div className="px-5 left">
          {/* <header className="flex flex-col md:flex-row justify-between items-center gap-5"> */}
          <H1 className="mb-5"><TranslatedText>Auditions, Jobs & Casting Calls</TranslatedText></H1>
          {/* </header> */}

          {/* <JobCategoryList setSelected={setSelected} selected={selected} /> */}
          {/* <JobCategoryListNew /> */}

          <Filters
            ethnicity={ethnicity}
            setEthnicity={setEthnicity}
            gender={gender}
            setGender={setGender}
            zip={zip}
            setZip={setZip}
            worldWide={worldWide}
            loadingLoc={loadingLoc}
            location={location}
            setDistance={setDistance}
            distance={distance}
            ageRange={ageRange}
            setAgeRange={setAgeRange}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setPage={setPage}
            setCategories={setCategories}
            onFind={() => {
              setFilterApplied(true);
            }}
            onReset={() => {
              setReset(true);
              setGender(null);
              setAgeRange([10, 40]);
              setSearchTerm("");
              setPage(1);
            }}
            markets={markets}
            setMarkets={setMarkets}
          />
          <div className="flex justify-between items-center my-10">
            <div className="text-xl font-bold">{total} <TranslatedText>Jobs</TranslatedText></div>
            {/* <div className="relative">
              <div
                onClick={() => setShowSort(true)}
                className="border-2 rounded-3xl bg-transparent cursor-pointer py-2 px-4 text-sm flex justify-between items-center">
                {activeSort}
                <span className="txt-primary ml-3"><MdOutlineKeyboardArrowDown className="text-xl -mr-2 md:-mr-5 xl:m-0" /></span>
              </div>
              {showSort &&
                <ClickAwayListener onClickAway={() => setShowSort(false)}>
                  <div className="absolute top-[55%] z-20 right-0 sm:left-[-10%]">
                    <div className="my-5 bg-pure rounded-[6px] min-w-[200px] shadow-md p-[3px]">
                      <ul>
                        <ListItem
                          active={activeSort === "Sort by latest listing"}
                          onClick={() => {
                            setOrderBy("asap")
                            setOrderDirection("DESC")
                            setPage(1)
                            setActiveSort("Sort by latest listing")
                            setShowSort(false)
                          }}>Sort by latest listing</ListItem>
                        <ListItem
                          active={activeSort === "Sort by oldest listing"}
                          onClick={() => {
                            setOrderBy("asap")
                            setOrderDirection("ASC")
                            setPage(1)
                            setActiveSort("Sort by oldest listing")
                            setShowSort(false)
                          }}>Sort by oldest listing</ListItem>
                      </ul>
                    </div>
                  </div>
                </ClickAwayListener>
              }
            </div> */}
          </div>
          <JobsList list={list} loading={loading} onFav={onFav} />
          <div ref={ref}>{loadMore && <Skel />}</div>
        </div>

        <aside className="right mt-5 sm:mt-0">
          <Advertisement />

          <div className="mb-5">
            <JobCart />
          </div>
          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }
`;

const ListItem = styled.ul<{ active?: boolean }>`
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  font-weight: 500;
  background-color: ${(p) =>
    p.active ? darken(0.05, p.theme.paper) : "transparent"};
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: ${(p) => darken(0.05, p.theme.paper)};
    border-radius: 5px;
    transition: all 0.2s ease;
  }
`;
