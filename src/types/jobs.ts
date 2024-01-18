export type JobRoleD = {
  // role_matched: any;
  id: number;
  jobId: number;
  name: string;
  desc: string;
  gender: "Male" | "Female" | "Any";
  ethnicity: string[];
  expiration: string;
  expirationT?: any;
  age: string;
  applied: boolean;
  inCart: boolean;
  categories: any;
  talentCount: any;
  matched: boolean;
};

export type JobItemD = {
  id: number;
  title: string;
  createdAt: string;
  expiration: string;
  location: string;
  tags: string[];
  desc: string;
  rolesCount: number;
  matchedRoleCount: number;

  // heading:any;
  // description:string;
  // matchingRoles:any;
  // dateCreated:any;
  // showFav:boolean;
  // showDelete:boolean;
  // onFav:any;
  // openApplyJobModal:any;
  // onAddToCart:any;
  // onApply:any;

  roles: JobRoleD[];
  favorite: boolean;
  rate: number;
  rateDes: string;
  type: string;
  zip: string;
  market: string;
  union: any;
  category: any;
  auditionAt?: any;
  shootAt?: any;
};

export type JobCartItemD = {
  id: number;
  role: JobRoleD;
  job: JobItemD;
};
export type cdProjectItem = {
  date_created: any;
  asap: any;
  title: string;
  role: JobRoleD;
  job: JobItemD;
};
export type JobSubmissionItemD = {
  id: number;
  role: JobRoleD;
  job: JobItemD;
  submittedAt: number;
  status: number;
};

//
export type InviteChatItemD = {
  id: number;
  sent: boolean;
  text: string;
  time: number;
};

export type CDInviteItemD = {
  id: number;
  role: JobRoleD;
  job: JobItemD;
  invitedAt: number;
  canReply: boolean;
  chat: InviteChatItemD[];
  message: string;
  conversationId: number;
  vip: boolean;
};

export type RoleAssetD = {
  id: number;
  uri: string;
  createdAt: number;
  name?: string;
  type: "audio" | "video" | "image" | "document";
};
export type SavedJobRoleD = {
  id: number;
  photos: RoleAssetD[];
  videos: RoleAssetD[];
  documents: RoleAssetD[];
  audios: RoleAssetD[];
  letter: string;
  message: string;
  email: string;
  name: string;
  subject: string;
};

// GET:
// /v2/search/projects?q=[["with","casting_job_categories.casting_job_category.casting_job_subcategories.subcategory"],["with",{"bam_roles":[["orderBy","expiration_timestamp","DESC"]]}]]&categories=[1,2]

// Community Buzz List
// GET: /v2/community_buzz

//sucess stories
// GET /v2/testimonials

// https://api.exploretalent.com/v1/talent/projects?page=1&per_page=30client_id=1d59bcbe8a9d6dd315af8bc2c3363a7a337cfd5a

//get contests
// GET /v2/talent/et_contest/contests

//get community-buzz
// GET /v2/trollbox
