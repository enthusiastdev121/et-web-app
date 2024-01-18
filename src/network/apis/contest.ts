import { CLIENT_ID_2 } from "../../utils/constants";
import { ENDPOINT, get, post } from "network";
import { CLIENT_ID } from "@/utils/envProviders";

export const uploadContentRoute = ENDPOINT + "/v2/talent/talent_media2";
export const uploadVideoContentRoute = ENDPOINT + "/v2/talent/videos";
export const uploadLinkContentRoute = ENDPOINT + "/v2/talent/et_contest/contest_links";
export const uploadSongContentRoute = ENDPOINT + "/v2/talent/songs";

export const getContestListApi = ({ page, perPage }: { page: number; perPage: number }) => {
  return get({
    route: `/v2/talent/et_contest/contests?page${page}&per_page=${perPage}&client_id=${CLIENT_ID}`,
  });
};
export const getContestUpcomingListApi = ({ page, perPage, filterBy, token }: { page: number; perPage: number; filterBy: string; token: string }) => {
  return get({
    route: `/v2/talent/et_contest/contests?q=[["with",{"contest_media":[["with","bam_talentci"],["orderBy","score","DESC"],["limit","10"]]}]]&page=${page}&per_page=${perPage}&client_id=${CLIENT_ID}&filterBy=${filterBy}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getContestByIdApi = ({ id }: { id: number }) => {
  return get({
    route: `/v2/talent/et_contest/contests/${id}?client_id=${CLIENT_ID}`,
  });
};

export const getCurrentContestLeaderboardByIdApi = ({ id, token }: { id: number; token: string }) => {
  return get({
    route: `/v2/talent/et_contest/contests/${id}?client_id=${CLIENT_ID}&q=[["with",{"contest_media":[["with","bam_talentci"],["orderBy","score","DESC"],["limit","10"]]}]]`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const getContestPastByIdApi = ({ id, filterBy, token }: { id: number; filterBy: string; token: string }) => {
  return get({
    route: `/v2/talent/et_contest/contests/${id}?q=[["with",{"contest_media":[["with","bam_talentci"],["orderBy","score","DESC"],["limit","10"]]}]]&client_id=${CLIENT_ID}&filterBy=${filterBy}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getContestLeaderboardApi = (id: number, page: number, perPage: number, token: string, sortBy: string) => {
  let qs = "";
  if (sortBy) {
    qs = qs + `&sortBy=${sortBy}`;
  }
  if (token) {
    return get({
      route: `/v2/talent/et_contest/contest_media?q=[["with","et_contest"],["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_id","=","${id}"],["join","bam.talentci","bam.talentci.talentnum","=","et_contest.contest_media.talentnum"],["with","bam_talentci.bam_talenttracking"],["with","contest_ratings"]]
      &page=${page}&per_page=${perPage}${qs}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/et_contest/contest_media?q=[["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_id","=","${id}"],["where","contest_media.status","=",1],["join","bam.talentci","bam.talentci.talentnum","=","et_contest.contest_media.talentnum"],["where","bam.talentci.x_origin","=",1],["join","bam.talenttracking","bam.talentci.talentnum","=","talenttracking.talentnum"],["with","bam_talentci.bam_talenttracking"],["where","bam.talenttracking.status","!=",2]]&client_id=${CLIENT_ID}&page=${page}&per_page=${perPage}${qs}`,
    });
  }
};

export const getContestNotVotedApi = (id: number, page: number, perPage: number, token: string) => {
  if (token) {
    return get({
      route: `/v2/talent/et_contest/contest_media?q=[["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_id","=","${id}"],["where","contest_media.status","=",1],["join","bam.talentci","bam.talentci.talentnum","=","et_contest.contest_media.talentnum"],["where","bam.talentci.x_origin","=",1],["join","bam.talenttracking","bam.talentci.talentnum","=","talenttracking.talentnum"],["with","bam_talentci.bam_talenttracking"],["where","bam.talenttracking.status","!=",2]]&client_id=${CLIENT_ID}&page=${page}&per_page=${perPage}&non_voted=true`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/et_contest/contest_media?q=[["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_id","=","${id}"],["where","contest_media.status","=",1],["join","bam.talentci","bam.talentci.talentnum","=","et_contest.contest_media.talentnum"],["where","bam.talentci.x_origin","=",1],["join","bam.talenttracking","bam.talentci.talentnum","=","talenttracking.talentnum"],["with","bam_talentci.bam_talenttracking"],["where","bam.talenttracking.status","!=",2]]&client_id=${CLIENT_ID}&page=${page}&per_page=${perPage}&non_voted=true`,
    });
  }
};

export const getContestantDetailApi = ({ token, contest_id, talentnum = "" }: { token: string; contest_id: number; talentnum?: number | string }) => {
  return get({
    route: `/v2/talent/et_contest/contest_media/${contest_id}?q=[["with","et_contest"],["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_media.talentnum","=","${talentnum}"],["join","bam.talentci","bam.talentci.talentnum","=","et_contest.contest_media.talentnum"],["with","bam_talentci.bam_talenttracking"],["with","contest_ratings"]]`,
    config: {
      headers: {
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
    },
  });
};

// export const getContestantDetailApi = ({
//   contest_id,
//   talentnum,
//   token,
// }: {
//   contest_id: number;
//   talentnum: number;
//   token: string;
// }) => {
//   if (token) {
//     return get({
//       route: `/v2/talent/et_contest/contest_media?q=[["with","et_contest"],["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_id","=","${contest_id}"],["join","bam.talentci","bam.talentci.talentnum","=","${talentnum}"],["with","bam_talentci.bam_talenttracking"],["with","contest_ratings"]]`,
//       config: {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       },
//     });
//   } else {
//     return get({
//       route: `/v2/talent/et_contest/contest_media?q=[["with","et_contest"],["with","bam_talentci"],["with","bam_talent_media2"],["with","bam_talent_video"],["with","et_contest_link"],["with","bam_talent_song"],["where","contest_id","=","${contest_id}"],["join","bam.talentci","bam.talentci.talentnum","=","${talentnum}"],["with","bam_talentci.bam_talenttracking"],["with","contest_ratings"]]`,
//     });
//   }
// };

export const submitContentMedia = (data: any, token: any) => {
  return post({
    route: "/v2/talent/et_contest/contest_media",
    data,
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/json",
      },
    },
  });
};

export const submitVote = (data: any, token: any) => {
  return post({
    route: "/v2/talent/et_contest/contest_ratings",
    data,
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/json",
      },
    },
  });
};
export const submitComment = (data: any, token: any) => {
  return post({
    route: "/v2/talent/et_contest/contest_comments",
    data,
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/json",
      },
    },
  });
};

export const getComment = ({ talentnum, parent_ccid, token, page, perPage }: { talentnum: number; parent_ccid: number; token: string; page: number; perPage: number }) => {
  if (token) {
    return get({
      route: `/v2/talent/et_contest/contest_comments?q=[["where","of_talentnum","=","${talentnum}"],["with","bam_talentci_by"],["orderBy","date_created","DESC"]]&page=${page}&per_page=${perPage}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/et_contest/contest_comments?q=[["where","of_talentnum","=","${talentnum}"],["with","bam_talentci_by"],["orderBy","date_created","DESC"]]&page=${page}&per_page=${perPage}`,
    });
  }
};

export const contestView = (data: any, token: any) => {
  return post({
    route: "/v2/talent/et_contest/contest_views",
    data,
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
