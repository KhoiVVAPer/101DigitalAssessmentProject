import axiosClient from "services/axios";
import qs from "qs";
import axios from "axios";

const buildURLWithParams = (url: string, params: Record<string, any>) => {
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
  headers?: Record<string, any>;
  params?: Record<string, any>;
  body?: Record<string, any>;
}

const headerDefault = {
  "Content-Type": "application/json",
  Accept: "application/json; charset=utf-8",
};

export default class APIUtils {
  static async get(url: string, { headers = {}, params = {} }: IConfigAPI) {
    const requestedUrl = buildURLWithParams(url, params);
    const fetchConfig = {
      ...headerDefault,
      ...headers,
    };
    return axiosClient.get(requestedUrl, { headers: fetchConfig });
  }

  static async post(url: string, { headers = {}, body = {} }: IConfigAPI) {
    const fetchConfig = {
      ...headerDefault,
      ...headers,
    };

    return axiosClient.post(url, qs.stringify(body), {
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
