import { IUserData } from '../interface/user.interface';
import { requestUser } from '../utils/request';

export const fetchUser = (queryString: string) =>
  requestUser({
    url: `/user${queryString ? '?' + queryString : ''}`,
    method: 'get',
  });

export const createOneUser = (data: IUserData) =>
  requestUser({
    url: '/user',
    method: 'post',
    data,
  });

export const updateOneUser = (id: string, data: Partial<IUserData>) => {
  return requestUser({
    url: '/user/' + id,
    method: 'patch',
    data,
  });
};

export const deleteOneUser = (id: string) =>
  requestUser({
    url: '/user/' + id,
    method: 'delete',
  });
