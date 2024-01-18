import { SuccessStoryItemD } from "types/audition-job";

export const formatSuccessStoryRes = (res: any): SuccessStoryItemD => {
  return {
    id: res?.tm_id,
    // desc: res?.des.slice(0, 100),
    desc: res?.des,
    name: res?.bam_talentci?.fname + " " + res?.bam_talentci?.lname,
    gender: res?.bam_talentci?.sex,
    ethnicity: res?.bam_talentci?.ethnicity_field,
    age: res?.bam_talentci?.age,
    profile_picture: res?.bam_talentci?.profile_picture_path,
    talentlogin: res?.bam_talentci?.talentlogin,
  };
};
