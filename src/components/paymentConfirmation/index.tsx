import { STORAGE_KEYS } from "@/utils/constants";
import Button from "components/Button";
import Spinner from "components/Spinner";
import { PLANS } from "containers/payments/upgradeFeaturedPage";
import FeaturedModal from "containers/payments/upgradeFeaturedPage/FeaturedModal";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { fetchZipApi } from "network/apis/auth";
import { paymentFormApi, paymentSalesApi } from "network/apis/payment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import tw from "tailwind-styled-components";

export default function PaymentConfirm({ popupDisable = false, featured = false }) {
    const router = useRouter();
    const featuredPlan = PLANS.one;
    const [featuredOpen, setFeaturedOpen] = useState(false);
    const [featuredSuccess, setFeaturedSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();
    const { setProfile, profile } = useProfileStore();
    const [plan, setPlan] = useState({})
    const [state, setState] = useState({})
    useEffect(() => {
        if (typeof window !== "undefined") {
            const data1 = localStorage.getItem(STORAGE_KEYS.lastPayment)
            if (data1) {
                const data2 = JSON.parse(data1);
                setPlan(data2.plan)
                setState(data2.state)
            }
        }
    }, [router.pathname])



    useEffect(() => {

        let tm: any;

        if (!popupDisable) {

            tm = setTimeout(() => {
                setFeaturedOpen(true);
            }, 2000);
        }

        return () => {

            if (tm) {
                clearTimeout(tm)
            }
        }

    }, [popupDisable]);

    const onFeatured = async () => {

        // toast.success("Payment successfull");
        // localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: featuredPlan, state: state }))
        // router.push(`/featured-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${featuredPlan?.name}&amount=${featuredPlan?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);
        // return;

        // setFeaturedOpen(false);
        // setLoading(true);

        // setTimeout(() => {
        //   setProfile((s) => ({ ...s, joinStatus: 5, pro: true }));
        //   setLoading(false);


        //   setFeaturedSuccess(true);
        //   toast.success("Payment successfull");

        // }, 4000)

        // return


        if (featuredPlan.id && state.cardNumber) {
            try {
                setFeaturedOpen(false);
                setLoading(true);

                let res: any;

                if (localStorage.getItem(STORAGE_KEYS.lastPaymentId)) {
                    res = {
                        id: localStorage.getItem(STORAGE_KEYS.lastPaymentId)
                    }

                } else {

                    let addRes;

                    try {
                        addRes = await fetchZipApi({ zip: state.zip });
                    }
                    catch (err) {
                        console.log("ZIP ERR", err)

                    }
                    res = await paymentFormApi({
                        po_ccnum: state.cardNumber,
                        po_ccscode: state.cv2.toString(),
                        po_fname: state.fName,
                        po_lname: state.lName,
                        po_address1: state.address,
                        po_zip: state.zip,
                        po_type: 1,
                        po_name: "Credit Debit Card",
                        po_exp: Math.floor(new Date(Number(state.expYear), Number(state.expMonth), 1).getTime() / 1000),
                        po_city: addRes?.city || '',
                        po_state: addRes?.state || '',
                        token,
                    });
                }


                console.log("RES", res);


                if (res) {
                    const res2 = await paymentSalesApi({ id: res.id, token, packageId: featuredPlan.id, featured: true });
                    console.log("RES2", res2);
                    setProfile((s) => ({ ...s, joinStatus: 5, pro: true }));
                    setLoading(false);
                    setFeaturedSuccess(true);
                    toast.success("Payment successfull");

                    localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: featuredPlan, state: state }))
                    router.push(`/featured-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${featuredPlan?.name}&amount=${featuredPlan?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);


                } else {

                    setLoading(false);
                }
            } catch (err: any) {
                setLoading(false);

                toast.error("We are having trouble authorizing the payment. Please verify or update your payment method. If you need assistance please feel free  to call our customer service at 702-553-2700.");
                return;

                if (err.errors && err.errors?.talent_payment_option && !err.errors?.talent_payment_option?.paid) {

                    toast.error(err.errors?.talent_payment_option?.message)
                    return;
                }


                if (err.errors && typeof Object.values(err.errors)[0][0] === "string") {
                    toast.error(Object.values(err.errors)[0]);
                } else {
                    if (err.errors) {
                        toast.error("Your payment method was declined. Please try again or enter another payment method.");
                        // alert(JSON.stringify(err.errors));
                    }
                }
            }
        }
    };

    return (
        <div className="shadow-md bg-pure  rounded-2xl px-4 py-4 mx-auto my-[200px]" style={{ maxWidth: 600 }}>
            {loading ? (
                <div className="flex items-center justify-center py-5 px-3 flex-col gap-3">
                    <Spinner primary />
                    <div className="font-semibold text-lg">Processing Payment....</div>
                </div>
            ) : (featuredSuccess || featured) ? (
                <div>
                    <div>
                        <img src="/svg/green-check-icon.svg" className="h-24 ml-auto mr-auto  mb-2" />

                        <div className="text-center mb-3">
                            <div className="font-semibold text-lg mb-2">Payment Success!</div>

                            <div className="mb-2">
                                Your have successfully purchased
                                <strong>  {plan?.months_per_cycle} Months Featured - ${Number(plan?.price_per_cycle).toFixed(2)} </strong>
                            </div>

                            <div>
                                If you have any questions please <span className="text-blue-500 font-semibold">Contact Us</span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg px-3 py-2 flex flex-col gap-2">
                        <div>
                            <Label>Order Review</Label>

                            <LabValue>
                                <div>{plan?.months_per_cycle} Months Featured</div>
                                <div>${Number(plan?.price_per_month).toFixed(2)}/month</div>
                            </LabValue>
                        </div>{" "}
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <img src="/svg/green-check-icon.svg" className="h-24 ml-auto mr-auto  mb-2" />

                        <div className="text-center mb-3">
                            <div className="font-semibold text-lg mb-2">Payment Success!</div>



                            {profile.claim ? <div className="mb-2">
                                Your have successfully purchased Pro package  of{" "}
                                <strong>
                                    {plan?.months_per_cycle} Months PRO - ${Number(plan?.price_per_cycle).toFixed(2)}/month
                                </strong>
                            </div> : <div className="mb-2">
                                Your have successfully purchased <strong>7 Days Quick Start Trial for $2.00,</strong> and Pro package after 7 days trial of{" "}
                                <strong>
                                    {plan?.months_per_cycle} Months PRO - ${Number(plan?.price_per_cycle).toFixed(2)}
                                </strong>
                            </div>}

                            <div>
                                If you have any questions please <span className="text-blue-500 font-semibold">Contact Us</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg px-3 py-2 flex flex-col gap-2">

                        {!profile.claim &&

                            <div>
                                <Label>Order Review</Label>
                                <LabValue>
                                    <div>$2.00 - 7 Days Quick Start Trial</div>
                                    <div>$2.00</div>
                                </LabValue>
                            </div>}
                        <div>
                            {!profile.claim &&
                                <Label>After 7 days proceed subscription to</Label>}
                            <LabValue>
                                <div>{plan?.months_per_cycle} Months PRO</div>
                                <div>${Number(plan?.price_per_month).toFixed(2)}/Month</div>
                            </LabValue>
                        </div>
                    </div>
                </div>
            )}

            {!loading && (
                <div className="flex flex-col gap-2 mt-2">
                    <Link href={"/" + profile.talentlogin}>
                        <a>
                            <Button fullWidth primary>
                                Go to profile
                            </Button>
                        </a>
                    </Link>
                    <Link href="/auditions">
                        <a>
                            <Button fullWidth primary light>
                                Start submitting auditions
                            </Button>
                        </a>
                    </Link>
                </div>
            )}

            <FeaturedModal
                open={featuredOpen}
                onClose={() => setFeaturedOpen(false)}
                onSuccess={() => {
                    setFeaturedOpen(false);
                    setFeaturedSuccess(true);
                }}
                onFeatured={onFeatured}
            />
        </div>
    );
}

const Label = tw.div`font-light text-sm mb-1`;
const LabValue = tw.div`flex justify-between text-sm font-semibold`;



