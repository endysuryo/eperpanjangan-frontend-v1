import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'InputLabel',
})
export default class InputLabel extends Vue {
  @Prop(String) readonly text?: string;
  @Prop(Boolean) readonly useTooltip?: boolean;
  @Prop(String) readonly tooltipMessage?: string;
}
