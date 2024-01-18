import { GreenBtn } from "@/styles/Btn.styled";
import { STORAGE_KEYS } from "@/utils/constants";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import CreateAccountBox from "components/CreateAccountBox";
import CardDetailForm from "containers/payments/CardDetailForm";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { fetchZipApi } from "network/apis/auth";
import { getPaymentPackageApi, paymentFormApi, paymentSalesApi, verifyPromoCode } from "network/apis/payment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CardDetailsD } from "types/payments";
import { Input, Label, Root, Select } from "./styles";
import SuccessPaper from "./SuccessPaper";

export default function PaymentForm({ selectedPlan, showpromo = false }: { selectedPlan: any, showpromo?: boolean }) {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore();
  const [proSuccess, setProSuccess] = useState(false);

  const {
    token,
    auth: { authenticated },
  } = useAuth();
  const [data, setData] = useState<any>([]);
  const [localState, setLocalState] = useState<CardDetailsD>({} as CardDetailsD);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState({});

  const [zipError, setZipError] = useState('');
  const [promoError, setPromoError] = useState('');
  const [apiError, setApiError] = useState('');
  const [Trail, setTrail] = useState(true);

  console.log(selectedPackage);


  const fetchPackageDetail = useCallback(async () => {
    try {
      // const res = await getPaymentPackageApi();
      // console.log("Res is:", res);
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

  useEffect(() => {
    if (selectedPlan?.id && data.length > 0) {
      setSelectedPackage(data.filter((i) => i.id === selectedPlan.id)[0]);
    }
  }, [selectedPlan, data]);

  useEffect(() => {
    fetchPackageDetail();
  }, [fetchPackageDetail]);

  const onSubmit = async ({ force = false, ...state }: CardDetailsD) => {

    // toast.success("Payment successfull");
    // localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: selectedPackage, state: localState }))
    // router.push(`/pro-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${selectedPackage?.name}&amount=${selectedPackage?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);
    // return


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

          // console.log("RES", addRes)

          if (!addRes.city) {
            setZipError("Please enter a valid zip code!")
            setLoading(false);

            return
          }

          // toast.error("Enter valid zip code")
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


        // console.log("RES", res);

        if (res) {
          const res2 = await paymentSalesApi({ id: res.id, token, packageId: selectedPackage.id, claim: profile.claim, promoCode: appliedPromoCode?.name });
          console.log("RES2", res2);
          setLoading(false);
          setProfile((s) => ({ ...s, joinStatus: 5, pro: true }));


          toast.success("Payment successfull");
          localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: selectedPackage, state: localState }))
          router.push(`/pro-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${selectedPackage?.name}&amount=${selectedPackage?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);

          // setProSuccess(true);
        } else {
          setLoading(false);
        }
      } catch (err: any) {
        setLoading(false);

        localStorage.removeItem(STORAGE_KEYS.lastPaymentId)
        if (err?.errors?.promo_code) {
          setApiError(err.errors.promo_code);
        } else {
          setApiError("We are having trouble authorizing the payment. Please verify or update your payment method. If you need assistance please feel free  to call our customer service at 702-553-2700.");
        }
        return;



        if (err?.errors?.talent_payment_option) {
          if (!err?.errors?.talent_payment_option?.paid) {
            setApiError(err?.errors?.talent_payment_option?.message);
          } else {
            setApiError("Something went wrong");
          }

        } else {


          if (err.errors && typeof err.errors === 'object') {

            const err1 = Object.values(err.errors)[0];

            setApiError(JSON.stringify(err1))

            // if( typeof err1 === 'string'){
            //   setApiError(err1)
            //   return;
            // }else if(typeof err1 ==='object'){
            //   setApiError(JSON.stringify(err1))
            // }


          } else {


            setApiError("Something went wrong");
          }

        }



        // if (err.errors && err.errors?.talent_payment_option && !err.errors?.talent_payment_option?.paid) {

        //   toast.error(err.errors?.talent_payment_option?.message)
        //   return;
        // }


        // if (err.errors && typeof Object.values(err.errors)[0][0] === "string") {
        //   toast.error(Object.values(err.errors)[0]);
        // } else {
        //   if (err.errors) {
        //     toast.error("Your payment method was declined. Please try again or enter another payment method.");
        //     // alert(JSON.stringify(err.errors));
        //   }
        // }
      }
    } else {
      setApiError("Select a plan");
    }
  };

  const handleApplyPromo = async () => {
    setPromoError('');
    setAppliedPromoCode({});
    if (promoCode) {
      try {
        const res = await verifyPromoCode({
          promoCode,
          token
        });

        if (res.promo && res.promo?.transaction_applicability == "first" && Trail === true) {
          setPromoError("This Promo Code is not applicable if you select $2 Trial")
        }
        else {
          setAppliedPromoCode(res.promo);
        }

        console.log(res);
      } catch (err: any) {

        console.log("error", err?.error);
        setPromoError(err?.error)
      }
      // Promo code is provided, make an API call to apply it
      // You can add your API logic here
    } else {
      // Promo code is not provided, show an error to the user
      alert("Please enter a valid promo code.");
    }
  };



  const handleRemovePromo = () => {
    setPromoError('');
    setPromoCode('');
    setAppliedPromoCode({});
  }

  return (
    <div className="padding-small bg-paper txt-base">
      {!proSuccess ? (
        <>
          {authenticated ? (
            profile.joinStatus === 5 ? (
              <>
                <div className="text-2xl font-bold py-3 text-center">Already a Pro User</div>
              </>
            ) : (
              <Root>
                <h1>Upgrade to PRO</h1>

                <>
                  <div className="flex gap-5 flex-col mx-auto px-3 md:px-0 ">
                    {/* Plan selection */}
                    <div className="font-bold text-md">Plan selection</div>

                    {!profile.claim &&
                        <div className="flex gap-2" >
                          <Checkbox checked={Trail} size={26} onChange={() => { setTrail(s => !s) }} disabled={appliedPromoCode && appliedPromoCode.transaction_applicability === 'first'} />
                        <div>
                          <strong>$2.00 - </strong>7 Days Quick Start Trial
                        </div>
                      </div>}
                    <div>

                      {!profile.claim &&

                        <div className="mb-3 text-base font-bold">Choose your plan after 7 Day Trial:</div>}

                      <div className="flex gap-2 flex-col">
                        {data.map((i) => {
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
                      {showpromo &&
                        (<div>
                        <div className="mb-2">
                          <Label htmlFor="address">Promo Code</Label>
                          <div className="flex items-center">
                            <Input
                              type="text"
                              placeholder=""
                              className="w-1/2 mr-2"  // Adjust the width as needed
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value)}
                              disabled={Object.keys(appliedPromoCode).length > 0}
                            />
                            {Object.keys(appliedPromoCode).length > 0 ? (
                              <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleRemovePromo}
                              >
                                Remove
                              </button>
                            ) : (
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleApplyPromo}
                              >
                                Apply
                              </button>
                            )}
                            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleApplyPromo}>Apply</button> */}
                          </div>
                          {promoError && <div className="text-red-500 font-semibold text-base mb-2 bg-red-50 px-3 py-2 rounded-lg"  >{promoError}
                          </div>}
                          {Object.keys(appliedPromoCode).length > 0 && (
                            <div className="text-green-500 font-semibold text-base mb-2 bg-green-50 px-3 py-2 rounded-lg">
                              Discount{' '}
                              {appliedPromoCode.discount_type === 'percentage'
                                ? `${parseFloat(appliedPromoCode.discount).toFixed(2)}%`
                                : `$${parseFloat(appliedPromoCode.discount_amount).toFixed(2)}`}{' '}
                              {appliedPromoCode.transaction_applicability === 'first'
                                ? 'applied to the first transaction.'
                                : 'applied to all transactions.'}
                            </div>
                          )}
                        </div>
                        </div>)
                      }

                    <hr />

                    <CardDetailForm onSubmit={onSubmit} loading={loading} zipError={zipError} apiError={apiError} />
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
                  <Button outlined primary className="btn mt-3 md:mt-0">
                    Login to existing account
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <SuccessPaper plan={data[0]} state={localState} />
      )}
    </div>
  );
}
