import { CLIENT_SECRET } from "@/utils/constants/config";
import { deleteReq, get, patch, post } from "network";
import { type } from "os";
import { otherProfileQuery } from "./profile";

export const getOtherUserProfileApi = ({
  username,
  token,
}: {
  username: string;
  token?: string;
}) => {
  return get({
    route: `/v2/talent/talentci/${username}?q=[["with","user"],["with","bam_talentinfo1"],["with","bam_talentinfo2"],["with","bam_talentinfo3"],["with","bam_talent_resume"],["with","tag_career"],["with","bam_job_experience_models"],["with","bam_talent_credit_experiences"],["with","bam_job_experience_film_stages"],["with","bam_job_experience_photographers"],["with","bam_job_experience_presenters"],["with","bam_job_experience_actors"],["with","bam_talent_interest"],["with","bam_talent_intro_video"]]&client_id=${CLIENT_SECRET}`,
    config: {
      headers: {
        ...(token && { Authorization: "Bearer " + token }),
      },
    },
  });
};

export const checkOtherUserExistsApi = ({
  username,
  token,
}: {
  username: string;
  token?: string;
}) => {
  return get({
    route: `/v2/talent/talentci/${username}?client_id=${CLIENT_SECRET}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getProfileCommentsApi = ({
  talentnum,
  token,
  page,
  perPage,
}: {
  talentnum: number;
  token: string;
  page: number;
  perPage: number;
}) => {
  return get({
    // route: `/v2/talent/profile_comments?q=[["where","talentnum","=","${talentnum}"],["with","replies"],["with","user"],["with","user.bam_talentci"],["with","replies.user.bam_talentci"]],`,
    // route: `/v2/talent/profile_comments?q=[["where","talentnum","=","${talentnum}"],["where","parent_id","=","0"],["with","replies"],["with","user"],["with","user.bam_talentci"],["with","replies.user.bam_talentci"]],`,
    // [["where","talentnum","=","11706683"],["where","parent_id","=","0"],["with","replies"],["with","user"],["with","user.bam_talentci"],["with","replies.user.bam_talentci"]]
    route: `/v2/talent/profile_comments?q= [["where","talentnum","=","${talentnum}"],["where","parent_id","=","0"],["with","replies"],["with","user"],["with","user.bam_talentci"],["with","replies.user.bam_talentci"]]&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const postProfileCommentsApi = ({
  talentnum,
  token,
  comment,
}: {
  talentnum: number;
  token: string;
  comment: string;
}) => {
  return post({
    route: `/v2/talent/profile_comments`,
    data: JSON.stringify({
      parent_id: "0",
      comment: comment,
      talentnum: talentnum,
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const likeCommentApi = ({
  token,
  commentId,
}: {
  token: string;
  commentId: number;
}) => {
  return post({
    route: `/v2/talent/profile_comment_likes?profile_comment_id=${commentId}`,
    data: "",
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const postCommentReplyApi = ({
  talentnum,
  token,
  comment,
  parent_id,
}: {
  talentnum: number;
  token: string;
  comment: string;
  parent_id: number;
}) => {
  return post({
    route: `/v2/talent/profile_comments`,
    data: JSON.stringify({
      parent_id: parent_id,
      comment: comment,
      talentnum: talentnum,
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const updateProfileCommentApi = ({
  comment,
  token,
  commentId,
}: {
  comment: string;
  token?: string;
  commentId?: number;
}) => {
  return patch({
    route: `/v2/talent/profile_comments/${commentId}`,
    data: JSON.stringify({
      comment: comment,
    }),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const deleteProfileCommentApi = ({
  token,
  commentId,
}: {
  token?: string;
  commentId?: number;
}) => {
  return deleteReq({
    route: `/v2/talent/profile_comments/${commentId}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
