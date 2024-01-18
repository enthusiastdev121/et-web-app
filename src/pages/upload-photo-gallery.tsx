import { PrimaryBtn } from "@/styles/Btn.styled";
import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import CreateAccountBox from "components/CreateAccountBox";
import Layout from "components/Layout";
import { Box } from "components/profile/styles";
import { useAuth } from "context/AuthContext";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import EmptyPhotoList from "components/profile/EmptyPhotoList";
import PhotosListing from "containers/profile/photosListing";
import { useState } from "react";
import { useProfileStore } from "context/ProfileStore";

export default function Page({ onClick }: any) {
    const { token, user, auth: { authenticated } } = useAuth();
    const [addOpen, setAddOpen] = useState();
const { profile, loading, refreshing } = useProfileStore();


    return (
        <Layout>
            {authenticated ? (
                <Root className={`padding-small lg:flex flex-col items-center justify-center`}>
                    <div className="w-full">
                    <h4 className="font-bold txt-base text-3xl md:text-4xl md:mb-10 mb-6">Photo Gallery</h4>
                    {/* <div>Add professional and stunning photos that showcase your career</div> */}
                    {/* {!loading && ( */}
                    <PhotosListing
                        own
                        addEnable={true}
                        editable={true}
                        profile={profile}
                    />
                    {/* )} */}
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