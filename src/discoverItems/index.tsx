import React from "react";
import SideBar from "./sideBar";
import DiscoverAll from "./discoverAll";
import DiscoverMessage from "./discoverMessag";
import Layout from "components/Layout";
import styled from "styled-components";
import BackToTop from "components/BackToTop";

function DiscoverItems() {
  return (
    <div>
      <Layout>
        <Container className="flex">
          <BackToTop />
          <main
            className="lg:flex gap-10"
            style={{ maxWidth: "1530px", margin: "0 auto" }}
          >
            <div className="left">
              <SideBar />
            </div>
            <div className="right">
              <DiscoverMessage />
              <DiscoverAll />
            </div>
          </main>
        </Container>
      </Layout>
    </div>
  );
}

export default DiscoverItems;

const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};
  padding: 20px;
  .left {
    @media (min-width: 1050px) {
      width: 20%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 80%;
    }
  }
`;
