import { ExploreFeedItemD } from "types/explore";

export const formatExploreFeedPicItem = (res: any): ExploreFeedItemD => {
  return {
    id: res.id,
    pic: res?.bam_talentci?.profile_picture_path,
    name: res?.bam_talentci?.display_name || `${res?.bam_talentci?.fname || ""} ${res?.bam_talentci?.lname || ""}`,
    profilePic: res?.bam_talentci?.profile_picture_path,
    createdAt: res?.date,
    talentnum: res?.bam_talentci?.talentnum,
    talentlogin: res?.bam_talentci?.talentlogin,
    likes: res?.bam_talentci?.like_count || 0,
    isLiked: res?.bam_talentci?.is_like || false,
    type: "pic",
  };
};
export const formatExploreFeedArticleItem = (res: any): ExploreFeedItemD => {
  return {
    id: res.id,
    type: "article",
    authorName: res?._embedded?.author[0]?.name,
    authorPic: res?._embedded?.author[0]?.avatar_urls["96"],
    bannerPic: res?._embedded["wp:featuredmedia"][0]?.source_url,
    createdAt: res?.date,
    title: res?.title?.rendered,
    link: res?.link,
    desc1: res?.excerpt?.rendered,
  };
};
