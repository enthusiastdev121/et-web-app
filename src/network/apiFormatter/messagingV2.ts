import { formatTimeAgo } from "@/utils/helper";
import { formatDate } from "./comments";
import momentTz from "moment-timezone";
import { MessageItemTypeD } from "types/messagingV2";

export const formatIndboxItems = ({ res, userId }: any) => {
  const otherUser = res?.users?.filter(
    (i: any) => i?.bam_talentci?.talentnum !== userId
  )[0];

  return {
    id: res?.id,
    name:
      `${otherUser?.bam_talentci?.fname || ""} ${
        otherUser?.bam_talentci?.lname || ""
      }`,
    pic:
      otherUser?.bam_talentci?.profile_picture_path ||
      "/images/user_profile.png",
    message: res?.last_message?.body,
    talentlogin: res.talentlogin || otherUser?.bam_talentci?.talentlogin,
    talentnum: res.talentnum || otherUser?.bam_talentci?.talentnum,
    // time: formatTimeAgo(res?.last_message?.created_at),
    time: formatDate(
      momentTz.tz(res?.last_message?.created_at, "America/Los_Angeles")
    ),
    unreadCount: res?.unread_count,
    conversationsId: res?.pivot?.conversation_id,
    type: res?.last_message ? res?.last_message.type : "",
    user_id: otherUser?.id,
  };
};

export const formatCallSocket = (res: any) => {
  return {
    roomId: res?.event_data?.provider_room_id,
    authToken: res?.token,
    name:
      res?.talentci?.lname !== null
        ? res?.talentci?.fname + " " + res?.talentci?.lname
        : res?.talentci?.fname,
    pic: res?.talentci?.profile_picture_path,
    talentnum: res?.talentci?.talentnum,
  };
};

export const formatConversationsMessage = (
  res: any,
  current_user_id: number,
  name: string,
  ownName: string
): MessageItemTypeD => {
  const ownUser = res?.users?.filter((i: any) => i?.id === current_user_id)[0];

  return {
    id: res?.id,
    localId: res.localId || res?.id,
    body: res?.body,
    createdAt: res?.created_at,
    userId: res?.user_id,
    position: current_user_id != res?.user_id ? 1 : 2,
    type: res?.type,
    mediaPath: res?.media_path_full,
    otherPersonName: name,
    seen: ownUser?.pivot?.read === 1 ? true : false,
    readStatus: ownUser?.pivot?.read,
    showProgress: res?.showProgress,
    uploading: res?.uploading,
    localMediaPath: res?.local_media_path,
    room: {
      duration: res?.rooms?.duration,
      startBy: ownUser?.id === res?.rooms?.start_by ? ownName : name,
      startTime: res?.rooms?.start_time,
      endTime: res?.rooms?.end_time,
      host: ownUser?.id === res?.rooms?.start_by,
      status: res?.rooms?.status,
    },
  };
};
