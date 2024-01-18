import Layout from "components/Layout";
import { formatJobRes } from "network/apiFormatter/jobs";
import { getJobByIdApi } from "network/apis/jobs";
import { useEffect } from "react";
import AuditionDetail from "../../containers/auditionDetail";

export default function AuditionDetailPage(props: any) {


  // console.log("RES-----------2", props)

  return (
    <Layout>
      <AuditionDetail {...props} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  console.log("the context.params is: ->", context.params.slug);
  const slug = context.params.slug;
  const id = slug.split("_").pop();
  try {
    const res = await getJobByIdApi({ id: id });
    // console.log("*******", res)

    if (res) {
      return {
        props: {
          res: formatJobRes(res),
          routeId: id,
        },
      };
    } else {
      return {
        props: {
          res: {},
          routeId: id,
        },
      };
    }
  } catch (err) {
    console.log("Err", err, id);
    return {
      props: {
        res: {},
        routeId: id,
      },
    };
  }
}
