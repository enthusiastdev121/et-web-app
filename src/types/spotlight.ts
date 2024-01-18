export type SpotlightItemD = {
  id: string | number;
  name: string;
  pic: string;
  preview: string;
  createdAt?: string | number;
  items: SpotlightMediaItemsD[];
};

export type SpotlightMediaItemsD = {
  id: string | number;
  createdAt: string;
  header?: {
    heading: string;
    subheading: string;
    pic: string;
  };
  isViewed: boolean;
  type: "image" | "video";
  url: string;
  isView: boolean;
  size?: string | number;
};

export type CommentsD = {
  id: string | number;
  comment: string | number;
  is_like: boolean;
  spotlightmediaId: number;
  userPic: string;
  name: string;
};
