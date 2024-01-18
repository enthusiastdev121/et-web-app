import Layout from "../../../components/Layout";
import { getSearchTalentApi, getSearchTalentSubApi } from "network/apis/searchTatent";
import { TALENTLIMIT } from "@/utils/constants";
import { userAccessToken } from "@/utils/helper";
import AllSearchTalentSub from "containers/searchTalent/allSearchTalentSub";
import { WHITELABEL, WHITELABEL_NAME } from "@/utils/envProviders";

export default function AllSearchTalentPage(props: any) {
  return (

    <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>

      <AllSearchTalentSub data={props} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const pageno = context.params.pageno;
    const query = context.query;
    const res = await getSearchTalentSubApi({
      page: pageno,
      perPage: TALENTLIMIT,
      order: query.orderby ?? "",
      categories: query.categories ?? "",
      gender: query.gender ?? "",
      ethnicity: query.ethnicity ?? "",
      search: query.search ?? "",
      dobMin: query.dob ?? null,
      dobMax: WHITELABEL === 'talento' ? new Date().getFullYear() - 18 : query.dobMax ?? null,
      subcategories: query.subcategories
    });
    return {
      props: {
        talent_data: res.data,
        total_size: res?.total ?? 9999,
        is_loading: false,
        page_no: pageno,
        categories: query.categories
      }
    };
  } catch (err) {
    console.log("Err", err);
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}