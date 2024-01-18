import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";

export default function CommunityPostPage() {
    return (
        <Layout title={`${WHITELABEL_NAME} | Community Post - ExploreTalent.com - ${WHITELABEL_NAME}`}>
            <div className="padding">Community Post</div>
        </Layout>
    )
}