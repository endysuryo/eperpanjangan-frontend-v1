import { IParams } from '../interface/app.interface';
import { requestProgram } from '../utils/request';

export const fetchProgram = (params: IParams) =>
  requestProgram({
    url: '/learningPrograms',
    method: 'get',
    params,
  });
