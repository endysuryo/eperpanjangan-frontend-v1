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
  pendingPerpanjangans = [];
  paramsPerpanjangan = { ...initParams };
  isPerpanjanganError = false;
  perpanjanganErrorState = initErrorState;
  isPerpanjanganSuccess = false;
  perpanjanganSuccessState = initSuccessState;

  @Action
  async fetchPerpanjangan(params: IParams) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_PERPANJANGAN(true);
      const queryString = await generateQueryString(params);
      const res: any = await fetchPerpanjangan(queryString);

      if (res && res.data) {
        this.SET_LOADING_FETCH_PERPANJANGAN(false);
        this.SET_PERPANJANGANS(res.data);
      } else {
        this.SET_LOADING_FETCH_PERPANJANGAN(false);
        this.SET_PERPANJANGANS([]);
      }
    } catch (error) {
      this.SET_LOADING_FETCH_PERPANJANGAN(false);
      this.SET_PERPANJANGANS([]);
      this.SET_INDICATOR_ERROR_PERPANJANGAN(true);
      this.SET_ERROR_PERPANJANGAN(formatErrorMessage(error));
    }
  }

  @Action
  async fetchPendingPerpanjangan(params: IParams) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_PERPANJANGAN(true);
      const queryString = await generateQueryString(params);
      const res: any = await fetchPerpanjangan(queryString);

      if (res && res.data) {
        this.SET_LOADING_FETCH_PERPANJANGAN(false);
        const tempArray: any = res.data.filter((el: any) => {
          return el.status === 'PENDING';
        });

        this.SET_PENDING_PERPANJANGANS(tempArray);
      } else {
        this.SET_LOADING_FETCH_PERPANJANGAN(false);
        this.SET_PENDING_PERPANJANGANS([]);
      }
    } catch (error) {
      this.SET_LOADING_FETCH_PERPANJANGAN(false);
      this.SET_PENDING_PERPANJANGANS([]);
      this.SET_INDICATOR_ERROR_PERPANJANGAN(true);
      this.SET_ERROR_PERPANJANGAN(formatErrorMessage(error));
    }
  }

  @Action
  async fetchOnePerpanjangan(kode: string) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_FETCH_PERPANJANGAN(true);
      const res: any = await fetchOnePerpanjangan(kode);

      if (res && res.data) {
        this.SET_LOADING_FETCH_PERPANJANGAN(false);
        this.SET_PERPANJANGANS(res.data);
      } else {
        this.SET_LOADING_FETCH_PERPANJANGAN(false);
        this.SET_PERPANJANGANS([]);
      }
    } catch (error) {
      this.SET_LOADING_FETCH_PERPANJANGAN(false);
      this.SET_PERPANJANGANS([]);
      this.SET_INDICATOR_ERROR_PERPANJANGAN(true);
      this.SET_ERROR_PERPANJANGAN(formatErrorMessage(error));
    }
  }

  @Action
  async createOnePerpanjangan(data: IPerpanjanganData) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_CREATE_PERPANJANGAN(true);
      const res: any = await createOnePerpanjangan(data);
      if (res && res.data) {
        this.SET_LOADING_CREATE_PERPANJANGAN(false);
        this.fetchPerpanjangan(initParams);
      } else {
        this.fetchPerpanjangan(initParams);
        this.SET_LOADING_CREATE_PERPANJANGAN(false);
      }
    } catch (error) {
      this.SET_LOADING_CREATE_PERPANJANGAN(false);
      this.SET_INDICATOR_ERROR_PERPANJANGAN(true);
      this.SET_ERROR_PERPANJANGAN(formatErrorMessage(error));
    }
  }

  @Action
  async updateOnePerpanjangan(data: IPerpanjanganData) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_UPDATE_PERPANJANGAN(true);
      const res: any = await updateOnePerpanjangan((data as any)._id, data);
      if (res) {
        this.SET_LOADING_UPDATE_PERPANJANGAN(false);
        this.fetchPendingPerpanjangan(initParams);
      } else {
        this.SET_LOADING_UPDATE_PERPANJANGAN(false);
      }
    } catch (error) {
      this.SET_LOADING_UPDATE_PERPANJANGAN(false);
      this.SET_INDICATOR_ERROR_PERPANJANGAN(true);
      this.SET_ERROR_PERPANJANGAN(formatErrorMessage(error));
    }
  }

  @Action
  async deleteOnePerpanjangan(id: string) {
    try {
      this.CLEAN_ACTION();
      this.SET_LOADING_DELETE_PERPANJANGAN(true);
      const res: any = await deleteOnePerpanjangan(id);
      if (res) {
        this.SET_LOADING_DELETE_PERPANJANGAN(false);
        this.fetchPerpanjangan(initParams);
      } else {
        this.SET_LOADING_DELETE_PERPANJANGAN(false);
      }
    } catch (error) {
      this.SET_LOADING_DELETE_PERPANJANGAN(false);
      this.SET_INDICATOR_ERROR_PERPANJANGAN(true);
      this.SET_ERROR_PERPANJANGAN(formatErrorMessage(error));
    }
  }

  @Mutation
  SET_PENDING_PERPANJANGANS(payload: []) {
    this.pendingPerpanjangans = payload;
  }

  @Mutation
  SET_PERPANJANGANS(payload: []) {
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
  SET_LOADING_FETCH_PERPANJANGAN(payload: boolean) {
    this.isLoadingFetchPerpanjangan = payload;
  }

  @Mutation
  SET_LOADING_CREATE_PERPANJANGAN(payload: boolean) {
    this.isLoadingCreatePerpanjangan = payload;
  }

  @Mutation
  SET_LOADING_UPDATE_PERPANJANGAN(payload: boolean) {
    this.isLoadingUpdatePerpanjangan = payload;
  }

  @Mutation
  SET_LOADING_DELETE_PERPANJANGAN(payload: boolean) {
    this.isLoadingDeletePerpanjangan = payload;
  }

  @Mutation
  SET_INDICATOR_ERROR_PERPANJANGAN(payload: boolean) {
    this.isPerpanjanganError = payload;
  }

  @Mutation
  SET_ERROR_PERPANJANGAN(payload: IErrorState) {
    this.perpanjanganErrorState = payload;
  }

  @Mutation
  SET_INDICATOR_SUCCESS_PERPANJANGAN(payload: boolean) {
    this.isPerpanjanganSuccess = payload;
  }

  @Mutation
  SET_SUCCESS_PERPANJANGAN(payload: ISuccessState) {
    this.perpanjanganSuccessState = payload;
  }
}

export const PerpanjanganModule = getModule(Perpanjangan);
