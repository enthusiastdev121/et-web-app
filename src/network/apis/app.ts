import { post, get, patch } from "network";

export const getProfileCategoryPlaceholderApi = (data: any) => {
  return post({
    route: "/v1/placeholder/data/category",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const getProfilePlaceholderApi = () => {
  return get({
    route: "/v1/data/profile",

    config: {
      headers: {},
    },
  });
};

export const getProfileDetailApi = (q: any, token: any) => {
  return get({
    route: "/v2/users/me?q=" + q,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};


export const getLoginLinkCredsApi = ({
  token,
  is_agent = null,
}: {
  token: string;
  is_agent?: any;
}) => {
  return post({
    route: "/v2/short_urls",
    data: JSON.stringify({
      token,
      is_agent,
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const thriveHmacApi = ({ token }: { token: string }) => {
  return get({
    route: "/v2/talent/thrive_hmac",
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};