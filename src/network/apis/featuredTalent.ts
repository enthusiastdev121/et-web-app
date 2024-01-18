import { get } from "network";

export const getFeaturedTalentApi = (page = 1, perPage = 20 ) => {
  return get({
    route: `/v2/talent/featured_talents?q=[["with","bam_talentinfo1"],["with","bam_talentinfo2"],["with","bam_talentinfo3"],["with","bam_talent_resume"],["with","tag_career"]]&page=${page}&per_page=${perPage}`,

    config: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
};
