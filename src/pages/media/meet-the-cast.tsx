import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";

export default function MeetCastPage() {
    return (
        <Layout title={`Meet the Cast - ${WHITELABEL_NAME}`}>
            <div className="padding">
                Explore Talent Videos - Meet the Cast
            </div>
        </Layout>
    );
}
