import Image from "next/image";
import { NavContainer } from "./Applications.styled";

export default function Nav() {
  return (
    <NavContainer>
      <ul className="font-semibold mx-auto text-center flex justify-center flex-col lg:flex-row">
        <li className="flex items-center py-5 mx-5 cursor-pointer active">
          <Image src="/svg/invites.svg" alt="invites" height={20} width={20} />
          <span className="ml-3">Invites</span>
        </li>
        <li className="flex items-center py-5 mx-5 cursor-pointer">
          <Image src="/svg/draft.svg" alt="draft" height={20} width={20} />
          <span className="ml-3">My Draft</span>
        </li>
        <li className="flex items-center py-5 mx-5 cursor-pointer">
          <Image src="/svg/active.svg" alt="active" height={20} width={20} />
          <span className="ml-3">Active</span>
        </li>
        <li className="flex items-center py-5 mx-5 cursor-pointer ">
          <Image
            src="/svg/auditions.svg"
            alt="Audition"
            height={20}
            width={20}
          />
          <span className="ml-3">Auditions</span>
        </li>
        <li className="flex items-center py-5 mx-5 cursor-pointer ">
          <Image
            src="/svg/archived.svg"
            alt="archived"
            height={20}
            width={20}
          />
          <span className="ml-3">Archived</span>
        </li>
      </ul>
    </NavContainer>
  );
}
