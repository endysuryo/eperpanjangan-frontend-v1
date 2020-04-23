import { requestAuth } from '@/common/utils/request';
import { IAuth } from '../interface/auth.interface';

export const login = (data: IAuth) => {
  return requestAuth({
    url: 'auth/login',
    method: 'POST',
    data,
  });
};
