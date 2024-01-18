import { H1 } from "@/styles/Typography.styled";
import { CASTING_LIMIT } from "@/utils/constants";
import BackToTop from "components/BackToTop";
import JobCart from "components/jobs/JobCart";
import JobCard from "components/jobs/JobCard";
import JobsList from "components/ProductPage/AuditionJobPage/JobsList";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import { useAuth } from "context/AuthContext";
import { formatJobRes } from "network/apiFormatter/jobs";
import { getFavJobsApi, removeFavJobApi } from "network/apis/jobs";
import { useCallback, useEffect, useRef, useState } from "react";
import { JobItemD } from "types/jobs";
import { Container } from "./styles";
import Pagination from "components/Pagination";
import { FaStar } from "react-icons/fa";
import CreateAccountBox from "components/CreateAccountBox";
import { useInView } from "react-intersection-observer";
import Skel from "components/ProductPage/AuditionJobPage/JobsList/Skel";

export default function FavoriteJobs() {
  const [selectedJob, setSelectedJob] = useState<JobItemD>({} as JobItemD);
  const [list, setList] = useState<JobItemD[]>([]);
  const [loading, setLoading] = useState(false);
  const { token, auth: { authenticated } } = useAuth();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [lastPage, setlastPage] = useState<number>(1);
  const { ref, inView, entry } = useInView();

  const fetchList = useCallback(
    async (more = false) => {
      if (!token) {
        return;
      }
      try {
        setLoading(true);

        const res = await getFavJobsApi({
          token,
          page: page,
          perPage: CASTING_LIMIT,
        });
        setlastPage(res?.last_page)
        const data = res.data.map((i: any) => formatJobRes(i));
        setTotal(Number(res.total));
        setList((s) => [...s, ...data]);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("Err", err);
      }
    },
    [token, page]
  );

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const onFav = async (id: number) => {
    try {
      const res = await removeFavJobApi({
        token,
        id: id,
      });
      setList((s) => s.filter((i) => i.id !== id));
    } catch (err) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
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
          <div className="flex items-center gap-2">
            <FaStar style={{ color: "#F59E0B", fontSize: 30 }} />
            <H1 className="mt-1 sm:mt-0">My Favorite Auditions/Jobs</H1>
          </div>
          <div className="mt-2 mb-5 sm:my-5 flex flex-col items-start lg:flex-row justify-between lg:items-center gap-2">
            <div className="text-xs sm:text-base">Jobs that you have saved as your favorite</div>
            {/* <select className="px-5 py-2 bg-transparent select-styled">
              <option>Sort by latest favorites</option>
            </select> */}
          </div>

          <JobsList list={list} loading={loading} onFav={onFav} />

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

/* 
            <ul>
              <li className="mb-5">
                <JobCard
                  heading="Casting for Visit Phoenix Commercial, $1"
                  description="Set in the early 1900s, this play brings to life the charming, heartwarming story... "
                  location="San Francisco, CA"
                  matchingRoles=""
                  roles=""
                  id=""
                  type=""
                  favorite=""
                  dateCreated="3/15/2022"
                  expiration="8/03/2022"
                  rolesCount=""
                  zip=""
                  showDelete={true}
                  showFav={false}
                />
              </li>
              <li className="mb-5">
                <JobCard
                  heading="Casting for Visit Phoenix Commercial, $1"
                  description="Set in the early 1900s, this play brings to life the charming, heartwarming story... "
                  location="San Francisco, CA"
                  matchingRoles=""
                  roles=""
                  id=""
                  type=""
                  favorite=""
                  dateCreated="3/15/2022"
                  expiration="8/03/2022"
                  rolesCount=""
                  zip=""
                  showDelete={true}
                  showFav={false}
                />
              </li>
              <li className="mb-5">
                <JobCard
                  heading="Casting for Visit Phoenix Commercial, $1"
                  description="Set in the early 1900s, this play brings to life the charming, heartwarming story... "
                  location="San Francisco, CA"
                  matchingRoles=""
                  roles=""
                  id=""
                  type=""
                  favorite=""
                  dateCreated="3/15/2022"
                  expiration="8/03/2022"
                  rolesCount=""
                  zip=""
                  showDelete={true}
                  showFav={false}
                />
              </li>
              <li className="mb-5">
                <JobCard
                  heading="Casting for Visit Phoenix Commercial, $1"
                  description="Set in the early 1900s, this play brings to life the charming, heartwarming story... "
                  location="San Francisco, CA"
                  matchingRoles=""
                  roles=""
                  id=""
                  type=""
                  favorite=""
                  dateCreated="3/15/2022"
                  expiration="8/03/2022"
                  rolesCount=""
                  zip=""
                  showDelete={true}
                  showFav={false}
                />
              </li>
              <li className="mb-5">
                <JobCard
                  heading="Casting for Visit Phoenix Commercial, $1"
                  description="Set in the early 1900s, this play brings to life the charming, heartwarming story... "
                  location="San Francisco, CA"
                  matchingRoles=""
                  roles=""
                  id=""
                  type=""
                  favorite=""
                  dateCreated="3/15/2022"
                  expiration="8/03/2022"
                  rolesCount=""
                  zip=""
                  showDelete={true}
                  showFav={false}
                />
              </li>
              <li className="mb-5">
                <JobCard
                  heading="Casting for Visit Phoenix Commercial, $1"
                  description="Set in the early 1900s, this play brings to life the charming, heartwarming story... "
                  location="San Francisco, CA"
                  matchingRoles=""
                  roles=""
                  id=""
                  type=""
                  favorite=""
                  dateCreated="3/15/2022"
                  expiration="8/03/2022"
                  rolesCount=""
                  zip=""
                  showDelete={true}
                  showFav={false}
                />
              </li>
            </ul> */
