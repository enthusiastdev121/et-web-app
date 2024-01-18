import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import { ListContainer } from "./TalentSpotlightList.styled";
import Pagination from "./Pagination";
import Skel from "./Skel";
import { formatTalentRes } from "network/apiFormatter/talent";
import { getSearchTalentApi } from "network/apis/searchTatent";
import TalentSpotlightCard from "components/Talent/TalentSpotlightCard";
import { TALENTLIMIT } from "@/utils/constants";
import { TalentRes } from "types/talents";

export default function TalentSpotlightList() {
  const [talent, setTalent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalSize, setTotalSize] = useState();
  const [postsPerPage] = useState(20);
  const [loading, setLoading] = useState(true);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  useEffect(() => {
    getSearchTalent();
  }, []);

  useEffect(() => {
    if (currentPage) {
      getSearchTalent();
    }
  }, [currentPage]);

  const getSearchTalent = async () => {
    const res = await getSearchTalentApi({ page: currentPage, perPage: TALENTLIMIT });
    const data = res?.data?.map((i: any) => formatTalentRes(i))
    setTalent(data);
    setTotalSize(res.total);
    setLoading(false);
  };

  return (
    <div>
      {loading && <Skel />}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ListContainer className="grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-4 md:gap-3 xs:gap-2 gap-0">
          {talent.map((res: TalentRes, index) => {
            return <TalentSpotlightCard profile_picture_path={res.profile_picture_path} name={res?.name} city={res.city} key={index} />;
          })}
        </ListContainer>
      </motion.div>
      {totalSize && <Pagination postsPerPage={postsPerPage} totalPosts={totalSize} paginate={paginate} />}
    </div>
  );
}
