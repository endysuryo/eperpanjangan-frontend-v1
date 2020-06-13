import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IPropsDataStep } from '../../common/interface/program.interface';
import stepNavigation from '../form/StepNavigation.vue';

@Component({
  name: 'ProgramDetailNav',
  components: {
    stepNavigation,
  },
})
export default class ProgramDetailNav extends Vue {
  @Prop(String) readonly currentStep?: string;

  $route: any;

  steps: IPropsDataStep[] = [
    {
      title: 'Program Detail',
      id: 'program-detail',
    },
    {
      title: 'Learner Management',
      id: 'program-learner-management',
    },
    {
      title: 'Class Management',
      id: 'program-class-session',
    },
    {
      title: 'Program Assessment',
      id: 'program-assingment',
    },
  ];

  stepClickEvent(payload: IPropsDataStep) {
    this.$router.push({
      name: payload.id,
      params: { id: this.$route.params.id },
    });
  }
}
