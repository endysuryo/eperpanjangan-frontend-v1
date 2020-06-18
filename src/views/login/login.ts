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
  mounted() {
    this.changeDrawer();
  }

  changeDrawer() {
    AppModule.toggleDrawerApp(false);
  }
}
