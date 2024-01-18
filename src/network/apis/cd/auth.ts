import { get, post } from "network";

export const signupApi = (raw: {
  email1: any;
  pass: any;
  phone1: any;
  fname: any;
  lname: any;
  company: any;
  website: any;
}) => {
  console.log("data", JSON.stringify(raw));
  return post({
    route: "/v2/cd/cd_users",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
      },
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
