import Button from "components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner, Paper, Root } from "./styles";

export default function AdvertisePage() {
  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
        <div className="overlay flex items-center justify-center">
        <h1 className="-mt-52 leading-7 text-white text-center font-bold text-sm md:hidden" style={{fontSize:'22px'}}>
        Affiliate / Advertising
        </h1>
          <h1 className="-mt-20 text-center mx-10 hidden md:block">Affiliate / Advertising</h1>
        </div>
        <Image
          src="/images/banner-adv.png"
          alt="actor performing in front of camera"
          layout="fill"
          priority
        />
      </Banner>

      <div className="md:-mt-20">
        <Paper className="relative z-20">
          <h2>Get Paid for Promoting Explore Talent</h2>

          <div>
            <h3>Who Are We?</h3>
            <p>
              Explore Talent is the world&apos;s largest talent community and
              the premiere online source for acting and modeling auditions &
              casting. We have over 6 million members and premium members have
              access to an inventory of thousands of current castings and
              auditions. Our company now has over 80 people diligently working
              to deliver the highest quality of service so that members have
              access to a wide array of auditions and castings tailored to each
              of them. We are constantly working to find even better ways to
              enhance our members&apos; careers; from new software platforms
              that help casting directors find our members more easily to
              technologies that simplify the entire submission process.
            </p>
          </div>

          <div>
            <h3>How it works?</h3>
            <p>
              Affiliates get a set commission for every sale that is made
              through their site. All you have to do is place a text link or
              banner on your site and when a customer clicks through and makes a
              purchase, you get a commission. We offer free tracking tools,
              notification of specials/sales, free coupons and more for our
              affiliates.
            </p>
          </div>

          <div>
            <h3>Commission</h3>
            <p>
              Our commission rate is up to 18% with a cookie duration of 7 days!
              That means, you get a commission on any purchase made within those
              7 days from that same customer, even if that customer goes
              directly to our site! The cookie will still track that customer
              and credit you the sale! It&apos;s that simple.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-10">
            <div>
              <Image
                src="/images/affiliate.png"
                alt="affliate"
                height={285}
                width={278}
              />
            </div>
            <h3 style={{ fontSize: "21px" }}>Become an Affiliate</h3>
            <p className="mb-3 mt-1">
              Start earning now and get paid for promoting <br />
              ExploreTalent
            </p>
            <Link href="https://signup.cj.com/member/signup/publisher/?cid=1903378#/invalidBrandedCid">
              <a target="_blank">
                <Button primary>Become an affiliate now </Button>
              </a>
            </Link>
          </div>
        </Paper>

        {/* Contact */}
        <Paper>
          <details>
            <summary>
              <h2>Contact Information & Address</h2>
            </summary>

            <div style={{ marginTop: "1.5em", marginBottom: "1em" }}>
              <Image
                src="/svg/blue-phone.svg"
                height={70}
                width={70}
                alt="phone"
                priority
              />
            </div>

            <div className="text-base">
              <p>If you have any issues please call our customer service</p>
              <strong className="text-2xl">(702) 553-2700</strong>
              <p>between Monday to Friday 9am-5pm • PST</p>
              <strong>Booking Department</strong>
              <p>
                <strong>For Casting directors (702) 446-0888 • </strong>
                Monday to Friday 8am-5pm PST
              </p>
            </div>

            <hr className="my-7" />

            <div className="text-base">
              <strong>Explore Talent</strong>
              <ul>
                <li>Explore Talent</li>
                <li>3395 S. Jones Blvd #15</li>
                <li>Las Vegas, NV 89146</li>
                <li>Exploretalent.com</li>
              </ul>
            </div>
          </details>
        </Paper>
      </div>
    </Root>
  );
}
