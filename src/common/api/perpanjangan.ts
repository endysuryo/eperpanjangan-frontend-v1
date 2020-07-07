import { IPerpanjanganData } from '../interface/perpanjangan.interface';
import { requestPerpanjangan } from '../utils/request';

export const fetchPerpanjangan = (queryString: string) =>
  requestPerpanjangan({
    url: `/perpanjangan${queryString ? '?' + queryString : ''}`,
    method: 'get',
  });

export const fetchOnePerpanjangan = (id: string) =>
  requestPerpanjangan({
    url: `/perpanjangan/${id}`,
    method: 'get',
  });

export const createOnePerpanjangan = (data: IPerpanjanganData) =>
  requestPerpanjangan({
    url: '/perpanjangan',
    method: 'post',
    data,
  });

export const updateOnePerpanjangan = (
  id: string,
  data: Partial<IPerpanjanganData>,
) => {
  return requestPerpanjangan({
    url: '/perpanjangan/' + id,
    method: 'patch',
    data,
  });
};

export const deleteOnePerpanjangan = (id: string) =>
  requestPerpanjangan({
    url: '/perpanjangan/' + id,
    method: 'delete',
  });

export const uploadImage = (id: string) =>
  requestPerpanjangan({
    url: '/perpanjangan/' + id,
    method: 'delete',
  });
