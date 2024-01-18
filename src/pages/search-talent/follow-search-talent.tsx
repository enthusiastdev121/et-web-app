import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";
import AllFollowSearchTalent from "containers/searchTalent/followSearchTalent";

export default function AllFollowSearchTalentPage() {
  return (
    <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>
      <AllFollowSearchTalent />
    </Layout>
  );
}
