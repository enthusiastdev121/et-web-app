import { useRouter } from "next/router";
import { MdAccountCircle, MdMail } from "react-icons/md";
import { AiFillDashboard, AiFillLike } from "react-icons/ai";
import { IoCameraSharp, IoDocumentText } from "react-icons/io5";

import { LikeBtn } from "@/styles/Btn.styled";
import { TopBar } from "../src/components/Layout/Header/Styles";
import Link from "next/link";

export default function Top() {
  const router = useRouter();

  return (
    <TopBar className="hidden xl:flex items-center px-5 font-semibold text-sm">
      <div className="flex items-center h-full">
        <LikeBtn className="rounded-md py-1 px-4 flex items-center mr-3 text-sm">
          <AiFillLike className="text-xl" />{" "}
          <span className="ml-2">Like 4.7M</span>
        </LikeBtn>
        <p>
          Get Started with Auditions{" "}
          <span className="bg-white text-blue-400 px-3 rounded-lg">2</span>{" "}
        </p>
      </div>

      <nav className="flex items-center ml-auto">
        <Link href="/messages" passHref>
          <div
            className={
              router.pathname === "/messages"
                ? "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5  active"
                : "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5 "
            }
          >
            <MdMail className="nav-icon" />
            <span className="ml-2">Message</span>
            <span>2</span>
          </div>
        </Link>

        <Link href="/dashboard" passHref>
          <div
            className={
              router.pathname === "/dashboard"
                ? "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5  active"
                : "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5 "
            }
          >
            <AiFillDashboard className="nav-icon" />
            <span className="ml-2">Dasboard</span>
          </div>
        </Link>

        <Link href="/media" passHref>
          <div
            className={
              router.pathname === "/media"
                ? "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5  active"
                : "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5 "
            }
          >
            <IoCameraSharp className="nav-icon" />
            <span className="ml-2">Media</span>
          </div>
        </Link>

        <Link href="/applications" passHref>
          <div
            className={
              router.pathname === "/applications"
                ? "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5  active"
                : "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5 "
            }
          >
            <IoDocumentText className="nav-icon" />
            <span className="ml-2">Application</span>
          </div>
        </Link>

        <Link href="/profile" passHref>
          <div
            className={
              router.pathname === "/profile"
                ? "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5  active"
                : "flex items-center cursor-pointer hover:bg-slate-100 py-3 px-5 "
            }
          >
            <MdAccountCircle className="nav-icon" />
            <span className="ml-2">My Account</span>
          </div>
        </Link>
      </nav>
    </TopBar>
  );
}
