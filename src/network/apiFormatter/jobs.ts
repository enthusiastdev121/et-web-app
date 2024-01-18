import { CDInviteItemD, cdProjectItem, InviteChatItemD, JobCartItemD, JobItemD, JobRoleD, JobSubmissionItemD } from "types/jobs";
import { convertToUnix, formatDate } from "@/utils/helper";
import { format } from "date-fns";
import moment from "moment";
import {  JOB_RATE_DES_OBJ, JOB_SUBMISSION_TYPE_OBJ, OLD_CATEGORIES_ID_VALUE_OBJ } from "@/utils/constants/et/jobs";

export const formatJobRole = ({ role, job }: { role: any; job: any }): JobRoleD => {
  if (role || job) {
    return {
      id: role?.role_id,
      jobId: role?.casting_id,
      gender: role?.gender_female === 1 && role?.gender_male === 1 ? "Any" : role?.gender_female === 1 ? "Female" : "Male",
      age: role?.age_min + "-" + role?.age_max,
      desc: role?.des,
      ethnicity: formatKey({ identify: "ethnicity", res: role }),
      expiration: format(new Date(role?.expiration_timestamp * 1000), "MMM dd, yyyy"),
      expirationT: role?.expiration_timestamp,
      applied: role?.is_role_submitted,
      inCart: role?.is_role_cart_item,
      name: role?.name,
      categories: role?.role_categories,
      talentCount: role?.number_of_people,
      matched: role?.is_role_match,
    };
  } else {
    return {} as JobRoleD;
  }
};

export const formatJobRes = (res: any): JobItemD => {
  if (!res) {
    return {} as JobItemD;
  }

  return {
    id: res?.casting_id,
    // createdAt: res.date_created,
    // expiration: res.asap,
    createdAt: moment(new Date(res.date_created * 1000)).fromNow(),
    expiration: format(new Date(res?.asap * 1000), "MMM dd, yyyy"),
    desc: res?.des,
    favorite: res?.is_favorite,
    location: res.location === "N/A" || !res.location ? "Nationwide, United States" : res?.location,
    title: res?.name,
    rate: parseFloat(res?.rate),
    rateDes: typeof res.rate_des !== "undefined" ? JOB_RATE_DES_OBJ[res.rate_des] || "" : "",
    rolesCount: res?.bam_roles?.length,
    roles: res?.bam_roles?.map((i: any): JobRoleD => formatJobRole({ job: res, role: i })) || [],
    tags: res?.casting_job_categories?.length > 0 ? res?.casting_job_categories?.map((i: any) => i?.casting_job_category?.name) : [],
    type: JOB_SUBMISSION_TYPE_OBJ[res.snr] || "N/A",
    zip: res?.zip,
    market: res?.market,
    union: res?.union2 === 0 ? "Non-union" : "Union",
    category: OLD_CATEGORIES_ID_VALUE_OBJ[res.cat] || "N/A",
    auditionAt: res?.aud_timestamp !== 0 ? format(new Date(res?.aud_timestamp * 1000), "MMM dd, yyyy") : "",
    shootAt: res?.shoot_timestamp !== 0 ? format(new Date(res?.shoot_timestamp * 1000), "MMM dd, yyyy") : "",
    matchedRoleCount: res?.matched_role_count,
  };
};

const formatKey = ({ identify, res }: { identify: string; res: any }) => {
  const one = Object.keys(res)?.filter((i) => i?.includes(identify));
  let keys: string[] = [];
  one.forEach((i) => {
    if (res[i] === 1) {
      keys.push(stringData[identify][i]);
    }
  });

  return keys;
};

export const formatJobCartItem = (res: any): JobCartItemD => {
  return {
    id: res.id,
    role: formatJobRole({ role: res.bam_role, job: res.bam_role?.bam_casting }),
    job: formatJobRes(res.bam_role?.bam_casting),
  };
};
export const formatCdProjectItem = (res: any): cdProjectItem => {
  return {
    date_created: format(new Date(res?.date_created * 1000), "MM/dd/yyyy"),
    asap: format(new Date(res?.asap * 1000), "MM/dd/yyyy"),
    title: res?.name_original,
    role: formatJobRole({ role: res.bam_role, job: res.bam_role?.bam_casting }),
    job: formatJobRes(res.bam_role?.bam_casting),
    casting_id:res?.casting_id,
    status:res?.status
  };
};

const stringData: any = {
  ethnicity: {
    ethnicity_african: "African",
    ethnicity_african_am: "African American",
    // ethnicity_american_in: 'American Indian',
    ethnicity_any: "Any",
    ethnicity_asian: "Asian",
    ethnicity_caribbian: "Caribbian",
    ethnicity_caucasian: "Caucasian",
    ethnicity_east_indian: "Indian",
    ethnicity_hispanic: "Hispanic",
    ethnicity_mediterranean: "Mediterranean",
    ethnicity_middle_est: "Middle East",
    ethnicity_mixed: "Mixed",
    ethnicity_native_am: "American Indian",
    ethnicity_x_asian: "Asian",
    ethnicity_x_black: "Black",
    // ethnicity_x_hispanic: 'Hispanic',
    ethnicity_x_white: "White",
  },
};

export const formatCDInviteItem = (res: any): CDInviteItemD => {
  return {
    id: res.id,
    role: formatJobRole({ role: res.bam_role, job: res.bam_role?.bam_casting }),
    job: formatJobRes(res.bam_role?.bam_casting),
    invitedAt: res.created_at,
    canReply: res.conversation?.campaign_message?.replies === 1,
    chat:
      res.conversation?.messages?.map((i: any): InviteChatItemD => {
        return {
          id: i.id,
          text: i.body,
          sent: i.user_id !== res.inviter_id,
          time: convertToUnix(i.created_at),
        };
      }) || [],
    // message: res.conversation?.campaign_message?.message,
    message: res.conversation?.campaign_message?.message || res.bam_role.campaigns[0].description,

    conversationId: res.conversation?.id,
    vip: Number(res.vip) === 1,
  };
};

export const formatJobSubmissionItem = (res: any): JobSubmissionItemD => {
  return {
    id: res?.id,
    role: formatJobRole({
      role: res?.bam_role,
      job: res?.bam_role?.bam_casting,
    }),
    job: formatJobRes(res?.bam_role?.bam_casting),
    status: res?.status,
    submittedAt: res?.created_at,
  };
};
