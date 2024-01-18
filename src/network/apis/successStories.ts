import { get } from "network";

export const getSuccessStoriesApi = (page: number, perPage: number) => {
  return get({
    // route: `/v2/testimonials`,
    route: `/v2/testimonials?page=${page}&per_page=${perPage}`,

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};
