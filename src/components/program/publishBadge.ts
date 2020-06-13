import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'PublishBadge',
})
export default class PublishBadge extends Vue {
  @Prop(String) readonly status?: string;

  convertStatus() {
    const status: any = this.status?.split('_');
    if (status.length > 1) {
      return status.join(' ').toString();
    } else {
      return status.toString();
    }
  }
}
