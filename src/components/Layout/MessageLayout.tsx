import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Featured from "./Featured";

export default function MessageLayout({
  title,
  children,
  keywords,
  description,
}: any) {
  return (
    <div className="overflow-hidden h-screen">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="">{children}</main>

    </div>
  );
}

MessageLayout.defaultProps = {
  title:
    "Explore Talent: Find Acting, Modeling Agencies, Modeling Auditions & Jobs",
  keywords: "explore talent, acting, modeling agencies, modeling auditions",
  description: "Find Acting, Modeling Agencies, Modeling Auditions & Jobs",
};
