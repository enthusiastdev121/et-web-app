import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import SavedJobs from "containers/SavedJobs";

export default function ViewJobCartPage() {
  return (

    <Layout title={WHITELABEL_NAME}>

      <SavedJobs />
    </Layout>
  );
}
