import { IAlertState } from '@/common/interface/app.interface';
import { toggleAlertData } from '@/common/utils/helper';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import {
  IProgramData,
  IPropsDataStep,
} from '../../../common/interface/program.interface';
import { initProgramData } from '../../../common/utils/initialValue';
import alert from '../../../components/form/Alert.vue';
import stepNavigation from '../../../components/form/StepNavigation.vue';
import { ProgramModule } from '../../../store/modules/program';

@Component({
  name: 'ProgramCreate',
  components: {
    stepNavigation,
    alert,
  },
})
export default class ProgramCreate extends Vue {
  $router: any;
  $refs: any;

  currentStep: any = 0;
  steps: IPropsDataStep[] = [
    {
      title: 'Step 1',
      id: 0,
    },
    {
      title: 'Step 2',
      id: 1,
    },
  ];
  titleCounter: number = 65;
  program: IProgramData = { ...initProgramData };
  currentTag: string = '';
  alert: IAlertState = {
    alert: false,
    type: '',
    title: '',
    message: '',
  };

  @Watch('program.title')
  changeProgramTitle(newValue: any, oldValue: any) {
    const newTitleLength = newValue.length;
    const oldTitleLength = oldValue.length;
    if (!oldValue) {
      this.titleCounter = this.titleCounter - newTitleLength;
    }
    if (!newValue) {
      this.titleCounter = 64;
    }

    if (this.titleCounter > 0) {
      if (oldTitleLength > newTitleLength) {
        this.titleCounter = this.titleCounter + 1;
      } else {
        this.titleCounter = this.titleCounter - 1;
      }
    } else if (newTitleLength === 65) {
      this.titleCounter = 1;
    } else {
      this.titleCounter = 0;
    }
  }

  get isLoadingCreateProgram() {
    return ProgramModule.isLoadingCreateProgram;
  }

  get isProgramSuccess() {
    return ProgramModule.isProgramSuccess;
  }

  get programData() {
    return ProgramModule.programData;
  }

  @Watch('isProgramSuccess')
  watchAfterCreateProgram() {
    if (this.isProgramSuccess) {
      this.$router.replace({ name: 'program-detail', id: this.programData.id });
    }
  }

  mounted() {
    this.initCreateProgram();
  }

  initCreateProgram() {
    this.program = {
      ...initProgramData,
      tags: [],
    };
  }

  createProgram() {
    if (this.program.title === '') {
      toggleAlertData({
        alert: true,
        type: 'warning',
        title: '',
        message: `You must fill your program title`,
      });
    } else if (this.program.tags.length === 0) {
      toggleAlertData({
        alert: true,
        type: 'warning',
        title: '',
        message: `You must fill your program tag at least one tag`,
      });
    } else {
      ProgramModule.createProgram(this.program);
    }
  }

  removeTag(item: string) {
    this.program.tags = this.program.tags.filter((el: any) => {
      return el !== item;
    });
  }

  addNewTag() {
    if (this.program.tags.length === 4) {
      toggleAlertData({
        alert: true,
        type: 'info',
        title: '',
        message: `Maximum program tags is 4, ypu must delete another tag before adding the new one`,
      });
    } else {
      let find: any = false;
      find = this.program.tags.find((el: any) => el === this.currentTag);
      if (find) {
        toggleAlertData({
          alert: true,
          type: 'warning',
          title: '',
          message: `"${this.currentTag}" has been added to tags list`,
        });
      } else {
        const tags = this.program.tags;
        tags.push(this.currentTag);

        this.program = {
          ...this.program,
          tags,
        };
        this.currentTag = '';
      }
    }
  }

  stepClickEvent(payload: IPropsDataStep) {
    this.currentStep = payload.id;
  }

  cancelCreateProgram() {
    this.initCreateProgram();
    this.$router.push({ name: 'program' });
  }

  resetAlert() {
    this.alert = {
      alert: false,
      type: '',
      title: '',
      message: '',
    };
  }
}
