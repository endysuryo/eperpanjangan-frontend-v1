import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import headerPage from '../components/HeaderPage.vue';

@Component({
  name: 'BaseApp',
  components: {
    headerPage,
  },
})
export default class BaseApp extends Vue {
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;
  drawer: boolean = true;
  miniVariant: boolean = false;
  itemsAccount: any = [
    { icon: 'mdi-home', text: 'Dashboard', routeName: 'dashboard' },
    { icon: 'mdi-account', text: 'Account', routeName: 'account' },
  ];
  itemsCourse: any = [
    { icon: 'mdi-book', text: 'Program', routeName: 'program' },
  ];

  mounted(): any {
    console.info(`[${this.ENV}]`, 'Version App:', this.VERSION_APP);
  }
}
