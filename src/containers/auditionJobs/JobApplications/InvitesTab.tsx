import CDInviteItem from "components/jobs/CDInviteItem";
import Pagination from "components/Pagination";
import SimpleListSkel from "components/SimpleListSkel";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { formatCDInviteItem } from "network/apiFormatter/jobs";
import { getCDInvitesListApi } from "network/apis/jobs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { CDInviteItemD } from "types/jobs";

const LIMIT = 10;

export default function InvitesTab() {
  const { profile } = useProfileStore();
  const [list, setList] = useState<CDInviteItemD[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [page, setPage] = useState(1);
  const fetchList = useCallback(async () => {
    if (!token) {
      return;
    }
    try {
      setLoading(true);
      const res = await getCDInvitesListApi({
        token,
        perPage: LIMIT,
        page: page,
      });
      console.log("POI", res);
      const data = res.data.map((i: any) => formatCDInviteItem(i));
      setList(data);
      setTotal(Number(res.total));
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

  return (
    <div>
      {loading ? (
        <SimpleListSkel />
      ) : (
        <div>
          {list.length === 0 ? (
            <div className="invitation-container py-10 px-5 flex items-center flex-col gap-5 mb-5">
              <Image src="/images/Mailbox.png" alt="mailbox" width={96} height={96} />
              <h2 className="text-base">You have no Casting Director Invitations!</h2>
              <p className="text-center w-full text-sm sm:text-base">You have not received any Casting Director invitations yet, please go to your matched castings and submit to more roles.</p>
              <Link href="/auditions/preferences" passHref>
                <button className="text-white bg-primary rounded-md py-3 px-5 text-sm font-semibold">Update Casting Preferences</button>
              </Link>
            </div>
          ) : (
            <div>
              {list.map((i) => {
                return (
                  <div key={i.id} className="mb-4">
                    <CDInviteItem {...i} />
                  </div>
                );
              })}

              {!loading && total > LIMIT && (
                <div className="flex justify-center my-5">
                  <Pagination current={page} onChange={(e) => onPage(e)} total={total} pageSize={LIMIT} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
