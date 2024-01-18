import Jobs from "./Jobs";
import HeroSection from "./Hero";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import CreateProfile from "./CreateProfile";
import ExclusiveInterview from "./ExclusiveInterview";
import { JobItemD } from "types/jobs";

export default function HomePage({ jobs }: { jobs: JobItemD[] }) {
  return (
    <>
      <HeroSection />
      <Jobs jobs={jobs} />
      <Stats />
      <Testimonial />
      <CreateProfile />
      <ExclusiveInterview />
    </>
  );
}
