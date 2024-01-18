import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImArrowLeft2, ImCheckmark } from "react-icons/im";
import { Banner, FeatureCard, Footer, Nav, PlanButton, PlanCard, PlansContainer, Width, MobileBanner } from "./styles";
import { motion } from "framer-motion";
import { GreenBtn } from "@/styles/Btn.styled";
import Button from "components/Button";
import { GoCheck } from "react-icons/go";
import { BiRightArrowAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import PaymentForm from "./PaymentForm";
import CardDetailForm from "../CardDetailForm";
import { useState } from "react";
import { WHITELABEL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";

export const PLANS = {
  twelve: {
    id: 20,
    pricePerMonth: 10.83,
    pricePerCycle: 129.95,
  },
  six: {
    id: 19,
    pricePerMonth: 13.33,
    pricePerCycle: 79.95,
  },

  three: {
    id: 18,
    pricePerMonth: 16.65,
    pricePerCycle: 49.95,
  },
  one: {
    id: 17,
    pricePerMonth: 19.95,
    pricePerCycle: 19.95,
    name: "Featured Package 1",
    price_per_cycle: "19.9500",
    "type": 2,
    "active": 1,
    "cycle": 31,
    "app_id": 1,
    "trial_price": "0.0000",
    "trial_days": 0,
    "months_per_cycle": 1,
    "price_per_month": "19.9500",
    "created_at": "2018-01-03 04:48:12",
    "updated_at": "2018-01-03 04:48:12",
    "deleted_at": null,
    "type_text": "featured"
  },
};

export default function UpgradeFeaturedPage() {
  const router = useRouter();
  const [planId, setPlanId] = useState<number>(-1);

  return (
    <div className="overflow-x-hidden">
      <header>
        <Nav>
          <div className="text-xl mr-auto cursor-pointer">
            <ImArrowLeft2
              onClick={() => {
                router.back();
              }}
            />
          </div>

          <div className="mr-auto hidden md:block">
            <Link href="/">
              <a>
                <Image src={WHITELABEL === WHITELABELS.auditions ? "/images/audition/audition-logo.png" : "/svg/logo-gray.svg"} alt="Explore Talent" height={43.66} width={226.18} priority />
              </a>
            </Link>
          </div>
          <div className="mr-auto md:hidden">
            <Link href="/">
              <a>
                <Image src="/images/et-logo.png" alt="Explore Talent" height={33} width={41} priority />
              </a>
            </Link>
          </div>
        </Nav>
        <Banner className="hidden md:block text-white">
          <div className="overlay flex flex-col items-center justify-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="-mt-20 mb-5 text-center mx-10 text-white text-base md:text-xl lg:font-bold"
            >
              BECOME A FEATURED TALENT
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mx-10"
            >
              You can now take full advantage of our Talent Community
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-3"
            >
              Get more exposure, get it now and have 70% OFF on your first Feature order
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-10"
            >
              <GreenBtn className="btn"><a href="#plans">Become a Featured Talent</a></GreenBtn>
            </motion.div>
          </div>

          <Image src="/images/banner-featured.png" alt="actor performing in front of camera" layout="fill" priority />
        </Banner>
      </header>

      {/*  RESPONSIVE DESIGN*/}

      <MobileBanner className="md:hidden mb-5 mt-4 p-5 bg-paper">
        <div className="overlay flex flex-col items-center justify-center text-white">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="-mt-20 mb-5 text-center mx-10 text-sm md:text-xl font-bold text-white"
          >
            BECOME A FEATURED TALENT
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mx-10 "
          >
            You can now take full advantage of our Talent Community
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-center px-4 text-sm"
          >
            Get more exposure, get it now and have 70% OFF on your first Feature order
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 "
          >
            <GreenBtn className="btn" onClick={() => setPlanId(PLANS.one.id)}><a href="#plans">Become a Featured Talent</a></GreenBtn>
          </motion.div>
        </div>
        <Image src="/images/banner-featured.png" alt="actor performing in front of camera" layout="fill" priority />
      </MobileBanner>
      <main className="md:-mt-32  bg-paper">
        <div className="flex flex-col gap-5 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FeatureCard>
              <div className="w-2/5">
                <Image src="/images/pay-featured-graphic-1.png" alt="svg" height={130} width={130} />
              </div>

              <div className=" text-center md:text-left">
                <p>Be Featured randomly on 7 areas of the website, including in homepage.</p>
                {/* <button className="font-semibold txt-link mt-5">See Example</button> */}
              </div>
            </FeatureCard>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FeatureCard>
              <div className="">
                <Image src="/images/pay-featured-graphic-2.png" alt="svg" height={130} width={151} />
              </div>

              <div className="text-center md:text-left">
                <p>Get Seen First in talent searches.</p>
                {/* <button className="font-semibold txt-link mt-5">See Example</button> */}
              </div>
            </FeatureCard>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <FeatureCard>
              <div className="w-2/5">
                <Image src="/images/pay-featured-graphic-3.png" alt="svg" height={130} width={117} />
              </div>

              <div className="text-center md:text-left">
                <p>Your Submissions will be seen first by Casting Directors.</p>
                {/* <button className="font-semibold txt-link mt-5">See Example</button> */}
              </div>
            </FeatureCard>
          </motion.div>
        </div>

        <PlansContainer id='plans'>
          <motion.h2 className="mb-10" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
            Select featured package
          </motion.h2>

          <Width
          // className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 justify-items-center overflow-x-auto"
          // className="flex overflow-x-auto gap-5"
          // style={{
          //   alignItems: "self-end",
          //   background:
          //     "linear-gradient(270deg, rgba(255, 255, 255, 0.5) 23.56%, rgba(255, 255, 255, 0) 100%)",
          // }}
          >
            {planId === -1 && (
              <div className=" grid justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ alignItems: "self-end" }}>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
                  <PlanCard>
                    <div>
                      <h3>
                        <span className="text-2xl inline-block" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>
                        <span>16.65</span>
                      </h3>
                      <div className="time">3 Months</div>
                    </div>

                    <div style={{ fontSize: "15px" }} className="flex gap-1">
                      <span style={{ width: "24px" }}>
                        {/* <GoCheck /> */}
                        <ImCheckmark
                          style={{
                            color: "#0070f4",
                            marginRight: "6px",
                            marginTop: "3px",
                          }}
                        />
                      </span>{" "}
                      Feature Talent for 3 Months
                    </div>

                    <div className="billed">Billed in 1 prepayment of $49.95</div>

                    <PlanButton onClick={() => setPlanId(PLANS.three.id)}>Select this package</PlanButton>
                  </PlanCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.8 }}>
                  <PlanCard className="relative" style={{ height: "349px" }}>
                    <span className="today-only">Today Only!</span>

                    <div className="">
                      <h3>
                        <span className="text-2xl inline-block" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>
                        <span>19.95</span>
                      </h3>
                      <div className="time">MONTHLY</div>
                    </div>

                    <div style={{ fontSize: "15px" }}>
                      <span style={{ width: "24px" }}>
                        {/* <GoCheck /> */}
                        <ImCheckmark className="inline-block" style={{ color: "#0070f4", marginRight: "6px" }} />
                      </span>{" "}
                      Feature Talent Monthly
                    </div>

                    <div className="offer-ends">
                      Offer ends in: <span>24d 42h 16m 6s</span>{" "}
                    </div>

                    <PlanButton onClick={() => setPlanId(PLANS.one.id)} className="active -mb-5 mt-5">
                      Select this package
                    </PlanButton>
                  </PlanCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.8 }}>
                  <PlanCard>
                    <div>
                      <h3>
                        <span className="text-2xl inline-block" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>
                        <span>13.33</span>
                      </h3>
                      <div className="time">6 Months</div>
                    </div>

                    <div style={{ fontSize: "15px" }} className="flex gap-1">
                      <span style={{ width: "24px" }}>
                        {/* <GoCheck /> */}
                        <ImCheckmark
                          className="inline-block"
                          style={{
                            color: "#0070f4",
                            marginRight: "6px",
                            marginTop: "3px",
                          }}
                        />
                      </span>{" "}
                      Feature Talent for 6 Months
                    </div>

                    <div className="billed">Billed in 1 prepayment of $79.95</div>

                    <PlanButton onClick={() => setPlanId(PLANS.six.id)}>Select this package</PlanButton>
                  </PlanCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.8 }}>
                  <PlanCard>
                    <div>
                      <h3>
                        <span className="text-2xl inline-block" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>
                        <span>10.83</span>
                      </h3>
                      <div className="time">12 Months</div>
                    </div>

                    <div style={{ fontSize: "15px" }} className="flex gap-1">
                      <span style={{ width: "24px" }}>
                        {/* <GoCheck /> */}
                        <ImCheckmark
                          className="inline-block"
                          style={{
                            color: "#0070f4",
                            marginRight: "6px",
                            marginTop: "3px",
                          }}
                        />
                      </span>{" "}
                      Feature Talent for 12 Months
                    </div>

                    <div className="billed">Billed in 1 prepayment of $129.95</div>

                    <PlanButton onClick={() => setPlanId(PLANS.twelve.id)}>Select this package</PlanButton>
                  </PlanCard>
                </motion.div>

                {/* <div className="arrow-right">
                <BiRightArrowAlt />
              </div> */}
              </div>
            )}
            {planId !== -1 && <PaymentForm planId={planId} onBack={() => setPlanId(-1)} />}
          </Width>
        </PlansContainer>
      </main>

      <Footer>
        <Width>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
            Become a featured and keep ahead of the competition
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 justify-items-center mt-12">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
              <Image src="/images/pro-1.png" alt="bobby banhart" width={205} height={307} priority />
              <div className="font-semibold text-base my-5">Bobby Banhart</div>
              <p className="opacity-90">Bobby Banhart talks with Explore Talent. Bobby got discovered for A Shot At Love with Tila Tequila by being a member of Explore Talent. Bobby is a true &ldquo;overnight success&rdquo; story.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.8 }}>
              <Image src="/images/pro-2.png" alt="Julia Ling" width={205} height={307} priority />
              <div className="font-semibold text-base my-5">Julia Ling</div>
              <p className="opacity-90">
                Julia began her career with a membership at ExploreTalent. Julia&apos;s credits include &ldquo;Buffy the Vampire Slayer&rdquo;, &ldquo;Alias&rdquo;, &ldquo;The OC&rdquo;, &ldquo;ER&rdquo;, &ldquo;House&rdquo;, &ldquo;Studio
                60&rdquo;, and &ldquo;Grey&apos;s Anatomy&rdquo;. Julia is currently enjoying success as a lead character Anna Wu on &ldquo;Chuck&rdquo;.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.8 }}>
              <Image src="/images/pro-3.png" alt="Zairy Shakur" width={205} height={307} priority />
              <div className="font-semibold text-base my-5">Zairy Shakur</div>
              <p className="opacity-90">
                She achieved her dream of becoming an actress, host, and singer. She described her experience working with the company as both &ldquo;great&rdquo; and &ldquo;helpful&rdquo;. Zairy added that the success she has achieved now
                was truly worth the time and investment.
              </p>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <Button size="large" primary onClick={() => setSelectedPlanType("six")}>Upgrade to PRO</Button>
          </div>
        </Width>
      </Footer>
    </div>
  );
}
