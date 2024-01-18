import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classNames from "classnames";

import { formatDate } from "@/utils/helper";
import { JobItemD } from "types/jobs";
import { getHomeListingApi } from "network/apis/jobs";
import { formatJobRes } from "network/apiFormatter/jobs";

const TABS = [
  {
    id: 1,
    label: "Acting",
    categoryId: 1,
  },
  {
    id: 2,
    label: "Modeling",
    categoryId: 3,
  },
  {
    id: 3,
    label: "Musicians",
    categoryId: 6,
  },
  {
    id: 4,
    label: "Dance",
    categoryId: 9,
  },
  {
    id: 5,
    label: "Crew",
    categoryId: 10,
  },
];

export default function AllJobs({ jobs }: { jobs: JobItemD[] }) {
  const [activeJobs, setActiveJobs] = useState<JobItemD[]>([...jobs]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [loading, setLoading] = useState(false);

  // const [job, setJob] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const res = await getJobListingApi({ page: 1, perPage: LIMIT });
  //     setJob(res.data); 
  //     setLoading(false);
  //   };
  //   getJobs();
  // }, []);

  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getHomeListingApi({
        page: 1,
        perPage: 10,
        categoryId: activeCategory,
      });
      setActiveJobs(res.data?.map((i: any) => formatJobRes(i)));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory === 1) {
      setActiveJobs(jobs);
    } else {
      fetchJobs();
    }
  }, [activeCategory, jobs, fetchJobs]);

  return (
    <div className="overflow-x-scroll no-scroll flex-1 mb-20 lg:mb-0 w-80v md:w-full ">
      <div>
        {TABS.map((i) => {
          return (
            <button
              key={i.id}
              className={classNames(
                { "active-btn-dashed": activeCategory === i.categoryId },
                "dashed-border my-1"
              )}
              onClick={() => setActiveCategory(i.categoryId)}
            >
              {i.label}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="mt-2">
          <Skeleton
            count={20}
            style={{ height: 60, borderRadius: 8, marginBottom: 4 }}
          />
        </div>
      ) : (
        <table>
          <thead>
            <tr className="text-left uppercase font-semibold text-gray-500 border-b-2 border-gray-500">
              <th className="p-3 pr-5 w-48">Title</th>
              <th className="pr-5 w-48">Location</th>
              <th className="pr-5 w-48">Type</th>
              <th className="pr-5 w-42">Expires</th>
            </tr>
          </thead>
          <tbody>
            {activeJobs?.map((job, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="font-semibold p-3">{job.title}</td>
                <td>{job.location}</td>
                <td>{""}</td>
                <td>{formatDate(job.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
