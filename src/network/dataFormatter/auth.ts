import { UserProfile } from "types/profile";

export const formatUserData = (res: any): UserProfile => {
  console.log("RES", res);
  return {
    email: res.email,
    pic: res.profile_picture_path || "",
    phoneNumber: 88,
    providerId: "apple.com",
    uid: res?.firebase_uid,
    talentlogin: res?.talentlogin,
    talentnum: res?.talentnum,
    firstName: res?.fname,
    gender: res?.sex,
    lastName: res?.lname,
    name: res.fname + " " + res?.lname,
  };
};
