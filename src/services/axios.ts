import axios from "axios";
import { ENV } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
const dev = ENV === "dev";

const REQUEST_TIMEOUT = 20000;
const axiosClient = axios.create({
  timeout: REQUEST_TIMEOUT,
  timeoutErrorMessage: "REQUEST_TIMEOUT",
});

axiosClient.interceptors.request.use(
  async (request) => {
    console.log("------REQUEST-------: ", request);
    const token = await AsyncStorage.getItem("access_token");
    const tokenType = await AsyncStorage.getItem("token_type");

    console.log("token", token);
    if (token) {
      request.headers = {
        ...request.headers,
        Authorization: `${tokenType} ${token}`,
      };
    }

    const orgToken = await AsyncStorage.getItem("org_token");
    if (orgToken) {
      request.headers = {
        ...request.headers,
        "org-token": `${orgToken}`,
      };
    }

    return request;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error.status);
  }
);

axiosClient.interceptors.response.use(
  async (response) => {
    console.log("------RESPONSE-------: ", response);

    return response;
  },
  (error) => {
    console.log("response -> ", error.response);
    return Promise.reject(error.response);
  }
);

export default axiosClient;
