export interface IUserState {
  token: string;
  name: string;
  avatar: string;
  roles: string[];
  role: string;
  realm: string;
  email: string;
  headers: any;
  authorization: any;
  user_id: any;
}

export const InitUserState: IUserState = {
  token: '',
  name: '',
  avatar: '',
  roles: [],
  role: '',
  realm: '',
  email: '',
  headers: '',
  authorization: '',
  user_id: '',
};
