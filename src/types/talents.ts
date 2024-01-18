export type TalentRes = {
  profile_picture_path: string;
  name: string;
  city: string;
  stateData: string;
  talentName: string;
  pathVideo: string;
  is_video: boolean;
  ageRange: string;
};

export type FriendStatus = "pending" | "active" | null;
export type TalentFollowRes = {
  profile_picture_path: string;
  name: string;
  is_following: boolean;
  is_follower: boolean;
  is_friend: boolean;
  profile_id: number;
  talentnum: number;
  talentlogin: number;
};

export type TalentMessageRes = {
  profile_picture_path: string;
  name: string;
  talentName: string;
  conversationsId: number;
  lastMessage: string;
  unread_count: number;
  lastMessageDate: string;
  type: string;
  city: string;
  state: string;
  country: string;
  interests: string;
  gender: string;
  talentlogin: string;
};

export type ConversationsMessageRes = {
  id: number;
  profile_picture_path: string;
  body: string;
  created_at: string;
  user_id: number;
  position: number;
  type: string;
  media_path_full: string;
  other_person_name: string;
  seen: boolean;
};

export type FriendRequestD = {
  pic: string;
  name: string;
  id: number;
  talentnum: number;
  talentlogin: number;
};
