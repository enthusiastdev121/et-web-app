import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Featured from "./Featured";
import { LayoutD } from "types";
import BottomNav from "./Header/BottomNav";
import { useHost } from "context/HostContext";
import { WHITELABEL, WHITELABEL_NAME, WHITELABEL_NAME_SMALL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";

export default function Layout({
  title,
  children,
  keywords,
  description,
  feature = true,
  border,
  bg,
}: LayoutD) {
  const hostname = useHost();
  return (
    <div className="" style={{ backgroundColor: bg || "white" }}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href={WHITELABEL === WHITELABELS.auditions ? '/images/audition/favicon.ico' : '"/favicon.ico" '} />
      </Head>

      {/* <Header border={border}/> */}
      <Header />
      <BottomNav />
      <div className="overflow-x-hidden lg:overflow-visible"  >{children}</div>
      {feature && <Featured />}
      <Footer whitelabel={hostname} />
    </div>
  );
}

Layout.defaultProps = {
  title: `${WHITELABEL_NAME}: Find Acting, Modeling Agencies, Modeling Auditions & Jobs`,
  keywords: `${WHITELABEL_NAME_SMALL}, acting, modeling agencies, modeling auditions`,
  description: "Find Acting, Modeling Agencies, Modeling Auditions & Jobs",
};

