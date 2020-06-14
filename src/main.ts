import Vue from 'vue';
import BaseApp from './app/BaseApp.vue';
import './assets/style.scss';
import vuetify from './plugins/vuetify';
import BaseRouter from './router/baseRouter';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router: BaseRouter,
  store,
  vuetify,
  render: (h) => h(BaseApp),
}).$mount('#app');
