import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Kmeans',
  components: {
    HeaderPage,
  },
})
export default class Kmeans extends Vue {}
