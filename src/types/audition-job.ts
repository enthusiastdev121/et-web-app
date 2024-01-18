export type SuccessStoryItemD = {
  id: number;
  name: string;
  desc: string;
  gender: "male" | "female" | "others";
  ethnicity: any;
  age: string;
  profile_picture: string;
  talentlogin: string;
};

export type communityBuzzItemD = {
  id: number;
  user_id: number;
  name: string;
  message: string;
  profile_picture?: any;
  time: string;
  gender?: "male" | "female" | "others";
  ethnicity?: any;
  age?: string;
  talentlogin?: string;
};
