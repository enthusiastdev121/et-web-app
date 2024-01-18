import { useRouter } from "next/router";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBriefcase, BsCheckCircle } from "react-icons/bs";
import Link from "next/link";

import { Container, Nav } from "./Dashboard.styled";
import { PrimaryLight } from "@/styles/Btn.styled";

export default function Header() {
  const router = useRouter();

  return (
    <div>
      <Container className="py-20 px-5 text-center">
        <h1 className="font-bold text-3xl">Talend Dashboard</h1>
        <p className="text-xl mt-3">Welcome back! Here&apos;s an overview of your stuff</p>
      </Container>

      <Nav className="flex justify-center flex-wrap mx-auto px-5 ">
        <Link href="/auditions" passHref>
          <a className={router.pathname === "/messages" ? "nav-item active" : "nav-item"}>
            <IoMailOutline className="text-2xl" />

            <span className="text mx-3">New Messages</span>
            <PrimaryLight>0</PrimaryLight>
          </a>
        </Link>

        <Link href="/auditions" passHref>
          <a className={router.pathname === "/invites" ? "nav-item active" : "nav-item"}>
            <IoPersonOutline className="text-2xl" />

            <span className="text mx-3">Application Invites</span>
            <PrimaryLight>0</PrimaryLight>
          </a>
        </Link>

        <Link href="/auditions" passHref>
          <a className={router.pathname === "/audition-request" ? "nav-item active" : "nav-item"}>
            <RiVideoAddLine className="text-2xl" />

            <span className="text mx-3">Audition Request</span>
            <PrimaryLight>0</PrimaryLight>
          </a>
        </Link>

        <Link href="/auditions" passHref>
          <a className={router.pathname === "/drafts" ? "nav-item active" : "nav-item"}>
            <BsBriefcase className="text-2xl" />

            <span className="text mx-3">Application Drafts</span>
            <PrimaryLight>0</PrimaryLight>
          </a>
        </Link>

        <Link href="/auditions" passHref>
          <a className={router.pathname === "/role-match" ? "nav-item active" : "nav-item"}>
            <BsCheckCircle className="text-2xl" />

            <span className="text mx-3">New Roles Matched</span>
            <PrimaryLight>300</PrimaryLight>
          </a>
        </Link>
      </Nav>
    </div>
  );
}
