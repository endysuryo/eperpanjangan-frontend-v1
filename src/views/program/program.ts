import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IProgramData } from '../../common/interface/program.interface';
import programCard from '../../components/program/ProgramCard.vue';
import { ProgramModule } from '../../store/modules/program';

@Component({
  name: 'Program',
  components: {
    programCard,
  },
})
export default class Program extends Vue {
  dialog: boolean = false;

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

  async getProgramList() {
    await ProgramModule.fetchProgram(this.params);
  }

  onDialogClosed(payload: IProgramData) {
    this.dialog = false;
  }
}
