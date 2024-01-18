import { PrimaryBtnOutline } from "@/styles/Btn.styled";
import ProgressBar from "components/ProgressBar";
import { BsPlusLg } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { ScoreContainer } from "./styles";

export default function Score() {
  return (
    <ScoreContainer className="py-10 px-5 md:px-10 flex flex-col lg:flex-row gap-5">
      <div className="left">
        <h2 className="text-2xl font-bold">
          Your profile completion score is{" "}
          <span className="link-text">50% Okay!</span>{" "}
          <HiInformationCircle className="info-icon" />
        </h2>
        <div className="my-5">
          <ProgressBar
            bgimg="linear-gradient(270deg,  #EAB308 61.46%, #EF4444 100%)"
            bgcolor="#C2BD16"
            progress="50"
            height={7}
          />
        </div>
        <small>
          Looking good! But if you want to imporve & increase your visibility,
          consider adding more
        </small>
      </div>

      <div className="right">
        <h2 className="text-2xl font-bold">What can you improve next?</h2>
        <PrimaryBtnOutline className="btn flex items-center gap-2 my-5">
          <BsPlusLg /> Add&nbsp;video&nbsp;introduction
        </PrimaryBtnOutline>
        <small>
          This is one of the strongest casting tools you can use - dont&apos;t
          miss out on having one on your profile.
        </small>
      </div>
    </ScoreContainer>
  );
}
