import { get, post } from "network";

export const getCommunityBuzzApi = () => {
  return get({
    route: `/v2/trollbox`,

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const postCommunityBuzzApi = ({ token, message }: { token: string; message: string }) => {
  return post({
    route: "/v2/trollbox",
    data: JSON.stringify({
      message: message,
      type: "1",
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
