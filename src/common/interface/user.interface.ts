import { IErrorState, IParams, IResult, ISuccessState } from './app.interface';

export interface IUserStore {
  isLoadingFetchUser: boolean;
  isLoadingCreateUser: boolean;
  isLoadingUpdateUser: boolean;
  isLoadingDeleteUser: boolean;
  users: any[];
  paramsUser: IParams;
  isUserError: boolean;
  userErrorState: IErrorState;
  isUserSuccess: boolean;
  userSuccessState: ISuccessState;
}

export interface IUserData {
  first_name: string;
  last_name: string;
  telephone: string;
  email: string;
  role: string;
  password: string;
}
