import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import CreateAccountBox from "components/CreateAccountBox";
import Layout from "components/Layout";
import VideosListing from "containers/profile/videosListing";
import { useAuth } from "context/AuthContext";
import styled from "styled-components";

export default function Page() {
    const { token, user, auth: { authenticated } } = useAuth();

    return (
        <Layout>
            {authenticated ? (
                <Root className={`padding-small lg:flex flex-col items-center justify-center`}>
                    <div className="w-full">
                        <h4 className="font-bold txt-base text-3xl md:text-4xl md:mb-10 mb-6">Video Gallery</h4>
                        <VideosListing own addEnable={true} editable={true} />
                    </div>
                </Root>
            ) : (
                <CreateAccountBox />
            )}
        </Layout>
    );
}

const Root = styled.div`
    text-align: center;
    /* height: calc(100vh - ${MAIN_NAV_HEIGHT}px); */

    @media (min-width: 1530px)  {
        height: fit-content;
    }
`