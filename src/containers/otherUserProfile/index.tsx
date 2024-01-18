import { t2t } from "@/utils/constants/profile";
import { WHITELABEL_DOMAIN, WHITELABEL_NAME } from "@/utils/envProviders";
import BackToTop from "components/BackToTop";
import CommentSection from "components/profile/CommentSection";
import ContestEntries from "components/profile/ContestEntries";
import IntroVideoSection from "components/profile/IntroVideoSection";
import ProfileSpotlights from "components/profile/ProfileSpotlights";
import TranslatedText from "components/TranslatedText";
import AboveTheFold from "containers/profile/AboveTheFold";
import Appearance from "containers/profile/Appearance";
import AudiosListing from "containers/profile/audiosListing";
import Credits from "containers/profile/CreditExperience";
import DocumentsListing from "containers/profile/documentsListing";
import DynamicSection from "containers/profile/DynamicSection";
import Navbar from "containers/profile/Navbar";
import PhotosListing from "containers/profile/photosListing";
import VideosListing from "containers/profile/videosListing";
import { useAuth } from "context/AuthContext";
import { useMessagingV2 } from "context/MessagingContextV2";
import { formatUserProfile } from "network/apiFormatter/profile";
import { addNewConversations } from "network/apis/messages";
import { getOtherUserProfileApi } from "network/apis/otherUser";
import { addFriendApi, cancelFriendApi, followTalentApi, removeFriendApi, unfollowTalentApi } from "network/apis/talent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { UserProfileD } from "types/profile";
import { FriendStatus } from "types/talents";

export default function OtherUserProfile({ username, userNode = {} as UserProfileD }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingConnect, setLoadingConnect] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const { token } = useAuth();
  const [profile, setProfile] = useState<UserProfileD>({ ...userNode } as UserProfileD);
  const [following, setFollowing] = useState(profile?.isFollowing);
  const [unfollowOpen, setUnfollowOpen] = useState(false);
  const id = profile?.talentnum;
  const [friendStatus, setFriendStatus] = useState<FriendStatus>(profile?.friendStatus);
  const [cancelConnectOpen, setCancelConnectOpen] = useState(false);
  const [unConnectOpen, setUnConnectOpen] = useState(false);
  const { setActiveChat, updateIndbox } = useMessagingV2()

  const fetchProfile = useCallback(async () => {
    try {
      if (!username) return;
      // if (token === "") {
      //   console.log("Called on token null!");
      //   return;
      // }

      // setLoading(true);
      const res = await getOtherUserProfileApi({
        username: username,
        token: token,
      });

      const data = formatUserProfile({ ...res, bam_talentci: { ...res } });
      // setLoading(false);
      setProfile(data);
    } catch (err) {
      setLoading(false);
      router.push("/404");
      console.log("Err", err);
    }
  }, [username, token]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    setFollowing(profile?.isFollowing);
    setFriendStatus(profile?.friendStatus);
  }, [profile?.isFollowing, profile?.friendStatus]);

  const onUnfollow = (id: any) => { };

  //Follow
  const followNow = async () => {
    try {
      setLoadingFollow(true);
      const res = await followTalentApi({ token, talentnum: id });
      setLoadingFollow(false);
      setFollowing(true);
      console.log("RES", res);
    } catch (err) {
      setLoadingFollow(false);
      console.log("Err", err);
    }
  };
  const unFollowNow = async () => {
    try {
      setUnfollowOpen(false);
      setLoadingFollow(true);
      const res = await unfollowTalentApi({
        token,
        talentnum: id,
      });
      console.log("RES", res);
      setLoadingFollow(false);
      setFollowing(false);

      if (onUnfollow) {
        onUnfollow(id);
      }
    } catch (err) {
      setLoadingFollow(false);
      console.log("Err", err);
    }
  };

  //Connect
  const connectNow = async () => {
    try {
      setLoadingConnect(true);
      const res = await addFriendApi({ token, talentnum: id });
      setLoadingConnect(false);
      setFriendStatus("pending");
      console.log("RES", res);
    } catch (err) {
      setLoadingConnect(false);
      console.log("Err", err);
    }
  };
  const cancelConnectNow = async () => {
    try {
      setCancelConnectOpen(false);
      setLoadingConnect(true);
      const res = await cancelFriendApi({ token, talentnum: id });
      console.log("RES", res);
      setLoadingConnect(false);
      setFriendStatus(null);
    } catch (err) {
      setLoadingConnect(false);
      console.log("Err", err);
    }
  };
  const unConnectNow = async () => {
    setUnConnectOpen(false);
    try {
      setLoadingConnect(true);
      const res = await removeFriendApi({ token, talentnum: id });
      console.log("RES", res);
      setLoadingConnect(false);
      setFriendStatus(null);
    } catch (err) {
      setLoadingConnect(false);
      console.log("Err", err);
    }
  };

  const messageNow = async (id: any, name: string, conversation_id: string) => {
    console.log("IND cId", conversation_id);
    if (conversation_id) {
      // router.push("messagesV2?id=" + conversation_id)
      router.push("/messages")

      setActiveChat({
        conversationId: Number(conversation_id || 0),
        user: {
          name: profile?.name,
          pic: profile?.pic,
          talentlogin: profile.talentlogin,
          talentnum: profile.talentnum,
        }
      })

    } else {
      // let raw = {
      //   name: name,
      //   user_ids: [id],
      //   type: t2t
      // }
      // await addNewConversations({ data: JSON.stringify(raw), token: token }).then(
      // (res: any) => {
      router.push("messages")

      setActiveChat({
        conversationId: null,
        user: {
          name: profile?.name,
          pic: profile?.pic || "/images/user_profile.png",
          talentlogin: profile.talentlogin,
          talentnum: profile.talentnum,
          userId: profile?.id,
        }
      })

      // updateIndbox({ conversationId: null, body: "", type: "text", name: profile?.name, pic: profile?.pic })
      // }
      // )
    }
  }

  // console.log("Formatted res for OTHER USER: ", profile);

  return (
    <Container className="padding-small">
      <BackToTop />
      <div className="txt-base" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        {/* PROFILE PHOTOS AND DETAILS */}
        <div className="w-full mb-5">
          <AboveTheFold
            {...{
              ...profile,
              loading,
              loadingConnect,
              loadingFollow,
              own: false,
              followNow: followNow,
              isFollowing: following,
              unFollowNow: unFollowNow,
              connectNow: connectNow,
              cancelConnectNow: cancelConnectNow,
              unConnectNow: unConnectNow,
              friendStatus: friendStatus,
              messageNow: messageNow
            }}
          />
        </div>
        {/* NAVBAR */}
        {!loading && (
          <div className={`py-5 w-full mb-5 text-center`}>
            <Navbar
              photos={profile?.photoCount}
              videos={profile?.videoCount}
              documents={profile?.documentCount}
              songs={profile?.songCount}
              creditExperience={profile?.creditExperience?.length > 0 ? true : false}
              acting={profile?.interest?.map((i: any) => i.label === "Acting").includes(true) && profile?.categories?.acting?.experience !== "" ? true : false}
              photography={profile?.interest?.map((i: any) => i.label === "Photography").includes(true) && profile?.categories?.photography?.experience !== "" ? true : false}
              hairMakeup={profile?.interest?.map((i: any) => i.label === "Hair, Makeup, & Styling").includes(true) && profile?.categories?.hairMakeup?.fashionAbility !== "" ? true : false}
              dance={profile?.interest?.map((i: any) => i.label === "Dancing").includes(true) && profile?.categories?.dance?.danceAbility !== "" ? true : false}
              extras={profile?.interest?.map((i: any) => i.label === "Extras").includes(true) && profile?.categories?.extras?.experience !== "" ? true : false}
              influencer={profile?.interest?.map((i: any) => i.label === "Influencer").includes(true) && profile?.categories?.influencer?.txt !== "" ? true : false}
              modeling={profile?.interest?.map((i: any) => i.label === "Modeling").includes(true) && profile?.categories?.modeling?.experience?.length > 0 ? true : false}
              music={profile?.interest?.map((i: any) => i.label === "Musician").includes(true) && profile?.categories?.music?.genre?.length > 0 ? true : false}
              presenter={profile?.interest?.map((i: any) => i.label === "Presenter").includes(true) && profile?.categories?.presenter?.radioExperience?.length > 0 ? true : false}
            />
          </div>
        )}

        {/* PHOTOS */}
        {!loading && (
          <div className="w-full mt-5">
            <PhotosListing own={false} addEnable={false} editable={false} userId={profile?.talentnum} profile={profile} />
          </div>
        )}

        {/* CONTEST ENTRIES */}
        {/* <ContestEntries /> */}

        {/* SPOTLIGHTS */}
        <div className="my-5">
          {/* <ProfileSpotlights /> */}
        </div>

        {/* INTRO VIDEO */}
        {profile?.introVideo?.uri !== "" && !loading && (
          <div className="w-full mb-5 mt-5" id="intro-video">
            <IntroVideoSection own={false} {...profile.introVideo} />
            {/* <IntroVideo data={profile?.introVideo} own={false} /> */}
          </div>
        )}

        {/* VIDEOS */}
        {!loading && (
          <div className="w-full mb-5">
            {" "}
            <VideosListing own={false} addEnable={false} editable={false} userId={profile?.talentnum} />
          </div>
        )}

        {/* AUDIOS */}
        {!loading && (
          <div className="w-full mb-5">
            <AudiosListing own={false} addEnable={false} editable={false} userId={profile?.talentnum} />
          </div>
        )}

        {/* DOCUMENTS */}
        {!loading && <DocumentsListing own={false} addEnable={false} editable={false} userId={profile?.talentnum} />}

        {/* TODO: APPEARANCE */}
        {!loading && (
          <div className="w-full mb-5">
            <Appearance own={false} other={true} otherProfile={profile} />
          </div>
        )}

        {/* CREDITS AND EXPERIENCE */}
        {profile?.creditExperience?.length > 0 && (
          <div className="w-full mb-5">
            <Credits own={false} other={true} otherProfile={profile} />
          </div>
        )}

        {/*
        ------ CATEGORIES ------
        */}
        <DynamicSection profile={profile} own={false} edit={false} />

        {/* COMMENT SECTION */}
        <div className="w-full mb-5">
          <CommentSection talentnum={id} />
        </div>

        <div className="text-center mt-10 mx-auto max-w-[1000px] px-2 text-sm sm:px-0 sm:text-base">
          <p className="mb-1">{profile?.name} Website - <Link href={`https://www.${WHITELABEL_DOMAIN}/ ${profile.talentlogin} /`}><a className="txt-primary">https://www.{WHITELABEL_DOMAIN}/{profile.talentlogin}/</a></Link> {profile.talentnum}</p>
          <p> <TranslatedText>{WHITELABEL_NAME} only provides Internet exposure, resources, and tools for you to match your talent with auditions and casting directors.</TranslatedText></p>
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

  .link-text {
    color: ${(p: any) => p.theme.primary};
  }

  .secondary-text {
    color: ${(p: any) => p.theme.textSecondary};
  }

  .sticky-bar {
    /* position: sticky; */
    position: fixed;
    background-color: ${(p: any) => p.theme.pure};
    z-index: 900;
    margin: 0 auto;
    padding: 10px 10vw;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .large-left {
    @media (min-width: 1050px) {
      justify-content: flex-start;
    }
  }
`;
