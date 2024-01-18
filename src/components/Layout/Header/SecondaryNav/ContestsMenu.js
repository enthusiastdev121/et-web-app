import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import { AJMenu } from "../Styles";

export default function ContestMenu() {
  const router = useRouter();
  const winnerRef = useRef();
  const pastContestRef = useRef();
  const aboutContestRef = useRef();

  useEffect(() => {
    if (router.pathname.includes("/contests/past-winner")) {
      winnerRef.current.scrollIntoView();
    }
    if (router.pathname.includes("/contests/past-contests")) {
      pastContestRef.current.scrollIntoView();
    }
    if (router.pathname.includes("/contests/about-contests")) {
      aboutContestRef.current.scrollIntoView();
    }
  }, [router.pathname]);

  return (
    <AJMenu
      className="md:px-10v border-b-[1px] overflow-scroll no-scroll sticky lg:top-[88.5px] z-20  "
      style={{ top: MAIN_NAV_HEIGHT }}
    >
      <div
        className="flex gap-5 sm:px-0 px-4 text-sm font-semibold items-center whitespace-nowrap"
        style={{ width: "100%", maxWidth: "1530px", margin: "0 auto" }}
      >
        <Link href="/contests/current-contests" passHref>
          <div
            className={
              router.pathname === "/contests/current-contests" ||
              router.pathname === "/contests/[slug]" ||
              router.pathname === "/contests/[slug]/[filter]" ||
              router.pathname === "/contests/[slug]/submit-content" ||
              router.pathname === "/contestants/[contest_id]/[talentnum]"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
          >
            Current Contests
          </div>
        </Link>
        <Link href="/contests/upcoming-contests" passHref>
          <div
            className={
              router.pathname === "/contests/upcoming-contests"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
          >
            Upcoming
          </div>
        </Link>
        <Link href="/contests/leaderboard" passHref>
          <div
            className={
              router.pathname === "/contests/leaderboard"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
          >
            Leaderboard
          </div>
        </Link>
        <Link href="/contests/past-winner/-1" passHref>
          <div
            className={
              router.pathname === "/contests/past-winner/[contest_id]"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
            ref={winnerRef}
          >
            Winners
          </div>
        </Link>
        <Link href="/contests/past-contests" passHref>
          <div
            className={
              router.pathname === "/contests/past-contests"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
            ref={pastContestRef}
          >
            Past Contest
          </div>
        </Link>
        <Link href="/contests/about-contests" passHref>
          <div
            ref={aboutContestRef}
            className={
              router.pathname === "/contests/about-contests"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
          >
            About our contests
          </div>
        </Link>
        {/* <PrimaryBtn className="btn ml-auto">List an audition or job</PrimaryBtn> */}
      </div>
    </AJMenu>
  );
}
