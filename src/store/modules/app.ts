import store from '@/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { AppState } from '@/common/interface/app.interface';

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements AppState {
  isError = false;
  message = '';

  @Action
  setError(error: any) {
    this.SET_ERROR(error);
  }

  @Mutation
  private SET_ERROR(error: any) {
    this.isError = true;
    this.message = error;
  }
}

export const AppModule = getModule(App);
