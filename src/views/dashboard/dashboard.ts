import { PerpanjanganModule } from '@/store/modules/perpanjangan';
import { Hooper, Navigation, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Dashboard',
  components: {
    HeaderPage,
    Hooper,
    Slide,
    Navigation,
  },
})
export default class Dashboard extends Vue {
  hooperSettings: any = {
    itemsToShow: 4.14,
    centerMode: false,
    pagination: 'no',
    wheelControl: false,
  };

  get params() {
    return PerpanjanganModule.paramsPerpanjangan;
  }

  get perpanjangans() {
    return PerpanjanganModule.perpanjangans;
  }

  get pendingPerpanjangans() {
    return PerpanjanganModule.pendingPerpanjangans;
  }

  getPerpanjanganList() {
    PerpanjanganModule.fetchPerpanjangan(this.params);
  }

  getPendingPerpanjanganList() {
    PerpanjanganModule.fetchPendingPerpanjangan(this.params);
  }

  mounted() {
    console.info(this.$refs.hooper);
  }
}
