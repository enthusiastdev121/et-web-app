import { CLIENT_ID, CLIENT_ID_2 } from "@/utils/constants";
import { deleteReq, ENDPOINT, get, patch, post } from "network";

export const MessageMedia =
  ENDPOINT + "/v2/conversations/messages/add_message_media";

export const getMessageTalentApi = ({
  token,
  page,
  perPage = 10,
}: {
  token: any;
  page: number;
  perPage: number;
}) => {
  return get({
    route: `/v2/conversations?q=[["with","schedule"],["with","schedule.bam_role.bam_casting"],["with","schedule.bam_role.campaigns.campaign_apps"],["with","users.bam_cd_user"],["with","users.bam_talentci.bam_talent_media2_profile"],["with","users.bam_talentci.bam_talent_interest"],["with","users.bam_user"],["orderBy","updated_at","DESC"]]&page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addNewConversations = ({
  data,
  token,
}: {
  data: any;
  token: string;
}) => {
  return post({
    route: "/v2/conversations",
    data: data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addNewConversationsMessage = ({
  data,
  conversationsId,
  token,
}: {
  data: any;
  conversationsId: number;
  token: string;
}) => {
  return post({
    route: `/v2/conversations/${conversationsId}/messages`,
    data: data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const deleteConversationsMessage = ({
  id,
  conversationsId,
  token,
}: {
  id: number;
  conversationsId: number;
  token: string;
}) => {
  return deleteReq({
    route: `/v2/conversations/${conversationsId}/messages/${id}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getConversationsMessage = ({
  conversationsId,
  token,
  page,
  perPage = 25,
}: {
  conversationsId: number;
  token: any;
  page: number;
  perPage: number;
}) => {
  return get({
    route: `/v2/conversations/${conversationsId}/messages?page=${page}&per_page=${perPage}`,
    config: {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getConversationsMessageMedia = ({
  conversationsId,
  token,
  page,
}: {
  conversationsId: number;
  token: any;
  page: number;
}) => {
  return get({
    route: `/v2/conversations/${conversationsId}/messages?q=[["where","type","=","picture"],["orderBy","id","DESC"]]&page=${page}`,
    config: {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const deleteConversations = ({
  id,
  token,
}: {
  id: number;
  token: string;
}) => {
  return deleteReq({
    route: `/v2/conversations/${id}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getMessageCountApi = ({ token }: { token: string }) => {
  return get({
    route: "/v2/conversations/messages/total_unread_count",
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const markAsSeenApi = ({
  token,
  raw,
}: {
  token: string;
  raw: { conversation_id: number };
}) => {
  return post({
    route: `/v2/conversations/read_message`,
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
// export const markAsSeenApi = ({
//   token,
//   conversationId,
// }: {
//   conversationId: any;
//   token: string;
// }) => {
//   return patch({
//     route: `/v2/conversations/` + conversationId,
//     data: JSON.stringify({ read: "1" }),
//     config: {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//     },
//   });
// };
