import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Login',
  components: {
    HeaderPage,
  },
})
export default class Login extends Vue {}
