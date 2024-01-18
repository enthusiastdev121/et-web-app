import { JobItemD } from "types/jobs";
import AllJobs from "./AllJobs";
import FeaturedJobs from "./FeaturedJobs";

export default function Jobs({ jobs }: { jobs: JobItemD[] }) {
  return (
    <div className="padding flex flex-col lg:flex-row gap-2 items-center lg:items-start justify-center relative">
      <AllJobs jobs={jobs} />
      <FeaturedJobs jobs={jobs} />
    </div>
  );
}
