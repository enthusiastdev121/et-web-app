import { CASTING_LIMIT } from "@/utils/constants";
import Button from "components/Button";
import JobSubmitItem from "components/jobs/JobSubmitItem";
import Pagination from "components/Pagination";
import SimpleListSkel from "components/SimpleListSkel";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { formatJobSubmissionItem } from "network/apiFormatter/jobs";
import { getJobSubmissionListApi } from "network/apis/jobs";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { JobItemD, JobSubmissionItemD } from "types/jobs";

export default function SubmissionTab() {
  const { profile } = useProfileStore();
  const [list, setList] = useState<JobSubmissionItemD[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { token } = useAuth();
  const [page, setPage] = useState(1);

  const fetchList = useCallback(async () => {
    if (!token) {
      return;
    }

    try {
      setLoading(true);
      const res = await getJobSubmissionListApi({
        token,
        page: page,
        perPage: CASTING_LIMIT,
      });

      const data = res?.data?.filter((i: any) => i?.bam_role && i?.bam_role?.bam_casting).map((i: any) => formatJobSubmissionItem(i));
      //   setTotal(819);
      //   setList([
      //     {
      //       id: 121,
      //       job: {
      //         createdAt: 1231,
      //         desc: "asdadasdasd",
      //         title: "Demos is title",
      //         expiration: 234234,
      //         id: 312,
      //         zip: 2312,
      //         location: "asdasd",
      //       },
      //       role: {
      //         desc: "sadasda",
      //         name: "asdasd",
      //         id: 23,
      //       },
      //     },
      //   ]); 

      setTotal(Number(res.total));
      setList(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  }, [token, page]);
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const onPage = (e: any) => {
    setPage(e);
  };

  useEffect(() => {
    console.log("LIST: ", list)
  }, [list])

  return (
    <div>
      {loading ? (
        <SimpleListSkel />
      ) : (
        <>
          {list?.length === 0 ? (
            <div className="invitation-container py-10 px-5 flex items-center flex-col gap-5 mb-5">
              <Image src="/images/Empty-Files.png" alt="mailbox" width={96} height={96} />
              <h2>You have no submissions Yet!</h2>
              <p className="text-center">The more submissions you make, the more chances you get to your dream job.</p>
              <button className="text-white bg-primary rounded-md py-3 px-5 text-sm font-semibold">Start submitting to Audition/Jobs now!</button>
            </div>
          ) : (
            <>
              <div className="">
                {list?.map((i) => {
                  return (
                    <div key={i.id} className="mb-4">
                      <JobSubmitItem {...i} />
                    </div>
                  );
                })}

                {!loading && total > CASTING_LIMIT && (
                  <div className="flex justify-center my-5 items-center">
                    <Pagination current={page} onChange={(e) => onPage(e)} total={total} pageSize={CASTING_LIMIT} />
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
