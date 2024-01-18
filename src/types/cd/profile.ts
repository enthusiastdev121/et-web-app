export type CdUserProfileD = {
  id: number;
  // uid?: string;
  // name: string;
  // fname: string;
  // lname: string;
  email: string;
  company: any;
  role: any;
  fname: string;
  lname: string;
  date_created: number;
  // pic: string;
  // userType?: "cd";
};

export type UserCdProfileOwnD = CdUserProfileD & {
  loading?: boolean;
  categories: any;
};
