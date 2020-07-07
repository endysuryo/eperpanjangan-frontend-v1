import axios from 'axios';

export const requestPerpanjangan = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_DISHUB_SERVICE,
  timeout: 10000,
});

requestPerpanjangan.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const requestUser = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_DISHUB_SERVICE,
  timeout: 10000,
});

requestUser.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
