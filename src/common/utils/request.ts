import { UserModule } from '@/store/modules/user';
import axios from 'axios';
import { FileModule } from '../../store/modules/file';

/* auth request api */
export const requestAuth = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_AUTH_SERVICE,
  timeout: 10000,
});

requestAuth.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

/* program request api */
export const requestProgram = axios.create({
  baseURL: process.env.VUE_APP_API_PROGRAM_SERVICE_URL,
  timeout: 10000,
});

requestProgram.interceptors.request.use(
  (config: any) => {
    config.headers = UserModule.headers;
    config.realm = UserModule.realm;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

/* file request api */
export const requestFile = axios.create({
  baseURL: process.env.VUE_APP_API_FILE_SERVICE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onUploadProgress: (progressEvent: any) => {
    const uploadPercentage: any = Math.round(
      (progressEvent.loaded / progressEvent.total) * 100,
    );
    FileModule.updateUploadPrecentage(uploadPercentage);
  },
});

requestFile.interceptors.request.use(
  (config: any) => {
    config.headers = UserModule.headers;
    config.realm = UserModule.realm;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
