import { HiPencil } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";

import { PrimaryLight } from "@/styles/Btn.styled";
import { Profile } from "./Dashboard.styled";

export default function MyProfile() {
  return (
    <Profile className="boxShadow py-5 rounded-lg txt-base">
      <div className="flex justify-between items-center pb-3 border-b-2 px-5">
        <h2 className="text-lg font-semibold">My Profile</h2>
        <HiPencil />
      </div>

      <div className="flex mt-5 px-5">
        <span className="profile-initials my-3 mr-3">MT</span>
        <input type="range" className="w-full" />
      </div>

      <ul className="mb-5">
        <li className="flex items-center py-3 my-1 px-5">
          Photos <PrimaryLight className="ml-4 text-xs">2</PrimaryLight>
          <FcCheckmark className="ml-auto" />
        </li>
        <li className="flex items-center py-3 my-1 px-5">
          Videos <PrimaryLight className="ml-4 text-xs">2</PrimaryLight>
          <MdOutlineClose className="ml-auto" />
        </li>
        <li className="flex items-center py-3 my-1 active px-5">
          Audio
          <FcCheckmark className="ml-auto" />
        </li>
        <li className="flex items-center py-3 my-1 px-5">
          Physical Details <FcCheckmark className="ml-auto" />
        </li>
        <li className="flex items-center py-3 my-1 px-5">
          Experience
          <FcCheckmark className="ml-auto" />
        </li>
      </ul>
    </Profile>
  );
}
