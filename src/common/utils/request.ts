import axios from 'axios';

console.info(
  'bapenda service: ',
  process.env.VUE_APP_API_BASE_URL_BAPENDA_SERVICE,
);
export const requestCustomer = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_BAPENDA_SERVICE,
  timeout: 10000,
});

requestCustomer.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
