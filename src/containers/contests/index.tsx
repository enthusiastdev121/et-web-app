import { H1, H2, Body1 } from "@/styles/Typography.styled";
import BackToTop from "components/BackToTop";
import JobCart from "components/jobs/JobCart";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import styled from "styled-components";
import { ContestItemD } from "types/contest";
import ContestCard from "./ContestCard";

export default function Contests({ list }: { list: ContestItemD[] }) {
  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <H1>Current Contests</H1>
          </div>

          <div className="mt-5">
            {list.map((i: ContestItemD) => {
              return <ContestCard {...i} key={i.id} />;
            })}
          </div>
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
  color: ${(p: any) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      // width: 87.07%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
      margin-left: auto;
    }
  }
`;
