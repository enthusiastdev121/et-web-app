import {
  Badge,
  PrimaryBtn,
  PrimaryBtnOutline,
  SecondaryBtn,
} from "@/styles/Btn.styled";
import AgeConfirmation from "components/AgeConfirmation";
import Button from "components/Button";
import UnfollowModal from "components/profile/modals/UnfollowModal";
import ProfileGalleryView from "components/profile/ProfileGallery/ProfileGalleryView";
import TranslatedText from "components/TranslatedText";
import Skel from "containers/CommunityBuzz/Skel";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsFillPlayFill, BsPersonPlus } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import { UserProfileD, UserProfileOwnD } from "types/profile";
import { FriendStatus } from "types/talents";
import {
  FeaturedPhotosSkelZero,
  FeaturedPhotosSkelOne,
  FeaturedPhotosSkelTwo,
  FeaturedPhotosSkelThree,
  FeaturedPhotosSkelFour,
  SocialSkel,
} from "./Skel";

import { AboutEdit, AboveTheFoldContainer, AddSocialLink, EditRow, ShareProfile } from "./styles";

export default function AboveTheFold(props: Props) {
  const {
    loading,
    refreshing,
    followNow,
    unFollowNow,
    isFollowing,
    connectNow,
    cancelConnectNow,
    messageNow,
    friendStatus,
    unConnectNow,
    loadingConnect,
    loadingFollow,
    own = false,
    ...profile
  } = props;

  // const [num, setNum] = useState(5);
  // const [showMore, setShowMore] = useState(profile?.interest?.length >= 5);
  let featuredImgs = 4;
  const [showUnfollowModal, setShowUnfollowModal] = useState(false);
  const [showCancelConnectModal, setShowCancelConnectModal] = useState(false);
  const [showUnConnectModal, setShowUnConnectModal] = useState(false);
  const [moreAboutText, setMoreAboutText] = useState(true);
  const [aboutText, setAboutText] = useState(profile?.aboutMe || "");
  const [moreResumeText, setMoreResumeText] = useState(true);
  const [resumeText, setResumeText] = useState(profile?.aboutMe || "");
  const { token } = useAuth();

  console.log("chek profile", profile);


  useEffect(() => {
    if (profile?.aboutMe?.length > 700) {
      setAboutText(profile?.aboutMe?.slice(0, 700));
    } else {
      setAboutText(profile?.aboutMe);
    }
    if (profile?.shortResume?.length > 700) {
      setResumeText(profile?.shortResume?.slice(0, 700));
    } else {
      setResumeText(profile?.shortResume);
    }
  }, [profile?.aboutMe, profile?.shortResume]);

  // useEffect(() => {
  //   setShowMore(profile?.interest?.length >= 5);
  // }, [profile?.interest?.length]);


  return (
    <AboveTheFoldContainer className="padding-x">
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* -------- LEFT PART -------- */}
          <ProfileGalleryView
            featuredImages={profile?.featuredImages}
            pic={profile?.pic}
            introVideo={profile?.introVideo}
            isPro={profile?.joinStatus === 5}
            own={own}
          />

          {/* -------- RIGHT PART -------- */}
          <div className="right w-full text-center lg:text-left">
            <>
              {/* Name */}
              <ShareProfile className="flex items-center justify-between">
                <div className="mx-auto lg:mx-0">
                  <h2 className="font-bold text-lg mb-5 flex items-center">
                    {own ? (
                      // profile?.fname !== null ? (
                      //   profile?.fname?.length > 0 ? (
                      <>
                        {profile?.fname}{" "}
                        {profile?.lname !== null && profile?.lname}
                        {profile?.displayName?.length > 0 && (
                          <> ({profile?.displayName})</>
                        )}
                      </>
                      // ) : (
                      //   <Skeleton
                      //     style={{
                      //       height: 28,
                      //       width: 200,
                      //       marginRight: 4,
                      //       display: "inline-block",
                      //     }}
                      //   />
                      // )
                      // ) : (
                      //   ""
                      // )
                    ) :
                      // profile?.displayName !== "" ? (
                      //   profile?.displayName?.length > 0 ? (
                      //     <>{profile?.displayName}</>
                      //   ) : (
                      // <Skeleton
                      //   style={{
                      //     height: 28,
                      //     width: 200,
                      //     marginRight: 4,
                      //     display: "inline-block",
                      //   }}
                      // />
                      // )
                      // ) : profile?.fname?.length > 0 ? (
                      <>
                        {profile?.fname} {profile?.lname !== null && profile?.lname}
                      </>
                    }

                    <span style={{ fontSize: '2rem', paddingLeft: 10 }} >
                      {
                        profile?.ageRangeText?.length > 0 && <>
                          (
                          {profile.ageRangeText}
                          )
                        </>
                      }
                    </span>
                    {profile?.pro && <Badge>Pro</Badge>}
                    {profile?.vip && <Badge>VIP</Badge>}
                    {profile?.featured && <Badge>Featured</Badge>}
                  </h2>
                </div>
                {/* <div>
                  <button>
                    <img src="/images/forward.png" alt="" />
                  </button>
                  <button>
                    <img src="/images/dots-vertical.png" alt="" />
                  </button>
                </div> */}
              </ShareProfile>

              {/* Interests */}
              <div className="mb-5">
                {profile?.interest ? (
                  profile?.interest?.map((i: any, index: number) => {
                    // if (index < num) {
                    if (index !== profile?.interest?.length - 1) {
                      return i.label + ", ";
                    } else {
                      return i.label;
                    }
                    // }
                  })
                ) : (
                  <Skeleton
                    style={{
                      height: 18,
                      width: "100%",
                      maxWidth: 700,
                      marginRight: 4,
                      display: "inline-block",
                    }}
                  />
                )}

                {/* {profile?.interest?.length > 0 && (
                <>
                  {showMore && (
                    <button
                      className={
                        num >= 5 ? "link-text cursor-pointer" : "hidden"
                      }
                      onClick={() => {
                        setNum(profile?.interest?.length);
                        setShowMore(false);
                      }}
                    >
                      ... more
                    </button>
                  )}
                </>
              )} */}
              </div>

              {/* Location */}
              {!loading && (
                <span className="mb-5 flex items-center gap-1 link-text justify-center location lg:justify-start">
                  <HiLocationMarker className="text-xl" />
                  Lives in {profile?.city}
                  {profile?.country && ","} {profile?.country}
                </span>
              )}

              {own &&
                <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
                  <Link href="/profile/edit" passHref>
                    <Button primary size="small" >
                      <img src="/images/pencil.png" alt="" />
                      <TranslatedText>Edit profile</TranslatedText>
                    </Button>
                  </Link>
                  {/* <Link href="/spotlights/add-spotlight" passHref>
                    <Button primary outlined size="small">
                      <BiPlus className="text-xl mr-1" />
                      Add spotlight
                    </Button>
                  </Link> */}
                </div>
              }


              {/* add friend follow */}
              {!own && !loading && token !== "" && (
                <div className="flex flex-wrap gap-2 mb-5 justify-center lg:justify-start btn-container">
                  {/* CONNECT */}
                  {friendStatus !== null ? (
                    friendStatus === "pending" ? (
                      <Button primary size="small" loading={loadingConnect}
                        onClick={() => setShowCancelConnectModal(true)}
                      >
                        <TranslatedText>Pending</TranslatedText>
                      </Button>
                    ) : (
                      <Button primary size="small" loading={loadingConnect}
                        onClick={() => setShowUnConnectModal(true)}
                      >
                        <TranslatedText>Connected</TranslatedText>
                      </Button>
                    )
                  ) : (
                    <Button primary size="small" loading={loadingConnect}
                      onClick={connectNow}
                    >
                      {" "}<TiPlus className="text-lg" />  <TranslatedText>Connect</TranslatedText>
                    </Button>
                  )}

                  {/* FOLLOW */}
                  {isFollowing ? (
                    <Button primary size="small" outlined loading={loadingFollow}
                      onClick={() => setShowUnfollowModal(true)}
                    >
                      <TranslatedText>Following</TranslatedText>
                    </Button>
                  ) : (
                    <Button primary size="small" outlined loading={loadingFollow}
                      onClick={followNow}
                    >
                      <TranslatedText>Follow</TranslatedText>
                    </Button>
                  )}

                  <Button primary outlined size="small"
                    // className="btn flex items-center gap-2"
                    onClick={() => { messageNow(profile.id, profile?.fname + " " + profile?.lname, profile.conversation_id) }}
                  >
                    <AiFillMessage className="text-xl" /> <span className="hidden md:block"><TranslatedText>Message</TranslatedText></span>
                  </Button>
                </div>
              )}

              {showUnfollowModal && (
                <UnfollowModal
                  open={() => setShowUnfollowModal(true)}
                  onClose={() => setShowUnfollowModal(false)}
                  title={"Unfollow this account"}
                  desc="Are you sure you want to unfollow this account?"
                  btnTitle="unfollow"
                  unFollowNow={unFollowNow}
                />
              )}
              {showCancelConnectModal && (
                <UnfollowModal
                  open={() => setShowCancelConnectModal(true)}
                  onClose={() => setShowCancelConnectModal(false)}
                  title={"Withdraw Friend Request"}
                  desc="Are you sure you want to withdraw this friend request"
                  btnTitle="withdraw"
                  unFollowNow={cancelConnectNow}
                />
              )}
              {showUnConnectModal && (
                <UnfollowModal
                  open={() => setShowUnConnectModal(true)}
                  onClose={() => setShowUnConnectModal(false)}
                  title={"Remove Friend"}
                  desc="Are you sure you want to remove this person from your friend list?"
                  btnTitle="Remove"
                  unFollowNow={unConnectNow}
                />
              )}

              {/* followers, connects & following */}
              {!loading && (
                <div className="flex items-center gap-5 mb-5 justify-center lg:justify-start info">
                  <div className="info-text">
                    <strong>{profile?.followers}</strong> <TranslatedText>Followers</TranslatedText>
                  </div>
                  <div className="info-text">
                    <strong>{profile?.connects}</strong> <TranslatedText>Connects</TranslatedText>
                  </div>
                  <div className="info-text">
                    <strong>{profile?.following}</strong> <TranslatedText>Following</TranslatedText>
                  </div>
                </div>
              )}

              {/* <AboutEdit>
                <div>
                  <img src="/images/Notes.png" alt="" />
                </div>
                <div className="about-section">
                  <h5>About me</h5>
                  <p>Add a short description about your self.</p>
                  <button><img src="/images/plus-white.png" alt="" />Add about me</button>
                </div>
              </AboutEdit> */}

              {/* About me */}
              {profile?.aboutMe?.length > 0 && (
                <>
                  <h3 className="text-left mb-3 font-bold"><TranslatedText>About Me</TranslatedText></h3>
                  <p className="mb-5 text-left">
                    <RiDoubleQuotesL className="inline-block text-xl -mt-2"
                    />{" "}
                    {!loading ? (
                      profile?.aboutMe?.length > 700 ? (
                        <>
                          {aboutText}
                          <span
                            className={"cursor-pointer"}
                            onClick={() => {
                              if (moreAboutText) {
                                setAboutText(profile?.aboutMe);
                                setMoreAboutText(false);
                              } else {
                                setAboutText(profile?.aboutMe?.slice(0, 700));
                                setMoreAboutText(true);
                              }
                            }}
                          >
                            {moreAboutText ? "..." : ""}{" "}
                            <span className="txt-link">
                              {moreAboutText ? (
                                <><TranslatedText>read&nbsp;more</TranslatedText></>
                              ) : (
                                <><TranslatedText>read&nbsp;less</TranslatedText></>
                              )}
                            </span>
                          </span>
                        </>
                      ) : (
                        <>{profile?.aboutMe}</>
                      )
                    ) : (
                      <>
                        <Skeleton
                          style={{
                            height: 18,
                            width: "100%",
                            maxWidth: 700,
                            marginRight: 4,
                            display: "inline-block",
                          }}
                        />
                        <Skeleton
                          style={{
                            height: 18,
                            width: "100%",
                            maxWidth: 700,
                            marginRight: 4,
                            display: "inline-block",
                          }}
                        />
                      </>
                    )}{" "}
                    <RiDoubleQuotesR className="inline-block text-xl -mt-2"
                    />
                  </p>
                </>
              )}

              {/* short resume */}
              {profile?.shortResume?.length > 0 && (
                <>
                  <h3 className="text-left mb-3 font-bold"><TranslatedText>Short Resume</TranslatedText></h3>
                  <p className="mb-5 text-left whitespace-pre-line">
                    {!loading ? (
                      profile?.shortResume?.length > 700 ? (
                        <>
                          {resumeText}
                          <span
                            className={"cursor-pointer"}
                            onClick={() => {
                              if (moreResumeText) {
                                setResumeText(profile?.shortResume);
                                setMoreResumeText(false);
                              } else {
                                setResumeText(
                                  profile?.shortResume?.slice(0, 700)
                                );
                                setMoreResumeText(true);
                              }
                            }}
                          >
                            {moreResumeText ? "..." : ""}{" "}
                            <span className="txt-link">
                              {moreResumeText ? (
                                <><TranslatedText>read&nbsp;more</TranslatedText></>
                              ) : (
                                <><TranslatedText>read&nbsp;less</TranslatedText></>
                              )}
                            </span>
                          </span>
                        </>
                      ) : (
                        <>{profile?.shortResume}</>
                      )
                    ) : (
                      <>
                        <Skeleton
                          style={{
                            height: 18,
                            width: "100%",
                            maxWidth: 700,
                            marginRight: 4,
                            display: "inline-block",
                          }}
                        />
                        <Skeleton
                          style={{
                            height: 18,
                            width: "100%",
                            maxWidth: 700,
                            marginRight: 4,
                            display: "inline-block",
                          }}
                        />
                      </>
                    )}
                  </p>
                </>
              )}

              <div className="mt-10 mb-2">
                {/* <SocialSkel /> */}
                {profile?.socialLinks?.external?.length > 0 && (
                  <Link href={profile?.socialLinks?.external || "#"}>
                    <a
                      target="_blank"
                      className="flex items-center gap-2 link-text mb-5 justify-center large-left"
                    >
                      <Image
                        src="/svg/earth.svg"
                        height={16}
                        width={16}
                        alt="link"
                      />
                      {profile?.socialLinks?.external}
                    </a>
                  </Link>
                )}
                <div className="flex items-center gap-3 justify-center large-left">
                  {profile?.socialLinks?.facebook?.length > 0 && (
                    <Link href={profile?.socialLinks?.facebook || "/"}>
                      <a target="_blank">
                        <Image
                          src="/images/Facebook.png"
                          height={28}
                          width={28}
                          alt="facebook"
                          className="cursor-pointer"
                        />
                      </a>
                    </Link>
                  )}

                  {profile?.socialLinks?.twitter?.length > 0 && (
                    <Link href={profile?.socialLinks?.twitter || "/"}>
                      <a target="_blank">
                        <Image
                          src="/images/Twitter.png"
                          height={28}
                          width={28}
                          alt="twitter"
                        />
                      </a>
                    </Link>
                  )}

                  {profile?.socialLinks?.instagram?.length > 0 && (
                    <Link href={profile?.socialLinks?.instagram}>
                      <a target="_blank">
                        <Image
                          src="/images/Instagram.png"
                          height={28}
                          width={28}
                          alt="instagram"
                        />
                      </a>
                    </Link>
                  )}

                  {profile?.socialLinks?.youtube?.length > 0 && (
                    <Link href={profile?.socialLinks?.youtube}>
                      <a target="_blank">
                        <Image
                          src="/images/YouTube.png"
                          height={28}
                          width={28}
                          alt="youtube"
                        />
                      </a>
                    </Link>
                  )}

                  {profile?.socialLinks?.tiktok?.length > 0 && (
                    <Link href={profile?.socialLinks?.tiktok}>
                      <a target="_blank">
                        <Image
                          src="/images/TikTok.png"
                          height={28}
                          width={28}
                          alt="tiktok"
                        />
                      </a>
                    </Link>
                  )}

                  {/* <AddSocialLink >
                    <BiPlus className="text-xl mr-1" />
                    Connect social links
                  </AddSocialLink> */}

                </div>
              </div>
            </>
          </div>
        </div>
      </div >
    </AboveTheFoldContainer >
  );
}

type Props = UserProfileD & {
  loading: boolean;
  refreshing?: boolean;
  own?: boolean;
  followNow?: any;
  unFollowNow?: any;
  connectNow?: any;
  cancelConnectNow?: any;
  unConnectNow?: any;
  friendStatus?: FriendStatus;
  messageNow?: any;
};
