import Layout from "components/Layout";
import VideoReviews from "containers/reviews/VideoReviews";

export default function Videos() {
  return (
    <Layout feature={false}>
      <VideoReviews />
    </Layout>
  );
}
