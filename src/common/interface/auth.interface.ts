export interface IAuth {
  username: string;
  password: string;
}

export interface IAuthState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
  id: string;
}
