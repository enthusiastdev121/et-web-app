import styled from "styled-components";
import SuccessStories from "../../SuccessStories";
import { useAuth } from "context/AuthContext";
import BackToTop from "components/BackToTop";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import FollowTalentSearchList from "components/ProductPage/FollowTalentDirectoryPage/FollowTalentSearchList";
import { H1 } from "@/styles/Typography.styled";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchUser } from "@/utils/helper";
import { getNetworkUserListApi } from "network/apis/searchTatent";
import { TALENTLIMIT } from "@/utils/constants";
import Button from "components/Button";
import { ImUsers } from "react-icons/im";
import Link from "next/link";

export default function AllFollowSearchTalent() {
  const {
    auth: { authenticated },
    token,
  } = useAuth();
  const [selectedTab, setSelectedTab] = useState("following");
  const [currentPage, setCurrentPage] = useState(1);
  const [talent, setTalent] = useState([]);
  const [totalSize, setTotalSize] = useState();
  const [loading, setLoading] = useState(true);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  useEffect(() => {
    getSearchTalent();
  }, []);

  useEffect(() => {
    getSearchTalent();
  }, [currentPage]);

  useEffect(() => {
    // if (selectedTab != "Connections") {
    getSearchTalent();
    // }
  }, [selectedTab]);

  const getSearchTalent = async () => {
    setLoading(true);
    const userRes = fetchUser();
    const res = await getNetworkUserListApi({
      token: token,
      talentnum: userRes?.talentnum,
      type: selectedTab,
      page: currentPage,
      perPage: TALENTLIMIT,
      search: "",
    });
    setTalent(res.data);
    setTotalSize(res.total);
    setLoading(false);
  };

  const refress = (data: any) => {
    if (data == true) {
      getSearchTalent();
    }
  };

  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <div className="flex  md:flex-row justify-between items-center gap-5 px-4 md:px-0">
            <H1>Following</H1>
            <div className="hidden  md:block">
              <Link href="/search-talent/connection-requests" passHref>
                <Button rounded primary light ><ImUsers />Connection Requests</Button>
              </Link>
            </div>
          </div>

          <div className="lg:flex justify-between align-middle items-center md:px-0  w-full px-4">
            <TabContainer>
              <div
                className={`${selectedTab == "following" ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab("following");
                }}
              >
                Following {selectedTab == "following" ? <span>{talent.length}</span> : ""}
              </div>

              <div
                className={`${selectedTab == "followers" ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab("followers");
                }}
              >
                Followers {selectedTab == "followers" ? <span>{talent.length}</span> : ""}
              </div>

              <div
                className={`${selectedTab == "friends" ? "selected-tab" : ""} tab-following`}
                onClick={() => {
                  setSelectedTab("friends");
                }}
              >
                Connections {selectedTab == "friends" ? <span>{talent.length}</span> : ""}
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
          </div>

          <FollowTalentSearchList
            loading={loading}
            paginate={paginate}
            totalSize={totalSize}
            talent={talent}
            setTalent={setTalent}
            postsPerPage={TALENTLIMIT}
            refress={refress}
            selectedTab={selectedTab}
          />
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
      width: 87.07%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  }
`;

const TabContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  /* align-items: center; */
  cursor: pointer;
  /* justify-content: center; */

  @media (max-width: 767px) {
    /* display: grid; */
  }

  .tab-following {
    padding: 12px 16px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    @media (min-width: 767px) {
      font-size: 16px;
      padding: 16px 18px;
    }
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
