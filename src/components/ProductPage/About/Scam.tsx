import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import VideoTestimonialPage from "../VideoTestimonials";
import {
  FeaturedTestimonialCard2,
  Ovderlay,
  Paper,
  Root,
  VideoTestimonialCard,
} from "./styles";

export default function ScamPage() {
  return (
    <Root className="padding-small">
      <h1
        style={{ color: "#191919", fontSize: "35px", maxWidth: "1100px" }}
        className="mb-5 mx-auto px-5 md:px-0"
      >
        Is Exploretalent.com really a scam?
      </h1>

      <Paper>
        <p>
          Competitors have been posting negative stuff about us. However, you
          cannot argue with success.
        </p>

        <h2>Facts:</h2>
        <ul className="mb-5">
          <li>
            1. ExploreTalent.com is by far world&apos;s largest talent website
            with over 10 million members.
          </li>
          <li>
            2. ExploreTalent.com has thousands of auditions and job openings.
          </li>
          <li>
            3. No other site comes even close to the value that ExploreTalent is
            providing its members.
          </li>
          <li>
            4. The Internet is a media that everyone anonymously, can go and
            post unverifiable stories.
          </li>
          <li>
            5. Negative comments about us are posted by competitors who cannot
            stand our success.
          </li>
          <li>
            6. Tens of Thousands auditions and jobs, has been landed by
            ExploreTalent.com members.
          </li>
        </ul>

        <p>
          Every serious player in the entertainment business knows Explore
          Talent is not a scam. With over 10 million members, Explore Talent has
          proved that it is not a scam. Explore Talent has thousands of positive
          testimonies and continues to take pride in their work.
        </p>

        <p>
          If you are an aspiring talent, you can&apos;t go wrong with the
          services of Explore Talent and be genuinely comfortable knows it is
          not a scam. With over 10 million members and counting the proof is
          unstoppable. ExploreTalent.com is by far the world&apos;s largest
          talent resource website and their services are unbeatable. With a big
          name like Explore Talent, we cant afford to be a scam nor would we
          want to.
        </p>

        <p>
          In recent years it seems to be that &ldquo;talent resources and
          agencies&rdquo; are coming out of the woodwork, with promises of
          making you an over night Hollywood sensation. These type of companies
          are truly scam agencies. And really with promises like that, who
          wouldn&apos;t fall victim to these scam and fraudulent companies? If
          you feel that you victimized by one of these scam or fraudulent
          companies, and blinded with their absurd lies and manipulation Explore
          Talent is here to help.
        </p>

        <p>
          Explore Talent wants to help you if you have been a victim to a scam.
          Here at Explore Talent we intend to raise the bar in legitimacy and
          set a higher standard of honesty and services to each and every
          hopeful talent that fell victim to being a scam by one of our
          &ldquo;competitor&rdquo; companies. This higher standard starts with
          our Fraud Compensation Program, which will provide victims with
          restored hope, faith and peace of mind, to continue pursuing their
          dreams and aspirations. For every $29.95 you were defrauded, you will
          receive Explore Talent&apos;s monthly service for free! Don&apos;t
          fall for another scam again!
        </p>

        <p>
          Qualifying for this program is easy and stress free; simply provide
          Explore Talent with your credit card statement, showing the amount in
          which you were defrauded. Absolutely no credit card billing
          information is required for you to claim your free service. Explore
          Talent is prudent about exposing industry scam artist, who practice
          victimizing aspiring talents by selling them lies, broken promises and
          empty dreams, and a big scam for a fee. Never fall for a scam again!
          Let Explore Talent help you pick up your life after being a victim of
          a scam.
        </p>

        <p>
          So what are you waiting for, you have nothing to lose; with Explore
          Talent&apos;s anti scam project called Fraud Compensation Program you
          can get your dreams and career back on track and never fall for
          another scam again. Let the world&apos;s largest talent website extend
          their hand to helping you, and never feel like a victim or scammed
          again!
        </p>

        <p>Please see below some of Explore Talent members testimonials.</p>
      </Paper>

      <div
        className="grid md:grid-cols-2 gap-5 justify-items-center mt-5"
        style={{ maxWidth: "1100px", margin: "0 auto 20px auto" }}
      >
        <VideoTestimonialCard className="flex flex-col">
          <Ovderlay className="relative">
            <Image
              src="/images/bobby.png"
              alt="profile"
              height={242}
              width={361}
            />

            <span
              className="cursor-pointer absolute top-1/2 left-1/2 text-white text-3xl p-5 play-btn-container"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaPlay />
            </span>
          </Ovderlay>

          <div className="p-5">
            <h3 className="mb-3 mt-1" style={{ marginTop: "0" }}>
              Explore Talent Success Story: Bobby Banhart - ExploreTalent.com
            </h3>

            <p>
              Bobby Banhart found a job on A Shot at Love with Tila Tequila
              through ExploreTalent.com shortly after he joined. He submitted
              his resume and headshot and was cast in the highest rated MTV show
              with 8.4 million viewers.
            </p>
          </div>
        </VideoTestimonialCard>

        <VideoTestimonialCard className="flex flex-col">
          <Ovderlay className="relative">
            <Image
              src="/images/success-img.png"
              alt="profile"
              height={242}
              width={361}
            />

            <span
              className="cursor-pointer absolute top-1/2 left-1/2 text-white text-3xl p-5 play-btn-container"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaPlay />
            </span>
          </Ovderlay>

          <div className="p-5">
            <h3 className="mb-3 mt-1" style={{ marginTop: "0" }}>
              Explore Talent Actor&apos;s &ldquo;One Hour Fantasy Girl&rdquo;
              Film Screening
            </h3>

            <p>
              Explore Talent member John Morgan Woodward at the private cast and
              crew screening of &ldquo;One Hour Fantasy Girl&rdquo;. Producer
              John Paul Rice used Explore Talent&apos;s service to cast the role
              of Roger in his film. John Morgan Woodward, a member of Explore
              Talent, found the call after one week of being a member. He
              responded to the call through Explore Talent, auditioned and was
              cast in this powerful dramatic independent film. John Paul Rice
              will use Explore Talent again for his upcoming film &ldquo;The Boy
              Who Couldn&apos;t Say No&rdquo;. Look for upcoming film auditions,
              movie auditions, film roles with Explore Talent.
            </p>
          </div>
        </VideoTestimonialCard>

        <VideoTestimonialCard className="flex flex-col">
          <Ovderlay className="relative">
            <Image
              src="/images/success-img.png"
              alt="profile"
              height={242}
              width={361}
            />

            <span
              className="cursor-pointer absolute top-1/2 left-1/2 text-white text-3xl p-5 play-btn-container"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaPlay />
            </span>
          </Ovderlay>

          <div className="p-5">
            <h3 className="mb-3 mt-1" style={{ marginTop: "0" }}>
              How To Be A Successful Actress
            </h3>

            <p>
              I had been with LA Casting for 9 months. After submitting for
              auditions and getting nothing, I decided to give Explore Talent a
              try. Within two weeks of becoming a member of Explore Talent, I
              started going on 2-3 auditions per week. I have now been with
              ExploreTalent.com for 6 months and I have not stopped working. I
              never even got any auditions on LACasting.com and everything
              changed after I joined ExploreTalent.com.
            </p>
          </div>
        </VideoTestimonialCard>

        <VideoTestimonialCard className="flex flex-col">
          <Ovderlay className="relative">
            <Image
              src="/images/bobby.png"
              alt="profile"
              height={242}
              width={361}
            />

            <span
              className="cursor-pointer absolute top-1/2 left-1/2 text-white text-3xl p-5 play-btn-container"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaPlay />
            </span>
          </Ovderlay>

          <div className="p-5">
            <h3 className="mb-3 mt-1" style={{ marginTop: "0" }}>
              CSI:NY Christopher Warren Journeyman Lincoln Heights
            </h3>

            <p>
              &ldquo;Forget LA Casting, this is the new hot one right here!
              ExploreTalent.com!&rdquo; Christopher Warren, actor in CSI:NY and
              Journeyman, gives his advice to actors just starting out. Explore
              Talent is hot!
            </p>
          </div>
        </VideoTestimonialCard>
      </div>

      <div
        className="grid md:grid-cols-2 gap-5 justify-items-center mt-5"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <FeaturedTestimonialCard2 className="flex flex-col">
          <div className="image-container">
            <Image
              src="/images/bobby.png"
              alt="profile"
              height={242}
              width={361}
            />
          </div>

          <div className="p-5">
            <Link href="#">
              <a className="txt-link">
                <h3 className="mb-3 mt-1" style={{ marginTop: "0" }}>
                  View My Profile
                </h3>
              </a>
            </Link>

            <p>
              I just wanted to take a few minutes of my time to say what a great
              experience I have had with Explore Talent. I joined as a Pro
              Member one month ago and less than two weeks later, I received a
              call from a director wanting me for an infomercial. I had the best
              experience filming it and learned so much. I have received more
              than once the &ldquo;Like-It&rdquo; Email from a casting director.
              I thought this was all going too fast, so I called Explore Talent.
              The staff was so friendly and explained to me that yes, I was
              actually viewed by the director on this site and he liked what he
              saw. This was a SAG film also!! I was so excited. Thanks so much
              to the wonderful and professional staff at Explore Talent.
            </p>
            <p>Amy</p>
          </div>
        </FeaturedTestimonialCard2>

        <FeaturedTestimonialCard2 className="flex flex-col">
          <div className="image-container">
            <Image
              src="/images/success-img.png"
              alt="profile"
              height={242}
              width={361}
            />
          </div>

          <div className="p-5">
            <Link href="#">
              <a className="txt-link">
                <h3 className="mb-3 mt-1" style={{ marginTop: "0" }}>
                  View My Profile
                </h3>
              </a>
            </Link>

            <p>
              Landed 2 movie roles...Thank you ExploreTalent... Christina landed
              2 Feature Film roles. These are independent movies that will be
              shown in all the major International Film Festivals. She just
              joined ExploreTalent and already has more opportunities than we
              ever imagined. An elite modeling management agency in New York
              contacted us after seeing Christina&apos;s profile on
              ExploreTalent. A casting director personally asked Christina to
              audition personally for both a TV SHOW and a Music Video. A
              producer/director from Tampa requested a dancing video of
              Christina for a short he is producing. We are actually overwhelmed
              by the response we have gotten from working with ExploreTalent
              Casting Directors and Producers.Thank you again. You are the
              BEST,Christina McGill, Actress/Model & Jeanne McGill, Mother.
            </p>
          </div>
        </FeaturedTestimonialCard2>
      </div>

      <div></div>
    </Root>
  );
}
