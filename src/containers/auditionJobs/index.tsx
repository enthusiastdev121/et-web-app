import AsideRight from "../../components/ProductPage/AuditionJobPage/AsideRight";
import JobsList from "../../components/ProductPage/AuditionJobPage/JobsList";
import HeroSection from "../../components/ProductPage/AuditionJobPage/HeroSection";
import SuccessStories from "../SuccessStories";
import { useAuth } from "context/AuthContext";
import CreateAccountBox from "../../components/CreateAccountBox";
import MyJobs from "components/ProductPage/AuditionJobPage/MyJobs";

export default function Jobs() {
  const {
    auth: { authenticated },
  } = useAuth();

  return (
    <>
      {authenticated ? (
        <>
          <HeroSection />
          <div className="padding-small">
            <main className="shadow-xl rounded-xl mt-10 flex flex-col lg:flex-row ">
              <aside className="xl:w-1/4 lg:w-1/3 order-2 lg:order-1">
                <MyJobs />
                <SuccessStories />
              </aside>

              <div className="xl:w-2/4 lg:w-2/5 2xl:w-4/6 lg:pr-5 xl:pr-0 order-1 lg:order-2">
                <JobsList />
              </div>

              <aside className="lg:w-1/4 2xl:w-1/5 order-3">
                <AsideRight />
              </aside>
            </main>
          </div>
        </>
      ) : (
        <CreateAccountBox />
      )}
    </>
  );
}
