import React from "react";
import { UserCdProfileOwnD } from "types/cd/profile";
import { UserProfileOwnD } from "types/profile";

export interface ProfileStoreInterface {
  profile: UserProfileOwnD;
  // cdProfile:UserCdProfileOwnD;
  setCdProfile: React.Dispatch<React.SetStateAction<UserCdProfileOwnD>>;
  setProfile: React.Dispatch<React.SetStateAction<UserProfileOwnD>>;
  placeHolder: any;
  categoryPlaceholder: any;
  replaceInterest: any;
  refreshProfile: () => any;
  fetchCdProfile: () => any;
  fetchProfile: () => any;
  loading: boolean;
  refreshing: boolean;
}
//
export type PaginationItem = {
  current: number;
  total: number;
  limit: number;
};

export interface Pagination {
  photos: PaginationItem;
  videos: PaginationItem;
  audios: PaginationItem;
  documents: PaginationItem;
}
