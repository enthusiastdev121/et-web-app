import Contests from "containers/contests";
import { formatContestItem } from "network/apiFormatter/contest";
import { getContestListApi } from "network/apis/contest";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function ContestPage({ list, res }: any) {
  return (
    <Layout title={`${WHITELABEL_NAME} | Contests - Discover What It Takes To Become Famous - ${WHITELABEL_NAME}`}>
      <Contests list={list} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await getContestListApi({ perPage: 10, page: 1 });
    return {
      props: {
        list: res.data.map((i: any) => formatContestItem(i)),
        res: res,
      },
    };
  } catch (err) {
    console.log("Err", err);
    return "";
  }
}
