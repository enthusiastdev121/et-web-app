import JobCart from "components/jobs/JobCart";
import Layout from "components/Layout";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import Link from "next/link";
import styled from "styled-components";

const NotFound = () => {
    return (
        <Layout>
            <div className="bg-paper padding-small">
                <div className="lg:flex gap-10 bg-paper" style={{ maxWidth: "1530px", margin: "0 auto" }}>

                    <div className="text-center bg-paper mb-10">
                        <Container
                            className="p-10 bg-pure txt-base"
                            style={{
                                boxShadow:
                                    "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                                borderRadius: "4px",
                            }}
                        >
                            <p className="font-medium text-left">
                                Thank you for joining Explore Talent, your profile is now ready to be activated. For your child&apos;s safety we just need the parent or guardian who controls this profile to call us at <span className="txt-primary">800-597-4500</span> 8am-5pm PST to get your child&apos;s profile and account activated.
                            </p>
                        </Container>
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

                </div>
            </div>
        </Layout>
    );
};

export default NotFound;

const Container = styled.div`
  color: ${(p: any) => p.theme.textSecondary};
//   background-color: hsl(358, 100%, 97%); 
//   border: 1px solid red;

// p {
//     color: red;
// }
`;
