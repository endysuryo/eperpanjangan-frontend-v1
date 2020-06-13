import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import publishBadge from './PublishBadge.vue';

export interface IPropsCard {
  status: string;
  title: string;
  image: string;
  tags: string[];
  id: string;
}

@Component({
  name: 'ProgramCard',
  components: {
    publishBadge,
  },
})
export default class ProgramCard extends Vue {
  @Prop() readonly payload?: IPropsCard;
  isImageError: boolean = false;

  previewImageChecker() {
    this.isImageError = true;
  }
}
