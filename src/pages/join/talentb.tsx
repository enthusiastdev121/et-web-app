import { useState, useEffect } from "react";
import { loginApi, signupApi } from "network/apis/auth";
import { useAuth } from "context/AuthContext";
import { apiParams } from "@/utils/apiHelper";
import { generateRandomString, makePassword } from "@/utils/helper";
import { useConfig } from "context/RootContext";
import { API_VERSION } from "utils/constants";
import Sex from "components/account/FindWork";
import AgeGroup from "components/account/FindWork/AgeGroup";
import Height from "components/account/FindWork/Height";
import Ethnicity from "components/account/FindWork/Ethnicity";
import Address from "components/account/FindWork/Address";
import Fname from "components/account/FindWork/Fname";
import GuardFname from "components/account/FindWork/GuardFname";
import GuardLname from "components/account/FindWork/GuardLname";
import Email from "components/account/FindWork/Email";
import Phone from "components/account/FindWork/Phone";
import Lname from "components/account/FindWork/Lname";
import Password from "components/account/FindWork/Password";
import Interests from "components/account/FindWork/Interests";
import { useProfileStore } from "context/ProfileStore";
import { setSelectedMarketsApi, updateGuardianProfileDetailApi, updatePhysicalAttrsApi, updateProfileDetailApi, updateProfileInfoApi, updateTalentInterestApi } from "network/apis/ownProfile";
import { DatabaseIcon } from "@heroicons/react/solid";
import Router, { useRouter } from 'next/router'
import Link from "next/link";
import Button from "components/Button";
import Photo from "components/account/FindWork/Photo";
import EyeColor from "components/account/FindWork/EyeColor";
import HairColor from "components/account/FindWork/HairColor";
import ConsentOne from "components/account/FindWork/ConsentOne";
import ConsentTwo from "components/account/FindWork/ConsentTwo";
import ConsentThree from "components/account/FindWork/ConsentThree";
import Interest from "components/account/FindWork/Interest";
import toast from 'react-hot-toast'
import { IoMdReturnRight } from "react-icons/io";
import { setTalentGeneralDetails } from "network/apis";
import useWindowDimensions from "components/Layout/useWindowDimensions";
import { X_ORIGIN } from "@/utils/envProviders";
import HealthInsurance from "components/account/FindWork/HealthInsurance";
import Income from "components/account/FindWork/Income";
import DobOne from "components/account/FindWork/Dob/DobOne";
import DobTwo from "components/account/FindWork/Dob/DobTwo";
import GuardianInfo from "components/account/FindWork/GuardianInfo";
import ParentInfo from "components/account/FindWork/ParentInfo";
import TranslatedText from "components/TranslatedText";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


export default function FindWorkPage() {
    const config = useConfig();
    const router = useRouter();
    const { kw } = router.query;
    console.log("kw: ", kw)
    // const [data, setData] = useState({
    //     email: "", password: "", fName: "", lName: "", code: "", phone: "", cell: "",
    //     zip: "", address: "", country: "", state: "", city: "", lat: "", lon: "",
    //     countryCode: "", dob: { year: "", date: "", month: "" }, ageRange: "", height: { inches: "" }, eye_color: "",
    //     hair_color: "", sex: "", ethnicity: "", gfname: '', glname: "",
    //     consentOne: "", consentTwo: "", consentThree: "", interest: []
    // });
    const [data, setData] = useState({
        email: "", password: ""
    });
    const [loading, setLoading] = useState(false);
    const [processLogin, setProcessLogin] = useState(false);
    const { token, user, onLoginSuccess, logout, setPasswordOpen } = useAuth();
    const { setProfile, profile, replaceInterest } = useProfileStore();
    const [loading2, setLoading2] = useState(false);
    const password = makePassword(4);
    const [isChild, setIsChild] = useState(false);
    const [caller, setCaller] = useState(false);
    const [reCall, setReCall] = useState(false);
    const [emailPassed, setEmailPassed] = useState(false);
    const [height, setHeight] = useState();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [activeCall, setActiveCall] = useState(0)
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { query } = useRouter()



    useEffect(() => {
        const { innerHeight: height } =
            typeof window !== "undefined" && window;

        setHeight(height)
    }, [])

    console.log("height: ", height);

    useEffect(() => {
        if (data.email && processLogin) {
            onEmail();
        }
    }, [data.email, processLogin, reCall]);
    // }, [data.email, processLogin]);

    useEffect(() => {
        console.log("data:", data);
    }, [data]);

    const onEmail = async () => {
        if (!executeRecaptcha) {
            return;
        }

        try {
            setProcessLogin(false)

            console.log("I am running now!!")

            const raw = {
                talentlogin: data.fName.toLowerCase().trim() + generateRandomString(5),
                // talentlogin: "testmail5 HsWu0d",
                email1: data.email.toLowerCase(),
                talentpass: password,
                x_origin: X_ORIGIN,
                user_type: "bam_talentci",
                crm: query?.gclid || '',
                utm_source: query?.utm_source || '',
                utm_medium: query?.utm_medium || '',
                utm_campaign: query?.utm_campaign || '',
                utm_content: query?.utm_content || '',
                utm_keyword: query?.utm_keyword || '',
                utm_matchtype: query?.utm_matchtype || '',
                campaign_id: query?.campaign_id || '',
                ad_group_id: query?.ad_group_id || '',
                ad_id: query?.ad_id || '',
                gad_source: query?.gad_source || '',
            };
            setLoading(true);
            const res = await signupApi(JSON.stringify(apiParams({ raw })));
            setEmailPassed(true);
            console.log("OO", res);

            if (res.talentlogin) {
                const gRecaptchaToken = await executeRecaptcha('loginFormSignup');
                const raw2 = {
                    grant_type: "password",
                    user_type: config.userType,
                    client_id: config.clientId,
                    client_secret: config.clientSecret,
                    username: data.email.toLowerCase(),
                    password: password,
                    gRecaptchaToken: gRecaptchaToken
                };

                const res1 = await loginApi(JSON.stringify(raw2));
                console.log("RES1; ->", res1);
                if (res1.access_token) {
                    const response = formatLoginResponse(res, res1);


                    onLoginSuccess({
                        creds: response.creds,
                        user: response.user,
                        redirect: false,
                        type: 'talent'
                    });
                    updateProfile(false, response.creds.token, res1.bam_talentci?.talentnum);
                    setBtnDisabled(true)
                }
                setLoading(false)

            }
        } catch (err) {
            console.log("ERR", err);
            if (err?.errors?.talentlogin) {
                setProcessLogin(true)
                setReCall(!reCall)
            } else if (err?.errors?.email1) {
                toast.error("Email is not unique")
            }
            setLoading(false);
        }
    };

    const updateProfileStatus = async (st: any) => {
        try {
            const infoRes2 = await updateProfileDetailApi({
                token: token,
                talentnum: user?.talentnum || profile?.talentnum?.toString(),
                raw: {
                    join_status: st,

                },
            });
        }
        catch (err) {
            console.log("Err", err)
        }
    }

    const updateProfile = async (redirect = true, lToken = '', lTalentnum = '') => {
        console.log("DATA", data);
        try {
            setLoading2(true);

            let dat = data.code ? data.code === "1" ? {
                cell: data.phone
            } : {
                cell: data.code + " " + data.phone
            } : '';

            // ----------------------------------------------------
            // 1. lannme, fname, phone, zip, country, state, city, password
            // ----------------------------------------------------
            if (activeCall === 0 || activeCall === 1) {
                const infoRes = await updateProfileDetailApi({
                    token: lToken || token,
                    talentnum: lTalentnum || profile?.talentnum?.toString(),
                    raw: {
                        fname: data.fName,
                        lname: data.lName,
                        cell: dat.cell,
                        dphone: dat.cell,
                        ...(data?.phone?.length > 0 ? { sms_ok: 1 } : {}),
                        // dobyyyy: data.dob?.year,
                        // dobmm: data.dob?.month,
                        // dobdd: data.dob?.date,
                        zip: data.zip,
                        address1: data.address,
                        country: data.country,
                        state: data.state,
                        city: data.city,
                        lat: data.lat,
                        lon: data.lon,
                        // ...(data.country === "United States" ? {} : { lat: data.lat }),
                        // ...(data.country === "United States" ? {} : { lon: data.lon }),
                        ...(data.password ? { talentpass: data.password } : {}),
                        ...(dat.cell ? { cell: dat.cell } : {}),
                        join_status: data.dob?.year ? 3 : dat.cell ? 2 : 1,

                    },
                });
                console.log("INFO RES", infoRes);
                setProfile((s) => ({
                    ...s,
                    fname: data.fName,
                    lname: data.lName,
                    name: data.fName + " " + data.lName,
                    phone: dat.cell || "",
                    zip: data.zip,
                    country: data.countryCode,
                    dob: {
                        day: Number(data.dob?.date),
                        month: Number(data.dob?.month) + 1,
                        year: Number(data.dob?.year)
                    }
                }));
            }

            // ----------------------------------------------------
            // 2. sex, ageRange, height, eyecolor, haircolor, dob
            // ----------------------------------------------------
            if (activeCall === 0 || activeCall === 2) {
                let kkk = {
                    sex: data.sex || "",
                    age_range: data.ageRange || "",
                    // heightfeet: data.height?.feet,
                    heightinches: data.height?.inches,
                    eyecolor: data.eye_color,
                    haircolor: data.hair_color,
                    dobyyyy: data.dob?.year,
                    dobmm: data.dob?.month,
                    dobdd: data.dob?.date,
                };

                if (data.dob?.year) {
                    const infoRes2 = await updateProfileDetailApi({
                        token: lToken || token,
                        talentnum: lTalentnum || profile?.talentnum?.toString(),
                        raw: {
                            join_status: data.dob?.year && dat.cell ? 3 : dat.cell ? 2 : 1,

                        },
                    });
                }

                const res = await updatePhysicalAttrsApi(
                    lToken || token,
                    JSON.stringify({ ...kkk })
                );
                if (typeof res === "object") {
                    setProfile((s) => ({
                        ...s,
                        ...{ ...kkk },
                    }));
                }
            }

            // ----------------------------------------------------
            // 3. ethnicity
            // ----------------------------------------------------
            if (activeCall === 0 || activeCall === 3) {
                const ethnicityRes = await updateProfileInfoApi({
                    token: lToken || token,
                    raw: {
                        ethnicity: data.ethnicity || "",
                    }
                })
            }

            // ----------------------------------------------------
            // 4. Guardian Details
            // ----------------------------------------------------
            if (activeCall === 0 || activeCall === 4) {
                // if (isChild) {
                const guardianRes = await updateGuardianProfileDetailApi({
                    token: lToken || token,
                    raw: {
                        gzip: data.zip,
                        gaddress1: data.address,
                        gcountry: data.countryCode,
                        gstate: data.state,
                        gcity: data.city,
                        gphone1: data.gphone || dat.cell,
                        gfname: data.gfname,
                        glname: data.glname,
                        gemail: data.gemail || data.email,
                    },
                });
                console.log("GUARDIAN RES", guardianRes);

                console.log("LOGOUT-------------------------")

                // logout();
                // }
            }

            // ----------------------------------------------------
            // 5. general talent details (consent1,2,3)
            // ----------------------------------------------------
            if (activeCall === 5) {
                const genralDetails = await setTalentGeneralDetails({
                    token: lToken || token,
                    raw: {
                        working: data.consentOne,
                        willing_to_travel: data.consentTwo,
                        serious: data.consentThree,
                        health_insurance: data.healthInsurance,
                        annual_income: data.income
                    }
                });
                if (!redirect) {
                    setLoading2(false);
                    return;
                }
            }

            // ----------------------------------------------------
            // 6. Interests
            // ----------------------------------------------------
            if (activeCall === 6) {
                const interestRes = await updateTalentInterestApi(
                    token,
                    JSON.stringify(
                        apiParams({
                            type: "",
                            raw: {
                                interests: data.interest
                                    ?.filter((i) => i.selected)
                                    ?.map((i) => ({
                                        category_id: i.id,
                                        subcategory_id: i.sub
                                            ?.filter((i3) => i3.selected)
                                            ?.map((i2) => i2.id),
                                    })),
                            },
                        })
                    )
                );
                replaceInterest(data.interest?.filter((i: any) => i.selected))
                // router.replace('/upgrade-to-pro?new=true')

                // if (isChild) {
                //     logout();
                // }
                // Router.push({
                //     // pathname: isChild ? '/login/coppa' : '/profile/edit',
                //     pathname: isChild ? '/login/coppa' : '/upgrade-to-pro',
                //     // query: isChild ? '' : { keyword: 'app-tour' },
                // })
            }

            setLoading2(false);
        } catch (err) {
            console.log("ERR", err);
            setLoading2(false);
        }
    };

    useEffect(() => {
        if (!token) {
            return;
        }

        updateProfile(false)
    }, [data])


    // SET MARKETS
    useEffect(() => {
        if (!token) {
            return;
        }

        const setMarkets = async () => {
            try {
                const res2 = await setSelectedMarketsApi({
                    token,
                    raw: {
                        market1: data?.selectedMarkets[0]?.market_id,
                        city1: data?.selectedMarkets[0]?.market || '',
                        market1p: data?.selectedMarkets[0]?.parent_id === null ? null : data?.selectedMarkets[0]?.parent[0].parent_id === null ? data?.selectedMarkets[0]?.parent_id : data?.selectedMarkets[0]?.parent_id + "," + data?.selectedMarkets[0]?.parent[0]?.parent_id,
                        market2: data?.selectedMarkets[1]?.market_id,
                        city2: data?.selectedMarkets[1]?.market || '',
                        market2p: data?.selectedMarkets[1]?.parent_id === null ? null : data?.selectedMarkets[1]?.parent[0].parent_id === null ? data?.selectedMarkets[1]?.parent_id : data?.selectedMarkets[1]?.parent_id + "," + data?.selectedMarkets[1]?.parent[0]?.parent_id,
                        market3: data?.selectedMarkets[2]?.market_id,
                        city3: data?.selectedMarkets[2]?.market || '',
                        market3p: data?.selectedMarkets[2]?.parent_id === null ? null : data?.selectedMarkets[2]?.parent[0].parent_id === null ? data?.selectedMarkets[2]?.parent_id : data?.selectedMarkets[2]?.parent_id + "," + data?.selectedMarkets[2]?.parent[0]?.parent_id,
                    }
                })
            } catch (err) {
                console.log("ERR", err);
            }
        }
        setMarkets()
    }, [token, data.selectedMarkets])

    useEffect(() => {
        if (!emailPassed) {
            return;
        }
        if (isChild) {
            document.getElementById("guardianCell").classList.remove("hidden");
            router.push("#guardianCell");
        } else {
            document.getElementById("cell").classList.remove("hidden");
            router.push("#cell");
        }
    }, [emailPassed])

    return (

        <div className="txt-base">
            <div className="snap-mandatory snap-y">

                {/* SEX */}
                <div className="snap-start">
                    <Sex setData={setData} data={data} height={height} text={kw} />
                </div>

                {/* AGE RANGE */}
                <div id="ageRange" className="snap-start relative hidden">

                    <AgeGroup setData={setData} data={data} setIsChild={setIsChild} height={height} />
                </div>

                {/* HEIGHT */}
                <div id="height" className="snap-start hidden">
                    <Height setData={setData} isChild={isChild} data={data} height={height} />
                </div>

                {/* ETHINICITY */}
                <div id="ethnicity" className="snap-start hidden">
                    <Ethnicity setData={setData} isChild={isChild} data={data} height={height} />
                </div>

                {/* LOCATION / ZIP */}
                <div id="address" className="snap-start hidden">
                    <Address setData={setData} isChild={isChild} data={data} height={height} />
                </div>

                {/* FIRST NAME */}
                <div id="fname" className="snap-start hidden">
                    <Fname setData={setData} isChild={isChild} data={data} height={height} />
                </div>

                {/* <div id="guard-fname" className="snap-start hidden">
                    <GuardFname setData={setData} isChild={isChild} height={height} />
                </div>
                <div id="guard-lname" className="snap-start hidden">
                    <GuardLname setData={setData} isChild={isChild} height={height} />
                </div> */}

                {/* EMAIL */}
                <div id="email" className="snap-start hidden">
                    <Email setData={setData} isChild={isChild}
                        setProcessLogin={setProcessLogin} height={height} mailLoading={loading}
                        btnDisabled={btnDisabled} />
                </div>

                {/* PHONE */}
                <div id="cell" className="snap-start hidden">
                    <Phone setData={setData} isChild={isChild} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* EYE COLOR */}
                <div id="eyeColor" className="snap-start hidden">
                    <EyeColor setData={setData} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* HAIR COLOR */}
                <div id="hairColor" className="snap-start hidden">
                    <HairColor setData={setData} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* BIRTH DATE */}
                <div id="dobOne" className="snap-start hidden">
                    <DobOne setData={setData} isChild={isChild} height={height} setActiveCall={setActiveCall} />
                </div>
                <div id="dobTwo" className="snap-start hidden">
                    <DobTwo data={data} setData={setData} isChild={isChild} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* KID FLOW: ADDRESS */}
                <div id="guardianAddress" className="snap-start hidden">
                    <Address setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* Parent Information */}
                <div id="parentInfo" className="snap-start hidden">
                    <ParentInfo height={height} setData={setData} isChild={isChild} setActiveCall={setActiveCall}
                        setProcessLogin={setProcessLogin} mailLoading={loading} btnDisabled={btnDisabled}
                    />
                </div>

                {/* KID FLOW: PHONE */}
                <div id="guardianCell" className="snap-start hidden">
                    <Phone setData={setData} isChild={isChild} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* KID FLOW: EYE COLOR */}
                <div id="kidEeyeColor" className="snap-start hidden">
                    <EyeColor setData={setData} data={data} height={height} isChild={isChild} setActiveCall={setActiveCall} />
                </div>

                {/* KID FLOW: HAIR COLOR */}
                <div id="kidHairColor" className="snap-start hidden">
                    <HairColor setData={setData} data={data} isChild={isChild} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* LAST NAME */}
                <div id="lastName" className="snap-start hidden lname">
                    <Lname setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* Guardian Information */}
                <div id="guardianInfo" className="snap-start hidden">
                    <GuardianInfo height={height} setData={setData} setActiveCall={setActiveCall} />
                </div>

                {/* USERNAME INFO */}
                <div id="username" className="snap-start hidden">
                    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: height }}>
                        <h2 className="text-4xl font-semibold mb-5">Your username is <span className="font-bold">{profile.talentlogin}</span></h2>
                        {/* <div className="bg-primary text-white font-semibold text-2xl rounded-lg p-5">{profile.talentLogin}</div> */}
                        <Button primary onClick={() => {
                            document?.getElementById("headshot").classList.remove("hidden");
                            router.push("#headshot");
                            // updateProfileStatus(4);
                        }}>
                            <TranslatedText>Continue</TranslatedText>
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
                        joinStatusUpdate={() => updateProfileStatus(4)}
                    />
                </div>

                {/* INTERESTS */}
                <div id="interest" className="snap-start hidden pb-10 sm:pb-0">
                    <Interest
                        setData={setData}
                        loading={loading2}
                        onUpdate={updateProfile}
                        data={data}
                        height={height}
                        setActiveCall={setActiveCall}
                    />
                    {/* <Interests
                        setData={setData} isChild={isChild}
                        onEmail={updateProfile}
                        data={data}
                        /> */}
                </div>

                {/* PASSWORD */}
                <div id="password" className="snap-start hidden">
                    <Password
                        setData={setData}
                        onFinish={onEmail}
                        data={data}
                        height={height}
                        setActiveCall={setActiveCall}
                    />
                </div>

                {/* EMPLOYED? */}
                <div id="employed" className="snap-start hidden">
                    <ConsentOne setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* income */}
                <div id="income" className="snap-start hidden">
                    <Income setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* health insurance */}
                <div id="health" className="snap-start hidden">
                    <HealthInsurance setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* AFFORD TRAVELING */}
                <div id="travel" className="snap-start hidden">
                    <ConsentTwo setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
                </div>

                {/* HOW SERIOUS ABOUT CAREER */}
                <div id="serious" className="snap-start hidden">
                    <ConsentThree setData={setData} isChild={isChild} data={data} height={height} setActiveCall={setActiveCall} />
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
