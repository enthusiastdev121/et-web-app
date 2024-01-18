import { WHITELABEL } from "@/utils/envProviders";
import { get, post, put } from "network";
import { apiMiddleware } from "network/apiMiddleware";
import { WHITELABELS } from "utils/whitelabelConfig";

export const loginApi = (data: object) => {
  return post({
    route: "/login",
    data: JSON.stringify(apiMiddleware({ type: "json", raw: data })),
    config: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export const getProfileApi = ({ id, token }: { id: number; token: string }) => {
  return get({
    route: "/profile/" + id,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export const getConfig = () => {
  let domain: any;
  let source: any;

  switch (WHITELABEL) {
    case WHITELABELS.exploretalent:
      domain = "exploretalent.com";
      source = "www.exploretalent.com";
      break;
    case WHITELABELS.talento:
      domain = "talento.com";
      source = "www.talento.com";
      break;
    case WHITELABELS.auditions:
      domain = "auditions.com";
      source = "www.auditions.com";
      break;
    default:
      domain = "exploretalent.com";
      source = "www.exploretalent.com";
  }

  return get({
    route: `/v2/config?domain=${domain}&source=${source}`,
    config: {
      headers: {},
    },
  });
};

export const setTalentGeneralDetails = ({
  token,
  raw,
}: {
  token: string;
  raw: {};
}) => {
  return post({
    route: "/v2/talent/talent_general",
    data: JSON.stringify(raw),
    config: {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  });
};
