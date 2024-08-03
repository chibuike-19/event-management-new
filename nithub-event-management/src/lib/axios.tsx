import { API_URL } from "../constants/apiUrl";
import { makeToast } from "../lib/react-toast";
import { AuthContext } from "../context/auth-service";
import axios from "axios";
import { useContext } from "react";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

let retries = 3;


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const LOGIN_ROUTE = "/nitprofile-client/auth/login";

    if (error.response && error.response.status === 401) {
      retries -= 1;

      await fetch(`${API_URL}/auth/refresh-token`, {
        credentials: "include",
      });

      if (retries === 0) {
        makeToast({
          id: "refresh-token-error",
          message: "Your Session has Expired, Please Log in",
          type: "error",
        });

        window.history.pushState(null, "", LOGIN_ROUTE);

        window.location.replace(LOGIN_ROUTE);

        retries = 3;

      }

      return axiosInstance.request(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export { axios, axiosInstance };
