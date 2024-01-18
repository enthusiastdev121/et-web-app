import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import MatchedJobs from "containers/auditionJobs/matchedJobs";

export default function MatchedCastingPage() {
  return (

    <Layout title={WHITELABEL_NAME}>

      <MatchedJobs />
    </Layout>
  );
}
