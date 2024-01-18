import Layout from "components/Layout";
import AllReviews from "containers/reviews/AllReviews";

export default function All() {
  return (
    <Layout feature={false}>
      <AllReviews />
    </Layout>
  );
}
