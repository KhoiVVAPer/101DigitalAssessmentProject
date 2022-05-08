import axios from "axios";
import { ENV } from "@env";
const dev = ENV === "dev";

const REQUEST_TIMEOUT = 20000;
const axiosClient = axios.create({
  timeout: REQUEST_TIMEOUT,
  timeoutErrorMessage: "REQUEST_TIMEOUT",
});

axiosClient.interceptors.request.use(
  (request) => {
    console.log("------REQUEST-------: ", request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    console.log("------RESPONSE-------: ", response);
    return response;
  },
  (error) => {
    console.log(error, JSON.stringify(error));
    return Promise.reject(error.response);
  }
);

export default axiosClient;