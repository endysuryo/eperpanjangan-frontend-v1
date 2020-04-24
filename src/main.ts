import VueKeyCloak from '@dsb-norge/vue-keycloak-js';
import Vue from 'vue';
import BaseApp from './app/BaseApp.vue';
import PublicApp from './app/PublicApp.vue';
import './assets/style.scss';
import {
  removeRealm,
  removeToken,
  setRealm,
  setToken,
} from './common/utils/cookies';
import vuetify from './plugins/vuetify';
import BaseRouter from './router/baseRouter';
import PublicRouter from './router/publicRouter';
import store from './store';
import { UserModule } from './store/modules/user';

Vue.config.productionTip = false;

if (window.location.pathname.includes('/author/')) {
  const exp: any = window.location.pathname.split('/');
  let realm: string = '';
  if (exp.length === 0) {
    realm = 'public';
  } else if (exp[2]) {
    realm = exp[2];
  }

  Vue.use(VueKeyCloak, {
    config: {
      realm,
      url: process.env.VUE_APP_KEYCLOAK_URL,
      clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
    },

    logout: {
      redirectUri: window.location.origin,
    },

    onReady: async (keycloak: any) => {
      await removeRealm();
      await removeToken();

      // const roles: any[] = keycloak.realmAccess.roles;
      const isAuth = true;
      // const defRole: any[] = ['admin_company', 'admin'];

      // for (const role of defRole) {
      //   isAuth = roles.includes(role);
      //   if (isAuth === true) {
      //     break;
      //   }
      // }

      if (!isAuth) {
        keycloak.logout();
      } else {
        await UserModule.SetRealm(keycloak.realm);
        await UserModule.SetUserId(keycloak.tokenParsed.sub);
        await UserModule.SetToken(keycloak.token);
        await UserModule.SetName(keycloak.tokenParsed.name);
        await UserModule.SetEmail(keycloak.tokenParsed.email);
        await setRealm(realm);
        await setToken(keycloak.token);
      }
      return new Vue({
        router: BaseRouter,
        store,
        vuetify,
        render: (h) => h(BaseApp),
      }).$mount('#app');
    },
    onInitError: (error: void) => {
      console.error('error', error);
    },
  });
} else {
  removeRealm();
  removeToken();

  new Vue({
    router: PublicRouter,
    store,
    vuetify,
    render: (h) => h(PublicApp),
  }).$mount('#app');
}
