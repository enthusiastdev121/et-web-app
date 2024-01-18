import Button from "components/Button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ContentBox, Input, SlideHeading } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SocialAccounts({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
  isChild,
  // onNext,
}: any) {
  const inputRef = useRef(null);
  const [state, setState] = useState<SocialLinksD>({
    facebook: "",
    youtube: "",
    twitter: "",
    tiktok: "",
    instagram: "",
    external: "",
  });
  const [active, setActive] = useState("facebook");

  useEffect(() => {
    setState({
      facebook:
        value?.socialLinks?.facebook?.length > 0
          ? value?.socialLinks?.facebook
          : "",
      youtube:
        value?.socialLinks?.youtube?.length > 0
          ? value?.socialLinks?.youtube
          : "",
      twitter:
        value?.socialLinks?.twitter?.length > 0
          ? value?.socialLinks?.twitter
          : "",
      tiktok:
        value?.socialLinks?.tiktok?.length > 0
          ? value?.socialLinks?.tiktok
          : "",
      instagram:
        value?.socialLinks?.instagram?.length > 0
          ? value?.socialLinks?.instagram
          : "",
      external:
        value?.socialLinks?.external?.length > 0
          ? value?.socialLinks?.external
          : "",
    });
  }, [value]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    active === "facebook"
      ? setState((s) => ({
        ...s,
        facebook: `https://facebook.com/${inputRef.current.value}`,
      }))
      : active === "instagram"
        ? setState((s) => ({
          ...s,
          instagram: `https://instagram.com/${inputRef.current.value}`,
        }))
        : active === "tiktok"
          ? setState((s) => ({
            ...s,
            tiktok: `https://tiktok.com/${inputRef.current.value}`,
          }))
          : active === "twitter"
            ? setState((s) => ({
              ...s,
              twitter: `https://twitter.com/${inputRef.current.value}`,
            }))
            : active === "youtube"
              ? setState((s) => ({
                ...s,
                youtube: `https://youtube.com/${inputRef.current.value}`,
              }))
              : active === "external"
                ? setState((s) => ({ ...s, external: inputRef.current.value }))
                : "";
  };

  console.log("state is: ", state);

  return (
    <Frame bannerChangeOne>
      <ToastContainer className="Toastify" />
      {/* SKIP BUTTON */}
      {/* <button
        className="txt-link font-semibold cursor-pointer self-end mt-5"
        onClick={() => setCurrentSlide(nextSlide)}>Skip</button> */}

      <div className="grow flex items-center content">
        <ContentBox>
          <SlideHeading>Link {isChild ? "your child's" : "your"} social accounts</SlideHeading>
          <div className="-mt-6">So we can analyze your social analytics</div>

          {/* SELECT SOCIAL ICON */}
          <div className="mt-5 flex gap-3 items-center">
            <ImageContainer onClick={() => setActive("facebook")}>
              <input
                type="radio"
                id="facebook"
                className="absolute opacity-0"
                name="links"
              />
              <label htmlFor="facebook">
                <Image
                  src="/images/Facebook.png"
                  height={25}
                  width={25}
                  alt="facebook"
                />
                {state.facebook?.length > 0 && (
                  <div className="checked">
                    <BsCheckCircleFill />
                  </div>
                )}
              </label>
            </ImageContainer>

            <ImageContainer onClick={() => setActive("instagram")}>
              <input
                type="radio"
                id="instagram"
                className="absolute opacity-0"
                name="links"
              />
              <label htmlFor="instagram">
                <Image
                  src="/images/Instagram.png"
                  height={25}
                  width={25}
                  alt="instagram"
                />
              </label>
              {state.instagram?.length > 0 && (
                <div className="checked">
                  <BsCheckCircleFill />
                </div>
              )}
            </ImageContainer>

            <ImageContainer onClick={() => setActive("tiktok")}>
              <input
                type="radio"
                id="tiktok"
                className="absolute opacity-0"
                name="links"
              />
              <label htmlFor="tiktok">
                <Image
                  src="/images/TikTok.png"
                  height={25}
                  width={25}
                  alt="tik tok"
                />
              </label>
              {state.tiktok?.length > 0 && (
                <div className="checked">
                  <BsCheckCircleFill />
                </div>
              )}
            </ImageContainer>

            <ImageContainer onClick={() => setActive("twitter")}>
              <input
                type="radio"
                id="twitter"
                className="absolute opacity-0"
                name="links"
              />
              <label htmlFor="twitter">
                <Image
                  src="/images/Twitter.png"
                  height={25}
                  width={25}
                  alt="twitter"
                />
              </label>
              {state.twitter?.length > 0 && (
                <div className="checked">
                  <BsCheckCircleFill />
                </div>
              )}
            </ImageContainer>

            <ImageContainer onClick={() => setActive("youtube")}>
              <input
                type="radio"
                id="youtube"
                className="absolute opacity-0"
                name="links"
              />
              <label htmlFor="youtube">
                <Image
                  src="/images/YouTube.png"
                  height={25}
                  width={25}
                  alt="youtube"
                />
              </label>
              {state.youtube?.length > 0 && (
                <div className="checked">
                  <BsCheckCircleFill />
                </div>
              )}
            </ImageContainer>

            <ImageContainer onClick={() => setActive("external")}>
              <input
                type="radio"
                id="external"
                className="absolute opacity-0"
                name="links"
              />
              <label htmlFor="external">
                <Image
                  src="/images/external-website.png"
                  height={25}
                  width={25}
                  alt="external website"
                />
              </label>
              {state.external?.length > 0 && (
                <div className="checked">
                  <BsCheckCircleFill />
                </div>
              )}
            </ImageContainer>
          </div>

          {/* ADD ACCOUNT FORM */}
          <form onSubmit={handleSubmit}>
            <label className="font-semibold mt-10 block">
              Add Instagram URL or Username
            </label>
            <div className="mt-5 mb-5 relative">
              <Input placeholder={`@${active}`} ref={inputRef} />
              <input
                type="submit"
                value="+ Add"
                className="txt-link font-semibold absolute top-0 right-0 z-10 cursor-pointer"
              />
            </div>
          </form>
          <Button
            primary
            onClick={() => {

              if (!Object.values(state)?.some((i4: any) => i4.length > 0)) {
                toast.warning("Please enter atleast one social media links")
                return;
              }

              onUpdate({ socialLinks: state });
              setCurrentSlide(nextSlide);
              // onNext();
            }}
          >
            OK
          </Button>

          {/* LIST OF LINKED ACCOUNTS */}
          <div className="mt-10">
            <div className="font-semibold text-sm opacity-60 mb-2">
              Linked accounts
            </div>

            <ul>
              {state.facebook.length > 0 && (
                <li className="flex gap-2 items-center mb-2">
                  <div style={{ width: 15, height: 15, marginTop: "-4px" }}>
                    <Image
                      src="/images/Facebook.png"
                      alt="Facebook"
                      height={15}
                      width={15}
                    />
                  </div>

                  <div className="text-sm font-semibold">{state.facebook}</div>

                  <button
                    style={{
                      color: "rgba(60, 60, 67, 0.6)",
                      marginLeft: "auto",

                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    className="xl:mr-30pr"
                    onClick={() => setState((s) => ({ ...s, facebook: "" }))}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              )}

              {state.instagram.length > 0 && (
                <li className="flex gap-2 items-center mb-2">
                  <div style={{ width: 15, height: 15, marginTop: "-4px" }}>
                    <Image
                      src="/images/Instagram.png"
                      alt="Instagram"
                      height={15}
                      width={15}
                    />
                  </div>

                  <div className="text-sm font-semibold">{state.instagram}</div>

                  <button
                    style={{
                      color: "rgba(60, 60, 67, 0.6)",
                      marginLeft: "auto",

                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    className="xl:mr-30pr"
                    onClick={() => setState((s) => ({ ...s, instagram: "" }))}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              )}

              {state.tiktok.length > 0 && (
                <li className="flex gap-2 items-center mb-2">
                  <div style={{ width: 15, height: 15, marginTop: "-4px" }}>
                    <Image
                      src="/images/Tiktok.png"
                      alt="Tiktok"
                      height={15}
                      width={15}
                    />
                  </div>

                  <div className="text-sm font-semibold">{state.tiktok}</div>

                  <button
                    style={{
                      color: "rgba(60, 60, 67, 0.6)",
                      marginLeft: "auto",

                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    className="xl:mr-30pr"
                    onClick={() => setState((s) => ({ ...s, tiktok: "" }))}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              )}

              {state.twitter.length > 0 && (
                <li className="flex gap-2 items-center mb-2">
                  <div style={{ width: 15, height: 15, marginTop: "-4px" }}>
                    <Image
                      src="/images/Twitter.png"
                      alt="Twitter"
                      height={15}
                      width={15}
                    />
                  </div>

                  <div className="text-sm font-semibold">{state.twitter}</div>

                  <button
                    style={{
                      color: "rgba(60, 60, 67, 0.6)",
                      marginLeft: "auto",

                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    className="xl:mr-30pr"
                    onClick={() => setState((s) => ({ ...s, twitter: "" }))}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              )}

              {state.youtube.length > 0 && (
                <li className="flex gap-2 items-center mb-2">
                  <div style={{ width: 15, height: 15, marginTop: "-4px" }}>
                    <Image
                      src="/images/Youtube.png"
                      alt="Youtube"
                      height={15}
                      width={15}
                    />
                  </div>

                  <div className="text-sm font-semibold">{state.youtube}</div>

                  <button
                    style={{
                      color: "rgba(60, 60, 67, 0.6)",
                      marginLeft: "auto",

                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    className="xl:mr-30pr"
                    onClick={() => setState((s) => ({ ...s, youtube: "" }))}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              )}

              {state.external.length > 0 && (
                <li className="flex gap-2 items-center mb-2">
                  <div style={{ width: 15, height: 15, marginTop: "-4px" }}>
                    <Image
                      src="/images/external-website.png"
                      alt="external"
                      height={15}
                      width={15}
                    />
                  </div>

                  <div className="text-sm font-semibold">{state.external}</div>

                  <button
                    style={{
                      color: "rgba(60, 60, 67, 0.6)",
                      marginLeft: "auto",

                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    className="xl:mr-30pr"
                    onClick={() => setState((s) => ({ ...s, external: "" }))}
                  >
                    <AiFillCloseCircle />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </ContentBox>
      </div>

      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={80}
        setCurrentSlide={setCurrentSlide}
        allFilled={Object.values(state)?.some((i4: any) => i4.length > 0)}
        warningText={"Please enter atleast one social media links"}
      />
    </Frame>
  );
}

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;

  .checked {
    font-size: 14px;
    color: #37c96a;
    position: absolute;
    bottom: -3px;
    right: -6px;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input:checked + label {
    border: 1px solid ${p => p.theme.primary};
    width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 100%;
  }
`;

type SocialLinksD = {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  tiktok: string;
  external: string;
};
