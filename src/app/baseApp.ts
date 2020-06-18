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
    // { icon: 'mdi-chart-line', text: 'Kmeans', routeName: 'kmeans' },
  ];
  itemsCourse: any = [
    { icon: 'mdi-file-document', text: 'Pengajuan', routeName: 'customer' },
    { icon: 'mdi-file-document', text: 'Laporan', routeName: 'billboard' },
    // { icon: 'mdi-map', text: 'Data Kecamatan', routeName: 'subdistrict' },
  ];

  mounted(): any {
    console.info(`[${this.ENV}]`, 'Version App:', this.VERSION_APP);
  }
}
