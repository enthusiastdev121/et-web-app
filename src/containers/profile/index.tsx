import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiEarthAmerica } from "react-icons/gi";

import { useProfileStore } from "context/ProfileStore";

import BackToTop from "components/BackToTop";
import AboveTheFold from "./AboveTheFold";
import Appearance from "./Appearance";

import Credits from "./CreditExperience";
import ActingExperience from "../../components/profile/experience/Acting";
import DancingExperience from "../../components/profile/experience/Dancing";
import ExtrasExperience from "../../components/profile/experience/Extras";
import HairMakeupExperience from "../../components/profile/experience/HairMakeup";
import InfluencerExperience from "../../components/profile/experience/Influencer";
import ModelingExperience from "../../components/profile/experience/Modeling";
import MusicExperience from "../../components/profile/experience/Music";
import PhotographyExperience from "../../components/profile/experience/Photography";
import PresenterExperience from "../../components/profile/experience/Presenter";
import PhotosListing from "./photosListing";
import AudiosListing from "./audiosListing";
import DocumentsListing from "./documentsListing";
import VideosListing from "./videosListing";
import IntroVideo from "./IntroVideo";
import Navbar from "./Navbar";

import { Container, Disclaimer } from "./styles";
import CommentSection from "components/profile/CommentSection";
import IntroVideoSection from "components/profile/IntroVideoSection";
import FilmStageExperience from "components/profile/experience/FilmStage";
import TvRealityExperience from "components/profile/experience/TvReality";
import { categoriesKeys, interest } from "@/utils/constants/profile";
import DynamicSection from "./DynamicSection";
import ProfileSpotlights from "components/profile/ProfileSpotlights";
import ContestEntries from "components/profile/ContestEntries";
import TranslatedText from "components/TranslatedText";
import { WHITELABEL_DOMAIN, WHITELABEL_NAME } from "@/utils/envProviders";


export default function UserProfile() {
  const { profile, loading, refreshing } = useProfileStore();
  const [pos, setPos] = useState("");
  const listInnerRef = useRef(null);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setPos("sticky-bar");
        console.log("reached bottom");
      }
    }
  };

  console.log("Profile is :", profile);

  const id = profile?.talentnum;

  return (
    <>
      <Disclaimer className="px-5 py-3">
        <div className="w-fit mx-auto">
          <span className="disclaimer-img">
            <GiEarthAmerica style={{ display: "inline-block" }} />
          </span>



          <span><TranslatedText>This is What your profile looks like to others • </TranslatedText></span>{" "}
          <Link href="/profile/edit">
            <a className="underline">Edit profile</a>
          </Link>
        </div>
      </Disclaimer>

      <BackToTop />

      <Container className="padding-small bg-paper txt-base">
        <div className="" style={{ maxWidth: "1530px", margin: "0 auto" }}>

          {/* PROFILE PHOTOS AND DETAILS */}
          <div className="w-full mb-5">
            <AboveTheFold
              {...{
                ...profile,
                loading,
                refreshing,
                own: true,
                editable: false,
              }}
            />
          </div>

          {/* NAVBAR */}
          {!loading && (
            <div
              className={`${pos} py-5 w-full mb-5 text-center`}
              onScroll={onScroll}
              ref={listInnerRef}
            >
              <Navbar
                photos={profile?.photoCount}
                videos={profile?.videoCount}
                documents={profile?.documentCount}
                songs={profile?.songCount}
                creditExperience={
                  profile?.creditExperience?.length > 0 ? true : false
                }
                acting={
                  profile?.interest
                    ?.map((i: any) => i.label === "Acting")
                    .includes(true) &&
                    profile?.categories?.acting?.experience !== ""
                    ? true
                    : false
                }
                photography={
                  profile?.interest
                    ?.map((i: any) => i.label === "Photography")
                    .includes(true) &&
                    profile?.categories?.photography?.experience !== ""
                    ? true
                    : false
                }
                hairMakeup={
                  profile?.interest
                    ?.map((i: any) => i.label === "Hair, Makeup, & Styling")
                    .includes(true) &&
                    profile?.categories?.hairMakeup?.fashionAbility !== ""
                    ? true
                    : false
                }
                dance={
                  profile?.interest
                    ?.map((i: any) => i.label === "Dancing")
                    .includes(true) &&
                    profile?.categories?.dance?.danceAbility !== ""
                    ? true
                    : false
                }
                extras={
                  profile?.interest
                    ?.map((i: any) => i.label === "Extras")
                    .includes(true) &&
                    profile?.categories?.extras?.experience !== ""
                    ? true
                    : false
                }
                influencer={
                  profile?.interest
                    ?.map((i: any) => i.label === "Influencer")
                    .includes(true) &&
                    profile?.categories?.influencer?.txt !== ""
                    ? true
                    : false
                }
                modeling={
                  profile?.interest
                    ?.map((i: any) => i.label === "Modeling")
                    .includes(true) &&
                    profile?.categories?.modeling?.experience?.length > 0
                    ? true
                    : false
                }
                music={
                  profile?.interest
                    ?.map((i: any) => i.label === "Musician")
                    .includes(true) &&
                    profile?.categories?.music?.genre?.length > 0
                    ? true
                    : false
                }
                presenter={
                  profile?.interest
                    ?.map((i: any) => i.label === "Presenter")
                    .includes(true) &&
                    profile?.categories?.presenter?.radioExperience?.length > 0
                    ? true
                    : false
                }
                filmStage={
                  profile?.interest
                    ?.map((i: any) => i.label === "Film & Stage Crew")
                    .includes(true)
                    ? true
                    : false
                }
                tvReality={
                  profile?.interest
                    ?.map((i: any) => i.label === "TV & Reality")
                    .includes(true)
                    ? true
                    : false
                }
              />
            </div>
          )}

          {/* PHOTOS */}
          {!loading && (
            <PhotosListing
              own
              addEnable={false}
              editable={false}
              profile={profile}
            />
          )}

          {/* CONTEST ENTRIES */}
          {/* <ContestEntries /> */}

          {/* SPOTLIGHTS */}
          {/* <div className="my-5">
            <ProfileSpotlights />
          </div> */}


          {/* INTRO VIDEO */}
          {profile?.introVideo?.uri !== "" && !loading && (
            <div className="w-full mb-5 mt-5" id="intro-video">
              <IntroVideoSection own {...profile.introVideo} />
            </div>
          )}

          {/* VIDEOS */}
          {!loading && (
            <div className="w-full mb-5">
              {" "}
              <VideosListing own addEnable={false} editable={false} />
            </div>
          )}

          {/* AUDIOS */}
          {!loading && (
            <div className="w-full mb-5">
              <AudiosListing own addEnable={false} editable={false} />
            </div>
          )}

          {/* DOCUMENTS */}
          {!loading && (
            <DocumentsListing own addEnable={false} editable={false} />
          )}

          {/* APPEARANCE */}
          {!loading && (
            <div className="w-full mb-5">
              <Appearance own />
            </div>
          )}

          {/* CREDITS AND EXPERIENCE */}
          {profile?.creditExperience?.length > 0 && (
            <div className="w-full mb-5">
              <Credits own />
            </div>
          )}

          {/* CATEGORIES */}
          <DynamicSection profile={profile} own={true} edit={false} />

          <div className="w-full mb-5">
            <CommentSection talentnum={id} />
          </div>

          <div className="text-center mt-10 mx-auto max-w-[1000px] px-2 text-sm sm:px-0 sm:text-base">
            <p className="mb-1">{profile?.name} Website - <Link href={`https://www.${WHITELABEL_DOMAIN}/${profile.talentlogin}/`}><a className="txt-primary">https://www.{WHITELABEL_DOMAIN}/{profile.talentlogin}/</a></Link> {profile.talentnum}</p>
            <p><TranslatedText>{WHITELABEL_NAME} only provides Internet exposure, resources, and tools for you to match your talent with auditions and casting directors.</TranslatedText></p>
          </div>
        </div>
      </Container>
    </>
  );
}

