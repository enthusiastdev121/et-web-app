import { get } from "network";

export const getHomePageStatsApi = () => {
  return get({
    route: "/v2/talent/stats",

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const getFeaturedCastingApi = () => {
  return get({
    route: "/v2/talent/get_featured_castings",

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const getHomeAllCastingApi = ({filterData}) => {
  return get({
    route: `/v2/talent/get_home_page_castings?casting_categories=${filterData}`,

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};
