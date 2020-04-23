import { requestAuth } from '@/common/utils/request';
import { Auth } from '../interface/auth.interface';

export const login = (data: Auth) => {
  return requestAuth({
    url: 'auth/login',
    method: 'POST',
    data,
  });
};
