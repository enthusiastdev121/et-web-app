import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { PrimaryBtnSingle } from "../../../styles/Btn.styled";
import { getJobListingApi } from "../../../network/apis/jobs";
import { LIMIT } from "../../../utils/constants";
import { JobItemD } from "types/jobs";

export default function FeaturedJobs({ jobs = [] }: { jobs: JobItemD[] }) {
  // const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const res = await getJobListingApi({ page: 1, perPage: 8 });
  //     setJob(res.data); 
  //     setLoading(false);
  //   };
  //   getJobs();
  // }, []);
  return (
    <div className="min-h-screen ">
      <Heading className="rounded p-2 text-center text-lg lg:px-16 xl:px-16">Featured Auditions and Jobs</Heading>
      <table className="text-left borderSpace">
        <thead>
          <tr className="text-gray-500 font-semibold uppercase">
            <th>Title / Locations</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <Row key={index} description={job.title} rate={job.rate} location={job.location} />
          ))}
        </tbody>
      </table>
      <div className="text-right mt-5">
        <Link href="/" passHref>
          <PrimaryBtnSingle>View All &#62;</PrimaryBtnSingle>
        </Link>
      </div>
    </div>
  );
}

const Heading = styled.h3`
  background-color: ${(props) => props.theme.secondaryBtn};
  color: ${(props) => props.theme.secondaryBtnClr};
`;

function Row({ description, rate, location }: any) {
  return (
    <tr>
      <td>
        <p>{description}</p>
        <small>
          <Image src="/svg/location-pin.svg" height={9} width={7} alt="location pin" />
          <span className="ml-3 text-gray-600">{location}</span>
        </small>
      </td>
      <td>${rate}</td>
    </tr>
  );
}

// export async function getServerSideProps() {
//   try {
//     const res = await getJobListingApi({ page: 1, perPage: LIMIT });
//     return {
//       props: {
//         jobs: res,
//       },
//     };
//   } catch (err) {
//     console.log("Err", err);
//   }
// }
