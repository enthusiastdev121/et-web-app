import { useState, useEffect } from "react";

import { loginApi, signupApi } from "../../../../network/apis/auth";
import { useAuth } from "../../../../context/AuthContext";
import { apiParams } from "@/utils/apiHelper";
import { generateRandomString, makePassword } from "@/utils/helper";
import { useConfig } from "../../../../context/RootContext";
import { API_VERSION } from "../../../../utils/constants";

import Sex from "../../../../components/account/FindWork";
import AgeGroup from "../../../../components/account/FindWork/AgeGroup";
import Height from "../../../../components/account/FindWork/Height";
import Ethnicity from "../../../../components/account/FindWork/Ethnicity";
import Address from "../../../../components/account/FindWork/Address";
import Fname from "../../../../components/account/FindWork/Fname";
import GuardFname from "../../../../components/account/FindWork/GuardFname";
import GuardLname from "../../../../components/account/FindWork/GuardLname";
import Email from "../../../../components/account/FindWork/Email";
import Phone from "../../../../components/account/FindWork/Phone";
import Dob from "../../../../components/account/FindWork/Dob/DobOne";
import Lname from "../../../../components/account/FindWork/Lname";
import Password from "../../../../components/account/FindWork/Password";
import Interests from "../../../../components/account/FindWork/Interests";
import { useProfileStore } from "context/ProfileStore";
import { setSelectedMarketsApi, updateGuardianProfileDetailApi, updatePhysicalAttrsApi, updateProfileDetailApi, updateProfileInfoApi, updateTalentInterestApi } from "network/apis/ownProfile";
import { DatabaseIcon } from "@heroicons/react/solid";
import Router, { useRouter } from 'next/router'
import Link from "next/link";
import Button from "components/Button";
import Photo from "components/account/FindWork/Photo";
import EyeColor from "../../../../components/account/FindWork/EyeColor";
import HairColor from "../../../../components/account/FindWork/HairColor";
import ConsentOne from "components/account/FindWork/ConsentOne";
import ConsentTwo from "components/account/FindWork/ConsentTwo";
import ConsentThree from "components/account/FindWork/ConsentThree";
import Interest from "components/account/FindWork/Interest";
import toast from 'react-hot-toast'
import { IoMdReturnRight } from "react-icons/io";
import { setTalentGeneralDetails } from "network/apis";
import useWindowDimensions from "components/Layout/useWindowDimensions";
import { X_ORIGIN } from "@/utils/envProviders";
import Income from "components/account/FindWork/Income";
import HealthInsurance from "components/account/FindWork/HealthInsurance";

export default function FindWorkPage() {
  const config = useConfig();
  const router = useRouter();
  const [data, setData] = useState({
    email: "", password: ""
  });
  const [loading, setLoading] = useState(false);
  const [processLogin, setProcessLogin] = useState(false);
  const { token, user, onLoginSuccess, logout } = useAuth();
  const { setProfile, profile, replaceInterest } = useProfileStore();
  const [loading2, setLoading2] = useState(false);
  const password = makePassword(4);
  const [isChild, setIsChild] = useState(false);
  const [caller, setCaller] = useState(false);
  const [reCall, setReCall] = useState(false);
  const [emailPassed, setEmailPassed] = useState(false);
  const [height, setHeight] = useState();

  // useEffect(() => {
  //   const { innerHeight: height } =
  //     typeof window !== "undefined" && window;

  //   setHeight(height)
  // }, [])

  // console.log("height: ", height);

  // useEffect(() => {
  //   if (data.email && processLogin) {
  //     onFinish();
  //   }
  // }, [data.email, processLogin, reCall]);
  // // }, [data.email, processLogin]);

  // useEffect(() => {
  //   console.log("data:", data);
  // }, [data]);

  // const onFinish = async () => {
  //   setProcessLogin(false)

  //   console.log("I am running now!!")

  //   const raw = {
  //     talentlogin: data.fName.toLowerCase().trim() + generateRandomString(5),
  //     // talentlogin: "testmail5 HsWu0d",
  //     email1: data.email.toLowerCase(),
  //     talentpass: password,
  //     x_origin: X_ORIGIN,
  //     user_type: "bam_talentci",
  //   };
  //   try {
  //     setLoading(true);
  //     const res = await signupApi(JSON.stringify(apiParams({ raw })));
  //     setEmailPassed(true);
  //     console.log("OO", res);

  //     if (res.talentlogin) {
  //       const raw2 = {
  //         grant_type: "password",
  //         user_type: config.userType,
  //         client_id: config.clientId,
  //         client_secret: config.clientSecret,
  //         username: data.email.toLowerCase(),
  //         password: password,
  //       };

  //       try {
  //         const res1 = await loginApi(JSON.stringify(raw2));
  //         console.log("RES1; ->", res1);
  //         if (res1.access_token) {
  //           const response = formatLoginResponse(res, res1);
  //           onLoginSuccess({
  //             creds: response.creds,
  //             user: response.user,
  //             redirect: false,
  //             type: 'talent'
  //           });
  //           updateProfile(false, response.creds.token, res1.bam_talentci?.talentnum);
  //         }
  //       } catch (err) {
  //         setLoading(false);
  //         console.log("LOGIN ERR", err);
  //       }
  //     }
  //   } catch (err) {
  //     console.log("ERR", err);
  //     if (err?.errors?.talentlogin) {
  //       setProcessLogin(true)
  //       setReCall(!reCall)
  //     } else if (err?.errors?.email1) {
  //       toast.error("Email is not unique")
  //     }
  //     setLoading(false);
  //   }
  // };

  // const updateProfile = async (redirect = true, lToken = '', lTalentnum = '') => {
  //   console.log("DATA", data);
  //   try {
  //     setLoading2(true);

  //     // lannme, fname, phone, zip, country, state, city, dob
  //     let dat = data.code ? data.code === "1" ? {
  //       cell: data.phone
  //     } : {
  //       cell: data.code + " " + data.phone
  //     } : '';

  //     const infoRes = await updateProfileDetailApi({
  //       token: lToken || token,
  //       talentnum: lTalentnum || profile?.talentnum?.toString(),
  //       raw: {
  //         fname: data.fName,
  //         lname: data.lName,
  //         cell: dat.cell,
  //         dphone: dat.cell,
  //         // dobyyyy: data.dob?.year,
  //         // dobmm: data.dob?.month,
  //         // dobdd: data.dob?.date,
  //         zip: data.zip,
  //         address1: data.address,
  //         country: data.country,
  //         state: data.state,
  //         city: data.city,
  //         ...(data.country === "United States" ? {} : { lat: data.lat }),
  //         ...(data.country === "United States" ? {} : { lon: data.lon }),
  //         ...(data.password ? { talentpass: data.password } : {}),
  //         ...(dat.cell ? { cell: dat.cell } : {})
  //       },
  //     });
  //     console.log("INFO RES", infoRes);
  //     setProfile((s) => ({
  //       ...s,
  //       fname: data.fName,
  //       lname: data.lName,
  //       name: data.fName + " " + data.lName,
  //       phone: dat.cell || "",
  //       zip: data.zip,
  //       country: data.countryCode,
  //       dob: new Date(
  //         Number(data.dob?.year),
  //         Number(data.dob?.month) + 1,
  //         Number(data.dob?.date)
  //       ).toString(),
  //     }));

  //     // ethnicity, sex, ageRange, height, eyecolor, haircolor
  //     let kkk = {
  //       sex: data.sex || "",
  //       age_range: data.ageRange || "",
  //       // heightfeet: data.height?.feet,
  //       heightinches: data.height?.inches,
  //       eyecolor: data.eye_color,
  //       haircolor: data.hair_color,
  //       dobyyyy: data.dob?.year,
  //       dobmm: data.dob?.month,
  //       dobdd: data.dob?.date,
  //     };
  //     const res = await updatePhysicalAttrsApi(
  //       lToken || token,
  //       JSON.stringify({ ...kkk })
  //     );
  //     if (typeof res === "object") {
  //       setProfile((s) => ({
  //         ...s,
  //         ...{ ...kkk },
  //       }));
  //     }

  //     // ethnicity
  //     const ethnicityRes = await updateProfileInfoApi({
  //       token: lToken || token,
  //       raw: {
  //         ethnicity: data.ethnicity || "",
  //       }
  //     })

  //     // Guardian Details
  //     if (isChild) {
  //       const guardianRes = await updateGuardianProfileDetailApi({
  //         token: lToken || token,
  //         raw: {
  //           gzip: data.zip,
  //           gaddress1: data.address,
  //           gcountry: data.countryCode,
  //           gstate: data.state,
  //           gcity: data.city,
  //           gphone1: dat.cell,
  //           gfname: data.gfname,
  //           glname: data.glname,
  //           gemail: data.email,
  //         },
  //       });
  //       console.log("GUARDIAN RES", guardianRes);

  //       logout();
  //     }

  //     // general talent details
  //     const genralDetails = await setTalentGeneralDetails({

  //       token: lToken || token,
  //       raw: {
  //         working: data.consentOne,
  //         willing_to_travel: data.consentTwo,
  //         serious: data.consentThree,
  //       }
  //     });

  //     if (!redirect) {
  //       setLoading2(false);
  //       return;
  //     }

  //     // Interests
  //     const interestRes = await updateTalentInterestApi(
  //       token,
  //       JSON.stringify(
  //         apiParams({
  //           type: "",
  //           raw: {
  //             interests: data.interest
  //               ?.filter((i) => i.selected)
  //               ?.map((i) => ({
  //                 category_id: i.id,
  //                 subcategory_id: i.sub
  //                   ?.filter((i3) => i3.selected)
  //                   ?.map((i2) => i2.id),
  //               })),
  //           },
  //         })
  //       )
  //     );
  //     replaceInterest(data.interest?.filter((i: any) => i.selected))
  //     router.replace('/upgrade-to-pro?new=true')
  //     // Router.push({
  //     //   // pathname: isChild ? '/login/coppa' : '/profile/edit',
  //     //   pathname: isChild ? '/login/coppa' : '/upgrade-to-pro',
  //     //   query: isChild ? '' : { keyword: 'app-tour' },
  //     // })
  //     setLoading2(false);
  //   } catch (err) {
  //     console.log("ERR", err);
  //     setLoading2(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }

  //   updateProfile(false)
  // }, [data])


  // // SET MARKETS
  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }

  //   const setMarkets = async () => {
  //     try {
  //       const res2 = await setSelectedMarketsApi({
  //         token,
  //         raw: {
  //           market1: data?.selectedMarkets[0]?.market_id,
  //           market1p: data?.selectedMarkets[0]?.parent_id === null ? null : data?.selectedMarkets[0]?.parent[0].parent_id === null ? data?.selectedMarkets[0]?.parent_id : data?.selectedMarkets[0]?.parent_id + "," + data?.selectedMarkets[0]?.parent[0]?.parent_id,
  //           market2: data?.selectedMarkets[1]?.market_id,
  //           market2p: data?.selectedMarkets[1]?.parent_id === null ? null : data?.selectedMarkets[1]?.parent[0].parent_id === null ? data?.selectedMarkets[1]?.parent_id : data?.selectedMarkets[1]?.parent_id + "," + data?.selectedMarkets[1]?.parent[0]?.parent_id,
  //           market3: data?.selectedMarkets[2]?.market_id,
  //           market3p: data?.selectedMarkets[2]?.parent_id === null ? null : data?.selectedMarkets[2]?.parent[0].parent_id === null ? data?.selectedMarkets[2]?.parent_id : data?.selectedMarkets[2]?.parent_id + "," + data?.selectedMarkets[2]?.parent[0]?.parent_id,
  //         }
  //       })
  //     } catch (err) {
  //       console.log("ERR", err);
  //     }
  //   }
  //   setMarkets()
  // }, [token, data.selectedMarkets])

  // useEffect(() => {
  //   if (!emailPassed) {
  //     return;
  //   }
  //   document.getElementById("question8").classList.remove("hidden");
  //   router.push("#question8");
  // }, [emailPassed])

  return (
    <div className="txt-base">
      {/* <div className="snap-mandatory snap-y"> */}


      <div className="snap-mandatory snap-y">

        {/* income */}
        <div id="income" className="snap-start">
          <Income setData={setData} data={data} height={height} />
        </div>

        {/* health insurance */}
        <div id="health" className="snap-start">
          <HealthInsurance setData={setData} data={data} height={height} />
        </div>

        {/* SEX */}
        <div className="snap-start ">
          <Sex setData={setData} data={data} height={height} />
        </div>

        {/* AGE RANGE */}
        <div id="question2" className="snap-start relative hidden">
          <AgeGroup setData={setData} data={data} setIsChild={setIsChild} height={height} />
        </div>

        {/* HEIGHT */}
        <div id="question3" className="snap-start hidden">
          <Height setData={setData} isChild={isChild} data={data} height={height} />
        </div>

        {/* ETHINICITY */}
        <div id="question4" className="snap-start hidden">
          <Ethnicity setData={setData} isChild={isChild} data={data} height={height} />
        </div>

        {/* LOCATION / ZIP */}
        <div id="question5" className="snap-start hidden">
          <Address setData={setData} isChild={isChild} data={data} height={height} />
        </div>

        {/* FIRST NAME */}
        <div id="question6" className="snap-start hidden">
          <Fname setData={setData} isChild={isChild} data={data} height={height} />
        </div>
        {/* GUARDIAN INFO */}
        <div id="guard-fname" className="snap-start hidden">
          <GuardFname setData={setData} isChild={isChild} height={height} />
        </div>
        <div id="guard-lname" className="snap-start hidden">
          <GuardLname setData={setData} isChild={isChild} height={height} />
        </div>
        {/* EMAIL */}
        <div id="question7" className="snap-start hidden">
          <Email setData={setData} isChild={isChild} setProcessLogin={setProcessLogin} height={height} />
        </div>

        {/* PHONE */}
        <div id="question8" className="snap-start hidden">
          <Phone setData={setData} isChild={isChild} height={height} />
        </div>

        {/* EYE COLOR */}
        <div id="question9" className="snap-start hidden">
          <EyeColor setData={setData} data={data} height={height} />
        </div>

        {/* HAIR COLOR */}
        <div id="hair-color" className="snap-start hidden">
          <HairColor setData={setData} data={data} height={height} />
        </div>

        {/* BIRTH DATE */}
        <div id="dob" className="snap-start hidden">
          <Dob setData={setData} isChild={isChild} height={height} />
        </div>

        {/* LAST NAME */}
        <div id="question10" className="snap-start hidden">
          <Lname setData={setData} isChild={isChild} height={height} />
        </div>

        {/* USERNAME INFO */}
        <div id="username" className="snap-start hidden">
          <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: height }}>
            <h2 className="text-4xl font-semibold mb-5">Your username is <span className="font-bold">{profile.talentlogin}</span></h2>
            {/* <div className="bg-primary text-white font-semibold text-2xl rounded-lg p-5">{profile.talentlogin}</div> */}
            <Button primary onClick={() => {
              // document?.getElementById("headshot").classList.remove("hidden");
              router.push("#headshot");
            }}>
              Continue
            </Button>
          </div>
        </div>


        {/* HEADSHOT */}
        <div id="headshot" className="snap-start hidden">
          <Photo
            setData={setData}
            data={data}
            isChild={isChild}
            height={height}
          />
        </div>

        {/* EMPLOYED? */}
        <div id="employed" className="snap-start hidden">
          <ConsentOne setData={setData} data={data} height={height} />
        </div>

        {/* income */}
        <div id="income" className="snap-start hidden">
          <Income setData={setData} data={data} height={height} />
        </div>

        {/* health insurance */}
        <div id="health" className="snap-start hidden">
          <HealthInsurance setData={setData} data={data} height={height} />
        </div>

        {/* AFFORD TRAVELING */}
        <div id="travel" className="snap-start hidden">
          <ConsentTwo setData={setData} data={data} height={height} />
        </div>

        {/* HOW SERIOUS ABOUT CAREER */}
        <div id="serious" className="snap-start hidden">
          <ConsentThree setData={setData} data={data} height={height} />
        </div>

        {/* PASSWORD */}
        <div id="question11" className="snap-start hidden">
          <Password
            setData={setData}
            onFinish={() => { }}
            // onFinish={onFinish}
            data={data}
            height={height}
          />
        </div>

        {/* INTERESTS */}
        <div id="question12" className="snap-start hidden pb-10 sm:pb-0">
          <Interest
            setData={setData}
            loading={loading2}
            // onUpdate={updateProfile}
            onUpdate={() => { }}
            data={data}
            height={height}
          />
          {/* <Interests
            setData={setData} isChild={isChild}
            onFinish={updateProfile}
            data={data}
          /> */}
        </div>
      </div>
    </div>
  );
}

export const formatLoginResponse = (user, creds) => {
  return {
    user: user,
    creds: {
      expire: creds?.expires_in || 0,
      token: creds?.access_token || "",
      refreshToken: creds?.refresh_token || "",
    },
  };
};
