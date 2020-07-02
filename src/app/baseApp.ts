import { AppModule } from '@/store/modules/app';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'BaseApp',
})
export default class BaseApp extends Vue {
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;
  // drawer: boolean = true;

  get drawerAppStatus() {
    return AppModule.drawerAppStatus;
  }

  miniVariant: boolean = false;
  itemsAccount: any = [
    { icon: 'mdi-home', text: 'Dashboard', routeName: 'dashboard' },
  ];
  itemsCourse: any = [
    { icon: 'mdi-file-document', text: 'Pengajuan', routeName: 'perpanjangan' },
  ];

  mounted(): any {
    console.info(`[${this.ENV}]`, 'Version App:', this.VERSION_APP);
  }
}
