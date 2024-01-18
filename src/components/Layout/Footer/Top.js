import Link from "next/link";
import styled from "styled-components";
import { FooterUpper } from ".";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function FooterTop() {
  return (
    <Root>
      <FooterUpper className="padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 text-left md:justify-items-center" style={{ maxWidth: "1530px", margin: "0 auto" }}>
          <div className=" text-sm mb-5 w-52">
            <h3 className="font-semibold mb-10">Auditions & Jobs</h3>
            <ul>
              <li className="mb-2">
                <Link href="/auditions">
                  <a>Acting Auditions</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/auditions">
                  <a>Modeling Auditions</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/auditions">
                  <a>Dance Auditions</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/auditions">
                  <a>Music Auditions</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/auditions">
                  <a>Crew Auditions</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/auditions">
                  <a>All Auditions/Jobs</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-sm mb-5 w-52">
            <h3 className="font-semibold mb-10">Videos</h3>
            <ul>
              <li className="mb-2">
                <Link href="/media/video/testimonials">
                  <a>Video Testimonials</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/media/video/testimonials">
                  <a>More Videos</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/media/video/testimonials">
                  <a>Hip Hop Musicians Advice</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/media/video/testimonials">
                  <a>Acting Workshop</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/media/video/testimonials">
                  <a>Celebrity Videos</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/media/video/testimonials">
                  <a>Member Video Search</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-sm mb-5 w-52">
            <h3 className="font-semibold mb-10">Find Talent</h3>
            <ul>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>Search Models and Actors</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>Search Musicians</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>Featured Talents</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>Featured Contestants</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>See Who Just Joined ET</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>Who&apos;s Online</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>Talent Activity Feed</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/search-talent/all-search-talent/1">
                  <a>All Talents</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-sm mb-5 w-52">
            <h3 className="font-semibold mb-10">About {WHITELABEL_NAME}</h3>
            <ul>
              <li className="mb-2">
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              {/* TODO: Page pending */}
              <li className="mb-2">
                <Link href="/about/agreement">
                  <a>FAQ</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about/advertise">
                  <a>Affiliates/Advertising</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/testimonials">
                  <a>Testimonials</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/getting-started">
                  <a>Take a Member Tour</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about/kidsprivacy">
                  <a>
                    <span className="text-red-500">Kids Privacy Policy</span>
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/help-support">
                  <a>Help & Support</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-sm mb-5 w-52">
            <h3 className="font-semibold mb-10">More on Explore Talent</h3>
            <ul>
              <li className="mb-2">
                <Link href="https://articles.exploretalent.com/">
                  <a>Articles</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://articles.exploretalent.com/">
                  <a>News</a>
                </Link>
              </li>
              {/* TODO: page pending */}
              {/* <li className="mb-2">
                <Link href="/links">
                  <a>Links</a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </FooterUpper>
    </Root>
  );
}

const Root = styled.div`
  a {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
