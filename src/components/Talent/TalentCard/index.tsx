import { CardContainer } from "./Styles";
import { useAuth } from "context/AuthContext";
import { HiPlay } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import IntroVideoSection from "components/profile/IntroVideoSection";
import { useState } from "react";
import VideoPlayer from "components/profile/VideoPlayer";
import VideoPlayerModal from "components/VideoPlayerModal";
import { BROKEN_IMAGE_FALLBACK } from "@/utils/constants/resources";

export default function TalentCard({
  profile_picture_path,
  name,
  city,
  key,
  talentName,
  stateData,
  pathVideo,
  is_video,
  ageRange
}: any) {
  const {
    auth: { authenticated },
  } = useAuth();

  const [VideoPlay, setVideoPlay] = useState(0)

  const route = useRouter()

  const GoToProfilePage = (talentName: any) => {
    route.push(`/` + talentName)
  }

  const ViewVideo = (e: any, key: any) => {
    e.stopPropagation()
    setVideoPlay(key)
  }
  const close = () => {
    setVideoPlay(0);
  };

  console.log("PPP", ageRange)

  return (
    <>
      <Link href={'/' + talentName} >
        <a>

          <CardContainer className="mb-5 rounded text-sm relative md:w-auto w-full cursor-pointer" key={key}>
            {/* <div> */}



            {/* HEADING */}
            {profile_picture_path != null && <img src={profile_picture_path} alt="Profile" height={320} width={260} className="w-full" onError={({ currentTarget }) => {
              // console.log("ERR", currentTarget)
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = BROKEN_IMAGE_FALLBACK;
            }} />}
            {profile_picture_path == null && <img src="/images/user_profile.png" alt="Profile" height={320} width={260} className="w-full" />}
            {/* <img src={profile_picture_path ? profile_picture_path : "../../images/user_profile.png"} /> */}
            {is_video == true &&
              <span className="play-icon">
                <HiPlay style={{ fontSize: "40px" }} onClick={(e) => { ViewVideo(e, key) }} />
              </span>
            }
            <div className="flex items-center gap-3 justify-center mt-3">
              <div className="title">{name}</div>
            </div>
            <div className="flex flex-col items-center justify-center pb-3">
              <div className="sub_title">{city + ", " + stateData}</div>
              {ageRange !== '0-60+' &&
                <div className="txt-base text-center">Age Range: {ageRange}</div>}
            </div>
            {/* </div> */}
          </CardContainer>
        </a>

      </Link>


      {VideoPlay == key &&
        <div className="w-full mb-5 mt-5">
          {/* <VideoPlayerModal
            uri={pathVideo}
            open={VideoPlay}
            onClose={close}
          /> */}
          <VideoPlayer uri={pathVideo} handleClose={close} />
          {/* <IntroVideo data={profile?.introVideo} own /> */}
        </div>
      }
    </>
  );
}
