import { PrimaryBtnLightRounded } from "@/styles/Btn.styled";
import { H1 } from "@/styles/Typography.styled";
import BackToTop from "components/BackToTop";
import JobCart from "components/jobs/JobCart";
import JobCard from "components/jobs/JobCard";
import Pagination from "components/ProductPage/AuditionJobPage/JobsList/Pagination";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Container } from "./styles";
import Jobs from "..";
import { useAuth } from "context/AuthContext";
import { addFavJobApi, clearRecentlyViewedJobsApi, getViewedListApi, removeFavJobApi } from "network/apis/jobs";
import JobsList from "components/ProductPage/AuditionJobPage/JobsList";
import { formatJobRes } from "network/apiFormatter/jobs";
import CreateAccountBox from "components/CreateAccountBox";
import { useInView } from "react-intersection-observer";
import { CASTING_LIMIT } from "@/utils/constants";
import { JobItemD } from "types/jobs";
import Skel from "components/ProductPage/AuditionJobPage/JobsList/Skel";
import Spinner from "components/Spinner";
import Button from "components/Button";

export default function ViewedJobs() {
  const { token, auth: { authenticated } } = useAuth()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const [list, setList] = useState<JobItemD[]>([]);
  const [loading, setLoading] = useState(false)
  const [clearLoading, setClearLoading] = useState(false)
  const [showHistory, setShowHistory] = useState(true)
  const [lastPage, setlastPage] = useState<number>(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!token) return

    const getViewedJobs = async () => {
      try {
        setLoading(true)
        const res = await getViewedListApi({
          token,
          page: page,
          perPage: CASTING_LIMIT,
        })
        console.log('VIEWED RES: ', res)
        setlastPage(res?.last_page)
        const data = res?.data?.map((i: any) => formatJobRes(i.bam_casting));
        setList((s) => [...s, ...data]);
        setLoading(false)
      } catch (err) {
        console.log("Err", err)
        setLoading(false)
      }
    }
    getViewedJobs()
  }, [token, page])

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
    setList((s: any) =>
      s.map((i: any) => {
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

  const clearViewHistory = async () => {
    try {
      setClearLoading(true)
      const res = await clearRecentlyViewedJobsApi({ token })
      setList([])
      setClearLoading(false)
      setShowHistory(false)
      setList([])
    } catch (err) {
      console.log("Err", err)
      setClearLoading(false)
    }
  }

  const { ref, inView } = useInView();

  useEffect(() => {
    console.log("inView:", inView)
    if (!inView) return;

    if (lastPage > page) {
      setPage((prev: number) => prev + 1)
    }
  }, [inView])

  if (!authenticated) {
    return <CreateAccountBox />
  }

  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="padding-x lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <H1>Recently viewed jobs</H1>
            <Button primary light rounded loading={clearLoading} onClick={clearViewHistory}> <RiDeleteBin6Fill /> Clear&nbsp;all&nbsp;view&nbsp;history</Button>
          </div>

          <div>
            {
              showHistory &&
              <>
                {/* <h2 className="text-2xl mt-10 mb-5">Today</h2> */}
                <JobsList list={list} loading={loading} onFav={onFav} />

                {
                  list.length === 0 && <p className="mt-10">You have no recently viewed jobs.</p>
                }
              </>
            }
          </div>

          <div ref={ref}>
            {
              loading && <Skel />
            }
          </div>

          {/* <div>
            <Pagination postsPerPage={postsPerPage} totalPosts={30} paginate={paginate} />
          </div> */}
        </div>

        <aside className="right mt-5 lg:mt-0">
          <Advertisement />

          <div className="mb-5">
            {" "}
            <JobCart />{" "}
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
