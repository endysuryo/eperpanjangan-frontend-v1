import { getUserInfo } from '@/common/api/user';
import store from '@/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { login } from '../../common/api/auth';
import { logout } from '../../common/api/user';
import { IUserState } from '../../common/interface/user.interface';
import { getToken, removeToken, setToken } from '../../common/utils/cookies';

@Module({ dynamic: true, store, name: 'app' })
class User extends VuexModule implements IUserState {
  token: string = getToken() || '';
  name: string = '';
  avatar: string = '';
  roles: string[] = [];
  role: string = '';
  email: string = '';
  headers: any = {};
  realm: any = '';
  authorization: any = {};
  user_id: any = {};
  language: string = '';

  @Action
  async Login(userInfo: { username: string; password: string }): Promise<void> {
    // tslint:disable-next-line: prefer-const
    let { username, password } = userInfo;

    username = username.trim();
    const { data } = await login({ username, password });

    setToken(data.accessToken);
    this.SET_TOKEN(data.accessToken);
    await this.GetUserInfo();
  }

  @Action
  ResetToken(): void {
    removeToken();
    this.SET_TOKEN('');
    this.SET_ROLES([]);
  }

  @Action
  async GetUserInfo(): Promise<void> {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!');
    }
    const { data } = await getUserInfo({
      /* Your params here */
    });

    if (!data) {
      throw Error('Verification failed, please Login again.');
    }
    const { roles, name, avatar, email } = data.user;

    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!');
    }
    this.SET_ROLES(roles);
    this.SET_NAME(name);
    this.SET_AVATAR(avatar);
    this.SET_EMAIL(email);
  }

  @Action
  async LogOut(): Promise<void> {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!');
    }
    await logout();
    removeToken();
    this.SET_TOKEN('');
    this.SET_ROLES([]);
  }

  @Action
  async SetToken(token: string): Promise<void> {
    this.SET_TOKEN(token);
  }

  @Action
  async SetRole(role: string): Promise<void> {
    this.SET_ROLE(role);
  }

  @Action
  async SetRoles(roles: string[]): Promise<void> {
    this.SET_ROLES(roles);
  }

  @Action
  async SetName(name: string): Promise<void> {
    this.SET_NAME(name);
  }

  @Action
  async SetEmail(name: string): Promise<void> {
    this.SET_EMAIL(name);
  }

  @Action
  async SetUserId(id: string): Promise<void> {
    this.SET_USER_ID(id);
  }

  @Action
  async SetRealm(realm: string): Promise<void> {
    this.SET_REALM(realm);
  }

  @Action
  async SetLanguange(lang: string): Promise<void> {
    this.SET_LANGUANGE(lang);
  }

  @Mutation
  private SET_LANGUANGE(lang: string): void {
    this.language = lang;
  }

  @Mutation
  private SET_REALM(realm: string): void {
    this.realm = realm;
  }

  @Mutation
  private SET_TOKEN(token: string): void {
    this.token = token;
    const timezone = (new Date().getTimezoneOffset() * -1) / 60;
    const gmt = timezone > 0 ? 'GMT+' : 'GMT-';
    this.headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      Realm: UserModule.realm,
      client_tz: gmt + timezone,
    };

    this.authorization = {
      Accept: 'application/json',
      Realm: process.env.VUE_APP_KEYCLOAK_REALM,
    };
  }

  @Mutation
  private SET_NAME(name: string): void {
    this.name = name;
  }

  @Mutation
  private SET_AVATAR(avatar: string): void {
    this.avatar = avatar;
  }

  @Mutation
  private SET_ROLE(role: string): void {
    this.role = role;
  }

  @Mutation
  private SET_ROLES(roles: string[]): void {
    this.roles = roles;
  }

  @Mutation
  private SET_EMAIL(email: string): void {
    this.email = email;
  }

  @Mutation
  private SET_USER_ID(id: string): void {
    this.user_id = id;
  }
}

export const UserModule = getModule(User);
