import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'DetailProgram',
  components: {
    HeaderPage,
  },
})
export default class DetailProgram extends Vue {}
