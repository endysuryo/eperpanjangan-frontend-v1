import { requestAuth } from '../utils/request';

export const getUsers = (params: any) =>
  requestAuth({
    url: 'users',
    method: 'get',
    params,
  });

export const getUserInfo = (data: any) =>
  requestAuth({
    url: 'users/info',
    method: 'post',
    data,
  });

export const getUserByName = (username: string) =>
  requestAuth({
    url: `users/${username}`,
    method: 'get',
  });

export const updateUser = (username: string, data: any) =>
  requestAuth({
    url: `users/${username}`,
    method: 'put',
    data,
  });

export const deleteUser = (username: string) =>
  requestAuth({
    url: `users/${username}`,
    method: 'delete',
  });

export const login = (data: any) =>
  requestAuth({
    url: 'users/login',
    method: 'post',
    data,
  });

export const logout = () =>
  requestAuth({
    url: 'users/logout',
    method: 'post',
  });

export const register = (data: any) =>
  requestAuth({
    url: 'users/register',
    method: 'post',
    data,
  });
