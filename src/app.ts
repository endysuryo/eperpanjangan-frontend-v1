import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {
  VERSION_APP: string = process.env.VUE_APP_VERSION;
  ENV: string = process.env.NODE_ENV;
  drawer = true;
  miniVariant = false;
  itemsAccount = [
    { icon: "mdi-home", text: "Dashboard", routeName: "dashboard" },
    { icon: "mdi-account", text: "Account", routeName: "account" },
  ];
  itemsCourse = [
    { icon: "mdi-trending-up", text: "Program" },
    { icon: "mdi-youtube-subscription", text: "Member" },
    { icon: "mdi-history", text: "Channel" },
    { icon: "mdi-playlist-play", text: "Playlists" },
  ];

  mounted() {
    console.info(`[${this.ENV}]`, "Version App:", this.VERSION_APP);
  }
}
