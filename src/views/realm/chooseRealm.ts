import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ChooseRealm',
})
export default class ChooseRealm extends Vue {
  realmName: any = 'public';
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;

  chooseRealm(): void {
    this.realmName = this.realmName.toLowerCase().trim();
    if (this.realmName !== '') {
      window.location.href = 'author/' + this.realmName;
    }
  }
}
