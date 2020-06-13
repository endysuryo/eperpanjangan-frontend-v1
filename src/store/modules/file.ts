import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { updateFile, uploadFile } from '../../common/api/file';
import {
  IErrorState,
  ISuccessState,
} from '../../common/interface/app.interface';
import { IFileResult, IFileStore } from '../../common/interface/file.interface';
import { formatErrorMessage } from '../../common/utils/helper';
import {
  initErrorState,
  initFileData,
  initSuccessState,
} from '../../common/utils/initialValue';
import store from '../../store';

@Module({ dynamic: true, store, name: 'file' })
class File extends VuexModule implements IFileStore {
  isLoadingFetchFile = false;
  isLoadingUploadFile = false;
  isLoadingUpdateFile = false;
  isLoadingDeleteFile = false;
  file = null;
  uploadPrecentage = 0;
  tempFile = { ...initFileData };

  isFileError = false;
  fileErrorState = { ...initErrorState };
  isFileSuccess = false;
  fileSuccessState = { ...initSuccessState };

  @Action
  async updateFile({ formData, filename }: any) {
    try {
      this.CLEAN_ACTION_FILE();
      this.SET_LOADING_CREATE_FILE(true);
      const result = await updateFile({ formData, filename });
      if (result && result.data) {
        this.SET_FILE_DATA(result.data);
      } else {
        this.SET_FILE_DATA(initFileData);
      }
      this.SET_LOADING_CREATE_FILE(false);
    } catch (error) {
      this.SET_LOADING_CREATE_FILE(false);
      this.SET_INDICATOR_ERROR_FILE(true);
      this.SET_ERROR_FILE(formatErrorMessage(error));
    }
  }

  @Action
  async uploadFile(file: any) {
    try {
      this.CLEAN_ACTION_FILE();
      this.SET_LOADING_CREATE_FILE(true);
      const result = await uploadFile(file);
      if (result && result.data) {
        this.SET_FILE_DATA(result.data);
      } else {
        this.SET_FILE_DATA(initFileData);
      }
      this.SET_LOADING_CREATE_FILE(false);
    } catch (error) {
      this.SET_LOADING_CREATE_FILE(false);
      this.SET_INDICATOR_ERROR_FILE(true);
      this.SET_ERROR_FILE(formatErrorMessage(error));
    }
  }

  @Mutation
  SET_FILE_DATA(payload: IFileResult) {
    this.tempFile = payload;
  }

  @Action
  updateUploadPrecentage(value: number) {
    if (value === 100) {
      this.SET_UPLOAD_PRECENTAGE(0);
    } else {
      this.SET_UPLOAD_PRECENTAGE(value);
    }
  }

  @Mutation
  SET_UPLOAD_PRECENTAGE(value: number) {
    this.uploadPrecentage = value;
  }

  @Mutation
  CLEAN_ACTION_FILE() {
    this.isFileError = false;
    this.isFileSuccess = false;
    this.fileSuccessState = { ...initSuccessState };
    this.fileErrorState = { ...initErrorState };
  }

  @Mutation
  SET_LOADING_FETCH_FILE(payload: boolean) {
    this.isLoadingFetchFile = payload;
  }

  @Mutation
  SET_LOADING_CREATE_FILE(payload: boolean) {
    this.isLoadingUploadFile = payload;
  }

  @Mutation
  SET_LOADING_UPDATE_FILE(payload: boolean) {
    this.isLoadingUpdateFile = payload;
  }

  @Mutation
  SET_LOADING_DELETE_FILE(payload: boolean) {
    this.isLoadingDeleteFile = payload;
  }

  @Mutation
  SET_INDICATOR_ERROR_FILE(payload: boolean) {
    this.isFileError = payload;
  }

  @Mutation
  SET_ERROR_FILE(payload: IErrorState) {
    this.fileErrorState = payload;
  }

  @Mutation
  SET_INDICATOR_SUCCESS_FILE(payload: boolean) {
    this.isFileSuccess = payload;
  }

  @Mutation
  SET_SUCCESS_FILE(payload: ISuccessState) {
    this.fileSuccessState = payload;
  }
}

export const FileModule = getModule(File);
