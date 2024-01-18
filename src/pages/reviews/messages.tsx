import Layout from "components/Layout";
import MessageReviews from "containers/reviews/MessageReviews";

export default function Messages() {
  return (
    <Layout feature={false}>
      <MessageReviews />
    </Layout>
  );
}
