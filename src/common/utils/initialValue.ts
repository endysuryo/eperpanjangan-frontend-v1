import {
  IErrorState,
  IParams,
  IResult,
  ISuccessState,
} from '../interface/app.interface';
import { IPerpanjanganData } from '../interface/perpanjangan.interface';

export const initParams: IParams = {
  filters: [],
  joins: [],
  sorts: [],
  // page: 1,
  // per_page: 10,
};

export const initResult: IResult = {
  count: 0,
  data: [],
  page: 1,
  total: 0,
};

export const initErrorState: IErrorState = {
  statusCode: 0,
  statusText: '',
  message: '',
};

export const initSuccessState: ISuccessState = {
  statusCode: 0,
  statusText: '',
  message: '',
};

export const initPerpanjanganData: IPerpanjanganData = {
  name: '',
  address: '',
  npwp: '',
  phone: '',
};
