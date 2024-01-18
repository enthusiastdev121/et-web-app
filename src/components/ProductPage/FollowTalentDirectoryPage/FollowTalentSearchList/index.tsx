
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import { ListContainer } from "./FollowTalentSearchList.styled";
import Pagination from "./Pagination";
import Skel from "./Skel";
import { formatConnectionTalentRes, formatFollowingTalentRes } from "network/apiFormatter/talent";
import FollowTalentCard from "components/Talent/FollowTalentCard";
import Skeleton from "react-loading-skeleton";
import { THEME } from "@/utils/constants/theme";


export default function FollowTalentSearchList({ loading, selectedTab, paginate, totalSize, talent, setTalent, postsPerPage, refress }: any) {

  const refressTo = (data: any) => {
    refress(data)
  }

  return (
    <div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ListContainer className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2  xl:gap-4 lg:gap-3 md:gap-2 gap-2 px-2  sm:px-0">
          {
            loading ?

              [1, 2, 3].map((i) => {
                return (
                  <div key={i}>
                    <Skeleton style={{
                      width: '100%',
                      borderRadius: 8,
                      minHeight: 300,
                      height: '100%'
                    }} />
                  </div>
                );
              })

              :

              talent.length > 0 && talent.map((data: any, index: number) => {
                const res = selectedTab === "friends" ? formatConnectionTalentRes(data) : formatFollowingTalentRes(data);
                return <FollowTalentCard
                  res={res}
                  profile_picture_path={res.profile_picture_path}
                  name={res?.name}
                  key={index}
                  is_follower={res.is_follower}
                  is_following={res.is_following}
                  is_friend={res.is_friend}
                  profile_id={res.profile_id}
                  refressTO={refressTo}
                  talentnum={res.talentnum}
                  setTalent={setTalent}
                  talentlogin={res.talentlogin}
                />;
              })}
          {talent == 0 &&
            <p>No Record Found </p>
          }
        </ListContainer>
      </motion.div>
      {totalSize != 0 && <Pagination postsPerPage={postsPerPage} totalPosts={totalSize} paginate={paginate} />}
    </div>
  );
}
