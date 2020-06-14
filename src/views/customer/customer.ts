import { Hooper, Navigation, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

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
  hooperSettings: any = {
    itemsToShow: 4.14,
    centerMode: false,
    pagination: 'no',
    wheelControl: false,
  };
  mounted() {
    console.info(this.$refs.hooper);
  }
  name: string = '';
  address: string = '';
  phone: string = '';
  npwp: string = '';

  async createCustomer() {
    const dataCustomer = {
      name: this.name,
      address: this.address,
      phone: this.phone,
      npwp: this.npwp,
    };
  }
}
