import TimeAgo from "javascript-time-ago";
import { CommentItemD, ReplyItemD } from "types/comments";
import en from "javascript-time-ago/locale/en.json";
import { useProfileStore } from "context/ProfileStore";
import { formatTimeAgo } from "@/utils/helper";
import { differenceInYears, format } from "date-fns";
import momentTz from "moment-timezone";

TimeAgo.addDefaultLocale(en);
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const formatDate = (val: number | string) => {
  if (!val) {
    return;
  }

  if (typeof val == "number") {
    // console.log(new Date(val * 1000));
    if (differenceInYears(new Date(), new Date(val * 1000)) > 0) {
      return format(new Date(val * 1000), "d/MM/yyyy");
    } else {
      return format(new Date(val * 1000), " K:mmaa, d MMM");
    }
  } else {
    if (differenceInYears(new Date(), new Date(val)) > 0) {
      return format(new Date(val), "d/MM/yyyy");
    } else {
      const timeAgo = new TimeAgo("en-US");
      return timeAgo.format(new Date(val));
    }
  }
};

const formatReplyRes = (res: any): ReplyItemD => {
  const timeAgo = new TimeAgo("en-US");
  const created_at = new Date(res.created_at);
  return {
    id: res.id,
    // createdAt: res.created_at ? timeAgo.format(created_at) : "",
    // createdAt: res.created_at
    //   ? timeAgo.format(Date.now() - new Date(res.created_at).getTime(), "round")
    //   : "",
    createdAt: formatDate(momentTz.tz(res.created_at, "America/Los_Angeles")),
    likeCount: res.like_count,
    comment: res.comment,
    isLiked: res.is_like,
    pic: res.user.bam_talentci.profile_picture_path,
    name: res.user.bam_talentci.fname + " " + res.user.bam_talentci.lname,
    // talentnum: res.talentnum,
    talentnum: res.user.bam_talentnum,
    ownTalentnum: res.talentnum,
    talentlogin: res.user.bam_talentci.talentlogin,
  };
};

export const formatCommentsRes = (res: any): CommentItemD => {
  const timeAgo = new TimeAgo("en-US");
  const created_at = new Date(res.created_at);
  return {
    id: res.id,
    pic: res.user.bam_talentci.profile_picture_path,
    name: res.user.bam_talentci.fname + " " + res.user.bam_talentci.lname,
    // createdAt: res.created_at ? timeAgo.format(created_at) : "",
    // createdAt: res.created_at
    //   ? timeAgo.format(Date.now() - new Date(res.created_at).getTime(), "round")
    //   : "",
    // createdAt: formatTimeAgo(res.created_at),
    createdAt: formatDate(momentTz.tz(res.created_at, "America/Los_Angeles")),
    comment: res.comment,
    likeCount: res.like_count,
    replies: res.replies.map((i: any) => formatReplyRes(i)),
    isLiked: res.is_like,
    // talentnum: res.talentnum,
    talentnum: res.user.bam_talentnum,
    ownTalentnum: res.talentnum,
    talentlogin: res.user.bam_talentci.talentlogin,
  };
};

export const addCommentFormatter = ({
  res,
  name,
  pic,
}: {
  res: any;
  name: string;
  pic: string;
}): CommentItemD => {
  const timeAgo = new TimeAgo("en-US");
  const created_at = new Date(res.created_at);

  return {
    id: res.id,
    pic: pic || "/images/user_profile.png",
    name: name || "",
    createdAt: res.created_at ? timeAgo.format(created_at) : "",
    comment: res.comment,
    likeCount: res.like_count,
    replies: [],
    isLiked: res.is_like,
  };
};

export const addReplyFormatter = ({
  res,
  name,
  pic,
}: {
  res: any;
  name: string;
  pic: string;
}): ReplyItemD => {
  const timeAgo = new TimeAgo("en-US");
  const created_at = new Date(res.created_at);
  return {
    id: res.id,
    createdAt: res.created_at ? timeAgo.format(created_at) : "",
    likeCount: res.like_count,
    comment: res.comment,
    isLiked: res.is_like,
    pic: pic || "/images/user_profile.png",
    name: name || "",
  };
};
