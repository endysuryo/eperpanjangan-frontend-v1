import Vue from 'vue';
import Router from 'vue-router';
import Account from '../views/account/Account.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';
import DetailProgram from '../views/program/Detail.vue';
import FormProgram from '../views/program/Form.vue';
import Program from '../views/program/Program.vue';
import Report from '../views/report/Report.vue';

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
    component: Dashboard,
    meta: {
      requiresAuth: true,
      title: 'Dashboard',
      // roles: Object.values(ROLES),
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
  /* author-program */
  {
    path: '/program',
    name: 'program',
    component: Program,
    meta: new RouteMeta({ title: 'Program Collection' }),
  },
  {
    path: '/create-program',
    name: 'create-program',
    component: FormProgram,
    meta: new RouteMeta({ title: 'Create New Program', back: 'program' }),
  },
  {
    path: '/detail-program/:id',
    name: 'detail-program',
    component: DetailProgram,
    meta: new RouteMeta({ title: 'Detail Program', back: 'program' }),
  },
  /* author-account */
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: new RouteMeta({ title: 'Author Account' }),
  },
  /* author-report */
  {
    path: '/report',
    name: 'report',
    component: Report,
    meta: new RouteMeta({ title: 'Report' }),
  },
];

const realm = window.location.pathname.split('/')[2];

const baseRouter = new Router({
  mode: 'history',
  // base: process.env.BASE_URL + window.location.pathname,
  base: process.env.BASE_URL + '/author/' + realm,
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
