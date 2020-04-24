import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Report',
  components: {
    HeaderPage,
  },
})
export default class Report extends Vue {}
