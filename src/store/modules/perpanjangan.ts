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
  createOnePerpanjangan,
  deleteOnePerpanjangan,
  fetchOnePerpanjangan,
  fetchPerpanjangan,
  updateOnePerpanjangan,
} from '../../common/api/perpanjangan';
import {
  IPerpanjanganData,
  IPerpanjanganStore,
} from '../../common/interface/perpanjangan.interface';
import {
  initErrorState,
  initParams,
  initResult,
  initSuccessState,
} from '../../common/utils/initialValue';

@Module({ dynamic: true, store, name: 'PerpanjanganModule' })
class Perpanjangan extends VuexModule implements IPerpanjanganStore {
  isLoadingFetchPerpanjangan = false;
  isLoadingCreatePerpanjangan = false;
  isLoadingUpdatePerpanjangan = false;
  isLoadingDeletePerpanjangan = false;
  perpanjangans = [];
  paramsPerpanjangan = { ...initParams };
  isPerpanjanganError = false;
  perpanjanganErrorState = initErrorState;
  isPerpanjanganSuccess = false;
  perpanjanganSuccessState = initSuccessState;

  @Action
  async fetchPerpanjangan(params: IParams) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_CUSTOMER(true);
      const queryString = await generateQueryString(params);
      const res: any = await fetchPerpanjangan(queryString);

      if (res && res.data) {
        this.SET_LOADING_FETCH_CUSTOMER(false);
        console.info('perpanjangan res.data', res.data);

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
  async fetchPendingPerpanjangan(params: IParams) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_CUSTOMER(true);
      const queryString = await generateQueryString(params);
      const res: any = await fetchPerpanjangan(queryString);

      if (res && res.data) {
        this.SET_LOADING_FETCH_CUSTOMER(false);
        console.info('perpanjangan res.data', res.data);

        const tempArray: any = res.data.filter((el: any) => {
          return el.status === 'PENDING';
        });

        this.SET_CUSTOMERS(tempArray);
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
  async fetchOnePerpanjangan(kode: string) {
    try {
      console.info('masuk module: ', kode);
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_CUSTOMER(true);
      const res: any = await fetchOnePerpanjangan(kode);

      if (res && res.data) {
        this.SET_LOADING_FETCH_CUSTOMER(false);
        console.info('perpanjangan res.data', res.data);

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
  async createOnePerpanjangan(data: IPerpanjanganData) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_CREATE_CUSTOMER(true);
      const res: any = await createOnePerpanjangan(data);
      if (res && res.data) {
        this.SET_LOADING_CREATE_CUSTOMER(false);
        this.fetchPerpanjangan(initParams);
      } else {
        this.fetchPerpanjangan(initParams);
        this.SET_LOADING_CREATE_CUSTOMER(false);
      }
    } catch (error) {
      this.SET_LOADING_CREATE_CUSTOMER(false);
      this.SET_INDICATOR_ERROR_CUSTOMER(true);
      this.SET_ERROR_CUSTOMER(formatErrorMessage(error));
    }
  }

  @Action
  async updateOnePerpanjangan(data: IPerpanjanganData) {
    try {
      console.info('action data', data);
      this.CLEAN_ACTION();
      this.SET_LOADING_UPDATE_CUSTOMER(true);
      const res: any = await updateOnePerpanjangan((data as any)._id, data);
      if (res) {
        this.SET_LOADING_UPDATE_CUSTOMER(false);
        this.fetchPendingPerpanjangan(initParams);
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
  async deleteOnePerpanjangan(id: string) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_DELETE_CUSTOMER(true);
      const res: any = await deleteOnePerpanjangan(id);
      if (res) {
        this.SET_LOADING_DELETE_CUSTOMER(false);
        this.fetchPerpanjangan(initParams);
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
    this.perpanjangans = payload;
  }

  @Mutation
  CLEAN_ACTION() {
    this.isPerpanjanganError = false;
    this.isPerpanjanganSuccess = false;
    this.perpanjanganSuccessState = initSuccessState;
    this.perpanjanganErrorState = initErrorState;
  }

  @Mutation
  SET_LOADING_FETCH_CUSTOMER(payload: boolean) {
    this.isLoadingFetchPerpanjangan = payload;
  }

  @Mutation
  SET_LOADING_CREATE_CUSTOMER(payload: boolean) {
    this.isLoadingCreatePerpanjangan = payload;
  }

  @Mutation
  SET_LOADING_UPDATE_CUSTOMER(payload: boolean) {
    this.isLoadingUpdatePerpanjangan = payload;
  }

  @Mutation
  SET_LOADING_DELETE_CUSTOMER(payload: boolean) {
    this.isLoadingDeletePerpanjangan = payload;
  }

  @Mutation
  SET_INDICATOR_ERROR_CUSTOMER(payload: boolean) {
    this.isPerpanjanganError = payload;
  }

  @Mutation
  SET_ERROR_CUSTOMER(payload: IErrorState) {
    this.perpanjanganErrorState = payload;
  }

  @Mutation
  SET_INDICATOR_SUCCESS_CUSTOMER(payload: boolean) {
    this.isPerpanjanganSuccess = payload;
  }

  @Mutation
  SET_SUCCESS_CUSTOMER(payload: ISuccessState) {
    this.perpanjanganSuccessState = payload;
  }
}

export const PerpanjanganModule = getModule(Perpanjangan);
