import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import {
  createProgram,
  fetchOneProgram,
  fetchProgram,
} from '../../common/api/program';
import {
  IErrorState,
  IParams,
  IResult,
  ISuccessState,
} from '../../common/interface/app.interface';
import {
  IProgramData,
  IProgramStore,
} from '../../common/interface/program.interface';
import { convertTitle, formatErrorMessage } from '../../common/utils/helper';
import {
  initErrorState,
  initParams,
  initProgramData,
  initResult,
  initSuccessState,
} from '../../common/utils/initialValue';
import store from '../../store';

@Module({ dynamic: true, store, name: 'program' })
class Program extends VuexModule implements IProgramStore {
  isLoadingFetchProgram = false;
  isLoadingCreateProgram = false;
  isLoadingUpdateProgram = false;
  isLoadingDeleteProgram = false;
  programs = { ...initResult };
  programData = { ...initProgramData };

  paramsProgram = initParams;
  isProgramError = false;
  programErrorState = { ...initErrorState };
  isProgramSuccess = false;
  programSuccessState = { ...initSuccessState };

  @Action
  async fetchProgram(params: IParams) {
    try {
      this.CLEAN_ACTION_PROGRAM();
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
      this.SET_ERROR_PROGRAM({ data: formatErrorMessage(error), status: true });
    }
  }

  @Mutation
  SET_PROGRAMS(payload: IResult) {
    const result: IResult = payload;
    if (payload.data.length > 0) {
      result.data = payload.data.map((el: any) => {
        return {
          ...el,
          title_converted: el.title ? convertTitle(el.title) : '',
        };
      });
    }
    this.programs = result;
  }

  @Action
  async createProgram(payload: IProgramData) {
    try {
      this.SET_LOADING_CREATE_PROGRAM(true);
      this.SET_INDICATOR_SUCCESS_PROGRAM(false);
      const res: any = await createProgram(payload);

      if (res && res.data) {
        this.SET_LOADING_CREATE_PROGRAM(false);
        this.SET_INDICATOR_SUCCESS_PROGRAM(true);
        this.SET_PROGRAM_DATA(res.data);
      } else {
        this.SET_LOADING_CREATE_PROGRAM(false);
        this.SET_INDICATOR_SUCCESS_PROGRAM(false);
      }
    } catch (error) {
      this.SET_LOADING_CREATE_PROGRAM(false);
      this.SET_INDICATOR_SUCCESS_PROGRAM(false);
      this.SET_ERROR_PROGRAM({ data: formatErrorMessage(error), status: true });
    }
  }

  @Action
  async fetchOneProgram(payload: string) {
    try {
      this.CLEAN_ACTION_PROGRAM();
      this.SET_LOADING_FETCH_PROGRAM(true);
      const res: any = await fetchOneProgram(payload);

      if (res && res.data) {
        this.SET_LOADING_FETCH_PROGRAM(false);
        this.SET_PROGRAM_DATA(res.data);
      } else {
        this.SET_LOADING_FETCH_PROGRAM(false);
        this.SET_PROGRAM_DATA(initProgramData);
      }
    } catch (error) {
      this.SET_LOADING_FETCH_PROGRAM(false);
      this.SET_PROGRAM_DATA(initProgramData);
      this.SET_ERROR_PROGRAM({ data: formatErrorMessage(error), status: true });
    }
  }

  @Mutation
  SET_PROGRAM_DATA(payload: IProgramData) {
    this.programData = {
      ...payload,
    };
  }

  @Mutation
  CLEAN_ACTION_PROGRAM() {
    this.isProgramError = false;
    this.isProgramSuccess = false;
    this.programSuccessState = { ...initSuccessState };
    this.programErrorState = { ...initErrorState };
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
  SET_ERROR_PROGRAM(payload: any) {
    this.isProgramError = payload.status;
    this.programErrorState = payload.data;
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
