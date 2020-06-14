import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '../';
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from '../../common/api/customer';
import {
  ICustomer,
  ICustomerState,
  InitCustomer,
} from '../../common/interface/customer.interface';

@Module({ dynamic: true, store, name: 'CustomerModule' })
class Customer extends VuexModule implements ICustomerState {
  customers: any = [{ data: [] }];
  customer: any = InitCustomer;
  loadingCustomers: boolean = false;
  loadingActionCustomer: boolean = false;

  @Action async fetchAllCustomers(params?: any) {
    this.SET_LOADING_CUSTOMER(true);
    const res: any = await getCustomers(params);
    this.SET_LOADING_CUSTOMER(false);
    this.SET_ALL_CUSTOMER(res.data);
  }

  @Action getOneCustomerFromList(customer_id: string) {
    this.GET_ONE_CUSTOMER_FROM_LIST(customer_id);
  }

  @Action async createCustomer(data: ICustomer) {
    try {
      this.SET_LOADING_ACTION_CUSTOMER(true);
      const res: any = await createCustomer(data);
      this.SET_LOADING_ACTION_CUSTOMER(false);
      this.SET_INIT_CUSTOMER();
      return res;
    } catch (error) {
      if (error) {
        this.SET_LOADING_ACTION_CUSTOMER(false);
      }
    }
  }

  @Action async updateCustomer(data: ICustomer) {
    try {
      this.SET_LOADING_ACTION_CUSTOMER(true);
      const res: any = await updateCustomer(data);
      this.SET_LOADING_ACTION_CUSTOMER(false);
      this.SET_CUSTOMER(res);
    } catch (error) {
      if (error) {
        this.SET_LOADING_ACTION_CUSTOMER(false);
      }
    }
  }

  @Action async deleteCustomer(data: any) {
    this.SET_LOADING_ACTION_CUSTOMER(true);
    const res: any = await deleteCustomer(data.id);
    this.SET_LOADING_ACTION_CUSTOMER(false);
    this.SET_CUSTOMER(res);
  }

  @Action setInitCustomer() {
    this.SET_INIT_CUSTOMER();
  }

  @Mutation
  private SET_ALL_CUSTOMER(res: any) {
    if (res.data) {
      const customer: any = res.data.map((el: any) => {
        el = {
          ...el,
        };
        return el;
      });

      this.customers = {
        ...res,
        data: customer,
        per_page: Number(res.per_page),
      };
    } else if (Array.isArray(res)) {
      const customer: any = res.map((el: any) => {
        el = {
          ...el,
          // created_at: formatDate(el.created_at, 'date-medium'),
        };
        return el;
      });
      this.customers = {
        ...res,
        data: customer,
      };
    }
  }

  @Mutation
  private SET_CUSTOMER(data: any) {
    this.customer = data;
  }

  @Mutation
  private SET_INIT_CUSTOMER() {
    this.customer = {
      ...JSON.parse(JSON.stringify(InitCustomer)),
    };
  }

  @Mutation
  private GET_ONE_CUSTOMER_FROM_LIST(id: string) {
    this.customer = this.customers.data.find((el: any) => el.id === id);
  }

  @Mutation
  private SET_LOADING_CUSTOMER(type: boolean) {
    this.loadingCustomers = type;
  }

  @Mutation
  private SET_LOADING_ACTION_CUSTOMER(type: boolean) {
    this.loadingActionCustomer = type;
  }
}

export const CustomerModule = getModule(Customer);
