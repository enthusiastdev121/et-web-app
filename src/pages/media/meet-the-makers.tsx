import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";

export default function MeetMakersPage() {
    return (
        <Layout title={`Meet the Makers - ${WHITELABEL_NAME}`}>
            <div className="padding">
                Explore Talent Videos - Meet the Makers
            </div>
        </Layout>
    );
}
