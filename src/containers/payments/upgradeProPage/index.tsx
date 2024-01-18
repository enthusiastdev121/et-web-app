import Image from "next/image";
import { useRouter } from "next/router";
import { ImArrowLeft2 } from "react-icons/im";

import Button from "components/Button";
import { Banner, Footer, Nav, PriceCard, PriceCardMiddle, Root, Table, Width } from "./styles";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPaymentPackageApi } from "network/apis/payment";
import { useCallback, useEffect, useState } from "react";
import PaymentForm from "./PaymentForm";
import { useProfileStore } from "context/ProfileStore";
import { WHITELABEL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";

export const PLANS = {
  year: {
    id: 8,
    pricePerMonth: 24.05,
    pricePerCycle: 288.73,
  },
  six: {
    id: 7,
    pricePerMonth: 31.45,
    pricePerCycle: 188.73,
  },

  three: {
    id: 7,
    pricePerMonth: 33.23,
    pricePerCycle: 99.73,
  },
  one: {
    id: 5,
    pricePerMonth: 39.73,
    pricePerCycle: 39.73,
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const sectionCardLeft = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const sectionCardRight = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function UpgradeProPage({ showpromo = false }: { showpromo?: boolean }) {
  const router = useRouter();
  const [selectedPlanType, setSelectedPlanType] = useState<any>("");
  const params = router.query
  console.log("TYPE", selectedPlanType, PLANS[selectedPlanType])
  const { profile } = useProfileStore();

  useEffect(() => {
    const fetchNow = async () => {
      try {
        const res = await getPaymentPackageApi();
        console.log("Res is:", res);
        // console.log(res?.data?.filter((i: any) => i.app_id === 1 && i.active === 1 && i.type_text === "pro"));
      } catch (err) {
        console.log("Err", err);
      }
    };

    fetchNow();
  }, []);

  const claim = profile.claim;

  return (
    <>
      <div>
        <Nav>
          <div className="text-xl mr-auto cursor-pointer">
            <ImArrowLeft2
              onClick={() => {
                if (params.new) {
                  router.push("/");
                } else {
                  if (selectedPlanType) {
                    setSelectedPlanType("");
                  } else {
                    router.back();
                  }
                }
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

          {
            params.new &&
            <button className="underline" onClick={() => router.push('/')}>Skip</button>

          }
        </Nav>
      </div>

      {selectedPlanType ? (
        <>
          <PaymentForm selectedPlan={PLANS[selectedPlanType]} showpromo={showpromo} />
        </>
      ) : (
        <>
          {/* <Banner className="hidden md:block"> */}
          <Banner className="">
            <div className="overlay flex items-center justify-center">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="-mt-20 text-center "
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                Upgrade to PRO, land auditions today and start working a professional talent!
              </motion.h1>
            </div>
            <Image src="/images/banner-pro.png" alt="actor performing in front of camera" layout="fill" priority
              className="bg-contain" />
          </Banner>

          <Root className="md:-mt-52 -mt-44 ">
            {/* Pricing cards */}
            <div>
              <div
                // className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-2 lg:gap-6 relative z-10"
                className="hidden  md:grid  md:grid-cols-3 justify-items-center items-center md:items-end gap-6 md:gap-2 lg:gap-6 relative z-10 mx-auto pt-10 md:pt-0"
                style={{ maxWidth: "1100px", width: "92vw" }}
              >
                {/* <div className="w-full flex gap-4">   */}

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full overflow-visible"
                >

                  {!claim ? <PriceCard className="order-2 md:order-1" onClick={() => setSelectedPlanType("vip")}>
                    <div className="pricecard_top">3 Years VIP</div>

                    <div className="pricecard_middle">
                      <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                        $
                      </span>{" "}
                      <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                        15.97
                      </span>{" "}
                      <span className="text-2xl self-center" style={{ fontWeight: "500", marginTop: "5px" }}>
                        / month
                      </span>
                    </div>
                    <div className="pricecard_bottom text-sm pb-4">Billed in 1 prepayment of $575</div>

                    {/* <div className="text-center absolute bottom-4 px-2 text-sm" >Includes VIP Memebership and save $557</div> */}

                    <div className="absolute bottom-0 left-0 py-2 bg-primary w-full text-sm text-white text-center">
                      Includes VIP Memebership and<span className="font-bold">{" "}save $557</span>
                    </div>

                  </PriceCard> :

                    <PriceCard className="order-2 md:order-1" onClick={() => setSelectedPlanType("year")}>
                      <div className="pricecard_top">12 months PRO</div>

                      <div className="pricecard_middle">
                        <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>{" "}
                        <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                          24.05
                        </span>{" "}
                        <span className="text-2xl self-center" style={{ fontWeight: "500", marginTop: "5px" }}>
                          / month
                        </span>
                      </div>
                      <div className="pricecard_bottom text-sm">Billed in 1 prepayment of $288.73</div>

                      <div className="absolute px-2 bottom-4 text-center" >Save $108 on Renewal</div>


                    </PriceCard>}
                </motion.div>

                {!claim ?

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="w-full overflow-visible"
                    transition={{ duration: 0.6 }}
                  >
                    <PriceCardMiddle className="order-1 md:order-2" onClick={() => setSelectedPlanType("six")}>
                      <span className="recommend">RECOMMENDED</span>
                      <div className="text-xl md:text-sm lg:text-xl font-bold mb-5 uppercase">Quick&nbsp;Start&nbsp;now&nbsp;for</div>

                      {/* <span>$</span> */}

                      <div className="pricecard_middle">
                        <div className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </div>{" "}
                        <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                          2.00
                        </span>
                      </div>

                      <div className="pricecard_bottom text-xl mb-3">ONLY</div>

                      <div className="text-sm text-center">7 day FREE trial and start getting hired</div>


                    </PriceCardMiddle>
                  </motion.div>

                  :
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="w-full overflow-visible"
                    transition={{ duration: 0.6 }}
                  >
                    <PriceCardMiddle className="order-1 md:order-2" onClick={() => setSelectedPlanType("vip")}>
                      <span className="recommend">RECOMMENDED</span>
                      <div className="text-xl md:text-sm lg:text-xl font-bold mb-5 uppercase ">3 Years VIP</div>

                      <div className="px-2 text-center" >Includes VIP Membership and Save $557</div>


                      {/* <div className="" >
                        <div className="font-semibold line-through text-2xl text-blue-500">
                          $24.05 /month
                        </div>
                      </div> */}


                      <div className="pricecard_middle">
                        <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>{" "}
                        <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                          15.97
                        </span>{" "}
                        <div className="pricecard_bottom text-xl self-center">/month</div>
                      </div>


                      <div className="text-sm text-center">Billed in 1 prepayment of $575


                      </div>


                      <div className="absolute bottom-0 text-sm py-2 left-0 bg-primary w-full text-white text-center">
                        Includes VIP Memebership and
                        <span className="font-bold">{" "}save $557</span>
                      </div>
                    </PriceCardMiddle>
                  </motion.div>

                }

                {claim ? <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="w-full"
                  transition={{ duration: 0.8 }}
                >
                  <PriceCard className="order-3" onClick={() => setSelectedPlanType("six")}>
                    <div className="pricecard_top">6 Months</div>

                    <div className="pricecard_middle">
                      <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                        $
                      </span>{" "}
                      <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                        31.45
                      </span>{" "}
                      <span className="text-2xl self-center" style={{ fontWeight: "500", marginTop: "5px" }}>
                        /month
                      </span>{" "}
                    </div>

                    <div className="text-sm">Billed in 1 prepayment of $188.73


                    </div>
                  </PriceCard>
                </motion.div> :

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="w-full"
                    transition={{ duration: 0.8 }}
                  >
                    <PriceCard className="order-3" onClick={() => setSelectedPlanType("year")}>
                      <div className="pricecard_top">1 Year PRO</div>

                      <div className="pricecard_middle">
                        <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>{" "}
                        <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                          24.05
                        </span>{" "}
                        <span className="text-2xl self-center" style={{ fontWeight: "500", marginTop: "5px" }}>
                          /month
                        </span>
                      </div>


                      <div className="text-sm">Billed in 1 prepayment of $288.73


                      </div>

                      <div className="absolute px-2 bottom-4 text-center" >Save $108 on Renewal</div>

                    </PriceCard>
                  </motion.div>}

              </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden">
              <div
                className=" flex flex-col  justify-items-center items-center relative z-10 mx-auto pt-10"
                style={{ maxWidth: "1100px", width: "92vw" }}
              >
                {/* <div className="w-full flex gap-4">   */}

                {!claim ?

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="w-full"
                    transition={{ duration: 0.6 }}
                  >
                    <PriceCardMiddle onClick={() => setSelectedPlanType("six")}>
                      <span className="recommend">RECOMMENDED</span>
                      <div className="text-xl md:text-sm lg:text-xl font-bold mb-5 uppercase">Quick&nbsp;Start&nbsp;now&nbsp;for</div>

                      <div className="pricecard_middle">
                        <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>{" "}
                        <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                          2.00
                        </span>{" "}
                      </div>

                      <div className="pricecard_bottom text-xl mb-3">ONLY</div>

                      <div className="text-sm text-center">7 day FREE trial and start getting hired</div>
                      {/* 
                      <div className="absolute bottom-0 left-0 bg-primary w-full text-white text-center">
                        Most popular: <span className="font-bold">SAVE 20.84%</span>
                      </div> */}
                    </PriceCardMiddle>
                  </motion.div>

                  :

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="w-full overflow-visible"
                    transition={{ duration: 0.6 }}
                  >
                    <PriceCardMiddle className="order-1 md:order-2" onClick={() => setSelectedPlanType("vip")}>
                      <span className="recommend">RECOMMENDED</span>
                      <div className="text-xl md:text-sm lg:text-xl font-bold mb-5 uppercase ">3 years VIP</div>


                      <div>Includes VIP Membership ans Save $557</div>

                      {/* <div className="" >
                        <div className="font-semibold line-through text-2xl text-blue-500">
                          $24.05 /month
                        </div>
                      </div> */}


                      <div className="pricecard_middle">
                        <span className="text-2xl" style={{ fontWeight: "500", marginTop: "5px" }}>
                          $
                        </span>{" "}
                        <span className="font-bold" style={{ fontSize: "50px", lineHeight: "61px" }}>
                          15.97
                        </span>{" "}
                        <div className="pricecard_bottom text-xl mb-3 self-center">/month</div>
                      </div>


                      <div className="text-sm text-center">Billed in 1 prepayment of $575


                      </div>


                      <div className="absolute bottom-0 text-sm py-2 left-0 bg-primary w-full text-white text-center">
                        Includes VIP Memebership and
                        <span className="font-bold">{" "}save $557</span>
                      </div>
                    </PriceCardMiddle>
                  </motion.div>



                }
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full "
                >
                  <section className="flex gap-3" style={{ marginTop: 20 }}>

                    {!claim ? <PriceCard className="" onClick={() => setSelectedPlanType("vip")}>
                      <span className="pricecard_top " style={{ fontSize: "16px" }}>3 Years VIP</span>

                      <div className="pricecard_middle pt-16 pb-2">
                        <span className="text-2xl" style={{ fontWeight: "500", }}>
                          $
                        </span>{" "}
                        <span className="font-bold text-2xl " style={{}}>
                          15.97
                        </span>{" "}
                        <span className="text-md self-center">
                          /month
                        </span>{" "}
                      </div>

                      <div className="text-sm text-center">Billed in 1 prepayment of $575



                      </div>

                      {/* <div className="text-sm py-3 px-1 text-center " > Includes VIP Membership ans Save $557</div> */}

                      <div className=" mt-2 -mb-4 bg-primary w-full text-sm text-white text-center">
                        Includes VIP Memebership and<span className="font-bold">{" "}save $557</span>
                      </div>

                    </PriceCard> :


                      <PriceCard className="" onClick={() => setSelectedPlanType("year")}>
                        <span className="pricecard_top " style={{ fontSize: "16px" }}>12 months PRO</span>

                        <div className="pricecard_middle">
                          <span className="text-2xl" style={{ fontWeight: "500", }}>
                            $
                          </span>{" "}
                          <span className="font-bold text-2xl " style={{}}>
                            24.05
                          </span>{" "}
                          <span className="text-md self-center">
                            /month
                          </span>{" "}
                        </div>

                        <div className="text-sm text-center">Billed in 1 prepayment of $288.73



                        </div>
                        <div className="absolute px-2 bottom-4 text-center" >Save $108 on Renewal</div>


                      </PriceCard>}



                    {!claim ?

                      <PriceCard className="order-3" onClick={() => setSelectedPlanType("year")}>
                        <div className="pricecard_top" style={{ fontSize: "16px" }}>1 Year PRO</div>



                        <div className="pricecard_middle">
                          <span className="text-2xl" style={{ fontWeight: "500", }}>
                            $
                          </span>{" "}
                          <span className="font-bold text-2xl " style={{}}>
                            24.05
                          </span>{" "}
                          <span className="text-md self-center">
                            /month
                          </span>
                        </div>


                        <div className="text-sm text-center">Billed in 1 prepayment of $288.73


                        </div>
                        <div className="absolute px-2 bottom-4 text-center" >Save $108 on Renewal</div>

                      </PriceCard>
                      :
                      <PriceCard className="order-3" onClick={() => setSelectedPlanType("six")}>
                        <div className="pricecard_top" style={{ fontSize: "16px" }}>6 Months</div>

                        <div className="pricecard_middle">
                          <span className="text-2xl" style={{ fontWeight: "500", }}>
                            $
                          </span>{" "}
                          <span className="font-bold text-2xl " style={{}}>
                            31.45
                          </span>{" "}
                          <span className="text-md self-center">
                            /month
                          </span>{" "}
                        </div>


                        <div className="text-sm text-center">Billed in 1 prepayment of $188.73


                        </div>

                      </PriceCard>
                    }
                  </section>
                </motion.div>


              </div>

            </div>

            <div className="max-w-screen-xl mx-auto px-8" >

              <div className="py-12" >
                <div className="text-xl font-semibold mb-4 text-center" >

                  The VIP membership gives you
                </div>
                <ul className="list-disc" >
                  <li>
                    Your own talent advisor that will do a minimum of 150 submissions a month.
                  </li>

                  <li>Unlike the pro membership which is a self-submission, with the VIP you don’t have to worry about being proactive and we submit you saving you time & maximizing your opportunities.</li>
                  <li>Explore Talent will be sending you notifications through email or text.</li>
                  <li>Make sure you check your text messages and email. </li>
                  <li>Please respond as quickly as possible.</li>
                  <li>You can work as much as you are available you can accept, decline or request a reschedule of any invitation you receive.</li>
                </ul>



              </div>

            </div>

            {/* MOBILE VIEW */}
            {/* section 1 */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
              <Width className="py-10">
                <h2 className="grad-heading mb-20">See why ET talents are upgrading to PRO</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mx-auto">
                  <div className="md:w-1/2">
                    <Image src="/images/payment-graphic-1.png" alt="auditions & jobs webpage on mobile" height={400} width={441} priority />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="md:w-3/4 lg:w-2/3 ">Submit to unlimited casting calls</h3>
                    <p className="mt-5 md:w-3/4">Auditions & Jobs daily listings. Open to all ages. Hired on the spot and gain professional experience.</p>
                  </div>
                </div>
              </Width>
            </motion.section>

            {/* section 2 */}
            <div></div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
              <section className="relative mb-40">
                <div className="absolute lg:-top-2/3 md:-top-1/3 right-0 w-1/2 hidden md:block">
                  <Image src="/images/payment-page-pattern.png" alt="background circle" width={1007} height={856} priority />
                </div>
                <Width className="py-10 relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mx-auto">
                    <motion.div className="text-center md:text-left order-2 md:order-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
                      <h3 className=" ">Get noticed by Casting Directors in the Talent Directory</h3>
                      <p className="mt-5">Everyday casting professionals are looking for new faces for the perfect role of the job.</p>
                    </motion.div>

                    <motion.div className="md:w-1/2 order-1 md:order-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
                      <Image src="/images/payment-graphic-2.png" alt="auditions & jobs webpage on mobile" height={321} width={495} priority />
                    </motion.div>
                  </div>
                </Width>
              </section>
            </motion.div>

            {/* section 3 */}
            <section className="relative">
              <div
                className="absolute bottom-0 left-0 w-full hidden lg:block create-portfolio"
                style={{
                  height: "330px",
                }}
              ></div>
              <Width>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mx-auto">
                  <motion.div className="md:w-1/2" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
                    <Image src="/images/payment-graphic-3.png" alt="auditions & jobs webpage on mobile" height={430} width={382} priority />
                  </motion.div>

                  <motion.div
                    className="text-center md:text-left relative z-10  md:mt-0 lg:mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <div className="text-center">
                      <span className="md:-ml-28">
                        <Image src="/svg/user-octagon.png" width={65} height={71} alt="person vector" priority />
                      </span>
                    </div>

                    <h3 className="">Create your amazing portfolio</h3>
                    <p className="mt-5 lg:w-3/4">Make a stunning profile that shows your talent! Add featured photos, unlimited photos and videos.</p>
                  </motion.div>
                </div>
              </Width>
            </section>

            {/* Compare pro benefits */}
            <Width className="pt-10 pb-20" style={{ width: "100%" }}>
              <div className="mt-20">
                <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }} className="mb-10 text-center">
                  Compare PRO benefits
                </motion.h3>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
                  <Table>
                    <thead>
                      <tr className="text-sm md:text-base">
                        <th>Benefits</th>
                        <th>Free</th>
                        <th>PRO</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Submit to unlimited casting calls</td>
                        <td className="txt-danger text-xl md:text-2xl">
                          <AiFillCloseCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Reply to messages from Agents & Casting Directors</td>
                        <td className="txt-danger text-xl md:text-2xl">
                          <AiFillCloseCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Receive phone calls from Agents & Casting Directors</td>
                        <td className="txt-danger text-xl md:text-2xl">
                          <AiFillCloseCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Send messages to Agents & Casting Directors</td>
                        <td className="txt-danger text-xl md:text-2xl">
                          <AiFillCloseCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Priority in talent search results</td>
                        <td className="txt-danger text-xl md:text-2xl">
                          <AiFillCloseCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Create talent profile</td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Upload photos</td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>

                      <tr>
                        <td>Receive messages</td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                        <td className="txt-link text-xl md:text-2xl">
                          <AiFillCheckCircle />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </motion.div>

                {/* <div className="text-right mt-5">
                  <Button primary onClick={() => setSelectedPlanType("six")}>Upgrade to PRO</Button>
                </div> */}
              </div>
            </Width>
          </Root>

          <Footer>
            <Width>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.8 }}>
                PRO members mostly get discovered first
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
                    Julia began her career with a membership at ExploreTalent. Julia&apos;s credits include &ldquo;Buffy the Vampire Slayer&rdquo;, &ldquo;Alias&rdquo;, &ldquo;The OC&rdquo;, &ldquo;ER&rdquo;, &ldquo;House&rdquo;,
                    &ldquo;Studio 60&rdquo;, and &ldquo;Grey&apos;s Anatomy&rdquo;. Julia is currently enjoying success as a lead character Anna Wu on &ldquo;Chuck&rdquo;.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.8 }}>
                  <Image src="/images/pro-3.png" alt="Zairy Shakur" width={205} height={307} priority />
                  <div className="font-semibold text-base my-5">Zairy Shakur</div>
                  <p className="opacity-90">
                    She achieved her dream of becoming an actress, host, and singer. She described her experience working with the company as both &ldquo;great&rdquo; and &ldquo;helpful&rdquo;. Zairy added that the success she has achieved
                    now was truly worth the time and investment.
                  </p>
                </motion.div>
              </div>

              <div className="text-center mt-10">
                <Button primary onClick={() => setSelectedPlanType("six")}>Upgrade to PRO</Button>
              </div>
            </Width>
          </Footer>
        </>
      )}
    </>
  );
}
