import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";
import ConnectionRequests from "containers/searchTalent/ConnectionRequests";

export default function AllFollowSearchTalentPage() {
    return (
        <Layout title={`Search for All Auditions and Jobs - ${WHITELABEL_NAME}`}>
            <ConnectionRequests />
        </Layout>
    );
}