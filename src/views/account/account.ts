import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Account',
  components: {
    HeaderPage,
  },
})
export default class Account extends Vue {}
