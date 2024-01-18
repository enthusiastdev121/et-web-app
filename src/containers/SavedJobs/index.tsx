import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";

import { Container } from "./styles";
import { useProfileStore } from "context/ProfileStore";
import Button from "components/Button";
import Item from "./Item";
import { useAuth } from "context/AuthContext";
import { getJobCartListingApi } from "network/apis/jobs";
import { formatJobCartItem } from "network/apiFormatter/jobs";
import { JobCartItemD } from "types/jobs";
import BackToTop from "components/BackToTop";
import { useRouter } from "next/router";
import SimpleListSkel from "components/SimpleListSkel";
import Pagination from "components/Pagination";

const LIMIT = 10;

export default function SavedJobs() {
  const { profile } = useProfileStore();
  const [list, setList] = useState<JobCartItemD[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const page = Number(router.query?.page || 1);

  const { token } = useAuth();

  const fetchList = useCallback(async () => {
    if (!token) {
      return;
    }
    try {
      setLoading(true);
      const res = await getJobCartListingApi({
        token,
        perPage: LIMIT,
        page: page,
      });
      console.log("CART RES", res);
      const data = res.data.map((i: any) => formatJobCartItem(i));
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
    router.push({
      pathname: "/auditions/saved",
      query: {
        page: e,
      },
    });
  };

  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="padding-x lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left txt-base">
          <div className="text-2xl mb-4 font-bold">{profile.joinStatus === 5 ? "My Saved Jobs/Roles Applications" : "My Role/Job Applications Cart"}</div>

          <div className="txt-base font-medium mb-3 text-sm mt-1">
            {profile.joinStatus === 5 ? (
              <>
                There are <strong>{total} applications</strong> saved.
              </>
            ) : (
              <>
                {" "}
                There are <strong>{total} applications</strong> to Auditions/Jobs in cart. Please{" "}
                <Link href="/upgrade-to-pro">
                  <a className="txt-primary">
                    {" "}
                    <strong>Upgrade to Pro</strong>{" "}
                  </a>
                </Link>{" "}
                so Casting Directors & Recruiters could review you, you could apply to hundreds more as a Pro member.
              </>
            )}
          </div>

          {list.length === 0 && !loading && (
            <div className="bg-pure p-4 rounded-md shadow-md mb-2">
              {/* EMPTY BOX */}
              <div className="flex flex-col items-center mx-auto text-center py-8" style={{ maxWidth: 500 }}>
                <div className="mb-2">
                  <img src="/images/empty-cart-cartoon.png" alt="Empty cart" className="h-22" />
                </div>

                <div className="text-gray-400 font-semibold text-xl mb-2"> {profile.joinStatus === 5 ? "You haven't saved any Job/Role" : "Your Job Cart is empty"}</div>

                {profile.joinStatus !== 5 && (
                  <div className="font-medium text-base mb-3 text-gray-500">This is your Role/Job Cart. This is a service of ExploreTalent to let you store your applications until you are ready to Become a Pro Member.</div>
                )}
                <div>
                  <Link href="/auditions" passHref>
                    <Button primary>Find Auditions</Button>
                  </Link>
                </div>
              </div>

              {/* LISTING */}
            </div>
          )}

          {loading ? (
            <SimpleListSkel />
          ) : (
            <div className="flex gap-2 flex-col">
              {list.map((i) => {
                return <Item key={i.id} {...i} onApply={(id) => setList((s) => s.filter((i) => i.role.id !== Number(id)))} onDelete={(id) => setList((s) => s.filter((i) => i.role.id !== Number(id)))} />;
              })}

              {total > LIMIT && (
                <div className="p-2 py-3 flex items-center justify-center">
                  <Pagination current={page} onChange={(e) => onPage(e)} total={total} pageSize={LIMIT} />
                </div>
              )}
            </div>
          )}
        </div>

        <aside className="right mt-5 lg:mt-0">
          <Advertisement />

          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  );
}
