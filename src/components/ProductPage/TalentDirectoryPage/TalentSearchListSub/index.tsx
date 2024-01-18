import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import { ListContainer } from "./TalentSearchList.styled";
import Skel from "./Skel";
import TalentCard from "components/Talent/TalentCard";
import { formatTalentRes } from "network/apiFormatter/talent";
import PaginationNew from "./PaginationNew";
import { useRouter } from "next/router";
import { TALENTLIMIT } from "@/utils/constants";
import { read } from "fs";

export default function TalentSearchSubList({ talentData, Loading }: any) {
  const [loading, setLoading] = useState(Loading);
  const route = useRouter();

  const currentTableData = (page: any) => {
    setLoading(true)
    // route.push("/search-talent/all-search-talent/" + page);
    if (route.asPath.split("?").length == 2) {
      route.push('/search-talent/all-search-talent-sub/' + page + "?" + route.asPath.split("?")[1]);
    } else {
      route.push('/search-talent/all-search-talent-sub/' + page);
    }
  };

  useEffect(() => {
    setLoading(talentData.is_loading);
  }, [talentData]);

  useEffect(() => {
    setLoading(Loading);
  }, [Loading]);


  return (
    <div>
      {loading && <Skel />}
      {
        !loading &&
        <>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ListContainer className="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  xl:gap-4 lg:gap-3 md:gap-2 gap-0">
              {talentData?.talent_data?.map((data: any, index: number) => {
                const res = formatTalentRes(data);
                return <TalentCard profile_picture_path={res.profile_picture_path}
                  name={res?.name}
                  city={res.city}
                  key={index}
                  talentName={res.talentName}
                  stateData={res.stateData}
                  pathVideo={res.pathVideo}
                  is_video={res.is_video}
                  ageRange={res.ageRange}
                />;
              })}
            </ListContainer>
          </motion.div>

          {talentData?.talent_data.length > 0 && (
            <>
              {/* <Pagination
      postsPerPage={postsPerPage}
      totalPosts={talentData?.total_size}
      currentPage={talentData.page_no}
      is_load={talentData.is_loading}

    /> */}

              <PaginationNew className="pagination-bar" currentPage={parseInt(talentData.page_no)} totalCount={parseInt(talentData?.total_size)} pageSize={TALENTLIMIT} siblingCount={2} onPageChange={(page: any) => currentTableData(page)} />
            </>
          )}
        </>
      }


    </div>
  );
}
