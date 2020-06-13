import { IErrorState, ISuccessState } from './app.interface';

export interface IFileStore {
  isLoadingFetchFile: boolean;
  isLoadingUploadFile: boolean;
  isLoadingUpdateFile: boolean;
  isLoadingDeleteFile: boolean;
  file: any;
  uploadPrecentage: number | any;
  tempFile: IFileResult;

  isFileError: boolean;
  fileErrorState: IErrorState;
  isFileSuccess: boolean;
  fileSuccessState: ISuccessState;
}

export interface IFileResult {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}
