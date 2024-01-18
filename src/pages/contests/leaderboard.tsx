import Layout from "components/Layout";
import Leaderboards from "containers/contests/Leaderboards";

export default function CurrentContestPage() {
  return (
    <Layout title="Contest">
      <Leaderboards />
    </Layout>
  );
}


// export async function getServerSideProps() {
//   try {
//     const res = await getContestListApi({ perPage: 10, page: 1 });
//     return {
//       props: {
//         list: res.data.map((i: any) => formatContestItem(i)),
//         res: res,
//       },
//     };
//   } catch (err) {
//     console.log("Err", err);
//     return "";
//   }
// }
