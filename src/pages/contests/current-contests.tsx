import Layout from "components/Layout";
import Contests from "containers/contests";
import { formatContestItem } from "network/apiFormatter/contest";
import { getContestListApi } from "network/apis/contest";

export default function CurrentContestPage({ list, res }: any) {
  return (
    <Layout title="Contest">
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
