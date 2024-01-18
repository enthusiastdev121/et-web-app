import { ConversationsMessageRes, TalentFollowRes, TalentMessageRes, TalentRes } from "types/talents";
import { formatDate } from "./comments";
import momentTz from "moment-timezone";
import { MessageItemTypeD } from "types/messagingV2";

export const formatTalentRes = (res: any): TalentRes => {
  return {
    profile_picture_path: res.profile_picture_path,
    name: res.fname + " " + (res.lname || ""),
    city: res.city,
    stateData: res.state,
    talentName: res.talentlogin,
    pathVideo: res.bam_talent_intro_video ? res.bam_talent_intro_video.path_video : "",
    is_video: res.bam_talent_intro_video ? true : false,
    ageRange: res.bam_talentinfo1.age_range_text,
  };
};
export const formatFollowingTalentRes = (res: any): TalentFollowRes => {
  return {
    profile_picture_path: res.bam_talentci.profile_picture_path,
    name: res.bam_talentci.display_name || res.bam_talentci.fname + " " + res.bam_talentci.lname,
    is_follower: res.bam_talentci.is_follower,
    is_following: res.bam_talentci.is_following,
    is_friend: res.bam_talentci.friend_status === "active" ? true : false,
    profile_id: res.profile_id,
    talentnum: res.talentnum,
    talentlogin: res.bam_talentci.talentlogin,
  };
};
export const formatConnectionTalentRes = (res: any): TalentFollowRes => {
  return {
    profile_picture_path: res.bam_talentci.profile_picture_path,
    name: res.bam_talentci.display_name || res.bam_talentci.fname + " " + res.bam_talentci.lname,
    is_follower: res.bam_talentci.is_follower,
    is_following: res.bam_talentci.is_following,
    is_friend: res.bam_talentci.friend_status === "active" ? true : false,
    profile_id: res.id,
    talentnum: res.talentnum1,
    talentlogin: res.bam_talentci.talentlogin,
  };
};

export const formatTalentMessageRes = (res: any, current_user_id: number): TalentMessageRes => {
  return {
    profile_picture_path: res.users.filter((y: any) => y.id != current_user_id)[0] ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.profile_picture_path : "",
    city: res.users.filter((y: any) => y.id != current_user_id)[0] ? (res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.city ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.city : "") : "",
    state: res.users.filter((y: any) => y.id != current_user_id)[0] ? (res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.state ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.state : "") : "",
    country: res.users.filter((y: any) => y.id != current_user_id)[0]
      ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.country
        ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.country
        : ""
      : "",
    gender: res.users.filter((y: any) => y.id != current_user_id)[0] ? (res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.sex ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.sex : "") : "",
    name: res.users.filter((y: any) => y.id != current_user_id)[0]
      ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.fname + " " + res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.lname
      : "unknown",
    talentName: res.users.filter((y: any) => y.id != current_user_id)[0] ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.talentlogin : "",
    conversationsId: res.id,
    lastMessage: res.last_message ? res.last_message.body : "",
    lastMessageDate: res.last_message ? res.last_message.created_at : "",
    type: res.last_message ? res.last_message.type : "",
    unread_count: res.unread_count,
    interests: res.users.filter((y: any) => y.id != current_user_id)[0]
      ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.bam_talent_interest
        ? res.users
            .filter((y: any) => y.id != current_user_id)[0]
            .bam_talentci?.bam_talent_interest.map((y: any) => y.categories?.name)
            .join(",")
        : ""
      : "",
    talentlogin: res.users.filter((y: any) => y.id != current_user_id)[0] ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci?.talentlogin : "",
  };
};

export const formatConversationsMessages = (res: any, current_user_id: number, name: any): MessageItemTypeD => {
  console.log("UUUUU", res);

  // const otherUser = res?.users?.filter(
  //   (i: any) => i?.bam_talentci?.talentnum !== current_user_id
  // )[0];

  const ownUser = res?.users?.filter((i: any) => i?.id === current_user_id)[0];

  return {
    id: res?.id,
    localId: res.localId || res?.id,
    profile_picture_path: "",
    body: res?.body,
    created_at: res?.created_at,
    // created_at: formatDate(momentTz.tz(res?.created_at, "America/Los_Angeles")),
    user_id: res?.user_id,
    position: current_user_id != res?.user_id ? 1 : 2,
    type: res?.type,
    media_path_full: res?.media_path_full,
    other_person_name: name,
    // seen: otherUser?.pivot?.read === 1 ? true : false,
    // readStatus: otherUser?.pivot?.read || 2,
    seen: ownUser?.pivot?.read === 1 ? true : false,
    readStatus: ownUser?.pivot?.read,
    showProgress: res?.showProgress,
    uploading: res?.uploading,
    local_media_path: res?.local_media_path,
    // other_person_name: res.users.filter((y: any) => y.id != current_user_id)[0] ? res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci.fname + " " + res.users.filter((y: any) => y.id != current_user_id)[0].bam_talentci.lname : "unknown",
    // position: 1
  };
};

export const formatFriendRequest = (res: any) => {
  return {
    id: res?.id,
    pic: res?.bam_talentci1?.profile_picture_path,
    name: res?.bam_talentci1?.fname + " " + res?.bam_talentci1?.lname,
    talentnum: res?.talentnum1,
    talentlogin: res?.bam_talentci.talentlogin,
  };
};
