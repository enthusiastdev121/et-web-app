import { GreenBtn } from "@/styles/Btn.styled";
import { STORAGE_KEYS } from "@/utils/constants";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import CardDetailForm from "containers/payments/CardDetailForm";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { fetchZipApi } from "network/apis/auth";
import { cancelSubscriptionApi, getPaymentPackageApi, paymentFormApi, paymentSalesApi } from "network/apis/payment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CardDetailsD } from "types/payments";
import { Root } from "containers/payments/upgradeProPage/PaymentForm/styles";
import SuccessPaper from "containers/payments/upgradeProPage/PaymentForm/SuccessPaper";
import { Nav } from "containers/payments/upgradeProPage/styles";
import { ImArrowLeft2 } from "react-icons/im";
import moment from "moment";
import { WHITELABEL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";

export default function PaymentForm({ selectedPlan }: any) {
    const router = useRouter();
    const { profile, setProfile } = useProfileStore();
    const [proSuccess, setProSuccess] = useState(false);
    const { token, auth: { authenticated } } = useAuth();
    const [data, setData] = useState<any[]>([]);
    const [localState, setLocalState] = useState<CardDetailsD>({} as CardDetailsD);
    const [loading, setLoading] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<any>({});
    const [zipError, setZipError] = useState('');
    const [apiError, setApiError] = useState('');
    const [apiSuccess, setApiSuccess] = useState('');
    const [onPage, setOnPage] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false);
    // const isCanceled = (profile?.bam_talentrecurring && ((profile?.bam_talentrecurring?.cxl == 1) || (profile?.bam_talentrecurring?.cxl_req_ts != 0 && profile?.bam_talentrecurring.start_date_ts != 0 && moment(profile?.bam_talentrecurring.cxl_req_ts).isAfter(profile?.bam_talentrecurring.start_date_ts)))) ? true : false;
    const [cancelLoading, setCancelLoading] = useState(false);
    const [cancelMessage, setCancelMessage] = useState<any>();

    // FUNCTIONS
    const cancelSubscription = async () => {
        try {
            setCancelLoading(true);
            await cancelSubscriptionApi({ raw: { membership_type: 'pro' }, token });
            setCancelMessage({ type: 'success', text: 'Cancelled Successfully!' });
            // toast.success('Success');
            setCancelLoading(false);
        } catch (err) {
            setCancelLoading(false);
            setCancelMessage({ type: 'error', text: 'Something went wrong!' });
            // toast.error('Error');
        }
    }

    const fetchPackageDetail = useCallback(async () => {
        try {
            // const res = await getPaymentPackageApi();
            // setData(res?.data?.filter((i: any) => i.app_id === 1 && i.active === 1 && i.type_text === "pro"));


            setData([
                // {
                //   "id": 5,
                //   "type": 1,
                //   "active": 1,
                //   "cycle": 15,
                //   "app_id": 1,
                //   "name": "PRO Package 1",
                //   "trial_price": "2.0000",
                //   "trial_days": 7,
                //   "months_per_cycle": 1,
                //   "price_per_month": "49.0000",
                //   "price_per_cycle": "49.0000",
                //   "created_at": "2018-01-03 04:48:12",
                //   "updated_at": "2022-06-28 05:29:31",
                //   "deleted_at": null,
                //   "type_text": "pro"
                // }, {
                //   "id": 6,
                //   "type": 1,
                //   "active": 1,
                //   "cycle": 16,
                //   "app_id": 1,
                //   "name": "PRO Package 2",
                //   "trial_price": "2.0000",
                //   "trial_days": 7,
                //   "months_per_cycle": 3,
                //   "price_per_month": "33.2300",
                //   "price_per_cycle": "99.7300",
                //   "created_at": "2018-01-03 04:48:12",
                //   "updated_at": "2018-01-03 04:48:12",
                //   "deleted_at": null,
                //   "type_text": "pro"
                // },
                {
                    "id": 7,
                    "type": 1,
                    "active": 1,
                    "cycle": 17,
                    "app_id": 1,
                    "name": "PRO Package 3",
                    "trial_price": "2.0000",
                    "trial_days": 7,
                    "months_per_cycle": 6,
                    "price_per_month": "31.4500",
                    "price_per_cycle": "188.7300",
                    "created_at": "2018-01-03 04:48:12",
                    "updated_at": "2018-01-03 04:48:12",
                    "deleted_at": null,
                    "type_text": "pro"
                },
                {
                    "id": 8,
                    "type": 1,
                    "active": 1,
                    "cycle": 18,
                    "app_id": 1,
                    "name": "PRO Package 4",
                    "trial_price": "2.0000",
                    "trial_days": 7,
                    "months_per_cycle": 12,
                    "price_per_month": "24.0500",
                    "price_per_cycle": "288.7300",
                    "created_at": "2018-01-03 04:48:12",
                    "updated_at": "2018-01-03 04:48:12",
                    "deleted_at": null,
                    "type_text": "pro"
                },
                // {
                //   "id": 9,
                //   "type": 1,
                //   "active": 1,
                //   "cycle": 13,
                //   "app_id": 1,
                //   "name": "PRO Package 5",
                //   "trial_price": "2.0000",
                //   "trial_days": 7,
                //   "months_per_cycle": 24,
                //   "price_per_month": "18.0000",
                //   "price_per_cycle": "475.0000",
                //   "created_at": "2018-01-03 04:48:12",
                //   "updated_at": "2018-01-03 04:48:12",
                //   "deleted_at": null,
                //   "type_text": "pro"
                // },
                {
                    "id": 10,
                    "type": 1,
                    "active": 1,
                    "cycle": 14,
                    "app_id": 1,
                    "name": "PRO Package 6",
                    "trial_price": "2.0000",
                    "trial_days": 7,
                    "months_per_cycle": 36,
                    vip: true,
                    "price_per_month": "16.0000",
                    "price_per_cycle": "575.0000",
                    "created_at": "2018-01-03 04:48:12",
                    "updated_at": "2018-01-03 04:48:12",
                    "deleted_at": null,
                    "type_text": "pro"
                }
            ])

        } catch (err) {
            console.log("Err", err);
        }
    }, []);

    const onSubmit = async ({ force = false, ...state }: CardDetailsD) => {
        setApiError('');
        setZipError('');
        if (selectedPackage.id) {
            if (!state.address || !state.cardNumber || !state.cv2 || !state.expMonth || !state.expYear || !state.fName || !state.lName || !state.zip) {
                setApiError("Please fill all the fields");
                return
            }
            setLocalState(state);
            setLoading(true);
            let addRes;

            if (!force) {
                try {
                    addRes = await fetchZipApi({ zip: state.zip });
                    if (!addRes.city) {
                        setZipError("Please enter a valid zip code!")
                        setLoading(false);
                        return
                    }
                }
                catch (err) {

                    setZipError("Please enter a valid zip code!")
                    setLoading(false);
                    return;
                }
            }
            try {

                const res = await paymentFormApi({
                    po_ccnum: state.cardNumber,
                    po_ccscode: state.cv2.toString(),
                    po_fname: state.fName,
                    po_lname: state.lName,
                    po_address1: state.address,
                    po_zip: state.zip,
                    po_type: 1,
                    po_name: "Credit Debit Card",
                    po_city: addRes?.city || '',
                    po_state: addRes?.state || '',
                    po_exp: Math.floor(new Date(Number(state.expYear), Number(state.expMonth), 1).getTime() / 1000),
                    token,
                });

                localStorage.setItem(STORAGE_KEYS.lastPaymentId, res.id)
                if (res) {
                    const res2 = await paymentSalesApi({ id: res.id, token, packageId: selectedPackage.id, claim: true });
                    console.log("RES2", res2);
                    setLoading(false);
                    setOnPage(true);
                    setApiSuccess("Approved! Redirecting to profile...");
                    localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: selectedPackage, state: localState }))
                    // router.push(`/pro-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${selectedPackage?.name}&amount=${selectedPackage?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);
                    // toast.success("Payment successfull");
                    // router.push(`/pro-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${selectedPackage?.name}&amount=${selectedPackage?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);
                } else {
                    setLoading(false);
                }
            } catch (err: any) {
                setLoading(false);
                localStorage.removeItem(STORAGE_KEYS.lastPaymentId)

                setApiError("We are having trouble authorizing the payment. Please verify or update your payment method. If you need assistance please feel free  to call our customer service at 702-553-2700.");
                return;

                if (err?.errors?.talent_payment_option) {
                    if (!err?.errors?.talent_payment_option?.paid) {

                        if (err?.errors?.talent_payment_option?.code === 'card_declined') {


                            setApiError('Pease check the card and try again')
                        } else {


                            setApiError(err?.errors?.talent_payment_option?.message);
                        }
                    } else {
                        setApiError("Something went wrong");
                    }
                } else {
                    if (err.errors && typeof err.errors === 'object') {
                        const err1 = Object.values(err.errors)[0];
                        setApiError(JSON.stringify(err1))
                        // setApiError("Pease check the card and try again");
                    } else {
                        setApiError("Something went wrong");
                    }
                }
            }
        } else {
            setApiError("Select a plan");
        }
    };

    // SIDE EFFECTS
    useEffect(() => {
        if (selectedPlan?.id && data.length > 0) {
            setSelectedPackage(data.filter((i: any) => i.id === selectedPlan.id)[0]);
        }
    }, [selectedPlan, data]);

    useEffect(() => {
        fetchPackageDetail();
    }, [fetchPackageDetail]);

    useEffect(() => {
        if (apiSuccess !== 'Approved! Redirecting to profile...') return;

        setProfile((s) => ({ ...s, joinStatus: 5, pro: true }));
        const timer = setTimeout(() => {
            router.push(`/profile/edit?keyword=app-tour`);
            localStorage.setItem("firstTourDone", "");
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [apiSuccess]);

    // useEffect(() => {
    //     if (!profile?.bam_talentrecurring) return;

    //     const checkCancel = (profile?.bam_talentrecurring && ((profile?.bam_talentrecurring?.cxl == 1) || (profile?.bam_talentrecurring?.cxl_req_ts != 0 && profile?.bam_talentrecurring.start_date_ts != 0 && moment(profile?.bam_talentrecurring.cxl_req_ts).isAfter(profile?.bam_talentrecurring.start_date_ts)))) ? true : false;
    //     setIsCanceled(checkCancel);
    // }, [profile]);

    console.log('profile', profile);

    return (
        <>
            <div>
                <Nav>
                    <div className="text-xl mr-auto cursor-pointer">
                        <ImArrowLeft2 onClick={() => { router.back() }} />
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
            </div>
            <div className="padding-small bg-paper txt-base">
                {/* {!proSuccess && !onPage ? ( */}
                <>
                    {authenticated ? (
                        (profile.joinStatus === 5 && !onPage) ? (
                            // <div className='bg-paper' style={{ minHeight: '100vh' }}>
                            //     <main className='text-center mt-12'>
                            //         <div className="shadow mx-auto sm:w-[50%] w-[90%] rounded-xl sm:p-10 p-2 text-center bg-pure">
                            //             <div>
                            //                 <span className='sm:text-lg'>PRO member active since <br /><strong className='text-xl'>{moment(profile?.start_date_ts * 1000).format('Do MMMM, YYYY | hh:mm A')}</strong></span>

                            //                 {
                            //                     isCanceled && <small className="text-red-500 text-base block mt-5">
                            //                         You have canceled your recurring payment. Your pro memembership ends on: <strong>{moment(profile?.bam_talentrecurring?.cxl_date_ts * 1000)?.format('Do MMMM, YYYY')}</strong>
                            //                     </small>
                            //                 }
                            //                 <div>
                            //                     <div className='sm:flex items-center gap-4 justify-center mt-8'>
                            //                         {/* <Link href={isCanceled ? '/upgrade-to-pro' : '/upgrade-to-featured'}>
                            //                             <Button primary>{isCanceled ? 'Resume Pro membership' : 'Upgrade to Featured'}</Button>
                            //                         </Link> */}
                            //                         {!profile?.featured && <Link href='/upgrade-to-featured'>
                            //                             <Button primary>Upgrade to Featured</Button>
                            //                         </Link>}
                            //                         {!isCanceled && <div className='my-4'>
                            //                             <Button loading={cancelLoading} onClick={cancelSubscription}>Cancel Pro Membership</Button>
                            //                         </div>}
                            //                     </div>
                            //                 </div>

                            //                 <div className={cancelMessage?.type === 'error' ? 'text-center mt-5 text-red-500' : 'text-center mt-5 text-green-500'}>{cancelMessage?.text}</div>
                            //             </div>
                            //         </div>
                            //     </main>
                            // </div>
                            <div className="bg-paper">
                                <div className="text-2xl text-center">You are already a Pro Member</div>
                            </div>
                        ) : (
                            <Root>
                                <h1>Upgrade to PRO</h1>

                                <>
                                    <div className="flex gap-5 flex-col mx-auto px-3 md:px-0 ">
                                        {/* Plan selection */}
                                        <div className="font-bold text-md">Plan selection</div>
                                        <div>
                                            <div className="flex gap-2 flex-col">
                                                {data.map((i: any) => {
                                                    return (
                                                        <div key={i.id}>
                                                            <div className="flex gap-2 items-start">
                                                                <Checkbox checked={selectedPackage.id === i.id} onChange={() => setSelectedPackage(i)} size={32} />
                                                                <label htmlFor="12">
                                                                    <strong> {i.vip ? '3 Year VIP' : <>{i?.months_per_cycle === 12 ? '1' : i?.months_per_cycle} {i.months_per_cycle === 12 ? "Year" : "Month"} </>} {!i.vip && "PRO"}  - </strong> ${`${i?.price_per_month?.split('.')[0]}.${i?.price_per_month?.split('.')[1].slice(0, 2)}`}/month <small className="block">Billed in 1 prepayment of ${`${i?.price_per_cycle?.split('.')[0]}.${i?.price_per_cycle?.split('.')[1].slice(0, 2)}`}</small>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <hr />

                                        <CardDetailForm onSubmit={onSubmit} loading={loading} zipError={zipError} apiError={apiError} apiSuccess={apiSuccess} />
                                    </div>
                                </>
                            </Root>
                        )
                    ) : (
                        <div className="boxShadow box p-10 xl:p-32 text-center">
                            <h1 className="text-xl md:text-4xl font-semibold mb-10 md:mb-20">In order to access this information you need to create an account</h1>
                            <div className="text-sm md:text-lg flex gap-2 flex-col md:flex-row md:items-center justify-center">
                                <Link href="/account/signup" passHref>
                                    <Button primary>Create a new account</Button>
                                </Link>
                                <Link href="/account/login" passHref>
                                    <Button outlined primary>
                                        Login to existing account
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </>
                {/* ) 
                : (
                    <SuccessPaper plan={data[0]} state={localState} />
                )} */}
            </div >
        </>
    );
}