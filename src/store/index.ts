import { IAppState } from '@/common/interface/app.interface';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
}

export default new Vuex.Store<IRootState>({});
