import Leaderboard from "../Leaderboard";
import Details from "./Details";

export default function ContestDetail({ res, slug, leaderboardData, page }: any) {
  return (
    <div className="padding-small bg-paper txt-base">
      <div style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <Details res={res} slug={slug} />
      </div>
    </div>
  );
}
