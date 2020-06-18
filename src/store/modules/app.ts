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
  drawerAppStatus = false;

  @Action
  async toggleDrawerApp(status: boolean) {
    this.SET_DRAWER_APP(status);
  }

  @Mutation
  SET_DRAWER_APP(payload: boolean) {
    this.drawerAppStatus = payload;
  }
}

export const AppModule = getModule(App);
