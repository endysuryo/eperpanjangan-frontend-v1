import {
  IErrorState,
  IParams,
  IResult,
  ISuccessState,
} from '@/common/interface/app.interface';
import { generateQueryString } from '@/common/utils/generateQuery';
import { formatErrorMessage } from '@/common/utils/helper';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '..';
import {
  createOneUser,
  deleteOneUser,
  fetchUser,
  updateOneUser,
} from '../../common/api/user';
import { IUserData, IUserStore } from '../../common/interface/user.interface';
import {
  initErrorState,
  initParams,
  initResult,
  initSuccessState,
} from '../../common/utils/initialValue';

@Module({ dynamic: true, store, name: 'UserModule' })
class User extends VuexModule implements IUserStore {
  isLoadingFetchUser = false;
  isLoadingCreateUser = false;
  isLoadingUpdateUser = false;
  isLoadingDeleteUser = false;
  users = [];
  paramsUser = { ...initParams };
  isUserError = false;
  userErrorState = initErrorState;
  isUserSuccess = false;
  userSuccessState = initSuccessState;

  @Action
  async fetchUser(params: IParams) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_CUSTOMER(true);
      const queryString = await generateQueryString(params);
      const res: any = await fetchUser(queryString);

      if (res && res.data) {
        this.SET_LOADING_FETCH_CUSTOMER(false);
        console.info('user res.data', res.data);

        this.SET_CUSTOMERS(res.data);
      } else {
        this.SET_LOADING_FETCH_CUSTOMER(false);
        this.SET_CUSTOMERS([]);
      }
    } catch (error) {
      this.SET_LOADING_FETCH_CUSTOMER(false);
      this.SET_CUSTOMERS([]);
      this.SET_INDICATOR_ERROR_CUSTOMER(true);
      this.SET_ERROR_CUSTOMER(formatErrorMessage(error));
    }
  }

  @Action
  async createOneUser(data: IUserData) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_CREATE_CUSTOMER(true);
      const res: any = await createOneUser(data);
      if (res && res.data) {
        this.SET_LOADING_CREATE_CUSTOMER(false);
        this.fetchUser(initParams);
      } else {
        this.fetchUser(initParams);
        this.SET_LOADING_CREATE_CUSTOMER(false);
      }
    } catch (error) {
      this.SET_LOADING_CREATE_CUSTOMER(false);
      this.SET_INDICATOR_ERROR_CUSTOMER(true);
      this.SET_ERROR_CUSTOMER(formatErrorMessage(error));
    }
  }

  @Action
  async updateOneUser(data: IUserData) {
    try {
      console.info('action data', data);
      this.CLEAN_ACTION();
      this.SET_LOADING_UPDATE_CUSTOMER(true);
      const res: any = await updateOneUser((data as any)._id, data);
      if (res) {
        this.SET_LOADING_UPDATE_CUSTOMER(false);
        this.fetchUser(initParams);
      } else {
        this.SET_LOADING_UPDATE_CUSTOMER(false);
      }
    } catch (error) {
      this.SET_LOADING_UPDATE_CUSTOMER(false);
      this.SET_INDICATOR_ERROR_CUSTOMER(true);
      this.SET_ERROR_CUSTOMER(formatErrorMessage(error));
    }
  }

  @Action
  async deleteOneUser(id: string) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_DELETE_CUSTOMER(true);
      const res: any = await deleteOneUser(id);
      if (res) {
        this.SET_LOADING_DELETE_CUSTOMER(false);
        this.fetchUser(initParams);
      } else {
        this.SET_LOADING_DELETE_CUSTOMER(false);
      }
    } catch (error) {
      this.SET_LOADING_DELETE_CUSTOMER(false);
      this.SET_INDICATOR_ERROR_CUSTOMER(true);
      this.SET_ERROR_CUSTOMER(formatErrorMessage(error));
    }
  }

  @Mutation
  SET_CUSTOMERS(payload: []) {
    this.users = payload;
  }

  @Mutation
  CLEAN_ACTION() {
    this.isUserError = false;
    this.isUserSuccess = false;
    this.userSuccessState = initSuccessState;
    this.userErrorState = initErrorState;
  }

  @Mutation
  SET_LOADING_FETCH_CUSTOMER(payload: boolean) {
    this.isLoadingFetchUser = payload;
  }

  @Mutation
  SET_LOADING_CREATE_CUSTOMER(payload: boolean) {
    this.isLoadingCreateUser = payload;
  }

  @Mutation
  SET_LOADING_UPDATE_CUSTOMER(payload: boolean) {
    this.isLoadingUpdateUser = payload;
  }

  @Mutation
  SET_LOADING_DELETE_CUSTOMER(payload: boolean) {
    this.isLoadingDeleteUser = payload;
  }

  @Mutation
  SET_INDICATOR_ERROR_CUSTOMER(payload: boolean) {
    this.isUserError = payload;
  }

  @Mutation
  SET_ERROR_CUSTOMER(payload: IErrorState) {
    this.userErrorState = payload;
  }

  @Mutation
  SET_INDICATOR_SUCCESS_CUSTOMER(payload: boolean) {
    this.isUserSuccess = payload;
  }

  @Mutation
  SET_SUCCESS_CUSTOMER(payload: ISuccessState) {
    this.userSuccessState = payload;
  }
}

export const UserModule = getModule(User);
