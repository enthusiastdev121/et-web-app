import Layout from "components/Layout";
import AboutPage from "components/ProductPage/About";
import Image from "next/image";

export default function About() {
  return (
    <Layout feature={false}>
      <AboutPage />
    </Layout>
  );
}
