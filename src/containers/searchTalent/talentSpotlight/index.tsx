import styled from "styled-components";
import SuccessStories from "../../SuccessStories";
import { useAuth } from "context/AuthContext";
// import CommunityBuzz from "containers/CommunityBuzz";
// import Advertisement from "components/UpgradeToPro";
import BackToTop from "components/BackToTop";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import { H1 } from "@/styles/Typography.styled";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TalentSpotlightList from "components/ProductPage/TalentSpotlightPages/TalentSpotlightList";
import Image from "next/image";
import { MdOutlineAddCircle } from "react-icons/md";
import { rgba } from "polished";
import SpotlightListMain from "containers/spotlights/SpotlightList";

export default function AllTalentSpotlight() {
  const {
    auth: { authenticated },
  } = useAuth();

  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <div className="flex flex-row justify-between items-center gap-5 px-4 md:px-0">
            <H1>Talent Spotlights</H1>
            <button className="add-btn flex items-center">
              <MdOutlineAddCircle className="txt-primary text-xl inline-block" /><span> add</span>
            </button>
          </div>

          {/* <div className="lg:flex justify-between items-center md:px-0 px-4">
            <TabContainer>
              <div
                className={`${selectedTab == 1 ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab(1);
                }}
              >
                All <span>35</span>
              </div>

              <div
                className={`${selectedTab == 2 ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab(2);
                }}
              >
                New <span>263</span>
              </div>

              <div
                className={`${selectedTab == 3 ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab(3);
                }}
              >
                Connections <span>65</span>
              </div>
              <div
                className={`${selectedTab == 4 ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab(4);
                }}
              >
                Following <span>65</span>
              </div>
            </TabContainer>

            <div className="relative 2xl:col-span-2 lg:mb-0 mb-10">
              <AiOutlineSearch className="absolute left-3 opacity-50" style={{ top: "12px", fontSize: 20, color: "rgba(60, 60, 67, 0.6)" }} />
              <input
                type="text"
                placeholder="Search..."
                className="block w-full text-inherit bg-pure"
                style={{
                  padding: "0.5em 2.5em",
                  outline: "none",
                  border: "1px solid #E5E7EB",
                  borderRadius: "100px",
                }}
              />
            </div>
          </div> */}

          <SpotlightListMain />
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
      width: 100%; //initially it was 66.66%
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  }

  .add-btn {
    width: 100;
    @media (min-width: 767px) {
      width: 232;
  }
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    background: ${p => rgba(p.theme.primary, 0.1)};
    border-radius: 200px;
    span {
      margin-left: 7px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${p => p.theme.primary};
    }
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    @media (min-width: 767px) {
      font-size: 18px;
  }
    line-height: 22px;
    color: ${p => p.theme.base};
  }
`;

const TabContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: grid;
  }

  .tab-following {
    padding: 16px 18px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${p => p.theme.base};

    span {
      opacity: 0.6;
    }
  }

  .selected-tab {
    background: ${p => p.theme.primary};
    border-radius: 100px;
    color: #ffffff;
  }
`;
