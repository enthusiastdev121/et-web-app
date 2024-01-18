import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "../../components/Layout";
import { MdPermMedia } from "react-icons/md";

export default function MediaPage() {
  return (
    <Layout title={`${WHITELABEL_NAME} | Media`}>
      <div
        className="page-padding text-center"
        style={{ backgroundColor: "#f5f7f9" }}
      >
        <div className="shadow-lg bg-paper rounded-lg p-20 sm:text-2xl txt-base font-semibold">
          <p className="flex items-center justify-center flex-col sm:flex-row">
            <MdPermMedia className="text-3xl mr-5 mb-3 sm:mb-0" /> No Media to
            show
          </p>
        </div>
      </div>
    </Layout>
  );
}
