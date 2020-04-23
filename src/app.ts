import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;

  mounted() {
    console.info(`[${this.ENV}]`, 'Version App:', this.VERSION_APP);
  }
}
