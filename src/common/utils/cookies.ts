import Cookies from 'js-cookie';

// User
const tokenKey = '';
const realmKey = '';

export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) =>
  Cookies.set(tokenKey, token, { expires: 60000 });
export const getRealm = () => Cookies.get(realmKey);
export const setRealm = (realm: string) =>
  Cookies.set(realmKey, realm, { expires: 60000 });
export const removeToken = () => Cookies.remove(tokenKey);
export const removeRealm = () => Cookies.remove(realmKey);
