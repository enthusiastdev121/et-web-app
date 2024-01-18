import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import ContestantDetail from "containers/contests/ContestantDetail";
import { useAuth } from "context/AuthContext";
import { contestView } from "network/apis/contest";
import { useEffect } from "react";

export default function ContestantDetailPage({ talentnum, contest_id, ip }: any) {
  return (

    <Layout title={`${WHITELABEL_NAME} Contests - ${talentnum} - ${WHITELABEL_NAME}`}>

      <ContestantDetail talentnum={talentnum} contest_id={contest_id} ip={ip} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const contest_id_string = context.params.contest_id;
    const talentnum_string = context.params.talentnum;
    const contest_id = contest_id_string.match(/[^-]*$/)[0];
    const talentnum = talentnum_string.match(/[^-]*$/)[0];
    const response = await fetch('https://geolocation-db.com/json/');
    const data = await response.json();
    return {
      props: {
        talentnum: talentnum,
        contest_id: contest_id,
        ip: data.IPv4
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
