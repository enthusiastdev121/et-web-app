export const ENDPOINT = "https://api.exploretalent.com";
// export const ENDPOINT = "http://52.3.114.14";
// export const ENDPOINT = "https://next-api.exploretalent.com";

export const post = ({ route, data, config }: PostParams): Promise<any> => {
  return fetch(ENDPOINT + route, {
    method: "POST", // or 'PUT'
    headers: {
      ...config.headers,
    },
    body: data,
  })
    .then(async (response) => {
      if (response.ok) {
        try {
          const jst = await response.json();
          return jst;
        } catch (err2) {
          return {};
        }
      } else {
        const err = await response.json();
        throw err;
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const put = ({ route, config, data }: PutParams): Promise<any> => {
  return fetch(ENDPOINT + route, {
    method: "PUT", // or 'PUT'
    headers: {
      ...config.headers,
    },
    body: data,
  })
    .then(async (response) => {
      if (response.ok) {
        return response.json();
      } else {
        const err = await response.json();
        throw err;
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const get = ({ route, config }: GetParams): Promise<any> => {
  return fetch(ENDPOINT + route, {
    method: "GET", // or 'PUT'
    headers: {
      ...config?.headers,
    },
  })
    .then(async (response) => {
      if (response.ok) {
        return response.json();
      } else {
        const err = await response.json();
        throw err;
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const deleteReq = ({ route, config, data }: DeleteParams): Promise<any> => {
  return fetch(ENDPOINT + route, {
    method: "DELETE", // or 'PUT'
    headers: {
      ...config.headers,
    },
    // body: data,
  })
    .then(async (response) => {
      if (response.ok) {
        return response.text();
      } else {
        const err = await response.json();
        throw err;
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const patch = ({ route, data, config }: PatchParams) => {
  console.log("PATCH DATA--", ENDPOINT + route, data, config);
  return fetch(ENDPOINT + route, {
    method: "PATCH", // or 'PUT'
    headers: {
      ...config.headers,
    },
    body: data,
  })
    .then(async (response) => {
      if (response.ok) {
        return response.json();
      } else {
        const err = await response.json();
        throw err;
      }
    })
    .catch((err) => {
      // console.log('POST err', err);
      throw err;
    });
};

/**
 * Types
 */

type Config = {
  headers: object;
};

type GetParams = {
  route: string;
  config?: Config;
};
type PostParams = {
  route: string;
  data: any;
  config: Config;
};
type PutParams = {
  route: string;
  data: any;
  config: Config;
};
type PatchParams = {
  route: string;
  data: any;
  config: Config;
};
type DeleteParams = {
  route: string;
  data?: any;
  config: Config;
};
