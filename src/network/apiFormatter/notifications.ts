import {
  NotificationType,
  NOTIFICATION_TEXT,
} from "@/utils/constants/notifications";
import moment from "moment";
import { NotificationItemD } from "types/notifications";

export const formatNotificationRes = (res: any): NotificationItemD => {
  return {
    id: res.notification_id,

    talentnum: res.notifications?.friend?.talentnum,

    name:
      res.notifications.type === NotificationType.follow
        ? res?.notifications?.follower?.fname +
          " " +
          res?.notifications?.follower?.lname
        : res.notifications.type === NotificationType.friendRequest ||
          res.notifications.type === NotificationType.acceptFriendRequest
        ? res?.notifications?.friend?.fname +
          " " +
          res?.notifications?.friend?.lname
        : "",

    pic:
      res.notifications.type === NotificationType.follow
        ? res?.notifications?.follower?.profile_picture_path ||
          "/images/user_profile.png"
        : res.notifications.type === NotificationType.friendRequest ||
          res.notifications.type === NotificationType.acceptFriendRequest
        ? res?.notifications?.friend?.profile_picture_path ||
          "/images/user_profile.png"
        : "/images/user_profile.png",

    type: res.notifications.type,

    message:
      res.notifications.type === NotificationType.follow
        ? NOTIFICATION_TEXT.follow
        : res.notifications.type === NotificationType.friendRequest
        ? NOTIFICATION_TEXT.friendRequest
        : res.notifications.type === NotificationType.acceptFriendRequest
        ? NOTIFICATION_TEXT.acceptFriendRequest
        : "",

    time: moment(new Date(res.created_at)).fromNow(),

    status: res.status,

    link:
      res.notifications.type === NotificationType.follow
        ? res.notifications.follower.talentlogin
        : res.notifications.type === NotificationType.friendRequest ||
          res.notifications.type === NotificationType.acceptFriendRequest
        ? res.notifications.friend.talentlogin
        : "#",
  };
};
