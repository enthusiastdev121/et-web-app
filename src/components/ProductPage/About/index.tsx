import { useAuth } from "context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner, Paper, Root } from "./styles";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function AboutPage() {
  const { token } = useAuth();

  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
        <div className="overlay flex items-center justify-center">
          <h1 className="-mt-52 text-white font-bold text-sm md:hidden" style={{ fontSize: '24px' }}>About {WHITELABEL_NAME}</h1>
          <h1 className="-mt-20 hidden md:block">About {WHITELABEL_NAME}</h1>
        </div>
        <Image
          src="/images/banner-about.png"
          alt="actor performing in front of camera"
          layout="fill"
          priority
        />
      </Banner>
      <div className="md:-mt-20">
        <Paper className="relative z-20 ">
          <h2>About us</h2>
          <p>
            Since its debut in 2003, {WHITELABEL_NAME} has become the
            Internet&apos;s largest audition, job and casting call resource for
            actors, models, musicians, dancers, and production crew. {WHITELABEL_NAME}&apos;s proprietary Cast Match technology is the most advanced
            entertainment-based technology of its kind. It matches a
            talent&apos;s attributes against tens of thousands of audition and
            job postings every day. {WHITELABEL_NAME}&apos;s unique technology
            sends casting email alerts and posts auditions and jobs directly on
            talents&apos; profiles, saving members countless hours of tedious
            searching. {WHITELABEL_NAME} has proven to be the best possible
            destination for talents with well over{" "}
            <strong>11 million members</strong>, over{" "}
            <strong>
              3 million{" "}
              <Link href="https://www.facebook.com/ExploreTalent">
                <a target="_blank">Facebook</a>
              </Link>{" "}
              followers
            </strong>{" "}
            and thousands of monthly auditions, castings, and production jobs
            listed.
          </p>
          <p>
            {WHITELABEL_NAME} is constantly working to find better ways to serve
            the best interest of its members. The {WHITELABEL_NAME} team spends
            over 1,200 hours per week communicating with Casting Directors,
            checking, sorting, and preparing casting information. Our dedicated
            full-time customer service reps and talent advisers are available by
            phone five days a week, providing the most personal service in the
            industry today. From the latest technology designed to connect the
            nation&apos;s top casting directors with member profiles, to its
            proprietary software designed to make the submission process as easy
            as possible, {WHITELABEL_NAME} proudly offers the most cost-effective
            resource to aspiring and accomplished entertainers.
          </p>
          <p>
            {WHITELABEL_NAME} is committed to helping its members find work all
            across the globe. View our{" "}
            <Link href="/testimonials">
              <a>Member Testimonials</a>
            </Link>{" "}
            and you&apos;ll see that {WHITELABEL_NAME}&apos;s formula is extremely
            successful and saves members valuable time and money so they can
            find the success they deserve.
          </p>
          <p>
            Exclusive!{" "}
            <Link href={token !== "" ? "/upgrade-to-pro" : "/account/signup"}>
              <a>Join Now for only $2 for the first 7 days!</a>
            </Link>{" "}
            Try our Pro Member services for 7 days for only $2 and jumpstart you
            talent career.
          </p>
        </Paper>

        <Paper>
          <details >
            <summary>
              <h2>What we have to offer</h2>
            </summary>
            <div>
              <h3>Personal Webpage</h3>
              <p>
                Establish your own personal presence on the Internet and promote
                yourself across the globe! Your {WHITELABEL_NAME} profile page will
                be your stage to the acting and modeling world. Casting
                directors, agents, photographers, prospective clients, friends,
                and family will gain instant access to your resume, headshot,
                and reel.
              </p>
            </div>

            <div>
              <h3>Searchable Talent Database Listing </h3>
              <p>
                Exploretalent.com and its Talent search section is reviewed on a
                daily basis by casting directors, modeling and talent agents,
                production companies, and advertising agencies. Don&apos;t miss
                out on this great opportunity to get discovered. Many of our
                talents have booked their own jobs and enhanced their careers
                through ExploreTalent.com.
              </p>
            </div>

            <div>
              <h3>Immediately Email Your Headshot & Resume</h3>
              <p>
                Want to promote your talents across the Internet? Would you like
                to effortlessly submit yourself for production jobs and
                auditions? Don&apos;t just e-mail a headshot or waste time
                looking for files and attachments. ExploreTalent.com provides
                the easiest and fastest way for you to promote yourself online
                with an impressive submission that includes your resume and
                links to your online profile and reel.
              </p>
            </div>

            <div>
              <h3>Upload Pictures</h3>
              <p>
                Got new photos and headshots? Just came back from a photo shoot?
                As your experience grows you can easily upload, edit and change
                your photos as often as you like.
              </p>
            </div>

            <div>
              <h3>Access over 20,000 free Resources</h3>
              <p>
                Our online resource section has more than 20,000 listings for
                talent related services such as Agencies, Casting Directors,
                Photographers, Talent Managers, Coaches, Schools Studios,
                Make-up Artists, Print Shops, Organizations and more.
              </p>
            </div>

            <div>
              <h3>Express Photo Approval</h3>
              <p>
                With a Pro Account, your photos will receive expedited
                processing for approval giving our Pro Members faster access to
                casting directors.
              </p>
            </div>

            <div>
              <h3>Upload and Store Your Videos and Voiceovers</h3>
              <p>
                Want to impress agents even more? Post samples of your work or
                your personal video reel on your unique ExploreTalent.com
                profile and showcase your talents!
              </p>
            </div>

            <div>
              <h3>
                Access Thousands of Acting, Modeling, Musician, Dancing, and
                Crew Job Opportunities
              </h3>
              <p>
                As a Pro member, you can be your own agent and gain access to
                1000s of opportunities nationwide. When you pay for our pro
                membership service, you will get free access to all of our
                audition information, and you can submit yourself at no charge
                to Casting Directors and Agents. You can also avoid paying an
                Agent if you book the gig, putting more money in your pocket!
              </p>
            </div>

            <div>
              <h3>Matched Auditions</h3>
              <p>
                As a Pro Member, our team of in-house submission reps and
                proprietary technology will match you to castings and job
                postings that are right for you and display them on your Explore
                Talent profile for easy access. Our professional support team
                will even submit you to casting directors who&apos;ve expressed
                an interest in you for no additional fee. It&apos;s as easy as
                1, 2, 3!
              </p>
            </div>

            <div>
              <h3>Priority talent listing</h3>
              <p>
                All Pro member profiles appear on the top of the talent search
                so when Casting Directors or Agents search for talent, Pro
                Member profiles appear first. This higher visibility
                significantly increases a Pro Members chance to be contacted for
                auditions and jobs.
              </p>
            </div>

            <div>
              <h3>
                Get SMS Audition Notifications Immediately Sent to Your Cell
                Phone
              </h3>
              <p>
                Get SMS (Short Message Service or text) Messages sent to your
                cell phone with the SMS feature. Casting notices will be sent to
                your cell phone so you can be immediately notified when
                auditions are available for you.
              </p>
            </div>

            <p className="text-base mt-10">
              <Link href={token !== "" ? "/upgrade-to-pro" : "/account/signup"}>
                <a>Click Here</a>
              </Link>{" "}
              to get your {WHITELABEL_NAME} Pro Membership and increase your
              chances of getting discovered now!
            </p>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>The Truth About {WHITELABEL_NAME}</h2>
            </summary>

            <ul className="links-list">
              <li>
                <Link href="/exploretalent-scam">
                  <a>Is {WHITELABEL_NAME} a Scam?</a>
                </Link>
              </li>
              <li>
                <Link href="/about/fraud">
                  <a>Is {WHITELABEL_NAME} a Fraud?</a>
                </Link>
              </li>
              <li>
                <Link href="/explore-talent-legit">
                  <a>Is {WHITELABEL_NAME} Legit?</a>
                </Link>
              </li>
            </ul>
          </details>
        </Paper>

        <Paper>
          <details>
            <summary>
              <h2>More about {WHITELABEL_NAME}</h2>
            </summary>

            <p style={{ marginTop: "1.5em" }}>
              {WHITELABEL_NAME} is the premiere online talent resource for acting,
              music, modeling and dance throughout the entertainment business.
              {WHITELABEL_NAME} has the most advanced web-based software
              technology.
            </p>
            <p>
              <strong>
                To learn more about {WHITELABEL_NAME}, add us to your favorite
                network below:
              </strong>
            </p>
            <p>
              You can find us on{" "}
              <Link href="https://www.facebook.com/ExploreTalent">
                <a target="_blank">Facebook</a>
              </Link>
              ,{" "}
              <Link href="https://twitter.com/exploretalent">
                <a target="_blank">Twitter</a>
              </Link>
              ,{" "}
              <Link href="https://www.instagram.com/explore.talent/">
                <a target="_blank">Instagram</a>
              </Link>
              ,{" "}
              <Link href="https://www.youtube.com/user/exploretalent">
                <a target="_blank">YouTube</a>
              </Link>
              ,{" "}
              <Link href="https://in.pinterest.com/exploretalent/_created/">
                <a target="_blank">Pinterest</a>
              </Link>
              ,{" "}
              <Link href="https://myspace.com/exploretalent">
                <a target="_blank">Myspace</a>
              </Link>
              , and{" "}
              <Link href="https://www.crunchbase.com/organization/explore-talent">
                <a target="_blank">Crunchbase</a>
              </Link>
            </p>
            <p>
              Be caught up with the latest entertainment news at the{" "}
              <Link href="https://articles.exploretalent.com/">
                <a target="_blank">{WHITELABEL_NAME} Blog</a>
              </Link>
            </p>
          </details>
        </Paper>

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

            <hr className="my-7 w-4/6" />

            <div className="text-base">
              <strong>{WHITELABEL_NAME}</strong>
              <ul>
                <li>{WHITELABEL_NAME}</li>
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
