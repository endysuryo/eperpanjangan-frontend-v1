import { IParams } from '../interface/app.interface';
import { IProgramData } from '../interface/program.interface';
import { requestProgram } from '../utils/request';

export const fetchProgram = (params: IParams) =>
  requestProgram({
    url: '/learningPrograms',
    method: 'get',
    params,
  });

export const createProgram = (payload: IProgramData) =>
  requestProgram({
    url: '/learningPrograms',
    method: 'post',
    data: payload,
  });

export const fetchOneProgram = (program_id: string) =>
  requestProgram({
    url: `/learningPrograms/${program_id}`,
    method: 'get',
  });
