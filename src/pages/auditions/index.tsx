import AllJobs from "containers/auditionJobs/allJobs";
import Layout from "../../components/Layout";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function AuditionJob() {
  return (

    <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>

      <AllJobs />
    </Layout>
  );
}
