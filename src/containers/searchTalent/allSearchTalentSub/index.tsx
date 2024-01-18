import styled from "styled-components";

import SuccessStories from "../../SuccessStories";
import { useAuth } from "context/AuthContext";
// import CommunityBuzz from "containers/CommunityBuzz";
// import Advertisement from "components/UpgradeToPro";
import BackToTop from "components/BackToTop";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import { useEffect, useState } from "react";
import TalentDirectoryCategorySubList from "components/ProductPage/TalentDirectoryPage/TalentDirectoryCategorySub";
import TalentSearchSubList from "components/ProductPage/TalentDirectoryPage/TalentSearchListSub";

export default function AllSearchTalentSub({ data }: any) {
  const {
    auth: { authenticated },
  } = useAuth();
  const [Loading, setLoading] = useState(false);

  const getLoadingNew = (loadingData: any) => {
    setLoading(loadingData);
  };

  useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <TalentDirectoryCategorySubList talentData={data} getLoading={getLoadingNew} />
          <TalentSearchSubList talentData={data} Loading={Loading} />
        </div>

        <aside className="right">
          <Advertisement />

          <div className="mb-5">
            <JobCart />
          </div>
          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

  .left {
    @media (min-width: 1050px) {
      width: 66.66%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  }
`;

/* <div className="px-5 sm:px-0">
      {authenticated && <JobCategoryList />}
    </div>

    <Main className="mt-10 flex flex-col lg:flex-row ">
      <aside className="xl:w-1/4 lg:w-1/3 order-2 lg:order-1">
        
        <SuccessStories />
      </aside>

      <div className="xl:w-2/4 lg:w-2/5 2xl:w-4/6 lg:pr-5 xl:pr-0 order-1 lg:order-2">
        <JobsList />
      </div>

      <aside className="lg:w-1/4 2xl:w-1/5 order-3">
        <AsideRight />
      </aside>
    </Main> */
