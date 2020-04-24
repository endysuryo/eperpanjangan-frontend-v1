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
  isError: boolean = false;
  message: string = '';

  @Action
  setError(error: any): void {
    this.SET_ERROR(error);
  }

  @Mutation
  private SET_ERROR(error: any): void {
    this.isError = true;
    this.message = error;
  }
}

export const AppModule = getModule(App);
