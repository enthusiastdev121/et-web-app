import { useAuth } from "context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

import { AJMenu } from "../Styles";

export default function TalentDirectoryMenu() {
  const router = useRouter();
  const {
    auth: { authenticated },
  } = useAuth();

  return (
    <AJMenu className="px-1 md:px-10v xl:border-b-2">
      <div
        className="flex gap-5 text-sm font-semibold items-center justify-center md:justify-start"
        style={{ width: "100%", maxWidth: "1530px", margin: "0 auto" }}
      >
        <Link href="/search-talent/all-search-talent/1" passHref>
          <div
            className={
              router.pathname === "/search-talent/all-search-talent/[pageno]" ||
              router.pathname ===
                "/search-talent/all-search-talent-sub/[pageno]"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
          >
            Search talent
          </div>
        </Link>
        {authenticated && (
          <>
            <Link href="/search-talent/follow-search-talent" passHref>
              <div
                className={
                  router.pathname === "/search-talent/follow-search-talent"
                    ? "py-4 cursor-pointer active"
                    : "py-4 cursor-pointer nav-item"
                }
              >
                Following
              </div>
            </Link>
          </>
        )}

        {/* <Link href="/search-talent/talent-spotlight" passHref>
          <div
            className={
              router.pathname === "/search-talent/talent-spotlight"
                ? "py-4 cursor-pointer active"
                : "py-4 cursor-pointer nav-item"
            }
          >
            Talent spotlight
          </div>
        </Link> */}
        {/* <PrimaryBtn className="btn ml-auto">List an audition or job</PrimaryBtn> */}
      </div>
    </AJMenu>
  );
}
