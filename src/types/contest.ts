export type ContestItemD = {
  id: number;
  name: string;
  createdAt: number;
  endTime: number;
  desc: string;
  pic: string;
  rules: string;
};
export type ContestItemDPast = {
  id: number;
  name: string;
  createdAt: number;
  endTime: number;
  desc: string;
  pic: string;
  rules: string;
  contest_media: any;
};

export type ContestDetailItemD = {
  id: number;
  name: string;
  createdAt: number;
  endDate: string;
  endTime: number;
  desc: string;
  rules: string;
  prize: string;
  pic: string;
  entries: string;
  score: string;
  views: string;
  votes: string;
  accept_pic: string;
  accept_video: string;
  accept_link: string;
};

export type ContestLeaderboardItemD = {
  id: number;
  name: string;
  pic: string;
  score: any;
  views: number;
  votes: number;
  created: number;
  updated: number;
  featured: boolean;
  title: string;
  cm_id: number;
  video: string;
  user_rating: string;
  is_voted: boolean;
  entryImage: string;
};

export type ContestantDetailItemD = {
  id: number;
  name: string;
  pic: string;
  score: any;
  views: number;
  votes: number;
  age: string;
  location: string;
  title: string;
  des: string;
  video: string;
  is_voted: boolean;
  use_rating: string;
  talentnum: number;
  tm_id: number;
  talentName: string;
  entryImage?: string;
};
