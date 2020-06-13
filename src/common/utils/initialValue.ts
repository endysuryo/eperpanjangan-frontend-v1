import {
  IErrorState,
  IParams,
  IResult,
  ISuccessState,
} from '../interface/app.interface';
import { IFileResult } from '../interface/file.interface';
import { IProgramData } from '../interface/program.interface';

export const initParams: IParams = {
  filters: [],
  joins: [],
  sorts: [],
  page: 1,
  per_page: 9,
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
  max_duration_access: new Date().toISOString().substr(0, 7),
  tags: [],
  status: 'DRAFT',
  preview_image_url: '',
  preview_video_url: '',
};

export const initFileData: IFileResult = {
  destination: '',
  encoding: '',
  fieldname: '',
  filename: '',
  mimetype: '',
  originalname: '',
  path: '',
  size: 0,
};
