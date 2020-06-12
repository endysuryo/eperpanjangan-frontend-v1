import store from '@/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { fetchProgram } from '../../common/api/program';
import {
  IErrorState,
  IParams,
  IResult,
  ISuccessState,
} from '../../common/interface/app.interface';
import { IProgramStore } from '../../common/interface/program.interface';
import { convertTitle, formatErrorMessage } from '../../common/utils/helper';
import {
  initErrorState,
  initParams,
  initResult,
  initSuccessState,
} from '../../common/utils/initialValue';

@Module({ dynamic: true, store, name: 'program' })
class Program extends VuexModule implements IProgramStore {
  isLoadingFetchProgram = false;
  isLoadingCreateProgram = false;
  isLoadingUpdateProgram = false;
  isLoadingDeleteProgram = false;
  programs = initResult;
  paramsProgram = initParams;
  isProgramError = false;
  programErrorState = initErrorState;
  isProgramSuccess = false;
  programSuccessState = initSuccessState;

  @Action
  async fetchProgram(params: IParams) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_PROGRAM(true);
      const res: any = await fetchProgram(params);
      if (res && res.data) {
        this.SET_LOADING_FETCH_PROGRAM(false);
        this.SET_PROGRAMS(res.data);
      } else {
        this.SET_LOADING_FETCH_PROGRAM(false);
        this.SET_PROGRAMS(initResult);
      }
    } catch (error) {
      this.SET_LOADING_FETCH_PROGRAM(false);
      this.SET_PROGRAMS(initResult);
      this.SET_INDICATOR_ERROR_PROGRAM(true);
      this.SET_ERROR_PROGRAM(formatErrorMessage(error));
    }
  }

  @Mutation
  SET_PROGRAMS(payload: IResult) {
    let result = initResult;
    if (payload.data.length > 0) {
      result = payload.data.map((el: any) => {
        return {
          ...el,
          title_converted: convertTitle(el.title),
        };
      });
    }
    this.programs = result;
  }

  @Mutation
  CLEAN_ACTION() {
    this.isProgramError = false;
    this.isProgramSuccess = false;
    this.programSuccessState = initSuccessState;
    this.programErrorState = initErrorState;
  }

  @Mutation
  SET_LOADING_FETCH_PROGRAM(payload: boolean) {
    this.isLoadingFetchProgram = payload;
  }

  @Mutation
  SET_LOADING_CREATE_PROGRAM(payload: boolean) {
    this.isLoadingCreateProgram = payload;
  }

  @Mutation
  SET_LOADING_UPDATE_PROGRAM(payload: boolean) {
    this.isLoadingUpdateProgram = payload;
  }

  @Mutation
  SET_LOADING_DELETE_PROGRAM(payload: boolean) {
    this.isLoadingDeleteProgram = payload;
  }

  @Mutation
  SET_INDICATOR_ERROR_PROGRAM(payload: boolean) {
    this.isProgramError = payload;
  }

  @Mutation
  SET_ERROR_PROGRAM(payload: IErrorState) {
    this.programErrorState = payload;
  }

  @Mutation
  SET_INDICATOR_SUCCESS_PROGRAM(payload: boolean) {
    this.isProgramSuccess = payload;
  }

  @Mutation
  SET_SUCCESS_PROGRAM(payload: ISuccessState) {
    this.programSuccessState = payload;
  }
}

export const ProgramModule = getModule(Program);
