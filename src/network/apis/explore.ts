import { get, post } from "network";

export const getExploreFeedApi = ({
  token,
  perPage,
  page,
}: {
  token?: string;
  perPage: number;
  page: number;
}) => {
  return get({
    route: `/v2/talent/activityfeed_notifications?q=[["with","bam_talentci"],["with","notifications"]]&per_page=${perPage}&page=${page}`,
    config: {
      headers: {
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
    },
  });
};

export const getExploreArticlesApi = ({
  perPage,
  page,
}: {
  // token: string;
  perPage: number;
  page: number;
}) => {
  return fetch(
    `https://articles.exploretalent.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`,
    {
      method: "GET", // or 'PUT'
    }
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const feedLikeChangeApi = ({
  token,
  talentnum,
}: {
  token: string;
  talentnum: number;
}) => {
  return post({
    route: `/v2/talent/fans`,
    data: JSON.stringify({
      talentnum2: talentnum,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
