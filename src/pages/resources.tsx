import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";

export default function ResourcesPage() {
    return (
        <Layout title={WHITELABEL_NAME}>
            <div className="padding">Search Casting Directors, Agencies, Photographers, Studios and other Industry Resources</div>
        </Layout>
    )
}