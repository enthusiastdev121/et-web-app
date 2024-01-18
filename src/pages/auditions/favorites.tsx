import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import FavoriteJobs from "containers/auditionJobs/FavoriteJobs";

export default function FavoriteJobsPage() {
  return (

    <Layout title={WHITELABEL_NAME}>

      <FavoriteJobs />
    </Layout>
  );
}
