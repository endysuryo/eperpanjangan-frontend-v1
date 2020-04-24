import Vue from 'vue';
import Router from 'vue-router';
import ChooseRealm from '../views/realm/ChooseRealm.vue';

Vue.use(Router);

class RouteMeta {
  title: string;
  requiredAuth?: boolean;
  roles?: any[];
  sidebar?: boolean;

  constructor({
    title,
    requiredAuth,
    roles,
    sidebar,
  }: {
    title: string;
    requiredAuth?: boolean;
    roles?: any[];
    sidebar?: boolean;
  }) {
    this.title = title;
    this.requiredAuth = requiredAuth;
    this.roles = roles;
    this.sidebar = sidebar;
  }
}

export const routes: any[] = [
  {
    path: '/',
    name: 'home',
    component: ChooseRealm,
    meta: new RouteMeta({
      title: 'Choose Realm',
    }),
  },
];
const publicRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// This callback runs before every route change, including on initial load
publicRouter.beforeEach((to, from, next) => {
  if (!to.name) {
    next(to.fullPath);
  } else {
    next();
  }
});

export default publicRouter;
