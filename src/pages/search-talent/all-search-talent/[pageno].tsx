import Layout from "../../../components/Layout";
import { getSearchTalentApi } from "network/apis/searchTatent";
import AllSearchTalent from "containers/searchTalent/allSearchTalent";
import { REDIS_KEYS, TALENTLIMIT } from "utils/constants";
import { userAccessToken } from "@/utils/helper";
import { WHITELABEL, WHITELABEL_NAME } from "@/utils/envProviders";
import Redis from 'ioredis'
import { REDDIS } from "utils/constants/config";


export default function AllSearchTalentPage(props: any) {
  console.log("REDIS", props)
  return (

    <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>

      {/* <AllSearchTalent data={props} /> */}
      <AllSearchTalent res={props.res} />
    </Layout>
  );
}

// PRIVIOUS CODE FOR getSearchTalentApi 




export async function getServerSideProps(context: any) {
  try {
    let res: any;

    const pg = Number(context.params.pageno) || 1

    let redis = new Redis({
      password: REDDIS.password,
      host: REDDIS.host,
    });

    const redisData = await redis.get(REDIS_KEYS.talentList + "-" + pg);


    if (redisData) {
      res = JSON.parse(redisData);

    } else {


      let minValue = new Date().getFullYear() - 0
      let maxValue = new Date().getFullYear() - 100

      res = await getSearchTalentApi({
        page: pg,
        gender: "",
        ethnicity: "",
        search: "",
        perPage: TALENTLIMIT,
        // dobMax: minValue,
        // dobMin: maxValue,
        order: 'newest',
      });
      redis.set(REDIS_KEYS.talentList + "-" + pg, JSON.stringify(res), "EX", 60 * 60)
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
// export async function getServerSideProps(context: any) {
//   try {
//     const pageno = context.params.pageno;
//     const query = context.query;
//     const res = await getSearchTalentApi({
//       page: pageno,
//       perPage: TALENTLIMIT,
//       order: query.orderby ?? "newest",
//       categories: query.categories ?? [],
//       gender: query.gender ?? "",
//       ethnicity: WHITELABEL === "talento" ? 'hispanic' : query.ethnicity ?? "",
//       search: query.search ?? "",
//       dobMin: query.dob ?? null,
//       dobMax: WHITELABEL === "talento" ? new Date().getFullYear() - 18 : query.dobMax ?? null,
//       subcategories: query.subcategories
//     });
//     return {
//       props: {
//         talent_data: res.data,
//         total_size: res.total || 9999,
//         is_loading: false,
//         page_no: pageno,
//       },
//     };
//   } catch (err) {
//     console.log("Err", err);
//     return {
//       redirect: {
//         destination: "/404",
//       },
//     };
//   }
// }
