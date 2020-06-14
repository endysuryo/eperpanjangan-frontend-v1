import { Hooper, Navigation, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ICustomer } from '../../common/interface/customer.interface';
import HeaderPage from '../../components/HeaderPage.vue';
// import {createCustomer } from '../../store/modules/customer';

@Component({
  name: 'Customer',
  components: {
    HeaderPage,
    Hooper,
    Slide,
    Navigation,
  },
})
export default class Customer extends Vue {
  isLoading = true;
  name: string = '';
  address: string = '';
  phone: string = '';
  npwp: string = '';
  hooperSettings: any = {
    itemsToShow: 4.14,
    centerMode: false,
    pagination: 'no',
    wheelControl: false,
  };
  mounted() {
    console.info(this.$refs.hooper);
  }

  async createCustomer() {
    const dataCustomer = {
      name: this.name,
      address: this.address,
      phone: this.phone,
      npwp: this.npwp,
    };

    // this.createCustomer(dataCustomer: ICustomer);
  }
}
