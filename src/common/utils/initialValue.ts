import {
  IErrorState,
  IParams,
  IResult,
  ISuccessState,
} from '../interface/app.interface';
import { IProgramData } from '../interface/program.interface';

export const initParams: IParams = {
  filters: [],
  joins: [],
  sorts: [],
  page: 10,
  per_page: 1,
};

export const initResult: IResult = {
  count: 0,
  data: [],
  page: 10,
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

export const initProgramData: IProgramData = {
  title: '',
  description: '',
  requirements: '',
  learning_purposes: '',
  course_ids: [],
  channel_id: '',
  is_paid: false,
  is_batch: false,
  is_recommended: false,
  is_class_dependent_by_order: false,
  is_unit_dependent_by_order: false,
  max_duration_access: '',
  tags: [],
  status: '',
};
