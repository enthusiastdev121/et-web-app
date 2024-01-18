import { API_VERSION } from "@/utils/constants/index";
import { socialLoginApi } from "network/apis/auth";
import { formatUserData } from "network/dataFormatter/auth";
import { UserProfileD } from "types/profile";
import { Creds } from "types/auth";
import {
  appleLogin,
  facebookLogin,
  googleLogin,
} from "network/services/firebase";
import { X_ORIGIN } from "@/utils/envProviders";

export const ownLogin = async (data: any) => {
  return await socialLoginApi(JSON.stringify(data));
};

//SOCIAL
export const socialLogin = async ({
  type,
}: {
  type: "google" | "apple" | "facebook";
}) => {
  return new Promise<LoginReturn>(async (resolve, reject) => {
    try {
      switch (type) {
        case "google":
          try {
            const res = await googleLogin();

            const ownRes = await ownLogin(
              prepareSocialLoginData({ type: "google", raw: res })
            );
            console.log("res: ", res, " ownRes: ", ownRes);
            if (ownRes?.original?.errors?.auth === "COPPA") {
              throw "failed!";
            }
            resolve(
              formatSocialLoginResponse({
                ...ownRes,
                talentci: { ...ownRes.talentci, email: res.user.email },
                // isNew: true,
                isNew: ownRes.talentci.is_new,
              })
            );
          } catch (err) {
            console.log("ERR", err);
            reject(err);
          }
          break;

        case "facebook":
          try {
            const res = await facebookLogin();

            console.log("FACEBOOK RES", res);

            const loginData = prepareSocialLoginData({
              type: "facebook",
              raw: res,
            });

            try {
              const ownRes = await ownLogin(loginData);
              resolve(
                formatSocialLoginResponse({
                  ...ownRes,
                  isNew: ownRes.talentci.is_new,
                })
              );
            } catch (err) {
              if (err?.errors.code === 422) {
                reject({ type: "emailNotFound", data: loginData });
              }
            }
          } catch (err) {
            console.log("ERR", err);
            reject(err);
          }
          break;

        case "apple":
          try {
            const res = await appleLogin();
            const ownRes = await ownLogin(
              prepareSocialLoginData({ type: "apple", raw: res })
            );
            resolve(
              formatSocialLoginResponse({
                ...ownRes,
                isNew: ownRes.talentci.is_new,
              })
            );
          } catch (err) {
            console.log("ERR", err);
            reject(err);
          }
          break;
        default:
          return {};
      }
    } catch (err) {
      console.log("ERR", err);
      reject(err);
    }
  });
};

//LOGIN
export const loginWithCred = async ({
  email,
  password,
}: {
  email: any;
  password: any;
}) => {};

//SIGNUP
export const signup = async ({
  email,
  password,
  ...other
}: {
  email: any;
  password: any;
}) => {};

const prepareSocialLoginData = ({ type, raw }: { type: any; raw: any }) => {
  return {
    firebase_uid: raw.user?.uid,
    type: type,
    version: API_VERSION,
    // talentlogin: 'ddsdssde432ssssss2',
    // talentpass: '4848',
    x_origin: X_ORIGIN,
    email: raw.user.email,
    // des: 'register from http://auditions.com/register',
    // join_status: '1',
  };
};

// export const formatLoginResponse = (res: any): LoginReturn => {
//   console.log("The RES IS: ", res);
//   return {
//     user: formatUserData(res.talentci),
//     creds: {
//       expire: res?.original?.expires_in || 0,
//       token: res?.original?.access_token || "",
//       refreshToken: res?.original?.refresh_token || "",
//     },
//     isNew: res.isNew,
//   };
// };

export const formatLoginResponse = (data: any) => {
  console.log("S2----,", data);
  return {
    creds: {
      expire: data?.expires_in || 0,
      token: data?.access_token || "",
      refreshToken: data?.refresh_token || "",
    },
    user: {
      uid: data?.bam_talentci?.firebase_uid || data?.talentci?.firebase_uid,
      talentlogin:
        data?.bam_talentci?.talentlogin || data?.talentci?.talentlogin,
      talentnum: data?.bam_talentci?.talentnum || data?.talentci?.talentlogin,
      // uid: data?.talentci?.firebase_uid, 
      // talentlogin: data?.talentci?.talentlogin,
      // talentnum: data?.talentci?.talentnum,
    },
  };
};

export const formatSocialLoginResponse = (data: any) => {
  console.log("S1---- is,", data);
  return {
    creds: {
      expire: data?.original?.expires_in || 0,
      token: data?.original?.access_token || "",
      refreshToken: data?.original?.refresh_token || "",
    },
    user: {
      uid: data?.talentci?.firebase_uid,
      talentlogin: data?.talentci?.talentlogin,
      talentnum: data?.talentci?.talentnum,
    },
  };
};

type LoginReturn = {
  creds: Creds;
  user: UserProfileD;
  isNew: boolean;
};
