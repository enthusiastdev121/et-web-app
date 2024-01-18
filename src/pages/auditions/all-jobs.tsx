import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";
import AllJobs from "../../containers/auditionJobs/allJobs";
import { Redis } from "ioredis";
import { REDDIS } from "@/utils/constants/config";
import { CASTING_LIMIT, REDIS_KEYS } from "@/utils/constants";
import { searchJobsApi } from "network/apis/jobs";
import { useAuth } from "context/AuthContext";

export default function AllJobsPage(props: any) {

  return (
    <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>
      <AllJobs res={props?.res} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {

  try {
    let res: any;

    let redis = new Redis({
      password: REDDIS.password,
      host: REDDIS.host,
    });

    const redisData = await redis.get(REDIS_KEYS.jobsList);
    if (redisData) {
      res = JSON.parse(redisData);

    } else {

      res = await searchJobsApi({
        ageMax: 0,
        ageMin: 100,
        page: 1,
        perPage: CASTING_LIMIT,
      });
      redis.set(REDIS_KEYS.jobsList, JSON.stringify(res), "EX", 60 * 60)
    }

    return {
      props: { res, source: redisData ? "reddis" : "api" }
    };
  } catch (err) {
    console.log(err, "Something went wrong!")
    return {
      props: { res: {} }
    };
  }
}
