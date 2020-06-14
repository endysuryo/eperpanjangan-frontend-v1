import axios from 'axios';

export const requestCustomer = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_EVENT_SERVICE,
  timeout: 10000,
});
