import Layout from "components/Layout";
import PastWinner from "containers/contests/PastWinner";

export default function CurrentContestPage({ contest_id }: any) {
  return (
    <Layout title="Contest">
      <PastWinner contest_id={contest_id} />
    </Layout>
  );
}


export async function getServerSideProps(context: any) {
  try {
    const contest_id = context.params.contest_id;
    return {
      props: {
        contest_id: contest_id
      },
    };
  } catch (err) {
    console.log("Err", err);
    return "";
  }
}
