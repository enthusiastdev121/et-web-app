import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import Detail from "containers/contests/Detail";

export default function DetailPage() {
  return (
    <Layout title={`${WHITELABEL_NAME} | Contest detail page`}>
      <Detail />
    </Layout>
  );
}
