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
import { resolve } from "path";
import { TalentRes } from "types/talents";
import { hi } from "date-fns/locale";

export default function TalentSearchList({ talentData, Loading, page, setPage }: any) {
  const [loading, setLoading] = useState(Loading);
  const route = useRouter();

  const activePage = route.query.pageno;

  // useEffect(() => {
  //   setLoading(talentData.is_loading);
  // }, [talentData]);

  useEffect(() => {
    setLoading(Loading);
  }, [Loading]);

  const talents = talentData?.map((data: any) => formatTalentRes(data))

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
            <ListContainer className="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2   xl:gap-4 lg:gap-3 md:gap-2 gap-2">
              {talents?.map((res: TalentRes, index: number) => {
                return <TalentCard profile_picture_path={res.profile_picture_path}
                  name={res?.name}
                  city={res?.city}
                  key={res.talentName}
                  talentName={res?.talentName}
                  stateData={res?.stateData}
                  pathVideo={res?.pathVideo}
                  is_video={res?.is_video}
                  ageRange={res?.ageRange}
                // key={random.Math()}
                />
              })}
            </ListContainer>
          </motion.div>
        </>
      }
    </div>
  );
}
