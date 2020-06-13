import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IPropsDataStep } from '../../../common/interface/program.interface';
import alert from '../../../components/form/Alert.vue';
import programDetailNav from '../../../components/program/ProgramDetailNav.vue';
import { ProgramModule } from '../../../store/modules/program';

@Component({
  name: 'DetailProgram',
  components: {
    alert,
    programDetailNav,
  },
})
export default class DetailProgram extends Vue {
  $router: any;

  get programData() {
    return ProgramModule.programData;
  }

  mounted() {
    ProgramModule.fetchOneProgram(this.$route.params.id);
  }

  stepClickEvent(payload: IPropsDataStep) {
    console.info('detail', payload);
  }
}
