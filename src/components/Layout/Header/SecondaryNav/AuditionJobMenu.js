import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import { AJMenu } from "../Styles";
import TranslatedText from "components/TranslatedText";

export default function AuditionJobMenu() {
  const router = useRouter();

  const prefRef = useRef();
  const appRef = useRef();

  useEffect(() => {
    if (router.pathname === "/auditions/preferences") {
      prefRef.current.scrollIntoView();
    }
    if (router.pathname === "/auditions/applications") {
      appRef.current.scrollIntoView();
    }
  }, [router.pathname]);

  return (
    // <AJMenu className="md:px-10v xl:border-b-2">
    <AJMenu className="md:px-10v border-b-[1px] sticky lg:top-[88.5px] z-20" style={{ top: MAIN_NAV_HEIGHT }}>
      <div className="sm:px-[10vw] md:px-0 flex gap-8 px-4 md:gap-5 text-sm font-semibold items-center w-fit overflow-x-scroll no-scroll whitespace-nowrap" style={{ width: "100%", maxWidth: "1530px", margin: "0 auto" }}>
        {/* ----- all jobs -----  */}
        <Link href="/auditions/all-jobs" passHref>
          <div className={router.pathname === "/auditions/all-jobs" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item"}>
            <TranslatedText>All Jobs</TranslatedText>
          </div>
        </Link>
        {/* <Link href="/auditions/auditions-near-me" passHref>
          <div className={router.pathname === "/audition-job/auditions-near-me" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item"}>Auditions near me</div>
        </Link> */}

        {/*  ----- matching jobs -----  */}
        <Link href="/auditions/matched-castings" passHref>
          <div className={router.pathname === "/auditions/matched-castings" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item"}>
            <TranslatedText> Matching Jobs</TranslatedText>
          </div>
        </Link>

        {/*  ----- viewed jobs -----  */}
        <Link href="/auditions/viewed" passHref>
          <div className={router.pathname === "/auditions/viewed" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item  "}>
            <TranslatedText> Viewed</TranslatedText>
          </div>
        </Link>

        {/* ----- favorites -----  */}
        <Link href="/auditions/favorites" passHref>
          <div className={router.pathname === "/auditions/favorites" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item"}>
            <TranslatedText>Favorites</TranslatedText>
          </div>
        </Link>

        {/* ----- job preferences -----  */}
        <Link href="/auditions/preferences" passHref>
          <div ref={prefRef} className={router.pathname === "/auditions/preferences" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item"}>
            <TranslatedText>Jobs Preferences</TranslatedText>
          </div>
        </Link>

        {/* ----- job applications -----  */}
        <Link href="/auditions/applications" passHref>
          <div ref={appRef} className={router.pathname === "/auditions/applications" ? "py-4 cursor-pointer active" : "py-4 cursor-pointer nav-item"}>
            <TranslatedText>My Job Applications</TranslatedText>
          </div>
        </Link>
        {/* -----------VIew jobs--------------- */}
        {/* <Link href="/audition-job/viewed" passHref>
    <div
      className={
        router.pathname === "/audition-job/viewed"
          ? "py-4 cursor-pointer active"
          : "py-4 cursor-pointer nav-item"
      }
    >
      Viewed
    </div>
  </Link>  */}

        {/* <PrimaryBtn className="btn ml-auto">List an audition or job</PrimaryBtn> */}
      </div>
    </AJMenu>
  );
}

{
  /*  ----- audition near me -----  */
}
{
  /* <Link href="/audition-job/auditions-near-me" passHref>
    <div
      className={
        router.pathname === "/audition-job/auditions-near-me"
          ? "py-4 cursor-pointer active"
          : "py-4 cursor-pointer nav-item"
      }
    >
      Auditions near me
    </div>
  </Link> */
}
