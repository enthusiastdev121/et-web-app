import { REDIS_KEYS } from "@/utils/constants";
import { REDDIS } from "@/utils/constants/config";
import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import ExploreTalent from "containers/explore";
import { Redis } from "ioredis";
import { getExploreFeedApi } from "network/apis/explore";

export default function Explore(props: any) {

  return (
    <Layout title={`${WHITELABEL_NAME} | Search Our Talent for Auditions - ${WHITELABEL_NAME}`}>
      <ExploreTalent res={props?.res} />
    </Layout>
  );
}
// getExploreFeedApi

export async function getServerSideProps(context: any) {
  try {
    let res: any;

    let redis = new Redis({
      password: REDDIS.password,
      host: REDDIS.host,
    });

    const redisData = await redis.get(REDIS_KEYS.exploreTalentList);


    if (redisData) {
      res = JSON.parse(redisData);

    } else {

      res = await getExploreFeedApi({
        page: 1,
        perPage: 10
      });
      redis.set(REDIS_KEYS.exploreTalentList, JSON.stringify(res), "EX", 60 * 60)
    }

    return {
      props: { res, source: redisData ? "reddis" : "api" }
    };


  } catch (err) {
    console.log("Err", err);
    return {
      props: { res: {} }
    };
  }
}
