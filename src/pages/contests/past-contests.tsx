import Layout from "components/Layout";
import PastContests from "containers/contests/PastContests";
import { useAuth } from "context/AuthContext";
import { formatContestItem, formatPastContestItem } from "network/apiFormatter/contest";
import { getContestUpcomingListApi } from "network/apis/contest";

export default function CurrentContestPage() {
  return (
    <Layout title="Contest">
      <PastContests />
    </Layout>
  );
}

