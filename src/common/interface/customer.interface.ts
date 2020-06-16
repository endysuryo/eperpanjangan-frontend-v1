import { IErrorState, IParams, IResult, ISuccessState } from './app.interface';

export interface ICustomerStore {
  isLoadingFetchCustomer: boolean;
  isLoadingCreateCustomer: boolean;
  isLoadingUpdateCustomer: boolean;
  isLoadingDeleteCustomer: boolean;
  customers: IResult;
  paramsCustomer: IParams;
  isCustomerError: boolean;
  customerErrorState: IErrorState;
  isCustomerSuccess: boolean;
  customerSuccessState: ISuccessState;
}

export interface ICustomerData {
  name: string;
  address: string;
  phone: string;
  npwp: string;
}
