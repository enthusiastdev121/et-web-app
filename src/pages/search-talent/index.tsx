import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import AllSearchTalent from "containers/searchTalent/allSearchTalent";

export default function SearchTalentPage() {
  return (
    <Layout title={`${WHITELABEL_NAME} | Search Our Talent for Auditions - ExploreTalent.com - Explore Talent`}>
      <AllSearchTalent />
    </Layout>
  );
}
