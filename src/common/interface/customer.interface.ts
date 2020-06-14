import { IData } from './base.interface';

export interface ICustomerState {
  customers: any;
  customer: {} | any;
}

export interface ICustomer extends IData {
  name: string;
  address: string;
  phone: string;
  npwp: string;
}

export const InitCustomer: ICustomer = {
  name: '',
  address: '',
  phone: '',
  npwp: '',
};
