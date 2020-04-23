import axios from 'axios';

export const requestAuth = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_AUTH_SERVICE,
  timeout: 10000,
});

requestAuth.interceptors.request.use(
  (config: any) => {
    // config.headers = UserModule.headers;
    // config.realm = UserModule.realm;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
