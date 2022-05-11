import axiosClient from "services/axios";
import qs from "qs";

const buildURLWithParams = (url: string, params: Record<string, string>) => {
  let requestedURL = url;
  if (params) {
    const keys = Object.keys(params);

    if (Array.isArray(keys) && keys.length > 0) {
      requestedURL += "?";
      for (const property of keys) {
        const index = keys.indexOf(property);
        if (index > 0 && index < keys.length) {
          requestedURL += "&";
        }
        requestedURL += `${property}=${params[property]}`;
      }
    }
  }
  return requestedURL;
};

interface IConfigAPI {
  headers?: object;
  params?: Record<string, string>;
  body?: object;
  isNeedParser?: boolean;
}

const headerDefault = {
  "Content-Type": "application/json",
};

export default class APIUtils {
  static async get(url: string, { headers = {}, params = {} }: IConfigAPI) {
    const requestedUrl = buildURLWithParams(url, params);
    const fetchConfig = {
      ...headerDefault,
      ...headers,
    };
    return axiosClient.get(requestedUrl, {
      headers: fetchConfig,
    });
  }

  static async post(
    url: string,
    { headers = {}, body = {}, isNeedParser = false }: IConfigAPI
  ) {
    const fetchConfig = {
      ...headerDefault,
      ...headers,
    };

    return axiosClient.post(url, isNeedParser ? qs.stringify(body) : body, {
      headers: fetchConfig,
    });
  }

  static async put(url: string, { headers = {}, body = {} }: IConfigAPI) {
    const fetchConfig = {
      ...headerDefault,
      ...headers,
    };

    return axiosClient.put(url, qs.stringify(body), {
      headers: fetchConfig,
    });
  }

  static async delete(url: string, { headers = {}, params = {} }: IConfigAPI) {
    const requestedUrl = buildURLWithParams(url, params);
    const fetchConfig = {
      ...headerDefault,
      ...headers,
    };

    return axiosClient.delete(requestedUrl, { headers: fetchConfig });
  }
}
