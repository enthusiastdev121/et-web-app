import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Skel from "./Skel";
import JobCard from "components/jobs/JobCard";

export default function JobsList({
  list,
  loading,
  onFav,
  openApplyJobModal,
  onAddToCart,
  onApply
}: any) {

  return (
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
        {loading && <Skel />}
        <div>
          {list?.map((res: any, index: number) => {
            return (
              <JobCard
                key={index}
                id={res.id}
                rate={res.rate}
                heading={res.title}
                description={res.desc}
                location={res.location}
                rateDes={res.rateDes}
                favorite={res.favorite}
                matchingRoles={""}
                roles={res.roles}
                type={res.type}
                dateCreated={res.createdAt}
                expiration={res.expiration}
                rolesCount={res.rolesCount}
                zip={res.zip}
                onFav={onFav}
                openApplyJobModal={openApplyJobModal}
                onAddToCart={onAddToCart}
                onApply={onApply}
                {...res}
              />
            );
          })}
        </div>
      </motion.div >
    </ >
  );
}
