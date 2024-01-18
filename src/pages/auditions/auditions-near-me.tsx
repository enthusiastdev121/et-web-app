import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import AuditionsNearMe from "containers/auditionsNearMe";

export default function AuditionsNearMePage() {
  return (

    <Layout title={WHITELABEL_NAME}>

      <AuditionsNearMe />
    </Layout>
  );
}
