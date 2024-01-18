import styled from "styled-components";
import Brands from "./Brands";
import Banner from "./Banner";
import CastingCalls from "./CastingCalls";
import SubmitProfile from "./SubmitProfile";
import GroupImage from "./GroupImage";
import JobAndCommunity from "./JobAndCommunity";
import HeyParent from "./HeyParent";
import MonthlyWinner from "./MonthlyWinner";
import WinBeLike from "./WinBeLike";
import FeatureTalent from "./FeatureTalent";
import MonMoments from "./MonMoments";
export default function AdorableKids() {
    return (
        <CustomLayer>
            <Banner />
            <Brands />
            <CastingCalls />
            <SubmitProfile />
            <GroupImage />
            <JobAndCommunity />
            <WinBeLike />
            <MonthlyWinner />
            <MonMoments />
            <HeyParent />
            <FeatureTalent />
        </CustomLayer>
    );
}

const CustomLayer = styled.div`
    background-color:#FFFCF6;
    background-size: contain;
    background-repeat: repeat;
`;

const Container = styled.div`
      max-width:1332px;
      margin:0 auto;
    `;

const TalentColBg = styled.div`
    background:#EBEBEB;
  `;


const FooterColBg = styled.div`
    background:#222222;
  `;