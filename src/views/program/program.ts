import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IProgramData } from '../../common/interface/program.interface';
import { initProgramData } from '../../common/utils/initialValue';
import { ProgramModule } from '../../store/modules/program';
import FormProgram from './Form.vue';

@Component({
  name: 'Program',
  components: {
    FormProgram,
  },
})
export default class Program extends Vue {
  dialog: boolean = false;
  programData: IProgramData = initProgramData;

  mounted() {
    this.getProgramList();
  }

  get params() {
    return ProgramModule.paramsProgram;
  }

  get programs() {
    return ProgramModule.programs;
  }

  get isLoadingFetchProgram() {
    return ProgramModule.isLoadingFetchProgram;
  }

  getProgramList() {
    ProgramModule.fetchProgram(this.params);
  }

  onDialogClosed(payload: IProgramData) {
    this.dialog = false;
    console.info('program data', payload);
  }
}
