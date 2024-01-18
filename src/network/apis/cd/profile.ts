import { get, patch, post } from "network";

export const getCdProfileDetailApi = ({ token }: { token: string }) => {
  return get({
    // route: "/v2/users/cd_me" ,
    route: `/v2/users/cd_me?q=[["with","bam_cd_user"],["with","user_apps"],["with","user_apps.app"],["with","user_apps.app.app_xorigins"]]`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const updateMyDetailApi = ({
  token,
  userId,
  ...raw
}: {
  role: any;
  country: any;
  company: any;
  website: any;
  organisation: any;
  userId: number;
  token: string;
}) => {
  console.log("InfoData", JSON.stringify(raw));
  console.log("userId", userId);
  return patch({
    // route: "/v2/cd/cd_users/" + userId,
    route: `/v2/cd/cd_users/${userId}`,
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const updateMyIntrestApi = ({
  token,
  ...raw
}: {
  cd_category_interests: [{ category_id: any; subcategory_id: any }];
  token: any;
}) => {
  console.log("TalentApiData", JSON.stringify(raw));
  return post({
    route: "/v2/cd/cd_category_interests",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
