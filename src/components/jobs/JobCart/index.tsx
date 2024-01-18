import { PrimaryBtn, PrimaryBtnSingle } from "@/styles/Btn.styled";
import Button from "components/Button";
import OverlayLoader from "components/OverlayLoader";
import TranslatedText from "components/TranslatedText";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { formatJobCartItem } from "network/apiFormatter/jobs";
import { getJobCartListingApi } from "network/apis/jobs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { JobCartItemD } from "types/jobs";
import { Container } from "./JobCart.styled";

export default function JobCart() {
  const {
    auth: { authenticated },
    token,
  } = useAuth();

  const { profile } = useProfileStore();
  const [list, setList] = useState<JobCartItemD[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchList = useCallback(async () => {
    if (!token) {
      return;
    }
    try {
      setLoading(true);
      const res = await getJobCartListingApi({
        token,
        perPage: 10,
        page: 1,
      });
      const data = res.data.map((i: any) => formatJobCartItem(i));
      setList(data);
      setTotal(Number(res.total));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  }, [token]);
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if (!authenticated) {
    return null;
  }

  // if (!loading && list.length === 0) {
  //   return null;
  // }

  return (
    <Container className="p-5 rounded">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-2xl "><TranslatedText> {profile.joinStatus === 5 ? "Saved jobs" : "Job Cart"}</TranslatedText></h3>

        {list?.length !== 0 && <Link href="/auditions/saved" passHref>
          <a>
            <div className="px-3 py-2 hover:bg-white/[.06] txt-primary font-semibold text-sm rounded-md transition-all">View All</div>
          </a>
        </Link>}
      </div>

      {loading ? (
        <div className="h-20 w-full relative">
          <OverlayLoader />
        </div>
      ) : (
        <>
          {
            list?.length === 0 ?
              <div>
                <p className="text-slate-400"><TranslatedText>Your Job Cart is Empty</TranslatedText></p>
              </div>
              : <>
                <div>
                  {list.map((i) => {
                    return (
                      <div key={i.id} className="mb-4">
                        <div className="font-semibold text-base"> {i.job.title}</div>
                        <div className="font-medium txt-primary"><TranslatedText>Role : </TranslatedText>{i.role?.name}</div>
                      </div>
                    );
                  })}
                </div>


                <div className="mt-6">
                  {profile.joinStatus === 5 ? (
                    <Link href="/auditions/saved" passHref>
                      <Button fullWidth primary>
                        <TranslatedText>Complete&nbsp;your&nbsp;submission</TranslatedText>
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/upgrade-to-pro" passHref>
                      <Button fullWidth primary>
                        <TranslatedText>Upgrade account to complete</TranslatedText>
                      </Button>
                    </Link>
                  )}
                </div>
              </>
          }
        </>
      )}
    </Container>
  );
}
