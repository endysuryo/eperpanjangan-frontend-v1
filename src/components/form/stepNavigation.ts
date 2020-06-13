import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IPropsDataStep } from '../../common/interface/program.interface';

@Component({
  name: 'StepNavigation',
})
export default class StepNavigation extends Vue {
  @Prop() readonly data?: IPropsDataStep;
  @Prop() readonly currentStep?: any;

  $emit: any;

  stepClickEvent(item: IPropsDataStep) {
    this.$emit('stepClickEvent', item);
  }
}
