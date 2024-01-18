import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import CreateAccountBox from "components/CreateAccountBox";
import Layout from "components/Layout";
import { useAuth } from "context/AuthContext";
import styled from "styled-components";
import Head from "next/head";

export default function Page() {
    const { token, user, auth: { authenticated } } = useAuth();

    return (
        <Layout>
            {authenticated ? (
                <Root className={`padding-small lg:flex flex-col items-center justify-center 2xl:py-20`}>
                    <Head>
                        <script src="https://api.leadconnectorhq.com/js/embed.js" type="text/javascript"></script>
                    </Head>
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/MHz0GW6scmFamYHaRwq7" style={{width: "100%", border:"none",overflow: "hidden"}} scrolling="no" id="msgsndr-calendar"></iframe>
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
    min-height: 650px;

    @media (min-width: 1530px)  {
        height: fit-content;
    }
`