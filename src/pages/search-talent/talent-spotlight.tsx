import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";
import AllTalentSpotlight from "containers/searchTalent/talentSpotlight";

export default function AllTalentSpotlightPage() {
  return (

    <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>

      <AllTalentSpotlight />
    </Layout>
  );
}
