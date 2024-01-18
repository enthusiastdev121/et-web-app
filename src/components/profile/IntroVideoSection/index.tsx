import { PrimaryBtn } from "@/styles/Btn.styled";
import { formatPlayerDuration } from "@/utils/helper";
import Button from "components/Button";
import TranslatedText from "components/TranslatedText";
import { AddCircle, PlayCircle, VideoSquare } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { IntroVideoD } from "types/profile";

export default function IntroVideoSection({
  edit,
  uri,
  thumb,
  duration,
  own = false,
}: IntroVideoD & {
  edit: boolean;
  own: boolean;
  onUpdate: (d: IntroVideoD) => any;
}) {
  const [playing, setPlaying] = useState(false);

  if (own && !edit && !uri) {
    return null;
  }

  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  return (
    <Container className={`${box_shadow} p-4`}>
      {!uri && edit ? (
        //   {true ? (
        <div className="flex justify-center items-center flex-col py-12" id="target11">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/images/preview-video.svg" />
            <div className="text-center">
              <h2 className="profile-box-title txt-base">
                <TranslatedText>Video Introduction</TranslatedText>
              </h2>
              <p className="profile-box-subtitle txt-base">
                <TranslatedText>Ready to add a video of you saying {`${`'Hi'`}`} to camera? {`${`You're`}`} in the right place!</TranslatedText>
              </p>

              <div className="mt-4 text-center">
                <Link href={"/profile/edit/intro-video"} passHref>
                  <PrimaryBtn className="btn flex items-center justify-center gap-1 mx-auto">
                    <BsPlusLg /><TranslatedText> Add video Greeting</TranslatedText>
                  </PrimaryBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {edit ? (
            <div className="mb-3 flex justify-between ">
              <div className="flex gap-2 items-center mb-1">
                <VideoSquare />
                <div>
                  <h2 className="font-bold text-md sm:text-2xl">
                    <TranslatedText> Video Greeting</TranslatedText>
                  </h2>
                </div>
              </div>

              <div>
                <Link href={"/profile/edit/intro-video"} passHref>
                  <a>
                    <Button
                      size="small"
                      primary
                      light
                      icon={<MdModeEditOutline />}
                    >
                      <TranslatedText> Edit</TranslatedText>
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <div className="mb-3 flex justify-between items-center">
              <div className="flex gap-2 items-center mb-1">
                <VideoSquare />
                <div>
                  <h2 className="font-bold text-md sm:text-2xl">
                    <TranslatedText>Video Greeting</TranslatedText>
                  </h2>
                </div>
              </div>
              <div className="text-gray-500 text-sm sm:text-sm">
                <TranslatedText>Uploaded week ago</TranslatedText>
              </div>
            </div>
          )}

          <div className="bg-black rounded-md overflow-hidden">
            <div className="w-full aspect-video sm:aspect-[2220/1080] relative">
              {playing ? (
                <video
                  controls
                  src={uri}
                  className="h-full w-full object-contain"
                  autoPlay
                />
              ) : (
                <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center">
                  <div
                    className="absolute z-10 bg-black bg-opacity-60 hover:scale-150 transition-all cursor-pointer p-2 rounded-full h-12 aspect-square flex justify-center items-center text-lg "
                    onClick={() => setPlaying(true)}
                  >
                    <div className="-mr-1">
                      <FaPlay className="text-white" />
                    </div>
                  </div>
                  <img src={thumb} className="object-contain h-full w-full" />
                  <div className="absolute bottom-2 z-30 right-2  bg-black bg-opacity-50 text-white rounded-md text-base ">
                    {formatPlayerDuration(duration || 0)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  background: ${(p: any) => p.theme.pure};
`;
