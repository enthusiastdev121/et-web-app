import Layout from "components/Layout";
import { formatContestDetailItem } from "network/apiFormatter/contest";
import { getContestByIdApi } from "network/apis/contest";

import ContestDetail from "../../../containers/contests/ContestDetail";

export default function Detials({ res }: any) {
      return (
            <Layout>
                  <ContestDetail res={res} />
            </Layout>
      );
}

export async function getServerSideProps(context: any) {
      try {
            const slug = context.params.slug;
            const id = slug.match(/[^-]*$/)[0];
            const res = await getContestByIdApi({ id: id });
            return {
                  props: {
                        res: formatContestDetailItem(res)
                  },
            };
      } catch (err) {
            console.log("Err", err);
            return {
                  redirect: {
                        destination: "/404",
                  },
            };
      }
}
