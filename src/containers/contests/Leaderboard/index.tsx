import { useState, useEffect } from "react";

import Card from "./Card";
import Navbar from "./Nav";
import { getContestLeaderboardApi } from "network/apis/contest";
import { PrimaryBtn } from "@/styles/Btn.styled";
import { LeaderBoardContainer } from "./styles";
import Skel from "./Skel";
import { formatLeaderboardItem } from "network/apiFormatter/contest";
import { useRouter } from "next/router";
import { useAuth } from "context/AuthContext";
import PaginationNew from "./PaginationNew";

export default function Leaderboard({
  viewAll = false,
  id,
  contest_name,
  accept_video,
  accept_pic
}: {
  viewAll: boolean;
  id: any;
  contest_name: string;
  accept_video: string;
  accept_pic: string;
}) {
  const router = useRouter();
  const {
    token
  } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const { filter } = router.query;

  const [dataLeadership, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const FilterFeatured = (data: any) => {
    const FeaturedData = data.filter((f: any) => f?.bam_talentci.is_featured);
    return FeaturedData;
  };

  const FilterNewest = (data: any) => {
    const Newest = data.sort((a: any, b: any) =>
      a.date_created > b.date_created
        ? -1
        : b.date_created > a.date_created
          ? 1
          : 0
    );
    return Newest;
  };

  const FilterHighestRated = (data: any) => {
    const HighestRated = data.sort((a: any, b: any) =>
      a.score > b.score ? -1 : b.score > a.score ? 1 : 0
    );
    return HighestRated;
  };

  const FilterMostRated = (data: any) => {
    const MostRated = data.sort((a: any, b: any) =>
      a.calculated_score_count > b.calculated_score_count
        ? -1
        : b.calculated_score_count > a.calculated_score_count
          ? 1
          : 0
    );
    return MostRated;
  };

  const FilterOldest = (data: any) => {
    const Oldest = data.sort((a: any, b: any) =>
      a.date_created > b.date_created
        ? 1
        : b.date_created > a.date_created
          ? -1
          : 0
    );
    return Oldest;
  };

  useEffect(() => {
    if (filter) {
      const getData = async () => {
        const leaderboardRes = await getContestLeaderboardApi(id, currentPage, 9, token, filter.toString());
        setData(leaderboardRes);
        setLoading(false);
      };
      getData();
    } else {
      const getData = async () => {
        const leaderboardRes = await getContestLeaderboardApi(id, currentPage, 9, token, "");
        // const data = FilterFeatured();
        setData(leaderboardRes);
        setLoading(false);
      };
      getData();
    }

  }, [token, filter]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const leaderboardRes = await getContestLeaderboardApi(id, 1, 50, token, "");
  //     if (filter === "featured") {
  //       const data = FilterFeatured(leaderboardRes?.data);
  //       setData(data);
  //     } else if (filter === "newest") {
  //       const data = FilterNewest(leaderboardRes?.data);
  //       setData(data);
  //     } else if (filter === "highest-rated") {
  //       const data = FilterHighestRated(leaderboardRes?.data);
  //       setData(data);
  //     } else if (filter === "most-rated") {
  //       const data = FilterMostRated(leaderboardRes?.data);
  //       setData(data);
  //     } else if (filter === "oldest") {
  //       const data = FilterOldest(leaderboardRes?.data);
  //       setData(data);
  //     } else {
  //       setData(leaderboardRes?.data);
  //     }
  //     setLoading(false);
  //   };
  //   getData();
  // }, [token]);

  const currentTableData = async (page: any) => {

    if (filter) {
      setLoading(true);
      setCurrentPage(page)
      const leaderboardRes = await getContestLeaderboardApi(id, page, 9, token, filter.toString());
      // const data = FilterFeatured();
      setData(leaderboardRes);
      setLoading(false);
    } else {
      setLoading(true);
      setCurrentPage(page)
      const leaderboardRes = await getContestLeaderboardApi(id, page, 9, token, "");
      // const data = FilterFeatured();
      setData(leaderboardRes);
      setLoading(false);
    }

  };

  return (
    <LeaderBoardContainer>
      <div className="mt-10 mb-5 padding-x sm:px-0">
        <Navbar />
      </div>

      <div className="padding-x">
        {loading && <Skel />}
        {!loading &&
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {dataLeadership && dataLeadership.data !== [] &&
                dataLeadership?.data?.map((item: any, index: number, elements: any) => {
                  const res = formatLeaderboardItem(item);
                  return (
                    <Card
                      key={index}
                      img={res?.pic}
                      entryImage={res?.entryImage}
                      name={res?.name}
                      votes={res?.votes}
                      score={res?.score}
                      views={res?.views}
                      featured={res?.featured}
                      contest_id={id}
                      contest_name={contest_name}
                      title={res?.title}
                      cm_id={res?.cm_id}
                      talentnum={res?.id}
                      accept_pic={accept_pic}
                      accept_video={accept_video}
                      video={res?.video}
                      is_voted={res?.is_voted}
                      user_rating={res?.user_rating}

                    />
                  );
                })}
            </div>

            {dataLeadership?.total && (
              <>
                {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={talentData?.total_size}
            currentPage={talentData.page_no}
            is_load={talentData.is_loading}

          /> */}

                <PaginationNew className="pagination-bar ssss" currentPage={currentPage} totalCount={parseInt(dataLeadership?.total)} pageSize={9} siblingCount={2} onPageChange={(page: any) => { setLoading(true), currentTableData(page) }} />
              </>
            )}
          </>
        }

        {viewAll && (
          <div className="text-center mt-10">
            <PrimaryBtn className="btn">View All Current Contests</PrimaryBtn>
          </div>
        )}
      </div>
    </LeaderBoardContainer>
  );
}
