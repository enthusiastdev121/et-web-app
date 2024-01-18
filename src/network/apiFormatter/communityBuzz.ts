import { communityBuzzItemD } from "types/audition-job";
import { formatTime } from "utils/helper";

export const formatCommunityBuzzRes = (res: any): communityBuzzItemD => {
  return {
    id: res.id,
    user_id: res.user_id,
    name:
      res.user.bam_talentci.lname !== null
        ? res.user.bam_talentci.fname + " " + res.user.bam_talentci.lname
        : res.user.bam_talentci.fname,
    message: res.message,
    profile_picture: res.user.bam_talentci.profile_picture_path,
    talentlogin: res.user.bam_talentci.talentlogin,
    gender: res.user.bam_talentci.sex,
    age: res.user.bam_talentci.age,
    ethnicity: res.user.bam_talentci.ethnicity_field,
    time: formatTime(res.created_at),
  };
};
