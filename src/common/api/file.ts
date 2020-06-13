import { requestFile } from '../utils/request';

export const uploadFile = (data: any) => {
  return requestFile({
    url: '/file/upload',
    method: 'post',
    data,
  });
};

export const updateFile = ({ formData, filename }: any) => {
  return requestFile({
    url: `/file/${filename}`,
    method: 'put',
    data: formData,
  });
};
