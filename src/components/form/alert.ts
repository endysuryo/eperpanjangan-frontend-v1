import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { toggleAlertData } from '../../common/utils/helper';
import { AppModule } from '../../store/modules/app';

@Component({
  name: 'Alert',
})
export default class Alert extends Vue {
  get alertData() {
    return AppModule.alertData;
  }

  resetAlert() {
    toggleAlertData({
      alert: false,
      type: '',
      title: '',
      message: '',
    });
  }
}
