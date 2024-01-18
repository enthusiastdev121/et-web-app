import { checkValidImage, formatDate, formatNumberWithComma } from "@/utils/helper";
import { ContestantDetailItemD, ContestDetailItemD, ContestItemD, ContestItemDPast, ContestLeaderboardItemD } from "types/contest";

export const formatContestItem = (res: any): ContestItemD => {
  return {
    id: res.contest_id,
    createdAt: Number(res.date_created),
    name: res.contest_name,
    endTime: Number(res.end_ts),
    desc: res.contest_des,
    pic: res.media_path_full,
    rules: res.rules,
  };
};

export const formatPastContestItem = (res: any): ContestItemDPast => {
  return {
    id: res.contest_id,
    createdAt: Number(res.date_created),
    name: res.contest_name,
    endTime: Number(res.end_ts),
    desc: res.contest_des,
    pic: res.media_path_full,
    rules: res.rules,
    contest_media: res.contest_media ?? [],
  };
};

export const formatContestDetailItem = (res: any): ContestDetailItemD => {
  return {
    id: res.contest_id,
    createdAt: Number(res.date_created),
    name: res.contest_name,
    endDate: formatDate(parseInt(res.end_ts)),
    endTime: Number(res.end_ts),
    desc: res.contest_des,
    prize: res.prize,
    rules: res.rules,
    pic: res.media_path_full,
    entries: res.contest_stats.entries,
    score: res.contest_stats.score,
    views: formatNumberWithComma(res.contest_stats.views || 0),
    votes: res.contest_stats.votes,
    accept_pic: res.accept_pic,
    accept_video: res.accept_video,
    accept_link: res.accept_link,
  };
};

export const formatLeaderboardItem = (res: any): ContestLeaderboardItemD => {
  return {
    id: parseInt(res?.talentnum),
    name: res?.bam_talentci.fname + " " + res?.bam_talentci.lname,
    entryImage: res.bam_talent_media2?.bam_media_path_full,
    pic: res?.bam_talentci.profile_picture_path,
    video: res?.bam_talent_video?.path_video ?? (res?.bam_talentci.contest_media_profile_picture_path || res?.bam_talentci.profile_picture_path),
    // pic:
    //   checkValidImage(res?.bam_talentci.contest_media_profile_picture_path) &&
    //   res?.bam_talentci.contest_media_profile_picture_path !== null
    //     ? res?.bam_talentci.contest_media_profile_picture_path
    //     : res?.bam_talentci.profile_picture_path,
    score: res?.score,
    views: res?.views,
    votes: res?.calculated_score_count,
    created: parseInt(res?.date_created),
    updated: parseInt(res?.last_updated),
    featured: res?.bam_talentci.is_featured,
    title: res?.title,
    cm_id: res?.cm_id,
    is_voted: res?.is_voted,
    user_rating: res?.user_rated,
  };
};

export const formatContestantDetailItem = (res: any): ContestantDetailItemD => {
  return {
    id: res?.cm_id,
    talentnum: parseInt(res?.talentnum),
    name: res?.bam_talentci.fname + " " + res?.bam_talentci.lname,
    pic: res?.bam_talentci.profile_picture_path,
    entryImage: res.bam_talent_media2?.bam_media_path_full,
    score: res?.score,
    views: res?.views,
    votes: res?.calculated_score_count,
    age: res?.bam_talentci.age,
    location: res?.bam_talentci.city + ", " + res?.bam_talentci.state,
    title: res?.title,
    des: res?.des,
    video: res?.bam_talent_video?.path_video ?? (res?.bam_talentci.contest_media_profile_picture_path || res?.bam_talentci.profile_picture_path),
    is_voted: res?.is_voted,
    use_rating: res?.use_rating ?? "",
    tm_id: res?.tm_id,
    talentName: res?.bam_talentci.talentlogin,
  };
};
