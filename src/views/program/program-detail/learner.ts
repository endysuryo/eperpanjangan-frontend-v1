import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import alert from '../../../components/form/Alert.vue';
import programDetailNav from '../../../components/program/ProgramDetailNav.vue';

@Component({
  name: 'LearnerProgram',
  components: {
    alert,
    programDetailNav,
  },
})
export default class LearnerProgram extends Vue {}
