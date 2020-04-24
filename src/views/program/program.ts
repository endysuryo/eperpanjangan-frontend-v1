import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Program',
  components: {
    HeaderPage,
  },
})
export default class Program extends Vue {}
