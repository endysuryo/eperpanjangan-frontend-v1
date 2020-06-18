import { routes } from '@/router/baseRouter';
import { AppModule } from '@/store/modules/app';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Login',
  components: {
    HeaderPage,
  },
})
export default class Login extends Vue {
  username: string = '';
  password: string = '';
  show: string = '';
  snackbar: boolean = false;

  mounted() {
    this.changeDrawer();
  }

  changeDrawer() {
    AppModule.toggleDrawerApp(false);
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.$router.push('dashboard');
    } else {
      this.snackbar = true;
    }
  }
}
