import { IoCameraOutline } from "react-icons/io5";
import { BsMic } from "react-icons/bs";

import { PrimaryLight } from "@/styles/Btn.styled";
import { MediaLockerContainer } from "./Dashboard.styled";
import Image from "next/image";

export default function MediaLocker() {
  return (
    <MediaLockerContainer className="boxShadow py-5 rounded-lg txt-base">
      <div className="flex justify-between items-center pb-3 border-b-2 px-5">
        <h2 className="text-lg font-semibold">Media Locker</h2>
        <Image
          src="/svg/multi-media.svg"
          alt="multi media"
          height={12}
          width={12}
        />
      </div>

      <ul className="mb-5">
        <li className="flex items-center py-3 my-1 px-5 gap-3">
          <IoCameraOutline className="mr-4 text-xl icon" />
          Photos
          <PrimaryLight className="text-xs font-semibold ml-auto">
            22
          </PrimaryLight>
        </li>
        <li className="flex items-center py-3 my-1 px-5 gap-3">
          <div className="mr-4">
            <Image
              src="/svg/video-camera.svg"
              alt="multi media"
              height={20}
              width={20}
            />
          </div>
          Videos
          <PrimaryLight className="text-xs font-semibold ml-auto">
            26
          </PrimaryLight>
        </li>
        <li className="flex items-center py-3 my-1 px-5 gap-3">
          <BsMic className="mr-4 text-xl icon" />
          Audio
          <PrimaryLight className="text-xs font-semibold ml-auto">
            28
          </PrimaryLight>
        </li>
      </ul>
    </MediaLockerContainer>
  );
}
