import JobApplications from "containers/auditionJobs/JobApplications";
import Layout from "../../components/Layout";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function ApplicationPage() {
  return (

    <Layout title={WHITELABEL_NAME}>

      <JobApplications />
    </Layout>
  );
}
