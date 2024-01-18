import { PrimaryBtn } from "@/styles/Btn.styled";
import { H1 } from "@/styles/Typography.styled";
import PrimaryAlert from "components/alerts/Primary";
import BackToTop from "components/BackToTop";
import JobCart from "components/jobs/JobCart";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Container } from "./styles";
import tw from "tailwind-styled-components";
import InvitesTab from "./InvitesTab";
import SubmissionTab from "./SubmissionTab";
import { useAuth } from "context/AuthContext";
import CreateAccountBox from "components/CreateAccountBox";

type TabsD = "invites" | "submissions";

export default function JobApplications() {
  const [cd, setCd] = useState(true);
  const [self, setSelf] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabsD>("invites");
  const { auth: { authenticated } } = useAuth()

  if (!authenticated) {
    return <CreateAccountBox />
  }

  return (
    <Container className="padding-small">
      <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <h1 className="text-xl font-bold sm:text-3xl px-5 sm:px-0 mb-5">My Job Applications</h1>

          <div className="ml-3 sm:ml-0 flex gap-2 items-center text-sm md:text-base font-semibold mb-3">
            <Tab active={activeTab === "invites"} onClick={() => setActiveTab("invites")}>
              Casting Invites
            </Tab>
            <Tab active={activeTab === "submissions"} onClick={() => setActiveTab("submissions")}>
              Self Submissions
            </Tab>
          </div>

          <div className="sm:flex justify-start px-5 sm:px-0 mb-3 text-gray-700 hidden">
            <PrimaryAlert message="To be chosen by Casting Directors, you need to optimize your profile to increase your chances to land your dream job." />
          </div>

          {activeTab === "invites" && <InvitesTab />}
          {activeTab === "submissions" && <SubmissionTab />}

          <div className="flex justify-start px-2 sm:px-0 mb-3 text-gray-700 sm:hidden">
            <PrimaryAlert message="To be chosen by Casting Directors, you need to optimize your profile to increase your chances to land your dream job." />
          </div>

          {/* {true && (
            <div className="invitation-container py-10 px-5 flex items-center flex-col gap-5 mb-5">
              <Image src="/images/Empty-BOX.png" alt="mailbox" width={96} height={96} />
              <h2>You have no Open Calls submissions yet!</h2>
              <p className="text-center">The more submissions you make, the more chances you get to your dream job.</p>
              <PrimaryBtn className="btn">Start submitting yourself to Audition/Jobs now!</PrimaryBtn>
            </div>
          )} */}
        </div>

        <aside className="right mt-5 lg:mt-0">
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

const Tab = tw.div<{ active: boolean; }>`
${(p) => (p.active ? "bg-primary text-white" : "text-gray-500 bg-gray-200")};
px-4 py-3 rounded-full
cursor-pointer
`;
