import { deleteReq, ENDPOINT, get, patch, post } from "network";

//PROFILE
export const updateProfileDetailApi = ({ token, talentnum, raw }: { token: string; talentnum: any; raw: object }) => {
  return patch({
    route: "/v2/talent/talentci/" + talentnum,
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

// GUARDIAN PROFILE
export const updateGuardianProfileDetailApi = ({ token, raw }: { token: string; raw: object }) => {
  return post({
    route: "/v2/talent/talentinfo3",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

// DETAILS
export const updateSocialLinksApi = ({ token, raw }: { token: string; raw: object }) => {
  return post({
    route: "/v1/talent/social_media",

    data: JSON.stringify(raw),

    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const updateTalentInterestApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/talent_interests",

    data: data,

    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addCreditExperienceApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/credit_experiences",
    data: data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const updateCreditExperienceApi = (token: string, { id, data }: any) => {
  return patch({
    route: "/v1/talent/credit_experiences/" + id,
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const deleteCreditApi = (token: string, id: any) => {
  return deleteReq({
    route: "/v1/talent/credit_experiences/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addInfluencerApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_influencers",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addExtrasApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_extras",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addPhotographyApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_photographers",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addHairMakeupApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_makeup_hair",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addMusicApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_musicians",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addModelingApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_models",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addDanceApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_dancer_teachers",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addTvRealityApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_tv_show",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addPresentingApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_presenters",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addActingApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_actor",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const updatePhysicalAttrsApi = (token: string, data: any) => {
  return post({
    route: "/v2/talent/talentinfo1",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const addFilmStageApi = (token: string, data: any) => {
  return post({
    route: "/v1/talent/job_experience_film_stage",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const uploadMedia = (token: string) => {
  return {
    photo: {
      route: ENDPOINT + "/v2/talent/talent_media2",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const getLocationByIp = () => {
  return get({
    route: "/v2/get_location_by_ip",
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const setCastingCategories = ({ token, raw }: { token: string; raw: object }) => {
  return post({
    route: "/v2/talent/casting_categories",

    data: JSON.stringify(raw),
    // data: raw,

    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getSelectedCastingCategories = ({ token }: { token: string }) => {
  return get({
    route: "/v2/talent/casting_categories",
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getNearestMarketsApi = ({ lat, lon }: { lat: number; lon: number }) => {
  return get({
    route: `/v2/nearest_markets?lat=${lat}&lon=${lon}`,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const getAllMarketsApi = () => {
  return get({
    route: `/v2/markets?per_page=315`,
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const setSelectedMarketsApi = ({ token, raw }: { token: string; raw: object }) => {
  return post({
    route: "/v2/talent/talentinfo2",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getOwnContestApi = (token: string) => {
  return get({
    route: `/v2/talent/et_contest/get_my_contests`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

//INFO
export const updateProfileInfoApi = ({ token, raw }: { token: string; raw: { special_skills?: string; experience?: string; ethnicity?: string } }) => {
  // special_skills -About me
  //experience  - Short Resume

  return post({
    route: "/v2/talent/talentinfo2",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

// OWN PHOTOS
export const uploadPhotoRoute = ENDPOINT + "/v2/talent/talent_media2";
export const uploadPhotoApi = ({ token, id, formData }: { token: string; id: number; formData: any }) => {
  return post({
    route: "/v2/talent/talent_media2",
    data: formData,
    config: {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const deletePhotoApi = ({ token, id }: { token: string; id: number }) => {
  return deleteReq({
    route: "/v2/talent/talent_media2/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const fetchOwnPhotosApi = ({ token, page, perPage, userId }: { token: string; page: number; perPage: number; userId?: any }) => {
  if (userId) {
    return get({
      route: `/v2/talent/talent_media2?talentnum=${userId}&page=${page}&per_page=${perPage}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/talent_media2?page=${page}&per_page=${perPage}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  }
};

export const updatePhotoApi = ({ token, id, raw }: { token: string; id: number; raw: any }) => {
  return post({
    route: `/v2/talent/talent_media2/${id}?_method=PATCH`,
    data: raw,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

/*
  Profile Gallery
*/

// Featured Images
export const addFeaturedImageApi = ({ token, raw }: { token: string; raw: any }) => {
  return post({
    route: "/v2/talent/talent_featured_images",
    data: raw,
    config: {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const deleteFeaturedImageApi = ({ token, id }: { token: string; id: number }) => {
  return deleteReq({
    route: "/v2/talent/talent_featured_images/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

// Headshot
export const deleteProfilePicApi = ({ token }: { token: string }) => {
  return deleteReq({
    route: "/v2/talent/profile_pic",
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const addProfilePicApi = (token: string, data: any) => {
  return post({
    route: "/v2/talent/talent_media2",
    data,
    config: {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    },
  });
};

// OWN VIDEOS
export const uploadVideoRoute = ENDPOINT + "/v2/talent/videos";
export const updateVideoRoute = (id: any) => ENDPOINT + `/v2/talent/videos/${id}?_method=PATCH`;
export const updateVideoApi = (token: string, id: number, raw: any) => {
  return post({
    route: `/v2/talent/videos/${id}?_method=PATCH`,
    data: raw,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const fetchOwnVideosApi = ({ token, page, perPage, userId }: { token: string; page: number; perPage: number; userId?: number }) => {
  if (userId) {
    return get({
      route: `/v2/talent/videos?page=${page}&per_page=${perPage}&talentnum=${userId}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/videos?page=${page}&per_page=${perPage}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  }
};
export const deleteVideoApi = ({ token, id }: { token: string; id: number }) => {
  return deleteReq({
    route: "/v2/talent/videos/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

// OWN AUDIO
export const deleteAudioApi = ({ token, id }: { token: string; id: number }) => {
  return deleteReq({
    route: "/v2/talent/songs/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const uploadAudioRoute = ENDPOINT + "/v2/talent/songs";
export const updateAudioRoute = (id: any) => ENDPOINT + `/v2/talent/songs/${id}?_method=PATCH`;

export const fetchOwnAudiosApi = ({ token, page, perPage, userId }: { token: string; page: number; perPage: number; userId?: any }) => {
  if (userId) {
    return get({
      route: `/v2/talent/songs?page=${page}&per_page=${perPage}&talentnum=${userId}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/songs?page=${page}&per_page=${perPage}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  }
};

// OWN DOCUMENTS
export const uploadDocumentRoute = ENDPOINT + "/v2/talent/talent_documents";
export const deleteDocumentApi = ({ token, id }: { token: string; id: number }) => {
  return deleteReq({
    route: "/v2/talent/talent_documents/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const fetchOwnDocumentsApi = ({ token, page, perPage, userId }: { token: string; page: number; perPage: number; userId?: any }) => {
  if (userId) {
    return get({
      route: `/v2/talent/talent_documents?page=${page}&per_page=${perPage}&talentnum=${userId}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  } else {
    return get({
      route: `/v2/talent/talent_documents?page=${page}&per_page=${perPage}`,
      config: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    });
  }
};

export const storeJoinAgreementApi = ({ token }: { token: string }) => {
  return post({
    route: `/v2/talent/set_talent_agreement`,
    data: "{}",
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
