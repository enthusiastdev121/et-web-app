import Image from "next/image";
import Link from "next/link";

import { Banner, Content, Paper, Root, VideoCard } from "./styles";

export default function VideoTestimonialPage() {
  return (
    <Root>
      {/* <Banner className="hidden md:block"> */}
      <Banner className="">
        <div className="overlay flex flex-col items-center justify-center gap-5"></div>
        <Image
          src="/images/banner-video-test.png"
          alt="actor performing in front of camera"
          layout="fill"
          priority
          className="object-contain"

        />
      </Banner>

      <div className="md:-mt-48">
        <Paper className="relative z-20">
          <h2 className="">Video Testimonials </h2>
          <p>
            Watch and listen to ExploreTalent members talk about their amazing
            experiences they have had by being a member of ExploreTalent and all
            the benefits that come with their valued membership.
          </p>

          <p>
            From our talented group of actors, musicians and models, you will
            hear directly from our members exactly what ExploreTalent has done
            to further their burgeoning careers and enrich their experience
            through the new and exciting transition into the entertainment
            industry.
          </p>

          <p>
            The Video Testimonials range from how they first became a member,
            how they started their entertainment careers with
            ExploreTalent&apos;s guidance and the help they received on booking
            their very first gig in their specific field (acting, modeling,
            music) of the vast and wide entertainment biz!.
          </p>
        </Paper>

        <Content className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center md:justify-items-start">
          <VideoCard>
            <div>
              <Image
                src="/images/bobby.png"
                alt="bobby banhart"
                height={242}
                width={361}
              />
            </div>
            <Link href={"/"}>
              <a className="block p-10">
                <h3 className="text-center">Bobby Banhart</h3>
              </a>
            </Link>
          </VideoCard>

          <VideoCard>
            <div>
              <Image
                src="/images/bobby.png"
                alt="bobby banhart"
                height={242}
                width={361}
              />
            </div>
            <Link href={"/"}>
              <a className="block p-10">
                <h3 className="text-center">Bobby Banhart</h3>
              </a>
            </Link>
          </VideoCard>

          <VideoCard>
            <div>
              <Image
                src="/images/bobby.png"
                alt="bobby banhart"
                height={242}
                width={361}
              />
            </div>
            <Link href={"/"}>
              <a className="block p-10">
                <h3 className="text-center">Bobby Banhart</h3>
              </a>
            </Link>
          </VideoCard>

          <VideoCard>
            <div>
              <Image
                src="/images/bobby.png"
                alt="bobby banhart"
                height={242}
                width={361}
              />
            </div>
            <Link href={"/"}>
              <a className="block p-10">
                <h3 className="text-center">Bobby Banhart</h3>
              </a>
            </Link>
          </VideoCard>
        </Content>
      </div>
    </Root>
  );
}
