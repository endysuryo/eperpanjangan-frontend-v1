import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { UserModule } from '../store/modules/user';
import HeaderLink from './header/HeaderLink.vue';

@Component({
  name: 'HeaderPage',
  components: {
    HeaderLink,
  },
})
export default class HeaderPage extends Vue {
  notificationIndicator: boolean = true;

  get fullname() {
    return UserModule.name;
  }
}
