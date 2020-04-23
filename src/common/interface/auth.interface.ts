export interface Auth {
  username: string;
  password: string;
}

export interface AuthState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
  id: string;
}
