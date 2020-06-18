import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// import { UserModule } from '../store/modules/user';
import { AppModule } from '../store/modules/app';

@Component({
  name: 'HeaderPage',
})
export default class HeaderPage extends Vue {
  drawer: boolean = true;

  get title() {
    return this.$route.meta.title;
  }

  get drawerAppStatus() {
    return AppModule.drawerAppStatus;
  }

  changeDrawer(status: boolean) {
    this.drawer = status;
    AppModule.toggleDrawerApp(status);
    console.info('data drawer: ', this.drawer);
  }
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;
}
