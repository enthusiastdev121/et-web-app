import UserProfile from "containers/profile";
import Layout from "../../components/Layout";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function Profile() {
  return (
    <Layout title={`${WHITELABEL_NAME} | Profile`}>
      <UserProfile />
    </Layout>
  );
}
