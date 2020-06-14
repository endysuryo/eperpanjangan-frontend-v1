import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'BaseApp',
})
export default class BaseApp extends Vue {
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;
  drawer: boolean = true;
  miniVariant: boolean = false;
  itemsAccount: any = [
    { icon: 'mdi-home', text: 'Dashboard', routeName: 'dashboard' },
    { icon: 'mdi-account', text: 'Reklame', routeName: 'dashboard' },
    // { icon: 'mdi-account', text: 'Kmeans', routeName: 'dashboard' },
  ];
  itemsCourse: any = [
    { icon: 'mdi-account', text: 'Customer', routeName: 'customer' },
    { icon: 'mdi-image-area', text: 'Billboard', routeName: 'program' },
    { icon: 'mdi-map', text: 'Data Kecamatan', routeName: 'program' },
  ];

  mounted(): any {
    console.info(`[${this.ENV}]`, 'Version App:', this.VERSION_APP);
  }
}
