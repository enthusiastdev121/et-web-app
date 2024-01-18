import { CLIENT_ID, CLIENT_ID_2 } from "@/utils/constants";
import { WHITELABEL } from "@/utils/envProviders";
import { deleteReq, get, post } from "network";

export const getSearchTalentApi = ({
  page,
  perPage,
  order,
  categories,
  gender,
  ethnicity,
  search,
  dobMin,
  dobMax,
  subcategories,
  state = [],
  country = [],
}: {
  page: number;
  perPage: number;
  order?: string;
  categories?: number[];
  subcategories?: number[];
  gender?: string;
  ethnicity?: string;
  search?: string;
  dobMin?: any;
  dobMax?: any;
  state?: any;
  country?: any;
}) => {
  const p = {
    featured: false,
  };

  let qs = ``;

  if (search) {
    qs = qs + `&searchstring=${search}`;
  }

  if (dobMin) {
    qs = qs + `&dobyyyy_min=${dobMin}`;
  }
  if (dobMax) {
    qs = qs + `&dobyyyy_max=${dobMax}`;
  }

  if (gender !== "" && gender !== "any") {
    qs = qs + `&gender=${gender}`;
  }

  if (ethnicity) {
    qs = qs + `&ethnicity=${ethnicity}`;
  }

  if (order) {
    qs = qs + `&orderBy=${order || "newest"}`;
  }

  if (categories?.length > 0) {
    qs = qs + `&categories=[${JSON.parse(JSON.stringify(categories))}]`;
  }

  if (p.featured) {
    qs = qs + `&featured=true`;
  }

  if (subcategories) {
    qs = qs + `&subcategories=[${JSON.parse(JSON.stringify(subcategories))}]`;
  }
  if (state && state.length > 0) {
    qs = qs + `&state=${state.join()}`;
  }
  if (country && country.length > 0) {
    qs = qs + `&country=${country.join()}`;
  }

  console.log("QS: ", qs);

  return get({
    route: `/v2/talent/talentci?q=[["with","bam_talentinfo1"],["with","bam_talentinfo2"],["with","bam_talent_intro_video"]]${qs}&page=${page}&per_page=${perPage}&client_id=${CLIENT_ID_2}`,
    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const getSearchTalentSubApi = ({
  page,
  perPage,
  order,
  categories,
  gender,
  ethnicity,
  search,
  dobMin,
  dobMax,
  subcategories,
}: {
  page: number;
  perPage: number;
  order: string;
  categories: number[];
  gender: string;
  ethnicity: string;
  search: string;
  dobMin: any;
  dobMax: any;
  subcategories: number[];
}) => {
  const p = {
    featured: false,
  };

  let qs = ``;

  if (search) {
    qs = qs + `&searchstring=${search}`;
  }

  if (dobMin) {
    qs = qs + `&dobyyyy_min=${dobMin}`;
  }
  if (dobMax) {
    qs = qs + `&dobyyyy_max=${WHITELABEL === "talento" ? new Date().getFullYear() - 18 : dobMax}`;
  }

  if (gender !== "" && gender !== "any") {
    qs = qs + `&gender=${gender}`;
  }

  if (ethnicity) {
    qs = qs + `&ethnicity=${ethnicity}`;
  }

  if (order) {
    qs = qs + `&orderBy=${order}`;
  }

  if (categories?.length > 0) {
    qs = qs + `&categories=[${JSON.parse(JSON.stringify(categories))}]`;
  }
  if (subcategories) {
    qs = qs + `&subcategories=[${JSON.parse(JSON.stringify(subcategories))}]`;
  }

  if (p.featured) {
    qs = qs + `&featured=true`;
  }

  console.log("qs: ", qs);
  return get({
    route: `/v2/talent/talentci?q=[["with","bam_talentinfo1"],["with","bam_talentinfo2"],["with","bam_talentinfo3"],["with","bam_talent_resume"],["with","tag_career"],["with","bam_job_experience_models"],["with","bam_talent_credit_experiences"],["with","bam_job_experience_film_stages"],["with","bam_job_experience_photographers"],["with","bam_job_experience_presenters"],["with","bam_job_experience_actors"],["with","bam_talent_interest"],["with","bam_talent_intro_video"]]${qs}&page=${page}&per_page=${perPage}&client_id=${CLIENT_ID_2}`,
    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};

export const getSearchTalentCategoryApi = (token: any) => {
  return get({
    route: `/v1/categories?q=[["with","subcategories"]]&client_id=${CLIENT_ID}`,
    config: {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const followTalentApi = ({ data, token }: { data: any; token: string }) => {
  return post({
    route: "/v2/talent/talent_following",
    data,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
export const unfollowTalentApi = ({ data, token }: { data: any; token: string }) => {
  return deleteReq({
    route: `/v2/talent/unfollow?profile_id=${data}`,
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getNetworkUserListApi = ({ token, talentnum, type, page, perPage, search }: { token: string; talentnum?: number; type: any; page: number; perPage: number; search?: string }) => {
  let q = "";
  if (talentnum) {
    q = `&talentnum=${talentnum}`;
  }
  return get({
    route: `/v2/talent/talent_following?page=${page}&per_page=${perPage}&type=${type}${q}`,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};
