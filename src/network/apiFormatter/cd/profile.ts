import { formatDate } from "@/utils/helper";
import { CdUserProfileD } from "types/cd/profile";

export const formatCdUserProfile = (res: any): CdUserProfileD => {
  // console.log("99999",res);
  return {
    id: res?.bam_cd_user_id,
    email: res?.email,
    company: res?.bam_cd_user?.company,
    role: res?.bam_cd_user?.role,
    fname: res?.bam_cd_user?.fname,
    lname: res?.bam_cd_user?.lname,
    date_created: res?.bam_cd_user?.date_created,
  };
};
