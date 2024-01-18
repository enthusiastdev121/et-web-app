import Link from "next/link";

import { JobDescriptionContainer, Note, PageContainer, Warning } from "./AuditionDetail.styled";
import UpgradeToPro from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import RoleCard from "components/jobs/JobCard/RoleCard";
import Breadcrumb from "./Breadcrumb";
import RecentlyViewedJobs from "components/RecentlyViewedJobs";
import SimilarJobs from "components/SimilarJobs";
import BackToTop from "components/BackToTop";
import { JobItemD } from "types/jobs";
import { useEffect, useState } from "react";
import { addFavJobApi, getJobByIdApi, removeFavJobApi, setJobViewedApi } from "network/apis/jobs";
import { useRouter } from "next/router";
import { useAuth } from "context/AuthContext";
import { formatJobRes } from "network/apiFormatter/jobs";
import { H1 } from "@/styles/Typography.styled";
import { HiMail } from "react-icons/hi";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { THEME } from "@/utils/constants/theme";
import { join } from "path";

import ReactTimeAgo from 'react-time-ago'
import OverlayLoader from "components/OverlayLoader";

export default function AuditionDetial({ res, routeId }: any) {
  const [job, setJob] = useState({} as JobItemD);
  const { token, auth: { authenticated } } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (res) {
      setJob(res);
    } else {
    }
  }, [res]);





  useEffect(() => {
    const fetchNow = async () => {
      try {
        setLoading(true);
        const res1 = await getJobByIdApi({ id: routeId, token });
        const res2 = await setJobViewedApi({ token, raw: { bam_casting_id: routeId } })
        if (res1) {
          setJob(formatJobRes(res1));
        }

      } catch (err) {
        console.log("Err", err);
      }
      finally {
        setLoading(false);
      }
    };

    if (token && routeId) {
      fetchNow();
    }
  }, [token, routeId]);

  const onFav = async () => {
    const val = job?.favorite;
    setJob((s) => ({ ...s, favorite: !s?.favorite }));
    try {
      if (val) {
        const res = await removeFavJobApi({
          token,
          id: job.id,
        });
      } else {
        const res = await addFavJobApi({
          token,
          raw: {
            bam_casting_id: job.id,
          },
        });
      }
    } catch (err) {
      console.log("ERR", err);
    }
  };

  console.log("JOB", job)

  return (
    <PageContainer className="padding-small text-sm">
      {loading &&
        <OverlayLoader />}
      <BackToTop />
      <div className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <main className="left ">
          <div className="mb-5">
            <Breadcrumb title={job.title} />
          </div>

          <div className="mb-5">
            <JobDescriptionContainer className="txt-base">
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <H1>{job?.title}</H1>
                {/* <BiDotsVerticalRounded className="text-lg" /> */}

                {authenticated && <div className={` flex gap-1 rounded-full px-3 cursor-pointer py-2 items-center ${job?.favorite ? "text-yellow-500 bg-yellow-50" : "text-gray-500 bg-gray-200"}`} onClick={onFav}>
                  <FaStar className="text-2xl" />
                  <div className="font-medium">{job?.favorite ? "Remove from favorite" : "Mark as favorite"}</div>
                </div>}
              </div>

              <p
                className="my-3 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: res?.desc,
                }}
              />


              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="mt-5">
                  <h3 className="font-bold mb-2">Casting #{job.id}</h3>
                  <ul className="font-semibold">

                    <li>
                      Submission Type: <span>{job?.type || "N/A"}</span>
                    </li>
                    <li>
                      Union: <span>{job?.union}</span>
                    </li>
                    <li>
                      Rate/Pay: <span>{job.rateDes === 'negotiable' ? job.rateDes : job?.rate > 0 ? "$" + job?.rate + " / " + job.rateDes : 'unpaid'}</span>
                    </li>
                    <li>
                      Posted: <span>{job?.createdAt} </span>
                    </li>
                    <li>
                      Expires: <span>{job?.expiration}</span>
                    </li>
                    {job?.auditionAt && <li>
                      Audition Date: <span>{job?.auditionAt}</span>
                    </li>}
                    {job?.shootAt && <li>
                      Shoot Date: <span>{job?.shootAt}</span>
                    </li>}

                    <li>
                      Category: <span>{job?.category}</span>
                    </li>


                    <li className="break-words" >
                      Dates & Locations: {" "}
                      <span>

                        {(job.location === 'N/A' || !job.location) ? "Nationwide, United States" : job?.location}


                      </span>
                    </li>







                    <>
                      Seeking submissions from:
                      <li>

                        {(!job.market || job.market === 'N/A') ? <span>Nationwide, United States</span> : <>

                          Market:{" "}
                          <span>
                            {job?.market}
                          </span>
                        </>}
                      </li>
                    </>

                    {/* <li>
                      Markets <span>{res?.market || "N/A"}</span>
                    </li> */}
                  </ul>
                </div>

                {/* TODO: Add share functionality */}
                {/* <div className="flex flex-col gap-3 items-start">
                  <div className="social-icons font-semibold flex items-center gap-2">
                    Share
                    <span className="social-icon">
                      <HiMail />
                    </span>
                    <span className="social-icon">
                      <FaFacebookF />
                    </span>
                    <span className="social-icon">
                      <AiOutlineTwitter />
                    </span>
                  </div>
                </div> */}
              </div>


              {job.matchedRoleCount > 0 ?
                <>
                  <div className="flex mt-3 items-center gap-2 matched-roles">
                    <AiFillStar />
                    You have {job.matchedRoleCount} matched {job.matchedRoleCount == 1 ? "role" : "roles"}

                  </div>
                </> : ""}




              {/* <div className="flex items-center gap-2 p-2 border-2 mt-5 rounded-3xl shortlisting">
                <span className="clock-icon">
                  <FiClock />
                </span>
                <div>
                  <strong>Shortlisting is underway now..</strong> We recommend applying as soon as possible.
                </div>
              </div> */}
            </JobDescriptionContainer>
          </div>

          <div className="roles-container mb-4">
            <h2 className="text-lg font-semibold mb-3 px-5 sm:px-0 txt-base">Roles in this project</h2>
            <div className="mt-5 flex flex-col gap-4 mx-5 sm:mx-0">
              {job.roles?.map((role: any) => (
                <RoleCard key={role.id} {...role} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 padding-x">
            <Warning>
              <span className="danger">Warning!</span> Do not send money to anyone. Avoid scams and fraud! Beware of getting advance check and sending money back through Western Union, Moneygram, wire transfer{" "}
              <Link href="#">
                <a className="font-semibold underline">Read more.</a>
              </Link>{" "}
              <Link href="#">
                <a className="font-semibold underline">Report a scam.</a>
              </Link>
            </Warning>

            <Note>
              <span className="blue">Note!</span> Explore Talent only provides Internet exposure, resources, and tools for you to match your talent with auditions and casting directors. All materials, information, casting information,
              products, and services included in or available through this site (the &ldquo;content&rdquo;) are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; for your use. The content is provided without warranties of any
              kind, either express or implied, including, but not limited to, implied warranties of merchantability. All talent under the age of 18 must be accompanied by a parent or legal guardian at all times
            </Note>
          </div>
        </main>

        <aside className="right mt-10 lg:mt-0">
          <div className="mb-5">
            <UpgradeToPro />
          </div>

          <div className="mb-5">
            <JobCart />
          </div>

          {authenticated && <div className="mb-5">
            <RecentlyViewedJobs />
          </div>}
        </aside>
      </div>
    </PageContainer>
  );
}
