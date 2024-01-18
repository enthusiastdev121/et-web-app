import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import { H2 } from "@/styles/Typography.styled";
import { Main } from "./Detail.styled";
import Hero from "./Hero";
import Leaderboard from "../Leaderboard";

export default function Detail() {
  return (
    <div>
      <Hero />

      <Main className="page-padding lg:flex gap-10 justify-between">
        <div>
          <H2 className="mb-7">Description</H2>
          <p className="mb-5">
            It&apos;s throwback Thursday everyday here so that means it&apos;s
            time to dig up those embarrassingly cute baby pictures for Explore
            Talent&apos;s newest contest! Upload a photo of you as a
            youngin&apos; for your chance to win some pretty fabulous prizes.
            It&apos;s throwback Thursday everyday here so that means it&apos;s
            time to dig up those embarrassingly cute baby pictures for Explore
            Talent&apos;s newest contest! Upload a photo of you as a
            youngin&apos; for your chance to win some pretty fabulous prizes.
          </p>
          <p>
            It&apos;s throwback Thursday everyday here so that means it&apos;s
            time to dig up those embarrassingly cute baby pictures for Explore
            Talent&apos;s newest contest! Upload a photo of you as a
            youngin&apos; for your chance to win some pretty fabulous prizes.
            It&apos;s throwback Thursday everyday here so that means it&apos;s
            time to dig up those embarrassingly cute baby pictures for Explore
            Talent&apos;s newest contest! Upload a photo of you as a
            youngin&apos; for your chance to win some pretty fabulous prizes.
          </p>
        </div>

        <div className="mt-10 lg:mt-0">
          {/* location */}
          <div>
            <H2 className="mb-5">Contest Location</H2>

            <div>
              <Image
                src="/images/map.png"
                alt="location"
                height={430}
                width={570}
                className="rounded-lg"
              />
            </div>

            <div>
              <div className="blue-text">New York</div>
              <small>City Hall, 24 Eagle Street, Albany, NY 12207</small>
            </div>
          </div>

          {/* tags */}
          <div className="mt-10 lg:mt-20">
            <H2>Tags</H2>
            <ul className="tags flex gap-3 mt-5">
              <li>Acting</li>
              <li>Model</li>
              <li>Sporty</li>
            </ul>
          </div>

          {/* social icons */}
          <div className="mt-10 lg:mt-20">
            <H2>Share with Friends</H2>
            <ul className="mt-5 flex items-center gap-3 social-icons">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FiInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </Main>

      <Leaderboard viewAll={true} />
    </div>
  );
}
