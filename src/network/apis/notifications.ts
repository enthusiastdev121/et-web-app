import { get, post, put } from "network";

export const getNotificationApi = ({
  token,
  sortBy,
}: {
  token: string;
  sortBy: "read" | "unread" | "";
}) => {
  return get({
    route: `/v2/talent/talent_notification${ sortBy.length > 0 ? "?sortBy=" + sortBy : "" }`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const updateNotificationStatusApi = ({
  token,
  raw,
  id,
}: {
  token: string;
  raw: object;
  id: number;
}) => {
  return put({
    route: `/v2/talent/talent_notification/${id}`,
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getUnreadNotificationsCountApi = (token: string) => {
  return get({
    route: `/v2/talent/notification/total_unread_count`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const readAllNotificationsApi = ({ token }: { token: string }) => {
  return post({
    route: `/v2/talent/notification/read_all`,
    data: "",
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
