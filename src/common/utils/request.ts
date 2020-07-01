import axios from 'axios';

console.info(
  'bapenda service: ',
  process.env.VUE_APP_API_BASE_URL_DISHUB_SERVICE,
);
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
