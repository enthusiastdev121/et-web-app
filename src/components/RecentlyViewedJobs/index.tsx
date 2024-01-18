import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

import { PrimaryBtnOutline, PrimaryBtnSingle } from "@/styles/Btn.styled";
import { Container } from "./Styles";
import { useEffect, useState } from "react";
import { formatJobRes } from "network/apiFormatter/jobs";
import { CASTING_LIMIT } from "@/utils/constants";
import { getViewedListApi } from "network/apis/jobs";
import { useAuth } from "context/AuthContext";
import { JobItemD } from "types/jobs";
import Spinner from "components/Spinner";
import Link from "next/link";
import { formatAudtionDetailSlug } from "@/utils/helper";

// const dummyData = [
//   {
//     id: 1,
//     title: `Voice Acting for "Raging Loop Fandub"`,
//     description:
//       "Needing 2 models for a new clothing brand shoot. The brand is CHEER UP SKIIP, a company started by myself as a dream project after completing 1 year of sobriety last Novem...",
//     location: "Washington, DC",
//     availableRoles: 8,
//     matchedRoles: 2,
//   },
//   {
//     id: 2,
//     title: `Voice Acting for "Raging Loop Fandub"`,
//     description:
//       "Needing 2 models for a new clothing brand shoot. The brand is CHEER UP SKIIP, a company started by myself as a dream project after completing 1 year of sobriety last Novem...",
//     location: "Cleveland, OH",
//     availableRoles: 2,
//     matchedRoles: 0,
//   },
//   {
//     id: 3,
//     title: `Voice Acting for "Raging Loop Fandub"`,
//     description:
//       "Needing 2 models for a new clothing brand shoot. The brand is CHEER UP SKIIP, a company started by myself as a dream project after completing 1 year of sobriety last Novem...",
//     location: "Los Angeles, CA",
//     availableRoles: 4,
//     matchedRoles: 1,
//   },
//   {
//     id: 4,
//     title: `Voice Acting for "Raging Loop Fandub"`,
//     description:
//       "Needing 2 models for a new clothing brand shoot. The brand is CHEER UP SKIIP, a company started by myself as a dream project after completing 1 year of sobriety last Novem...",
//     location: "Cleveland, OH",
//     availableRoles: 6,
//     matchedRoles: 0,
//   },
// ];

export default function RecentlyViewedJobs() {

  const { token } = useAuth()
  const [list, setList] = useState<JobItemD[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!token) return

    const getViewedJobs = async () => {
      try {
        setLoading(true)
        const res = await getViewedListApi({
          token,
          page: 1,
          perPage: CASTING_LIMIT,
        })
        const data = res?.data?.map((i: any) => formatJobRes(i.bam_casting));
        setList((s) => [...s, ...data]);
        setLoading(false)
      } catch (err) {
        console.log("Err", err)
        setLoading(false)
      }
    }
    getViewedJobs()
  }, [token])

  return (
    <Container className="p-5 rounded">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold">Recently viewed</h3>
        <Link href='/auditions/viewed' passHref>
          <PrimaryBtnSingle>view&nbsp;all</PrimaryBtnSingle>
        </Link>
      </div>

      {
        loading && <div className="w-full py-20 flex items-center justify-center"><Spinner primary /></div>
      }

      <ul className="no-scroll">
        {list.map((data: JobItemD) => (
          <li key={data.id}>
            <Link href={`/auditions/${formatAudtionDetailSlug(data.title + " " + location + " " + data.zip, data.id)}`} passHref>
              <h4>{data.title}</h4>
            </Link>
            <p className="py-3">{data?.desc?.slice(0, 200)}</p>
            <div className="flex items-center justify-between secondary-info">
              <div className="flex items-center gap-2">
                <HiLocationMarker /> {data.location}
              </div>

              <div className="flex items-center gap-2 font-semibold">
                {data.rolesCount} Available Roles{" "}
                {/* {data.matchedRoles > 0 && (
                  <span className="flex items-center matched-star">
                    <AiFillStar style={{ marginRight: "1px" }} />{" "}
                    {data.matchedRoles}
                  </span>
                )} */}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Link href='/auditions/viewed' passHref>
        <PrimaryBtnOutline className="btn w-full text-base mt-5">
          View&nbsp;all
        </PrimaryBtnOutline>
      </Link>
    </Container>
  );
}
