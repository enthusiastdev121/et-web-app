import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";

export default function OnlinePage() {
    return (
        <Layout title={WHITELABEL_NAME}>
            <div className="padding">Online Users</div>
        </Layout>
    )
}