import { IAppState } from '@/common/interface/app.interface';
import store from '@/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  loadingProcess = false;
}

export const AppModule = getModule(App);
