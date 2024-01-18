import { STORAGE_KEYS } from "@/utils/constants";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { motion } from "framer-motion";
import { fetchZipApi } from "network/apis/auth";
import { getPaymentPackageApi, paymentFormApi, paymentSalesApi } from "network/apis/payment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";
import { CardDetailsD } from "types/payments";
import CardDetailForm from "../CardDetailForm";

export default function PaymentForm({ planId, onBack }: { planId: string; onBack: () => any }) {
  const {
    token,
    auth: { authenticated },
  } = useAuth();
  const [data, setData] = useState([]);
  const { profile, setProfile } = useProfileStore();

  const [loading, setLoading] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState({});
  const router = useRouter();

  const [zipError, setZipError] = useState('');
  const [apiError, setApiError] = useState('');


  useEffect(() => {
    if (planId && data.length > 0) {
      setSelectedPackage(data.filter((i) => Number(i.id) === Number(planId))[0]);
    }
  }, [planId, data]);

  useEffect(() => {
    const fetchNow = async () => {
      try {
        const res = await getPaymentPackageApi();
        console.log("Res is:", res);
        setData(res?.data?.filter((i: any) => i.app_id === 1 && i.active === 1 && i.type_text === "featured"));
      } catch (err) {
        console.log("Err", err);
      }
    };

    fetchNow();
  }, []);

  const onSubmit = async ({ force = false, ...state }: CardDetailsD) => {

    // localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: selectedPackage, state: state }))
    // router.push(`/featured-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${selectedPackage?.name}&amount=${selectedPackage?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);
    // return

    setApiError('');
    setZipError('');

    if (selectedPackage.id) {

      if (!state.address || !state.cardNumber || !state.cv2 || !state.expMonth || !state.expYear || !state.fName || !state.lName || !state.zip) {
        setApiError("Please fill all the fields");
        return
      }



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
        setLoading(true);
        const res = await paymentFormApi({
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
        if (res) {
          const res2 = await paymentSalesApi({ id: res.id, token, packageId: selectedPackage.id, featured: true });
          console.log("RES2", res2);
          setLoading(false);
          setProfile((s) => ({ ...s, pro: true }));


          localStorage.setItem(STORAGE_KEYS.lastPayment, JSON.stringify({ plan: selectedPackage, state: state }))

          router.push(`/featured-confirm?email=${profile.email}&tid=${profile.talentnum}&plan=${selectedPackage?.name}&amount=${selectedPackage?.price_per_cycle}&trial=${profile.claim ? "false" : "true"}`);



          // if (res2) {
          //   alert(JSON.stringify(res));
          // }
          toast.success("Payment successfull, You are a featured talent now!");
          // onBack();
          // router.push("/" + profile.talentlogin);
        } else {
          setLoading(false);
        }
      } catch (err: any) {
        setLoading(false);

        setApiError("We are having trouble authorizing the payment. Please verify or update your payment method. If you need assistance please feel free  to call our customer service at 702-553-2700.");
        return;


        // localStorage.removeItem(STORAGE_KEYS.lastPaymentId)
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




        // toast.error("Your payment method was declined. Please try again or enter another payment method.");
        // alert(JSON.stringify(err.errors));


      }
    } else {
      setApiError("Select a plan");
    }
  };

  return (
    <Root
      className="bg-pure txt-base w-full p-7 rounded-xl"
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >


      {profile.featured ? (
        <div className="py-12 px-3 flex items-center justify-center">You are already a featured talent.</div>
      ) : (
        <>
          <div className="mb-3">
            <Button primary outlined rounded
              onClick={onBack}>
              <div className="text-2xl">
                <FiArrowLeft />
              </div>
              <div className="">Change Plan</div>
            </Button>
          </div>

          <div className="mb-2 font-bold">Choose Plan:</div>

          <div className="flex gap-2 flex-col mb-3">
            {data.map((i) => {
              return (
                <div key={i.id}>
                  <div className="flex gap-2 items-start">
                    <Checkbox checked={selectedPackage.id === i.id} onChange={() => setSelectedPackage(i)} size={32} />
                    <label htmlFor="12">
                      <strong>{i?.months_per_cycle} Month - </strong> ${`${i?.price_per_month?.split('.')[0]}.${i?.price_per_month?.split('.')[1].slice(0, 2)}`}/month
                      <small className="block">Billed in 1 prepayment of ${`${i?.price_per_cycle?.split('.')[0]}.${i?.price_per_cycle?.split('.')[1].slice(0, 2)}`}
                      </small>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>

          <CardDetailForm onSubmit={onSubmit} loading={loading} zipError={zipError} apiError={apiError} />
        </>
      )}
    </Root>
  );
}

const Root = styled(motion.div)`
  box-shadow: 0px 22px 24px rgba(206, 206, 206, 0.331184);
`;
