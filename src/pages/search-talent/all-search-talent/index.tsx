import Layout from "../../../components/Layout";
import { getSearchTalentApi } from "network/apis/searchTatent";
import AllSearchTalent from "containers/searchTalent/allSearchTalent";
import { TALENTLIMIT } from "@/utils/constants";
import { userAccessToken } from "@/utils/helper";
import { WHITELABEL, WHITELABEL_NAME } from "@/utils/envProviders";

export default function AllSearchTalentPage(props: any) {
    return (

        <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>

            {/* <AllSearchTalent data={props} /> */}
            <AllSearchTalent />
        </Layout>
    );
}

// PRIVIOUS CODE FOR getSearchTalentApi 




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
      // dobMax: WHITELABEL === "talento" ? new Date().getFullYear() - 18 : query.dobMax ?? null,
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
