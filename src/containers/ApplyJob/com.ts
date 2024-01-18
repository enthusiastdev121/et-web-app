import { RoleAssetD } from "types/jobs";

export const ROLE_ASSET_TYPES = {
  photo: 1,
  video: 2,
  audio: 3,
  document: 4,
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

export type AssetQueueD = {
  localId: number;
  file: any;
  type: "audio" | "video" | "image" | "doc";
};

export type AssetUploadD = AssetQueueD & {
  roleId: number;
  onUpload: (d: { data: RoleAssetD; localId: number }) => any;
  onCancel: (localId: number) => any;
};

// 1=photo,2=video,3=audio,4=document
export const formatMediaRes = (res: any): RoleAssetD => {
  return {
    id: res.id,
    type: res.type === "1 " ? "image" : res.type === "2" ? "video" : res.type === "3" ? "audio" : "document",
    name: res?.name,
    createdAt: 0,
    uri: res.bam_media_path_full,
  };
};

export const formatSavedJobRole = (res: any): SavedJobRoleD => {
  return {
    id: res.id,
    email: res.email,
    message: res.message,
    letter: res.cover_letter,
    subject: res.subject,
    name: res?.name,
    audios: res.bam_job_orders_assets
      ?.filter((i) => i.type === ROLE_ASSET_TYPES.audio)
      .map((i: any): RoleAssetD => {
        return {
          createdAt: i.created_at,
          id: i.id,
          type: i.type,
          uri: i.bam_media_path_full,
          name: i?.name || "",
        };
      }),
    videos: res.bam_job_orders_assets
      ?.filter((i) => i.type === ROLE_ASSET_TYPES.video)
      .map((i: any): RoleAssetD => {
        return {
          createdAt: i.created_at,
          id: i.id,
          type: i.type,
          uri: i.bam_media_path_full,
          name: i?.name || "",
        };
      }),
    photos: res.bam_job_orders_assets
      ?.filter((i) => i.type === ROLE_ASSET_TYPES.photo)
      .map((i: any): RoleAssetD => {
        return {
          createdAt: i.created_at,
          id: i.id,
          type: i.type,
          uri: i.bam_media_path_full,
          name: i?.name || "",
        };
      }),
    documents: res.bam_job_orders_assets
      ?.filter((i) => i.type === ROLE_ASSET_TYPES.document)
      .map((i: any): RoleAssetD => {
        return {
          createdAt: i.created_at,
          id: i.id,
          type: i.type,
          uri: i.bam_media_path_full,
          name: i?.name || "",
        };
      }),
  };
};
