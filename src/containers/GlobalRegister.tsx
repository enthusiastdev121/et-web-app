import React, { useEffect, useState } from 'react'
//ATATUS
import * as atatus from 'atatus-spa';
//ATATUS

//Onesignal
import OneSignal from 'react-onesignal';
import { ONESIGNAL_APP_ID } from '@/utils/constants/config';
import { useProfileStore } from 'context/ProfileStore';
import { useAuth } from 'context/AuthContext';
import { thriveHmacApi } from 'network/apis/app';


export default function GlobalRegister() {

    const [oneSignInit, setOneSignInit] = useState(false);
    const { profile } = useProfileStore();
    const { token } = useAuth();



    useEffect(() => {



        if (profile.talentnum) {

            // Gender, age range, join status, PRO, VIP , Featured, CXL, refund , sign up date 





            if (typeof window !== 'undefined' && window?.$zoho) {
                window?.$zoho.salesiq.visitor?.name(`${profile.fname} ${profile.lname}`);
                window?.$zoho.salesiq.visitor?.email(profile.email);
                // window?.$zoho.salesiq.visitor.id(profile.id);
                window?.$zoho.salesiq.visitor?.uniqueuserid(profile.talentnum);
                window?.$zoho.salesiq.visitor?.contactnumber(profile.phone);
                window?.$zoho.salesiq.visitor?.info({
                    gender: profile.gender,
                    ageRange: profile.ageRangeText,
                    joinStatus: profile.joinStatus,
                    pro: profile.pro || 'false',
                    featured: profile.featured || 'false',
                    vip: profile.vip || 'false',
                    signupDate: profile.createdAt,
                    talentnum: profile.talentnum,
                    profileUrl: `https://www.exploretalent.com/${profile.talentlogin}`,
                    profilePic: profile.pic,
                    webform: ` https://dev.trm.exploretalent.com/talents/${profile.talentnum}`,
                    talentInterest: profile.interest?.length > 0 ? profile.interest.map(i => i.label).join() : "",
                });



                console.log("ZOHO STORED")
            }
        }



    }, [profile])



    useEffect(() => {

        try {
            //ATATUS
            if (atatus && atatus.config) {
                atatus.config('c531350b8cf34df8aa105d4080bbe47d').install();



                atatus.onBeforeErrorSend((err: any) => {

                    console.log("ATATUS BEFORE ERROR MESSAGE", err?.message);

                    if (err?.message.indexOf("OneSignal: This web push") !== -1 || err?.message.indexOf("Invariant: attempted to hard navigate to the same") !== -1 || err?.message.indexOf("The operation is insecure") !== -1 || err?.message.indexOf("Loading chunk 1766 failed") !== -1) {
                        return false
                    }






                    return true


                })


            }





        }
        catch (err) {
            console.log("Atatus Err", err)
        }
    }, [profile])

    useEffect(() => {
        //ONESIGNAL

        const call = async () => {
            try {
                if (!oneSignInit) {
                    const oneRes = await OneSignal.init({ appId: ONESIGNAL_APP_ID });
                    OneSignal.showSlidedownPrompt().then(() => {
                        // do other stuff
                    });
                    setOneSignInit(true);
                }
            }
            catch (err) {
                console.log("EE", err)
            }
        }
        if (!oneSignInit) {
            call();
        }

    }, [oneSignInit])



    useEffect(() => {

        const call = async () => {

            if (oneSignInit && profile.talentnum) {

                try {

                    OneSignal.setExternalUserId(profile.talentnum.toString())

                    if (profile.email) {
                        OneSignal.setEmail(profile.email);
                    }
                    if (profile.phone) {
                        OneSignal.setSMSNumber(profile.phone ? (profile.phone?.includes(" ") ? `+${profile.phone.replace(/\D/g, "")}` : `+1${profile.phone.replace(/\D/g, "")}`) : "N/A");
                    }

                    if (profile.fname) {
                        OneSignal.sendTag('fname', profile.fname);
                    }
                    if (profile.lname) {
                        OneSignal.sendTag('lname', profile.lname);
                    }
                    if (profile.gender) {
                        OneSignal.sendTag('gender', profile.gender);
                    }
                    if (profile.dob?.year) {
                        OneSignal.sendTag(
                            'age',
                            (
                                new Date().getFullYear() - profile.dob?.year
                            ).toString(),
                        );
                    }
                    if (profile.ethnicity) {
                        OneSignal.sendTag('ethnicity', profile.ethnicity);
                    }
                    if (profile.city) {
                        OneSignal.sendTag('city', profile.city);
                    }
                    if (profile.state) {
                        OneSignal.sendTag('state', profile.state);
                    }
                    if (profile.zip) {
                        OneSignal.sendTag('zip', profile.zip.toString());
                    }
                    if (profile.joinStatus) {
                        OneSignal.sendTag('joinstatus', profile.joinStatus.toString());
                    }
                    OneSignal.sendTag('hasprofilepic', profile.pic ? 'yes' : 'no');

                }

                catch (err) {
                    console.log("ERR", err)
                }

            }

        }
        call();
    }, [oneSignInit, profile])



    useEffect(() => {

        function getSubdomainFromUrl(url: any) {
            const start = url.indexOf("://") + 3;
            const end = url.indexOf(".exploretalent");
            if (start === -1 || end === -1 || start >= end) {
                return "";
            }
            const str = url.substring(start, end);

            if (str === 'www') {
                return null;
            } else {
                return str;
            }

        }

        if (typeof window !== 'undefined') {
            const sub = getSubdomainFromUrl(window.location.href);

            if (sub) {

                const newUrl = "https://www.exploretalent.com/" + sub
                window.open(newUrl);
            }
        }

    }, [])

    /**
     * ZOHO THRIVE
     */

    useEffect(() => {
        if (profile.talentnum) {
            // console.log("ZTE", ztUserData);
            // ztUserData['za_email_id'] = 'peter.prescott@zylker.com';
            // ztUserData['user_unique_id'] = '98765432';
            // ztUserData['thrive_digest'] = 'akjbda923kjb32jhbbd7asda';
            // ztUserData['signUpPage'] = 'https://zylker.com/signup';
            // ztUserData['signInPage'] = 'https://zylker.com/signin';
            const thriveHmac = async () => {

                try {
                    const res = await thriveHmacApi({
                        token,
                    });
                    ztUserData["za_email_id"] = profile.email;
                    ztUserData["user_unique_id"] = profile.talentnum;
                    ztUserData["thrive_digest"] = res.hmac;
                    ztUserData["signUpPage"] = "https://www.exploretalent.com/join/talentb";
                    ztUserData["signInPage"] = "https://www.exploretalent.com/account/login";

                    // console.log(ztUserData, "ztUserData");
                } catch (err) {
                    console.log(err, "ERR");
                }
            };
            thriveHmac();
        }
        return () => { };
    }, [profile]);


    return <></>
}
