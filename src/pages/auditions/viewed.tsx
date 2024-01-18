import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import ViewedJobs from "containers/auditionJobs/ViewedJobs";

export default function ViewedPage() {
  return (

    <Layout title={WHITELABEL_NAME}>

      <ViewedJobs />
    </Layout>
  );
}
