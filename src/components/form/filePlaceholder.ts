import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
  name: 'FilePlaceholder'
})
export default class FilePlaceholder extends Vue {
  @Prop(String) readonly type?: string;
}