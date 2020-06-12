import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { headerMenu } from '../../common/utils/constant';

@Component({
  name: 'HeaderLink',
})
export default class HeaderLink extends Vue {
  menu: any = headerMenu;
}
