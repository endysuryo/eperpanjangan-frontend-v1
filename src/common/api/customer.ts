import { ICustomerData } from '../interface/customer.interface';
import { requestCustomer } from '../utils/request';

export const fetchCustomer = (queryString: string) =>
  requestCustomer({
    url: `/customers${queryString ? '?' + queryString : ''}`,
    method: 'get',
  });

export const createOneCustomer = (data: ICustomerData) =>
  requestCustomer({
    url: '/customers',
    method: 'post',
    data,
  });

export const updateOneCustomer = (id: string, data: Partial<ICustomerData>) => {
  return requestCustomer({
    url: '/customers/' + id,
    method: 'patch',
    data,
  });
};

export const deleteOneCustomer = (id: string) =>
  requestCustomer({
    url: '/customers/' + id,
    method: 'delete',
  });
