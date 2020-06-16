import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// import { UserModule } from '../store/modules/user';

@Component({
  name: 'HeaderPage',
})
export default class HeaderPage extends Vue {
  get title() {
    return this.$route.meta.title;
  }

  // get fullname() {
  //   return UserModule.name;
  // }

  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;
}
