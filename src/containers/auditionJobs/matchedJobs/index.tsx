import AsideRight from "../../../components/ProductPage/AuditionJobPage/AsideRight";
import JobsList from "../../../components/ProductPage/AuditionJobPage/JobsList";
import SuccessStories from "../../SuccessStories";
import FindCasting from "./FindCasting";
import MyJobs from "../../../components/ProductPage/AuditionJobPage/MyJobs";
import { useAuth } from "context/AuthContext";
import CreateAccountBox from "../../../components/CreateAccountBox";
import UpgradeToPro from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import { PrimaryBtnLight, PrimaryBtnLightRounded } from "@/styles/Btn.styled";
import { HiPencil } from "react-icons/hi";
import { H1 } from "@/styles/Typography.styled";
import { Container } from "./styles";
import BackToTop from "components/BackToTop";
import { useCallback, useEffect, useRef, useState } from "react";
import { addFavJobApi, getMatchedJobsApi, removeFavJobApi, searchJobsApi } from "network/apis/jobs";
import { CASTING_LIMIT } from "@/utils/constants";
import { formatJobRes } from "network/apiFormatter/jobs";
import { JobItemD } from "types/jobs";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Modal from "components/Modal";
import ProJobApplication from "containers/ProJobApplication";
import Pagination from "components/Pagination";
import styled from "styled-components";
import { darken, rgba } from "polished";
import Button from "components/Button";
import { AiOutlineDollar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import ClickAwayListener from "react-click-away-listener";
import Filters from "./Filters";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Skel from "components/ProductPage/AuditionJobPage/JobsList/Skel";
import { debounce } from "lodash";

export default function MatchedJobs() {
  const {
    auth: { authenticated },
  } = useAuth();
  const { token } = useAuth();

  const [selectedJob, setSelectedJob] = useState<JobItemD>({} as JobItemD);
  const [modalOpen, setModalOpen] = useState(false);
  const [list, setList] = useState<JobItemD[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openApplyJobModal = () => setShowModal(true);
  const closeApplyJobModal = () => setShowModal(false);
  const [projectType, setProjectType] = useState<0 | 1 | 2 | 3 | "Any">()
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [rateMin, setRateMin] = useState()
  const [rateMax, setRateMax] = useState()
  const [showPrices, setShowPrices] = useState(false)
  const [priceRange, setPriceRange] = useState({
    min: "1", max: "1000"
  })
  const [showSort, setShowSort] = useState(false)
  const [activeSort, setActiveSort] = useState("Sort Job listing")
  const [orderBy, setOrderBy] = useState("")
  const [orderDirection, setOrderDirection] = useState("")
  const [lastPage, setlastPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState("");

  const onReset = () => {
    setProjectType(undefined)
    setOrderBy("")
    setOrderDirection("")
    setSearchTerm("")
    setRateMin(0)
    setRateMax(0)
  }

  useEffect(() => {
    if (!showPrices) return;

    setRateMin(priceRange.min)
    setRateMax(priceRange.max)
  }, [priceRange, showPrices])

  // const fetchList = useCallback(
  //   async (more = false) => {
  //     if (!token) {
  //       return;
  //     }

  //     try {
  //       setLoading(true);
  //       const res = await getMatchedJobsApi({
  //         token,
  //         page: page,
  //         perPage: CASTING_LIMIT,
  //         projectType,
  //         rateMin,
  //         rateMax,
  //         orderBy,
  //         searchstring: searchTerm,
  //       });
  //       setlastPage(res?.last_page)

  //       console.log("RES DATA: ", res.data)

  //       const data = res.data.map((i: any) => formatJobRes(i));
  //       setTotal(Number(res.total));

  //       setList((s) => [...s, ...data]);

  //       setLoading(false);
  //     } catch (err) {
  //       setLoading(false);
  //       console.log("Err", err);
  //     }
  //   },
  //   [token, page, projectType, rateMin, rateMax, orderBy, searchTerm]
  // );

  // useEffect(() => {
  //   fetchList();
  // }, [fetchList]);


  useEffect(() => {
    console.log("Ran")
    let active = true;
    const fetchMatchedJobs = debounce(async (more = false) => {
      if (!token) {
        return;
      }

      try {
        setLoading(true);
        const res = await searchJobsApi({
          token,
          page: page,
          perPage: CASTING_LIMIT,
          projectType,
          rateMin,
          rateMax,
          orderBy,
          searchstring: searchTerm,
          matched: true,
          orderDirection,
        });
        setlastPage(res?.last_page)

        console.log("RES DATA: ", res.data)

        const data = res.data.map((i: any) => formatJobRes(i));

        if (active) {
          setTotal(Number(res.total));
        }

        if (active) {
          if (inView) {
            console.log("ran append: ")
            setList((s) => [...s, ...data]);
          } else {
            console.log("ran replace: ")
            setList(data)
          }
        }

        console.log('List: ', list)
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("Err", err);
      }
    }, 1000)

    fetchMatchedJobs()

    return () => {
      active = false;
    }
  }, [token, page, projectType, rateMin, rateMax, orderBy, searchTerm, orderDirection]);

  const onFav = (id: number) => {
    const changeFav = async (val: boolean) => {
      try {
        if (!val) {
          const res = await removeFavJobApi({
            token,
            id: id,
          });
          console.log("FAV REMOVED", res);
        } else {
          const res = await addFavJobApi({
            token,
            raw: {
              bam_casting_id: id,
            },
          });
          console.log("FAV ADDED", res);
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

  const { ref, inView, entry } = useInView();

  useEffect(() => {
    console.log("inView:", inView)
    if (!inView) return;

    if (lastPage === page) return

    if (list?.length === 0) return

    if (lastPage > page) {
      setPage((prev: number) => prev + 1)
    }
  }, [inView])

  return (
    <>
      {authenticated ? (
        <Container className="padding-small ">
          <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {showModal && (
              <Modal handleClose={closeApplyJobModal}>
                <ProJobApplication handleClose={closeApplyJobModal} />
              </Modal>
            )}
          </AnimatePresence>

          <BackToTop />

          <div className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
            <main className="left">
              <div className="mobile-padding">
                <div className="justBtw flex items-center justify-between gap-3">
                  <H1>My Matched Jobs</H1>
                  <Link href="/auditions/preferences" passHref>
                    <PrimaryBtnLightRounded className="btn flex items-center gap-1 text-[13px] md:text-base" style={{ padding: "0.3em 1em" }}>
                      <HiPencil style={{ fontSize: 14 }} /> Job&nbsp;preferences
                    </PrimaryBtnLightRounded>
                  </Link>
                </div>

                <div className="my-5 text-sm sm:text-base">Jobs matched you by your Auditions/Jobs Preferences.</div>

                {/* FILTERS */}
                <Filters
                  setProjectType={setProjectType}
                  setRateMax={setRateMax}
                  setRateMin={setRateMin}
                  setPriceRange={setPriceRange}
                  priceRange={priceRange}
                  showPrices={showPrices}
                  setShowPrices={setShowPrices}
                  setSearchTerm={setSearchTerm}
                  onReset={onReset}
                  searchTerm={searchTerm}
                  setPage={setPage}
                />

                {/* <FindCasting /> */}
                <div className="flex justify-between items-center sm:items-start gap-3 my-5">
                  <div className="text-sm font-bold sm:text-2xl">{total > 0 && `${total} matched jobs available`}</div>

                  {/* <div className="relative min-w-[150px] sm:min-w-[160px]">
                    <div
                      onClick={() => setShowSort(true)}
                      className="text-xs border-2 rounded-3xl bg-transparent cursor-pointer py-2 px-4 sm:text-sm flex justify-between items-center">
                      {activeSort}
                      <span className="txt-primary ml-3"><MdOutlineKeyboardArrowDown className="text-xl -mr-4 xl:m-0" /></span>
                    </div>
                    {showSort &&
                      <ClickAwayListener onClickAway={() => setShowSort(false)}>
                        <div className="absolute top-[55%] z-20 right-0 sm:left-[-10%]">
                          <div className="my-5 bg-pure rounded-[6px] min-w-[200px] shadow-md p-[3px]">
                            <ul>
                              <ListItem
                                active={activeSort === "Sort by latest listing"}
                                onClick={() => {
                                  setOrderBy("sub_timestamp")
                                  setOrderDirection("DESC")
                                  setActiveSort("Sort by latest listing")
                                  setShowSort(false)
                                  setPage(1)
                                }}>Sort by latest listing</ListItem>
                              <ListItem
                                active={activeSort === "Sort by oldest listing"}
                                onClick={() => {
                                  setOrderBy("sub_timestamp")
                                  setOrderDirection("ASC")
                                  setActiveSort("Sort by oldest listing")
                                  setShowSort(false)
                                  setPage(1)
                                }}>Sort by oldest listing</ListItem>

                            </ul>
                          </div>
                        </div>
                      </ClickAwayListener>
                    }
                  </div> */}
                </div>
              </div>

              <div className="mx-5 sm:mx-0">
                <JobsList list={list} loading={loading} onFav={onFav} openApplyJobModal={openApplyJobModal} />
              </div>

              <div ref={ref}>
                {
                  loading && <Skel />
                }
              </div>

              {/* {!loading && total > CASTING_LIMIT && (
                <div className="flex justify-center py-6">
                  <Pagination
                    current={page}
                    total={total}
                    pageSize={CASTING_LIMIT}
                    onChange={(e) => {
                      // scrollPos.current?.scrollIntoView();
                      setPage(e);
                    }}
                  />
                </div>
              )} */}
            </main>

            <aside className="right">
              <div className="mb-5">
                <UpgradeToPro />
              </div>
              <div className="mb-5">
                <JobCart />
              </div>
              <SuccessStories />
            </aside>
          </div>
        </Container>
      ) : (
        <CreateAccountBox />
      )}
    </>
  );
}

const ListItem = styled.ul<{ active?: boolean }>` 
        padding: 0.5rem 1.25rem;
        cursor: pointer;
        font-weight: 500;
        background-color: ${(p) => p.active ? darken(0.05, p.theme.paper) : 'transparent'};
        border-radius: 5px;
        font-size: 14px;
 
    &:hover {
        background-color: ${(p) => darken(0.05, p.theme.paper)};
        border-radius: 5px;
        transition: all 0.2s ease;
    }
`