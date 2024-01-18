/**
 * ALL
 */

export type SubInterestTypeD = {
  label: string;
  id: number;
  categoryId?: number;
};
export type InterestTypeD = {
  id: number;
  label: string;
  sub: SubInterestTypeD[];
};

export type SocialLinksD = {
  facebook: string;
  youtube: string;
  instagram: string;
  imdb: string;
  twitter: string;
  tiktok: string;
  external: string;
};

export type CreditExperinceItemD = {
  id: number;
  role: string;
  production: string;
  year: number;
};

export type FeaturedImageTypeD = "image1" | "image2" | "image3" | "image4";

export type FeaturedImageD = {
  id: number;
  uri: string;
  key: FeaturedImageTypeD;
  type: FeaturedImageTypeD;
};

export type FeaturedImagesD = {
  image1: FeaturedImageD;
  image2: FeaturedImageD;
  image3: FeaturedImageD;
  image4: FeaturedImageD;
};

export type IntroVideoD = {
  id: number;
  uri: string;
  size: number;
  duration: number;
  thumb?: string;
};

export type UserProfileD = {
  id: number;
  conversation_id: string;
  pic: string;
  address: string;
  introVideo: IntroVideoD;
  featuredImages: FeaturedImagesD;
  uid: string;
  name: string;
  fname: string;
  lname: string;
  age: number;
  ageRange: string;
  ageRangeText: string;
  bio: string;
  email: string;
  talentlogin: number;
  city: string;
  country: string;
  zip: string;
  interest: InterestTypeD[];
  gender: "male" | "female" | "others";
  pro: boolean;
  featured: boolean;
  weightkilos: number;
  weightpounds: number;
  heightfeet: number;
  heightinches: number;
  heightsm: number;
  vip: boolean;
  joinStatus: 1 | 2 | 3 | 4 | 5 | number;
  ethnicity: string;
  creditExperience: CreditExperinceItemD[];
  shortResume: string;
  categories: any;
  aboutMe: string;
  phone: string;
  phone2: string;
  phone3: string;
  companyName: string;
  profilePageLink: string;
  displayName: string;
  socialLinks: SocialLinksD;
  dob: {
    day: number;
    year: number;
    month: number;
  };
  state: string;
  eyecolor: string;
  waist: number;
  shirt: number;
  bodyType: string;
  hairstyle: string;
  haircolor: string;
  followers: number;
  following: number;
  connects: number;
  isFollower: boolean;
  isFollowing: boolean;
  friendStatus: "pending" | "active" | null;
  talentnum: number;
  documentCount: number;
  videoCount: number;
  songCount: number;
  photoCount: number;
  claim?: boolean;
  userType?: "talent";
  createdAt: any;
};

export type PhotoItemD = {
  id: number;
  uri: string;
  name: string;
  size?: number;
  createdAt: number;
  hidden: boolean;
  primary: boolean;
  caption: string;
};

export type VideoItemD = {
  id: number;
  uri: string;
  thumb: string;
  title: string;
  createdAt: number;
  desc: string;
  duration?: number;
  hidden: boolean;
  primary: boolean;
};

export type AudioItemD = {
  id: number;
  uri: string;
  title: string;
  createdAt: number;
  desc: string;
  thumb?: string;
  duration?: number;
  hidden: boolean;
  primary: boolean;
};
export type DocumentItemD = {
  id: number;
  uri: string;
  createdAt: number;
  name: string;
  size?: number;
  type?: string;
  hidden: boolean;
  primary: boolean;
};

/**
 * OWN
 */

export type UserProfileOwnD = UserProfileD & {
  loading?: boolean;
  categories: any;
  start_date_ts: number;
  bam_talentrecurring: {
    cxl: 0 | 1;
    cxl_cd: 0 | 1;
    cxl_date_ts: number;
    cxl_reason: 0 | 1;
    cxl_req_ts: number;
    recurring_status: 0 | 1;
    start_date_ts: 0 | 1;
  };
};

export type PhotoItemOwnD = PhotoItemD & {
  hidden: boolean;
  primary: boolean;
};
export type VideoItemOwnD = VideoItemD & {
  hidden?: boolean;
  primary?: boolean;
};
export type AudioItemOwnD = AudioItemD & {
  hidden?: boolean;
};
export type DocumentItemOwnD = DocumentItemD & {
  hidden?: boolean;
  primary?: boolean;
};

// image
export type ApiImage = {
  uri: string;
  type: string;
  name: string;
  filename: string;
};
