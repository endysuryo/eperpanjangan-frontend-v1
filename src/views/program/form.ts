import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'FormProgram',
  components: {
    HeaderPage,
  },
})
export default class FormProgram extends Vue {}
