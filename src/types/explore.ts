export type ExploreFeedTypeD = "pic" | "article";

export type ExploreFeedPicItemD = {
  id: number;
  pic: string;
  name: string;
  profilePic: string;
  createdAt: any;
  talentnum: number;
  talentlogin: string;
  likes: number;
  isLiked: boolean;
};
export type ExploreFeedArticleItemD = {
  id: number;
  authorName: string;
  authorPic: string;
  bannerPic: string;
  createdAt: any;
  title: string;
  link: string;
  desc1: string;
};
export type ExploreFeedItemD = (
  | ExploreFeedPicItemD
  | ExploreFeedArticleItemD
) & {
  type: ExploreFeedTypeD;
};
