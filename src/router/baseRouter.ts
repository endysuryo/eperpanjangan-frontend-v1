import Login from '@/views/login/Login.vue';
import Vue from 'vue';
import Router from 'vue-router';
import Account from '../views/account/Account.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';
import Perpanjangan from '../views/perpanjangan/Perpanjangan.vue';

Vue.use(Router);

class RouteMeta {
  back?: string;
  title: string;
  requiredAuth?: boolean;
  roles?: any[];
  sidebar?: boolean;

  constructor({
    back,
    title,
    requiredAuth,
    roles,
    sidebar,
  }: {
    back?: string;
    title: string;
    requiredAuth?: boolean;
    roles?: any[];
    sidebar?: boolean;
  }) {
    this.back = back;
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
    component: Login,
    meta: {
      requiresAuth: true,
      title: 'Login',
      // roles: Object.values(ROLES),
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      requiredAuth: true,
    },
  },
  {
    path: '/perpanjangan',
    name: 'perpanjangan',
    component: Perpanjangan,
    meta: {
      title: 'Perpanjangan',
      requiredAuth: true,
    },
  },
  {
    path: '/perpanjangan',
    name: 'perpanjangan',
    component: Perpanjangan,
    meta: {
      title: 'Perpanjangan',
      requiredAuth: true,
    },
  },
  /* author-account */
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: new RouteMeta({ title: 'Author Account' }),
  },
];

const realm = window.location.pathname.split('/')[2];

const baseRouter = new Router({
  mode: 'history',
  // base: process.env.BASE_URL + window.location.pathname,
  base: process.env.BASE_URL,
  routes,
});

baseRouter.beforeEach((to, from, next) => {
  let routePermission: string[] = [];

  if (realm !== 'master') {
    routePermission = ['report'];
  } else {
    routePermission = ['program', 'account'];
  }

  const exp = to.fullPath.split('/author/' + realm);
  if (!to.name) {
    if (exp.length < 2) {
      next();
    } else {
      next(exp[1]);
    }
  } else {
    routePermission.forEach((item: any) => {
      if (to.path.includes(item)) {
        next({ name: 'dashboard' });
      } else {
        next();
      }
    });
  }
});

export default baseRouter;
