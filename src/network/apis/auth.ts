import { API_VERSION } from "@/utils/constants";
import { post, get } from "network";

export const socialLoginApi = (data: any) => {
  return post({
    route: "/v2/talent/social_login",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};
export const signupApi = (data: any) => {
  return post({
    route: "/v2/talent/talentci",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};
export const fetchZipApi = ({ zip }: { zip: number }) => {
  return get({
    route: "/v1/zips/" + zip,
    config: {
      headers: { "Content-Type": "application/json" },
    },
  });
};
export const loginApi = (data: any) => {
  return post({
    route: "/v2/oauth/access_token",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};
export const forgetPassApi = ({ email1 }: { email1: string }) => {
  return post({
    route: "/v2/forgot_password",
    data: JSON.stringify({
      email1,
      x_origin: API_VERSION,
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};
