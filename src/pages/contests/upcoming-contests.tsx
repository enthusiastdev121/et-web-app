import Layout from "components/Layout";
import UpcomingContest from "containers/contests/UpcomingContest";
import { formatContestItem } from "network/apiFormatter/contest";
import { getContestUpcomingListApi } from "network/apis/contest";

export default function CurrentContestPage({ list, res }: any) {
  return (
    <Layout title="Contest">
      <UpcomingContest list={list} />
    </Layout>
  );
}


export async function getServerSideProps() {
  try {
    const res = await getContestUpcomingListApi({ perPage: 10, page: 1, filterBy: 'future', token: '' });
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
