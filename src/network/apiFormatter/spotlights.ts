import { formatTimeAgo } from "@/utils/helper";
import { id } from "date-fns/locale";
import {
  SpotlightItemD,
  SpotlightMediaItemsD,
  CommentsD,
} from "types/spotlight";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { differenceInYears, format } from "date-fns";
import momentTz from "moment-timezone";

TimeAgo.addDefaultLocale(en);
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const formatTime = (val: any) => {
  const timeAgo = new TimeAgo("en-US");

  return timeAgo.format(new Date(val));
};

export const formatSpotlightsMediaItems = (i: any): SpotlightMediaItemsD => {
  return {
    id: i?.id,
    createdAt: i?.created_at || 0,
    isViewed: i?.is_view,
    type: i?.type,
    header: {
      heading: i?.fname,
      subheading: i?.created_at || 0,
      pic: i?.contest_media_profile_picture_path,
    },
    url: i?.media_path_full,
    isView: i?.is_view,
  };
};

export const formatSpotlights = (res: any): SpotlightItemD => {
  if (!res) {
    return {} as SpotlightItemD;
  }
  return {
    id: res?.talentnum,
    name: res?.fname,
    pic: res?.profile_picture_path,
    preview: res?.media_path_full,
    // createdAt: formatTime(momentTz.tz(res.data_entered, "America/Los_Angeles")),
    // createdAt: formatTime(momentTz.tz(res.data_entered, "America/Los_Angeles")),
    items: res?.spotlight.map((i: any): SpotlightMediaItemsD => {
      return formatSpotlightsMediaItems(i);
    }),
  };
};

export const formatMySpotlightsMedia = (i: any): SpotlightMediaItemsD => {
  return {
    id: i?.id,
    url: i?.media_path_full,
    createdAt: i?.created_at,
    size: i?.file_size,
    type: i?.type,
    isView: i?.is_view,
  };
};

export const formatComments = (res: any): CommentsD => {
  if (!res) {
    return {} as CommentsD;
  }
  return {
    id: res?.id,
    comment: res?.comment,
    is_like: res?.is_like,
    spotlightmediaId: res?.spotlight_media_id,
    userPic: res?.user?.bam_talentci?.profile_picture_path,
    name:
      res?.user?.bam_talentci?.lname !== null
        ? res?.user?.bam_talentci?.fname + " " + res?.user?.bam_talentci?.lname
        : res?.user?.bam_talentci?.fname,
  };
};
