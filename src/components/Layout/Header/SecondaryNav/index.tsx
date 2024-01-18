import { useRouter } from "next/router";
import AuditionJobMenu from "./AuditionJobMenu";
import ClassesNav from "./ClassesNav";
import ContestMenu from "./ContestsMenu";
import TalentDirectoryMenu from "./TalentDirectoryMenu";

const SecondaryNav = () => {
    const router = useRouter();

    return (
        <>
            {router.pathname === "/auditions" && <AuditionJobMenu />}
            {router.pathname === "/auditions/all-jobs" && <AuditionJobMenu />}
            {router.pathname === "/auditions/matched-castings" && <AuditionJobMenu />}
            {router.pathname === "/auditions/viewed" && <AuditionJobMenu />}
            {router.pathname === "/auditions/auditions-near-me" && <AuditionJobMenu />}
            {router.pathname === "/auditions/preferences" && <AuditionJobMenu />}
            {router.pathname === "/auditions/favorites" && <AuditionJobMenu />}
            {router.pathname === "/auditions/applications" && <AuditionJobMenu />}
            {router.pathname === "/auditions/saved" && <AuditionJobMenu />}

            {router.pathname.includes("/classes") && <ClassesNav />}

            {router.pathname === "/search-talent/all-search-talent/[pageno]" && <TalentDirectoryMenu />}
            {router.pathname === "/search-talent/all-search-talent-sub/[pageno]" && <TalentDirectoryMenu />}
            {router.pathname === "/search-talent/follow-search-talent" && <TalentDirectoryMenu />}
            {router.pathname === "/search-talent/talent-spotlight" && <TalentDirectoryMenu />}

            {router.pathname === "/contests/current-contests" && <ContestMenu />}
            {router.pathname === "/contestants/[contest_id]/[talentnum]" && <ContestMenu />}
            {router.pathname === "/contests/[slug]" && <ContestMenu />}
            {router.pathname === "/contests/[slug]/[filter]" && <ContestMenu />}
            {router.pathname === "/contests/[slug]/submit-contests" && <ContestMenu />}
            {router.pathname === "/contests/about-contests" && <ContestMenu />}
            {router.pathname === "/contests/upcoming-contests" && <ContestMenu />}
            {router.pathname === "/contests/past-contests" && <ContestMenu />}
            {/* {router.pathname === "/contests/past-winner" && <ContestMenu /> } */}
            {router.pathname === "/contests/past-winner/[contest_id]" && <ContestMenu />}
            {router.pathname === "/contests/leaderboard" && <ContestMenu />}
        </>
    )
}

export default SecondaryNav;