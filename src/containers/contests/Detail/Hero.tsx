import Image from "next/image";

import { PrimaryBtn, PrimaryBtnLight } from "@/styles/Btn.styled";
import { H1, H2 } from "@/styles/Typography.styled";
import { HeroContainer } from "./Detail.styled";

export default function Hero() {
  return (
    <HeroContainer>
      <div className="relative banner-img-container padding">
        <div className="banner-img-overlay"></div>
        <Image
          src="/images/detail_banner.png"
          alt="banner"
          layout="fill"
          className="banner-img"
        />

        <div className="content flex flex-col gap-5 justify-between md:flex-row">
          <div className="text-white" style={{ alignSelf: "flex-end" }}>
            <H1>Cutest Throwback Baby Picture 2019</H1>
            <H2 weight={400} className="mt-2">
              Contest Stats
            </H2>

            <ul className="flex gap-5 stats mt-5 md:mt-10 lg:mt-16">
              <li>
                <div>2</div>
                <div>Entries</div>
              </li>
              <li>
                <div>7</div>
                <div>Votes</div>
              </li>
              <li>
                <div>65</div>
                <div>Views</div>
              </li>
              <li>
                <div>6.5</div>
                <div>High Score</div>
              </li>
            </ul>
          </div>

          <div className="bg-white px-3 sm:px-10 md:px-10 py-5 sm:py-10 md:py-20 rounded-lg">
            <small>Expires</small>
            <div className="text-2xl">05-Aug-2019</div>

            <div className="mt-5 flex flex-col gap-3">
              <PrimaryBtn className="btn">
                Submit&nbsp;Entry&nbsp;For&nbsp;Contest
              </PrimaryBtn>
              <PrimaryBtnLight className="btn">
                This&nbsp;contest&nbsp;info
              </PrimaryBtnLight>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
