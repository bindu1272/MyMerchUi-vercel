import axios from "axios";
import handleError from "./handleError";
import * as TYPES from "../constants/actionTypes";
// import { store } from "../index"
// import { store } from "@/app/layout";
import {store} from "@/utilities/configureStore";

// import { store } from "./configureStore";

import * as URLS from "../constants/apiUrls";
// import { createBrowserHistory } from "history";

const env = process.env.NODE_ENV;

/**
/** * creates a custom axios instance
 *
 * return axios instance
 */
const configureAxios = (baseURL) => {
  const axiosConfig = {
    baseURL,
    timeout: 900000,
    cache: false
  };

  const axiosInstance = axios.create(axiosConfig);

  /**
   * interceps every axios request and console
   * log outs the request object in dev mode
   */
  axiosInstance.interceptors.request.use(
    (request) => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        request.headers["Authorization"] = accessToken;
      }
      request.headers["Access-Control-Allow-Origin"] = "*";
      return request;
    }
  );

  /**
   * intercepts the response for axios
   * and handle error
   */
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    err => {
      if (err.response && err.response.status === 401 &&
        !(err.response.data && err.response.data["error"] === "Invalid Credentials")) {
        return new Promise((resolve, reject) => {
          const originalReq = err.config;
          if (err.config && !err.config.__isRetryRequest) {
            const oldAccessToken = localStorage.getItem("access_token")
            const oldRefreshToken = localStorage.getItem("refresh_token");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            if (oldRefreshToken) {
              originalReq._retry = true;
              let res = fetch(process.env.REACT_APP_API_URL + URLS.REFRESH_TOKEN_URL, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrer: 'no-referrer',
                body: JSON.stringify({
                  access_token: oldAccessToken,
                  refresh_token: oldRefreshToken
                }),
              }).then(res => res.json()).then(res => {
                if (res.access_token && res.refresh_token) {
                  localStorage.setItem("access_token", `Bearer ${res.access_token}`);
                  localStorage.setItem("refresh_token", res.refresh_token);
                  originalReq.headers['Authorization'] = localStorage.getItem("access_token");
                  return axios(originalReq);
                } else {
                  store.dispatch({ type: TYPES.LOGOUT_REQUEST });
                  // const history = createBrowserHistory();
                  // history.push("/?showLogin=true");
                  window.location.reload();
                }
              });
              resolve(res);
            } else {
              store.dispatch({ type: TYPES.LOGOUT_REQUEST });
              // const history = createBrowserHistory();
              // history.push("/?showLogin=true");
              window.location.reload();
            }
          } else {
            const error = handleError(err);
            return Promise.reject(error);
          }
        });
      } else {
        const error = handleError(err);
        return Promise.reject(error);
      }
    },
  );

  return axiosInstance;
};

export const api = configureAxios(process.env.REACT_APP_API_URL) //'http://127.0.0.1:8000/api'
export default configureAxios;
