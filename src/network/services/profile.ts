import { getProfileDetailApi } from "../apis/app";
import {
  fetchOwnAudiosApi,
  fetchOwnDocumentsApi,
  fetchOwnPhotosApi,
  fetchOwnVideosApi,
} from "network/apis/ownProfile";
import {
  formatAudioNodeOwn,
  formatDocumentNodeOwn,
  formatPhotoNodeOwn,
  formatUserProfile,
  formatVideoNodeOwn,
} from "network/apiFormatter/profile";
import {
  AudioItemD,
  DocumentItemD,
  InterestTypeD,
  PhotoItemD,
  SubInterestTypeD,
  UserProfileOwnD,
  VideoItemD,
} from "types/profile";
import { ownProfileQuery } from "network/apis/profile";

export const getProfileDetailService = async ({ token }: { token: string }) => {
  return new Promise<UserProfileOwnD>(async (resolve, reject) => {
    try {
      const res = await getProfileDetailApi(ownProfileQuery, token);
      console.log("OWN PROFLE RES", res);
      const newR = formatUserProfile(res);

      // console.log("newR", newR)

      resolve(newR);
    } catch (err) {
      console.log("ERR", err);
      reject(err);
    }
  });
};

// PHOTOS
export const fetchOwnPhotosService = async ({
  token,
  page,
  perPage = 20,
}: {
  token: string;
  page: number;
  perPage?: number;
}) => {
  return new Promise<{
    total: number;
    data: PhotoItemD[];
  }>(async (resolve, reject) => {
    try {
      const res = await fetchOwnPhotosApi({ token, page, perPage });
      // console.log('PHOTOS RES', res);
      if (res.data) {
        resolve({
          data: res.data.map(
            (i: any): PhotoItemD => ({
              ...formatPhotoNodeOwn(i),
            })
          ),
          total: Number(res.total),
        });
      }
    } catch (err) {
      console.log("ERR", err);
      reject(err);
    }
  });
};

// VIDEOS
export const fetchOwnVideosService = async ({
  token,
  page,
  perPage = 20,
  userId,
}: {
  token: string;
  page: number;
  perPage?: number;
  userId?: any;
}) => {
  return new Promise<{
    total: number;
    data: VideoItemD[];
  }>(async (resolve, reject) => {
    try {
      const res = await fetchOwnVideosApi({ token, page, perPage, userId });
      // console.log('VIDOES RES', res);
      if (res.data) {
        resolve({
          data: res.data.map(
            (i: any): VideoItemD => ({
              ...formatVideoNodeOwn(i),
            })
          ),
          total: Number(res.total),
        });
      } else {
        reject(res);
      }
    } catch (err) {
      console.log("ERR", err);
      reject(err);
    }
  });
};

// AUDIO
export const fetchOwnAudiosService = async ({
  token,
  page,
  perPage = 20,
  userId,
}: {
  token: string;
  page: number;
  perPage?: number;
  userId?: any;
}) => {
  return new Promise<{
    total: number;
    data: AudioItemD[];
  }>(async (resolve, reject) => {
    try {
      const res = await fetchOwnAudiosApi({ token, page, perPage, userId });
      // console.log('AUDIOS RES', res);
      if (res.data) {
        resolve({
          data: res.data.map((i: any) => ({
            ...formatAudioNodeOwn(i),
          })),
          total: Number(res.total),
        });
      } else {
        reject(res);
      }
    } catch (err) {
      console.log("ERR", err);
      reject(err);
    }
  });
};

//DOCUMENTS
export const fetchOwnDocumentsService = async ({
  token,
  page,
  perPage = 20,
  userId,
}: {
  token: string;
  page: number;
  perPage?: number;
  userId?: any;
}) => {
  return new Promise<{
    total: number;
    data: DocumentItemD[];
  }>(async (resolve, reject) => {
    try {
      const res = await fetchOwnDocumentsApi({ token, page, perPage, userId });
      // console.log('DOCUMENT RES', res);
      if (res.data) {
        resolve({
          data: res.data.map(
            (i: any): DocumentItemD => ({
              ...formatDocumentNodeOwn(i),
            })
          ),
          total: Number(res.total),
        });
      } else {
        reject(res);
      }
    } catch (err) {
      console.log("ERR", err);
      reject(err);
    }
  });
};
