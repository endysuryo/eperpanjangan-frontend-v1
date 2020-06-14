import { requestCustomer } from '../utils/request';

export const getCustomers = (params?: any) => {
  return requestCustomer({
    url: `/customers`,
    method: 'get',
  });
};

export const getCustomer = (id: string, params?: any) =>
  requestCustomer({
    url: `/customers/${id}`,
    method: 'get',
    params,
  });

export const createCustomer = (data: any) =>
  requestCustomer({
    url: `/customers`,
    method: 'post',
    data,
  });

export const createCustomerBulk = (data: any) =>
  requestCustomer({
    url: `/customers/bulk`,
    method: 'post',
    data,
  });

export const updateCustomer = (data: any) =>
  requestCustomer({
    url: `/customers/${data.id}`,
    method: 'patch',
    data,
  });

export const deleteCustomer = (id: string) =>
  requestCustomer({
    url: `/customers/${id}`,
    method: 'delete',
  });
