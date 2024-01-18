import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsPerson, BsFacebook } from "react-icons/bs";
import {
  AiOutlineClockCircle,
  AiFillTwitterCircle,
  AiTwotoneStar,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";

import AsideRight from "../AsideRight";
import HeroSection from "../HeroSection";
import JobCategoryList from "../JobCategoryList";
import SaveSearch from "../SaveSearch";
import SuccessStories from "../SuccessStories";
import {
  PrimaryBtnOutline,
  PrimaryBtnLight,
  PrimaryBtn,
} from "@/styles/btn.styled";
import { MainCenter } from "./JobDetail.styled";

export default function JobDetail() {
  return (
    <>
      <HeroSection />
      <div className="padding-small">
        <JobCategoryList />
        <main className="shadow-xl rounded-xl mt-10 flex flex-col lg:flex-row ">
          <aside className="xl:w-1/4 lg:w-1/3 order-2 lg:order-1">
            <SaveSearch />
            <SuccessStories />
          </aside>

          <MainCenter className="xl:w-2/4 lg:w-2/5 2xl:w-4/6 lg:pr-5 xl:pr-0 order-1 lg:order-2 p-5">
            <div>
              <div className="top-btns">
                <button className="green mr-3">Paid</button>
                <button className="blue">Apply Free</button>
              </div>
              <h1 className="text-2xl font-bold my-5">
                Looking for Social Media Influencer to Promote My New Single
              </h1>
              <ul>
                <li className="flex items-center">
                  <BsPerson className="mr-3" /> Listen by View details
                </li>
                <li className="flex items-center">
                  <IoLocationOutline className="mr-3" /> Australia. Apply
                  worldwide.
                </li>
              </ul>

              <div>
                <Image
                  src="/images/audition-card-img.png"
                  height={200}
                  width={200}
                  alt="person"
                />
              </div>
            </div>

            <div className="blue-box p-5 mb-10">
              <div>
                <p>
                  <span className="flex items-center">
                    {" "}
                    <AiOutlineClockCircle className="mr-2" /> Just listed.
                  </span>{" "}
                  People who apply in the first 48 hours are more likely to be
                  cast.
                </p>

                <div className="text-lg opacity-40 icons flex mt-3">
                  <FiMail />
                  <BsFacebook className="mx-2" />
                  <AiFillTwitterCircle />
                </div>
              </div>
              <PrimaryBtnOutline className="btn mt-5 flex items-center">
                <AiTwotoneStar className="mr-3 text-lg" /> Save to Watchlist
              </PrimaryBtnOutline>
            </div>

            <div className="border-2 rounded-lg p-5 mb-10">
              <div className="border-b-2 pb-5 mb-5">
                <p>
                  Hello all! I am after 4 x social media influencers with a real
                  and genuine following. Minimum following must be 10k
                  followers. Ideally looking for someone with around 50k
                  followers. All you need to do is post my song onto your
                  Instagram story (can be whatever as long as it&apos;s
                  appropriate - for example - videoing the sky or sunset or the
                  beach or going for a walk or run suits the vibe of the song),
                  or you can even sing to it (it is really easy to learn as
                  it&apos;s really catchy) and post it up onto your story or
                  even talk about it and say &apos;Hey guys, check out this new
                  song called &apos;WILL YOU&apos; by Milena Spadijer. Or you
                  can just post an image or quote and have it playing. It is up
                  to you how you prefer to do it :) The chorus is the main thing
                  I&apos;d want to be played and promoted and atleast 20-30
                  seconds of the song to be heard. Please apply if interested.
                  Should only take 5-10 minutes of your time to do so :) If you
                  are into euro house dance pop type music then you&apos;ll
                  definitely love it! It is very summer vibes and catchy :) You
                  will be paid $50 AUD / $30 USD/ 28 Euros for playing my song.
                  Conversion rates may change.
                </p>
              </div>

              <div className="box border-b-2 pb-5 mb-5">
                <h3>Original dates (subject to change due to COVID-19)</h3>
                <p>TBC</p>
              </div>

              <div className="box border-b-2 pb-5 mb-5">
                <h3>Job Payment</h3>
                <p>Fixed price of $50</p>
              </div>

              <div className="box border-b-2 pb-5 mb-5">
                <h3>Social media influencer</h3>
                <p>
                  Must have over 10,000 real followers. Ideally fitness, beauty,
                  travel influencers but all types of influencers are welcome :)
                </p>
                <p>Anyone, aged 18 to 35</p>
              </div>

              <p className="blue-text">
                <span className="font-bold">Instagram:</span> Must have an
                Instagram account
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold">Role</h2>

              <div className="role">
                <span>Work from home</span>
                <ul>
                  <li>Male teacher/Tutor (Lead): Male 35-55</li>
                  <li>Ethnicity: All Ethnicities</li>
                  <li>Required Media: Headshot/Photo, Video Reel</li>
                </ul>

                <div className="mt-5">
                  <PrimaryBtn className="btn mr-3">Apply</PrimaryBtn>
                  <PrimaryBtnLight className="btn">Draft</PrimaryBtnLight>
                </div>
              </div>

              <div className="role">
                <span>Work from home</span>
                <ul>
                  <li>Female teacher/Tutor (Lead): Male 35-55</li>
                  <li>Ethnicity: All Ethnicities</li>
                  <li>Required Media: Headshot/Photo, Video Reel</li>
                </ul>

                <div className="mt-5">
                  <PrimaryBtn className="btn mr-3">Apply</PrimaryBtn>
                  <PrimaryBtnLight className="btn">Draft</PrimaryBtnLight>
                </div>
              </div>
            </div>

            <div className="border-2 rounded-lg p-5 mb-10">
              <div>
                <div>
                  <Image
                    src="/images/audition-job-detail.png"
                    height="80"
                    width="80"
                    alt="profile"
                  />
                </div>

                <div>
                  <span>Listed by</span>
                  <button>Private</button>
                </div>

                <span>Australia. Apply worldwide.</span>

                <p>
                  Advertiser, Actor, Extra, Model, Influencer, Photographer,
                  Dancer, Band Member, Singer, Guitarist, Paintist, Composer,
                  Rapper, Other Musician, Camera Operator, Makeup Artist, TV
                  Presenter, Radio Presenter <span>More</span>
                </p>

                <div>
                  <p>Member since march 2000</p>
                </div>

                <div>
                  <ul>
                    <li>
                      <span>43</span> Recommendations
                    </li>
                    <li>
                      <span>36</span> Previous Listings
                    </li>
                    <li>
                      <span>06</span> Email verified
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-2 rounded-lg p-5 card xl:flex">
              <div className="mr-5">
                <Image
                  src="/images/lady-1.png"
                  height={210}
                  width={170}
                  alt=""
                />
              </div>

              <div>
                <ul>
                  <li className="text-lg">Forbidden Fruit:</li>
                  <li className="font-bold text-lg">Meet Sonamm Sharma</li>
                  <li>Listing created: 8 February 2020</li>
                  <li>Applications accepted for at least another month.</li>
                  <li>
                    Casting <span>#1059795</span>
                  </li>
                  <li>
                    Views: <span>894</span>
                  </li>
                </ul>

                <div className="flex flex-col xl:flex-row mt-3">
                  <PrimaryBtnLight className="btn mr-2">
                    We review all Casting
                  </PrimaryBtnLight>
                  <PrimaryBtnOutline className="btn mt-2 xl:mt-0">
                    Report this listing
                  </PrimaryBtnOutline>
                </div>
              </div>

              <span className="xl:ml-auto text-sm font-semibold">
                3 months ago
              </span>
            </div>
          </MainCenter>

          <aside className="lg:w-1/4 2xl:w-1/5 order-3">
            <AsideRight />
          </aside>
        </main>
      </div>
    </>
  );
}
