import { deleteReq, ENDPOINT, get, patch, post, put } from "network";
import qs from "qs";

export const spotlightDataApi = ({
  token,
  page,
  perPage,
  sortBy,
  searchstring,
}: {
  token: string;
  page: number;
  perPage: number;
  sortBy: string;
  searchstring?: string;
}) => {
  let extraQs = qs.stringify({});

  if (searchstring?.length > 0) {
    extraQs += `&searchtag=${searchstring}`;
  }

  return get({
    route: `/v2/talent/spotlight_media?page=${page}&per_page=${perPage}&sortBy=${sortBy}&${extraQs}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getMySpotlightDataApi = ({ token }: { token: string }) => {
  return get({
    route: "/v2/talent/get_my_spotlight",
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const spotlightIsViewUpdateApi = ({
  token,
  id,
}: {
  token: string;
  id: any;
}) => {
  return post({
    route: `/v2/talent/spotlight_stats_view`,
    data: JSON.stringify({
      spotlight_media_id: id,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
export const getCommentsApi = ({
  token,
  // parentId,
  mediaId,
  page,
  perPage,
}: {
  token: string;
  // parentId: number;
  mediaId: number;
  page: number;
  perPage: number;
}) => {
  return get({
    // route: `/v2/talent/spotlight_comments?q=[["where","spotlight_media_id","="${mediaId}],["where","parent_id","=","0"],["with","replies"],["with","user"],["with","user.bam_talentci"],["with","replies.user.bam_talentci"]]&per_page=${perPage}&page=${page},`,
    route: `/v2/talent/spotlight_comments?q=[["where","spotlight_media_id","=",${mediaId}],["where","parent_id","=","0"],["with","replies"],["with","user"],["with","user.bam_talentci"],["with","replies.user.bam_talentci"]]`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const commentsUpdateApi = ({
  token,
  // parentId,
  comment,
  spotlightmediaId,
}: {
  token: string;
  // parentId: number;
  comment: string;
  spotlightmediaId: number;
}) => {
  return post({
    // route: `/v2/talent/spotlight_comments`,
    route: `/v2/talent/spotlight_comments`,
    data: JSON.stringify({
      parent_id: "0",
      comment: comment,
      spotlight_media_id: spotlightmediaId,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
export const deleteSpotlightApi = (token: string, delId: any) => {
  return deleteReq({
    route: `/v2/talent/spotlight_media/${delId}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const addSpotlightRoute = ENDPOINT + "/v2/talent/spotlight_media";

export const createSpotlightTagApi = ({
  token,
  name,
}: {
  token: string;
  name: string;
}) => {
  return post({
    route: "/v2/talent/spotlight_tags",
    data: JSON.stringify({
      tag_name: name,
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getSpotlightTagsApi = (search?: string) => {
  let extraQs = qs.stringify({});

  if (search) {
    extraQs += `&searchstring=${search}`;
  }

  return get({
    route: `/v2/talent/spotlight_tags?${extraQs}`,
    config: {
      headers: {},
    },
  });
};
