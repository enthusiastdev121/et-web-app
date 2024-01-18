import Layout from "components/Layout";
import TestimonialPage from "components/ProductPage/Testimonials";
import { formatSuccessStoryRes } from "network/apiFormatter/successStories";
import { getSuccessStoriesApi } from "network/apis/successStories";

export default function Testimonials({ stories }: any) {
  return (
    <Layout feature={false}>
      <TestimonialPage stories={stories} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getSuccessStoriesApi(1, 100);
  const stories = res.data.map((i: any) => formatSuccessStoryRes(i));

  return {
    props: {
      stories
    },
  };
}