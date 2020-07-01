import { IPerpanjanganData } from '../interface/perpanjangan.interface';
import { requestPerpanjangan } from '../utils/request';

export const fetchPerpanjangan = (queryString: string) =>
  requestPerpanjangan({
    url: `/perpanjangans${queryString ? '?' + queryString : ''}`,
    method: 'get',
  });

export const createOnePerpanjangan = (data: IPerpanjanganData) =>
  requestPerpanjangan({
    url: '/perpanjangans',
    method: 'post',
    data,
  });

export const updateOnePerpanjangan = (
  id: string,
  data: Partial<IPerpanjanganData>,
) => {
  return requestPerpanjangan({
    url: '/perpanjangans/' + id,
    method: 'patch',
    data,
  });
};

export const deleteOnePerpanjangan = (id: string) =>
  requestPerpanjangan({
    url: '/perpanjangans/' + id,
    method: 'delete',
  });
