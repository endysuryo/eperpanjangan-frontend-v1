import { IAlertState, IAppState } from '@/common/interface/app.interface';
import store from '@/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'config' })
class AppConfig extends VuexModule implements IAppState {
  loadingProcess = false;
  alertData = {
    alert: false,
    type: '',
    title: '',
    message: '',
  };

  @Action
  toggleAlert(payload: IAlertState) {
    this.TOGGLE_ALERT(payload);
  }

  @Mutation
  TOGGLE_ALERT(payload: IAlertState) {
    this.alertData = { ...payload };
  }
}

export const AppModule = getModule(AppConfig);
