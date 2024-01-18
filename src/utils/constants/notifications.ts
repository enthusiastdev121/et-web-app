export const NOTIFICATION_TEXT = {
  follow: "started following you",
  friendRequest: "wants to connect",
  acceptFriendRequest: "accepted your friend request",
};

export enum NotificationType {
  follow = 1,
  friendRequest = 2,
  acceptFriendRequest = 3,
}

export enum NotificationStatus {
  unread = 0,
  read = 1,
  delete = 2,
}
