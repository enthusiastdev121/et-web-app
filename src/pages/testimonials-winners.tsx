import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";

export default function WinnersPage() {
    return (
        <Layout title={`${WHITELABEL_NAME} | Member Video Testimonials - ${WHITELABEL_NAME}`}>
            <div className="padding">Winners Video Testimonials</div>
        </Layout>
    )
}