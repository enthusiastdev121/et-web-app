import Button from "components/Button";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { SlideHeading } from "./Styles";
import Lottie from "react-lottie";
import animationData from "../../../../public/animations/confetti-animation.json";
import Link from "next/link";
import { useProfileStore } from "context/ProfileStore";
import TranslatedText from "components/TranslatedText";

export default function CompletionSlide({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
  isChild
}: any) {
  const router = useRouter();
  const { profile } = useProfileStore()

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Frame bannerChangeOne>
      <div className="absolute w-full" style={{ left: "50%", transform: "translateX(-50%)" }}>
        <Lottie options={defaultOptions} height={500} width="100%" />
      </div>
      <div className="grow flex items-center content">
        <div className="flex flex-col items-center justify-center text-left relative sm:p-10">
          <div
            style={{ transform: "scaleX(-1)" }}
            className="hidden sm:block absolute top-0 -left-10"
          >
            <Image
              src="/images/confetti-1.png"
              alt="confetti"
              width={35}
              height={32}
            />
          </div>
          <div
            style={{ transform: "scaleX(-1)" }}
            className="hidden sm:block absolute top-20 -left-10"
          >
            <Image
              src="/images/confetti-2.png"
              alt="confetti"
              width={24}
              height={24}
            />
          </div>
          <div
            style={{ transform: "scaleX(-1)" }}
            className="hidden sm:block absolute top-0 left-2"
          >
            <Image
              src="/images/confetti-3.png"
              alt="confetti"
              width={14}
              height={14}
            />
          </div>
          <div
            style={{ transform: "scaleX(-1)" }}
            className="hidden sm:block absolute top-12 left-0"
          >
            <Image
              src="/images/confetti-4.png"
              alt="confetti"
              width={9}
              height={8}
            />
          </div>
          <div
            style={{ transform: "scaleX(-1)" }}
            className="hidden sm:block absolute bottom-40 left-0"
          >
            <Image
              src="/images/confetti-5.png"
              alt="confetti"
              width={33}
              height={20}
            />
          </div>

          <div
            className="hidden sm:block absolute top-0 right-0"
          >
            <Image
              src="/images/confetti-1.png"
              alt="confetti"
              width={35}
              height={32}
            />
          </div>
          <div
            className="hidden sm:block absolute top-20 right-0"
          >
            <Image
              src="/images/confetti-2.png"
              alt="confetti"
              width={24}
              height={24}
            />
          </div>
          <div
            className="hidden sm:block absolute top-0 right-10"
          >
            <Image
              src="/images/confetti-3.png"
              alt="confetti"
              width={14}
              height={14}
            />
          </div>
          <div
            className="hidden sm:block absolute top-12 right-10"
          >
            <Image
              src="/images/confetti-4.png"
              alt="confetti"
              width={9}
              height={8}
            />
          </div>
          <div
            className="hidden sm:block absolute bottom-40 right-0"
          >
            <Image
              src="/images/confetti-5.png"
              alt="confetti"
              width={33}
              height={20}
            />
          </div>

          <div className="sm:hidden text-4xl mb-3">🎉</div>
          <SlideHeading style={{ textAlign: isChild ? "center" : "left" }} className="self-start">
            {isChild ? "Incredible - your profile is now ready to be activated!" : "Incredible - your profile is now all set!"}
          </SlideHeading>

          <h2 className="text-xl font-medium mb-4 text-left w-full -mt-4"> <TranslatedText>Your username is</TranslatedText><span className="font-bold">{profile.talentlogin} jslfas3245</span></h2>

          {/* {
            isChild
              ?
              <>
                <div className="text-center mb-5">
                  For your child&apos;s safety we just need the parent or guardian who controls this profile to call us at <span className="txt-primary">800-597-4500</span> 8am-5pm PST to get your child&apos;s profile and account activated.
                </div>
                <Link href="/" passHref>
                  <Button primary>Go to home</Button>
                </Link>
              </>
              :
          } */}

          <>
            <p className="text-left">
              Would you like to step ahead of the competition and fully complete
              your profile?
            </p>
            <div className="flex flex-col xl:flex-row gap-5 xl:items-center mt-10 self-start">
              <div>
                <Button primary onClick={() => setCurrentSlide("appearance")}>
                  Ok, let’s do it!
                </Button>
              </div>
              <Button outlined onClick={() => router.push("/profile/edit?keyword=app-tour")}>
                Do it later, go to my profile
              </Button>
            </div>
          </>
        </div>
      </div>

      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={100}
        setCurrentSlide={setCurrentSlide}
        allFilled={true}
        completion={false}
      />
    </Frame>
  );
}
