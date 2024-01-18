import Layout from "components/Layout";
import {
  formatContestDetailItem,
  formatContestItem,
} from "network/apiFormatter/contest";
import { getContestByIdApi, getContestListApi } from "network/apis/contest";
import { useRouter } from "next/router";
import { useEffect } from "react";

import ContestDetail from "../../../containers/contests/ContestDetail";

let page = 1;

export default function Details({ res, slug }: any) {
  return (
    <Layout>
      <ContestDetail res={res} slug={slug} page={page} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const slug = context.params.slug;
    const id = slug.match(/[^-]*$/)[0];
    const res = await getContestByIdApi({ id: id });
    console.log("contest res is: ", res);
    return {
      props: {
        res: formatContestDetailItem(res),
        slug: slug
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
      },
    };
    // console.log("error: ", err);
  }
}

// Details.getInitialProps = async ({}) => {};
