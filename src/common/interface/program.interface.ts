import { IErrorState, IParams, IResult, ISuccessState } from './app.interface';

export interface IProgramStore {
  isLoadingFetchProgram: boolean;
  isLoadingCreateProgram: boolean;
  isLoadingUpdateProgram: boolean;
  isLoadingDeleteProgram: boolean;
  programs: IResult;
  paramsProgram: IParams;
  isProgramError: boolean;
  programErrorState: IErrorState;
  isProgramSuccess: boolean;
  programSuccessState: ISuccessState;
}

export interface IProgramData {
  title: string;
  title_converted?: string;
  description: string | any;
  requirements: string | any;
  learning_purposes: string | any;
  course_ids: string[];
  channel_id: string;
  is_paid: false;
  is_batch: false;
  is_recommended: false;
  is_class_dependent_by_order: false;
  is_unit_dependent_by_order: false;
  max_duration_access: string;
  tags: string[];
  status: string;
}
