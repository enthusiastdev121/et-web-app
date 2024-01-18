import { deleteReq, post, get } from "network";
import { apiMiddleware } from "network/apiMiddleware";

//FOLLOW
export const followTalentApi = ({
  talentnum,
  token,
}: {
  talentnum: number;
  token: string;
}) => {
  return post({
    route: "/v2/talent/talent_following",
    data: JSON.stringify(
      apiMiddleware({
        type: "json",
        raw: {
          profile_id: talentnum,
        },
      })
    ),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const unfollowTalentApi = ({
  talentnum,
  token,
}: {
  talentnum: number;
  token: string;
}) => {
  return deleteReq({
    route: "/v2/talent/unfollow?profile_id=" + talentnum,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

//FRIENDS
export const addFriendApi = ({
  talentnum,
  token,
}: {
  talentnum: number;
  token: string;
}) => {
  return post({
    route: "/v2/talent/friends",
    data: JSON.stringify(
      apiMiddleware({
        type: "json",
        raw: {
          talentnum2: talentnum,
        },
      })
    ),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const cancelFriendApi = ({
  talentnum,
  token,
}: {
  talentnum: number;
  token: string;
}) => {
  return deleteReq({
    route: "/v2/talent/cancel_friend_request?talentnum=" + talentnum,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const acceptFriendRequestApi = ({
  token,
  raw,
}: {
  token: string;
  raw: object;
}) => {
  return post({
    route: "/v2/talent/accept_friend_request",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const declineFriendRequestApi = ({
  talentnum,
  token,
}: {
  talentnum: number;
  token: string;
}) => {
  return deleteReq({
    route: "/v2/talent/decline_friend_request?talentnum=" + talentnum,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const removeFriendApi = ({
  talentnum,
  token,
}: {
  talentnum: number;
  token: string;
}) => {
  return deleteReq({
    route: "/v2/talent/unfriend?talentnum=" + talentnum,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getConnectionRequestsApi = ({
  token,
  page,
  perPage,
}: {
  token: string;
  page: number;
  perPage: number;
}) => {
  return get({
    route: `/v2/talent/friends_requests?page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
