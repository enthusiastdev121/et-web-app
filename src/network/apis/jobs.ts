import { deleteReq, ENDPOINT, get, patch, post } from "network";
import { CLIENT_ID } from "../../utils/constants";
import qs from "qs";
import { apiMiddleware } from "network/apiMiddleware";
import { StringNullableChain } from "lodash";

export const getHomeListingApi = ({
  page,
  perPage,
  categoryId,
}: {
  page: number;
  perPage: number;
  categoryId: number;
}) => {
  return get({
    route: `/v2/search/projects?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]&categories=[${categoryId}]&page=${page}&per_page=${perPage}&client_id=${CLIENT_ID}`,

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const getJobListingApi = ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  return get({
    route: `/v1/talent/projects?page=${page}&per_page=${perPage}client_id=${CLIENT_ID}&q=[["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}],["join","laret_casting_apps","laret_casting_apps.casting_id","=","castings.casting_id"],["whereIn","laret_casting_apps.app_id",[1,4]],["where","castings.status",1],["where","castings.asap",">",1647282600],["groupBy","castings.casting_id"],["orderBy","castings.qlty_level","DESC"],["orderBy","castings.market","ASC"],["orderBy","castings.asap","DESC"]]`,

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const getJobByIdApi = ({
  id,
  token,
}: {
  id: number;
  token?: string;
}) => {
  return get({
    route: `/v2/talent/projects/${id}?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]`,
    config: {
      headers: {
        "content-type": "application/json",
        ...(token && { Authorization: "Bearer " + token }),
      },
    },
  });
};

export const getMatchedJobsApi = ({
  token,
  page,
  perPage,
  projectType,
  rateMin,
  rateMax,
  searchstring,
  orderBy,
}: {
  page: number;
  token: string;
  perPage: number;
  projectType?: 0 | 1 | 2 | 3 | "Any";
  rateMin?: number;
  rateMax?: number;
  searchstring: string;
  orderBy: any;
}) => {
  let extraQs = qs.stringify({});

  if (projectType) {
    extraQs += projectType !== "Any" ? "&project_type=" + projectType : "";
  }
  if (rateMin) {
    extraQs += "&rate_min=" + rateMin;
  }
  if (rateMax) {
    extraQs += "&rate_max=" + rateMax;
  }
  if (searchstring?.length > 0) {
    extraQs += `&searchstring=${searchstring}`;
  }
  if (orderBy?.length > 0) {
    extraQs += `&orderBy=${orderBy}`;
  }

  return get({
    route: `/v2/search/projects?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]&matched=true&page=${page}&per_page=${perPage}&${extraQs}`,

    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getFavJobsApi = ({
  token,
  page,
  perPage,
}: {
  page: number;
  token: string;
  perPage: number;
}) => {
  return get({
    route: `/v2/search/projects?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]&favorite=true&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const searchJobsApi = ({
  token,
  page,
  perPage,
  ageMin,
  ageMax,
  distance,
  gender,
  categories,
  subcategories,
  nationwide,
  lon,
  lat,
  ethnicity,
  searchstring,
  orderBy,
  orderDirection,
  matched,
  projectType,
  rateMin,
  rateMax,
  casting_preferences_categories,
}: {
  page: number;
  perPage: number;
  token?: string;
  ageMin?: number;
  ageMax?: number;
  distance?: number | null;
  gender?: "male" | "female" | "others" | string | null;
  categories?: number[];
  subcategories?: number[];
  nationwide?: boolean;
  lon?: number | null;
  lat?: number | null;
  ethnicity?: string | null;
  searchstring?: string;
  orderBy?: any;
  orderDirection?: "DESC" | "ASC";
  matched?: boolean;
  projectType?: 0 | 1 | 2 | 3 | "Any";
  rateMin?: number;
  rateMax?: number;
  casting_preferences_categories?: any;
}) => {
  let extraQs = qs.stringify(
    {
      age_min: ageMin,
      age_max: ageMax,
      distance,
      lon,
      lat,
      nationwide,
    },
    {
      skipNulls: true,
    }
  );

  if (categories !== undefined && categories?.length > 0) {
    extraQs += `&categories=${JSON.stringify(categories)}`;
  }
  if (
    casting_preferences_categories !== undefined &&
    casting_preferences_categories?.length > 0
  ) {
    extraQs += `&casting_preferences_categories=${JSON.stringify(
      casting_preferences_categories
    )}`;
  }
  if (subcategories !== undefined && subcategories.length > 0) {
    extraQs += `&subcategories=${JSON.stringify(subcategories)}`;
  }
  if (ethnicity) {
    extraQs += `&ethnicity=${ethnicity}`;
  }
  if (gender !== undefined && gender?.length > 0) {
    extraQs += `&gender=${gender}`;
  }
  if (searchstring?.length && searchstring?.length > 0) {
    extraQs += `&searchstring=${searchstring}`;
  }
  if (orderBy?.length > 0) {
    // extraQs += `&orderBy=${orderBy}`;
  }
  if (orderDirection?.length && orderDirection?.length > 0) {
    extraQs += `&orderDirection=${orderDirection}`;
  }
  if (projectType) {
    extraQs += projectType !== "Any" ? "&project_type=" + projectType : "";
  }
  if (rateMin) {
    extraQs += "&rate_min=" + rateMin;
  }
  if (rateMax) {
    extraQs += "&rate_max=" + rateMax;
  }
  if (matched) {
    extraQs += "&matched=true";
  }

  return get({
    route: `/v2/search/projects?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]&type=1&page=${page}&per_page=${perPage}&${extraQs}`,
    config: {
      headers: {
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
    },
  });
};

export const getAllJobsApi = ({
  page,
  perPage,
  token,
}: {
  page: number;
  perPage: number;
  token?: string;
}) => {
  return get({
    route: `/v2/search/projects?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: "Bearer " + token }),
      },
    },
  });
};
export const addFavJobApi = ({ token, raw }: { token: string; raw: any }) => {
  return post({
    route: "/v2/talent/favorite_projects",
    data: JSON.stringify(apiMiddleware({ type: "json", raw })),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

export const removeFavJobApi = ({
  token,
  id,
}: {
  token: string;
  id: number;
}) => {
  return deleteReq({
    route: `/v2/talent/favorite_projects/` + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const uploadSavedJobAssetRoute =
  ENDPOINT + "/v2/talent/job_order_assets";

export const deleteSavedJobAssetApi = ({
  token,
  id,
}: {
  token: string;
  id: number;
}) => {
  return deleteReq({
    route: `/v2/talent/job_order_assets/${id}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
        // 'Content-Type': 'application/json',
      },
    },
  });
};

export const submitRoleApi = ({
  token,
  raw,
}: {
  token: string;
  raw: {
    casting_id: number;
    role_id: number;
    c_type: number;
  };
}) => {
  return post({
    route: "/v2/talent/submissions_self",
    data: JSON.stringify(apiMiddleware({ type: "json", raw })),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

export const saveJobRoleApi = ({
  token,
  raw,
}: {
  token: string;
  raw: object;
}) => {
  return post({
    route: `/v2/talent/job_orders`,
    data: JSON.stringify(apiMiddleware({ type: "json", raw })),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
export const updateJobRoleApi = ({
  token,
  id,
  raw,
}: {
  token: string;
  id: any;
  raw: object;
}) => {
  return patch({
    route: `/v2/talent/job_orders/${id}`,
    data: JSON.stringify(apiMiddleware({ type: "json", raw })),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

export const getSavedJobRoleDetailApi = ({
  token,
  id,
}: {
  token: string;
  id: any;
}) => {
  return get({
    route: `/v2/talent/job_orders/${id}?q=[["with","bam_role.bam_casting.bam_cd_user.user"],["with","bam_job_orders_assets"]]`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

export const getJobCartListingApi = ({
  token,
  perPage,
  page,
}: {
  token: StringNullableChain;
  perPage: number;
  page: number;
}) => {
  return get({
    route: `/v2/talent/job_orders?q=[["with","bam_role.bam_casting.bam_cd_user.user"]]&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const removeJobCartItemApi = ({
  token,
  id,
}: {
  token: string;
  id: number;
}) => {
  return deleteReq({
    route: `/v2/talent/job_orders/` + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getCDInvitesListApi = ({
  token,
  page,
  perPage,
}: {
  page: number;
  token: string;
  perPage: number;
}) => {
  return get({
    route: `/v2/talent/schedules?page=${page}&per_page=${perPage}&q=[["with","bam_role.bam_casting","conversation.messages"],["orderBy","created_at","DESC"],["with","bam_role.campaigns"]]`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getCdInviteDetailApi = ({
  token,
  id,
}: {
  token: string;
  id: any;
}) => {
  return get({
    route: `/v2/talent/schedules/${id}?q=[["with","bam_role.bam_casting","conversation.messages"],["orderBy","created_at","DESC"],["with","bam_role.campaigns"]]`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const sedCDMessageApi = ({
  token,
  raw,
  id,
}: {
  token: string;
  id: number;
  raw: {
    body: string;
  };
}) => {
  return post({
    route: `/v2/conversations/${id}/messages`,
    data: JSON.stringify(apiMiddleware({ type: "json", raw })),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

export const getJobSubmissionListApi = ({
  token,
  page,
  perPage,
}: {
  page: number;
  token: string;
  perPage: number;
}) => {
  return get({
    // route: `/v2/talent/submissions_self?q=[["with","bam_casting"],["with","bam_role"]]&page=${page}&per_page=${perPage}`,
    route: `/v2/talent/submissions_self?q=[["with","bam_role"],["with","bam_role.bam_casting"]]&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const setJobViewedApi = ({
  token,
  raw,
}: {
  token: string;
  raw: object;
}) => {
  return post({
    route: `/v2/talent/recently_visited_projects`,
    data: JSON.stringify(raw),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

export const getViewedListApi = ({
  token,
  page,
  perPage,
}: {
  page: number;
  token: string;
  perPage: number;
}) => {
  return get({
    route: `/v2/talent/recently_visited_projects?q=[["with","bam_casting.casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with","bam_casting.bam_roles"]]&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const clearRecentlyViewedJobsApi = ({ token }: { token: string }) => {
  return deleteReq({
    route: `/v2/talent/clear_all_visited_projects`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getMarketsApi = ({ token }: { token?: string }) => {
  return get({
    route: `/v2/admin/markets`,
    config: {
      headers: {
        // Authorization: "Bearer " + token,
      },
    },
  });
};
