export type ReplyItemD = {
  id: number;
  name: string;
  pic: string;
  createdAt: string | [string, (number | undefined)?];
  comment: string;
  likeCount: number;
  isLiked: boolean;
  talentnum: number;
  ownTalentnum: number;
  talentlogin: string;
};

export type CommentItemD = {
  id: number;
  name: string;
  pic: string;
  comment: string;
  createdAt: string | [string, (number | undefined)?];
  likeCount: number;
  isLiked: boolean;
  talentnum: number;
  ownTalentnum: number;
  talentlogin: string;
  replies: ReplyItemD[];
};
