import {
  Badge,
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryLight,
  SecondaryBtn,
} from "@/styles/Btn.styled";
import ProfileGalleryEdit from "components/profile/ProfileGallery/ProfileGalleryEdit";
import { useProfileStore } from "context/ProfileStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill, BsPersonPlus } from "react-icons/bs";
import { HiPhone, HiLocationMarker, HiPencil, HiMail } from "react-icons/hi";
import { TiPlus } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import { UserProfileD } from "types/profile";
import { AboveTheFoldContainer } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AboutEdit, AddSocialLink } from "containers/profile/styles";
import { BiPlus } from "react-icons/bi";

export default function AboveTheFold(props: Props) {
  const {
    loading,
    refreshing,
    editable = true,
    own = false,
    ...profile
  } = props;
  console.log("The profile is: ", profile);

  return (
    <AboveTheFoldContainer className="">
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* --------- LEFT --------- */}
          <div>
            <ProfileGalleryEdit
              featuredImages={profile.featuredImages}
              pic={profile.pic}
              introVideo={profile.introVideo}
              // isPro={profile.joinStatus === 5}
              isPro={profile?.pro}
              own={true}
              editable={true}
            />
          </div>

          {/* --------- RIGHT --------- */}
          <div className="right text-center lg:text-left">
            <div className="padding-x">
              {/* Name and age */}
              <div className="flex items-center mb-5 justify-center lg:justify-start name-container">
                <h2 className="font-bold text-lg flex items-center">
                  {profile?.fname} {profile?.lname !== null && profile?.lname}{" "}
                  {profile?.displayName?.length > 0 && (
                    <> ({profile?.displayName})</>
                  )}
                  {profile?.age?.toString().length > 0 ? " ," + profile.age : ""}{" "}
                  {profile?.pro && <Badge>Pro</Badge>}
                  {profile?.vip && <Badge>VIP</Badge>}
                  {profile?.featured && <Badge>Featured</Badge>}
                </h2>
                <Link href="/profile/edit/name">
                  <a className="edit-btn">
                    <HiPencil style={{ display: "inline" }} />
                  </a>
                </Link>
              </div>

              {/* Interests */}
              <div id="target7">
                <div className="mb-5">
                  {profile?.interest?.length === 0 ? (
                    <Link href="/profile/edit/interests">
                      <a>
                        <span>Add Interests</span>
                      </a>
                    </Link>
                  ) : (
                    <span>
                      {profile?.interest?.map((i: any) => i.label).join(", ")}
                    </span>
                  )}

                  <Link href="/profile/edit/interests">
                    <a className="edit-btn">
                      <HiPencil style={{ display: "inline" }} />
                    </a>
                  </Link>
                </div>

                {/* Location */}
                <div className="flex items-center mb-5 justify-center lg:justify-start location">
                  <span className="flex items-center gap-1 link-text font-medium	">
                    <HiLocationMarker className="text-xl" />
                    {profile?.city && profile?.city + ","} {profile?.country}
                  </span>

                  <Link href="/profile/edit/location">
                    <a className="edit-btn">
                      <HiPencil style={{ display: "inline" }} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* contact */}
            <div className="flex items-center mb-5 justify-center lg:justify-start location">
              <span className="flex items-center gap-1 link-text font-medium	">
                <HiPhone className="text-xl" />
                {profile?.phone}
              </span>

              <Link href="/profile/edit/contact">
                <a className="edit-btn">
                  <HiPencil style={{ display: "inline" }} />
                </a>
              </Link>
            </div>

            {/* email */}
            <div className="flex items-center mb-5 justify-center lg:justify-start location">
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <span className="flex items-center gap-1 link-text font-medium	">
                <HiMail className="text-xl" />
                {profile?.email}
              </span>

              <div
                className="edit-btn cursor-pointer"
                onClick={() => {
                  toast.info("Contact support to change email", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                <HiPencil style={{ display: "inline" }} />
              </div>
            </div>


            <div className="flex items-center gap-5 mb-5 justify-center lg:justify-start info px-2 md:px-0" id="target6">
              <div className="info-text">
                <strong>0</strong> Followers
              </div>
              <div className="info-text">
                <strong>0</strong> Connects
              </div>
              <div className="info-text">
                <strong>0</strong> Following
              </div>
            </div>

            {/* Intro summary and Short Resume */}
            <div className="mb-5">
              {
                profile?.aboutMe?.length > 0 ?
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="font-semibold text-xl lg:text-2xl">
                        Intro Summary
                      </h3>
                      <Link href="/profile/edit/summary">
                        <a className="edit-btn-2">
                          <HiPencil style={{ display: "inline" }} /> Edit
                        </a>
                      </Link>
                    </div>

                    {profile?.aboutMe?.length > 0 && (
                      <p className="mb-5 text-left">
                        <Image
                          src="/svg/opn-qts.svg"
                          height={10}
                          width={15}
                          alt="opening quotes"
                        />{" "}
                        {!loading ? (
                          profile?.aboutMe
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
                        <Image
                          src="/svg/cls-qts.svg"
                          height={10}
                          width={15}
                          alt="opening quotes"
                        />
                      </p>
                    )}
                  </div>
                  :

                  <AboutEdit className="mb-5 bg-red-500" id="target8">
                    <div className="flex  ">
                      <img src="/images/Notes.png" alt="" />
                    </div>
                    <div className="about-section">
                      <h5>About me</h5>
                      <p>Add a short description about your self.</p>
                      <Link href="/profile/edit/summary" passHref>
                        <button><img src="/images/plus-white.png" alt="" />Add about me</button>
                      </Link>
                    </div>
                  </AboutEdit>
              }

              {profile?.shortResume?.length > 0 ?
                <div className="px-5 py-1">
                  <div className="flex items-center justify-between mb-2 md:mb-5">
                    <h3 className="font-semibold text-xl lg:text-2xl">
                      Short resume
                    </h3>
                    <Link href="/profile/edit/resume">
                      <a className="edit-btn-2">
                        <HiPencil style={{ display: "inline" }} /> Edit
                      </a>
                    </Link>
                  </div>
                  {profile?.shortResume?.length > 0 && (
                    <p className="mb-5 text-left">
                      {!loading ? (
                        profile?.shortResume
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
                  )}
                </div>
                :
                <AboutEdit className="mb-2 md:mb-5 ">
                  <div>
                    <img src="/images/resume.png" alt="" style={{ width: 64, height: 64 }} />
                  </div>
                  <div className="about-section">
                    <h5>Short resume</h5>
                    <p>Add a Short resume about your self.</p>
                    <Link href="/profile/edit/resume" passHref>
                      <button><img src="/images/plus-white.png" alt="" />Add short resume</button>
                    </Link>
                  </div>
                </AboutEdit>
              }
            </div>

            {/* Social links ? */}
            <div className="ml-3 mt-0 mb-2 md:mt-10 md:mb-8 px-2 " id="target9">
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

              <div className="flex items-center gap-3 large-left">
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

                <Link href="/profile/edit/social-links" passHref>
                  <AddSocialLink>
                    <BiPlus className="text-xs md:text-lg mr-1" />
                    Connect social links
                  </AddSocialLink>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </AboveTheFoldContainer>
  );
}

type Props = UserProfileD & {
  loading: boolean;
  refreshing: boolean;
  own?: boolean;
  editable?: boolean;
};

/* <div className="box p-5">
<div className="flex items-center justify-between mb-5">
  <h3 className="font-semibold text-xl lg:text-2xl">
    Social links & website
  </h3>
  <Link href="/profile/edit/social-links">
    <a className="edit-btn-2">
      <HiPencil style={{ display: "inline" }} /> Edit
    </a>
  </Link>
</div>

{profile?.socialLinks?.external?.length > 0 && (
  <Link href={profile?.socialLinks?.external || "/"}>
    <a
      target="_blank"
      className="flex items-center gap-2 link-text mb-5"
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

<div className="flex items-center gap-3">
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
</div>
</div> */