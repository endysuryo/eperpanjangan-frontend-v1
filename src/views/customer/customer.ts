import { initPerpanjanganData } from './node_modules/@/common/utils/initialValue';
import { Hooper, Navigation, Slide } from './node_modules/hooper';
import './node_modules/hooper/dist/hooper.css';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IPerpanjanganData } from '../../common/interface/perpanjangan.interface';
import HeaderPage from '../../components/HeaderPage.vue';
import { PerpanjanganModule } from '../../store/modules/perpanjangan';

@Component({
  name: 'Perpanjangan',
  components: {
    HeaderPage,
    Hooper,
    Slide,
    Navigation,
  },
})
export default class Perpanjangan extends Vue {
  isCreateTitle: boolean = true;
  search: any = '';
  dialog: boolean = false;
  dialogReset: boolean = false;
  perpanjanganData: IPerpanjanganData = Object.assign({}, initPerpanjanganData);

  itemWillBeDeleted: any = {};
  dialogConfirmDelete: boolean = false;

  editedIndex: any = -1;
  editedItem: any = {
    name: '',
    password: '',
    phone: '',
    npwp: '',
  };
  defaultItem: any = {
    name: '',
    password: '',
    phone: '',
    npwp: '',
  };
  hooperSettings: any = {
    itemsToShow: 4.14,
    centerMode: false,
    pagination: 'no',
    wheelControl: false,
  };

  headers: any = [
    {
      text: 'Nama Depan',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    {
      text: 'Nama Belakang',
      align: 'start',
      sortable: false,
      value: 'address',
    },
    {
      text: 'Email',
      align: 'start',
      sortable: false,
      value: 'phone',
    },
    {
      text: 'NPWP',
      align: 'start',
      sortable: false,
      value: 'npwp',
    },
    { text: 'Actions', value: 'actions', sortable: false },
  ];

  mounted() {
    this.getPerpanjanganList();
  }

  get params() {
    return PerpanjanganModule.paramsPerpanjangan;
  }

  get perpanjangans() {
    console.info(PerpanjanganModule.perpanjangans);
    return PerpanjanganModule.perpanjangans;
  }

  get isLoadingFetchPerpanjangan() {
    return PerpanjanganModule.isLoadingFetchPerpanjangan;
  }

  getPerpanjanganList() {
    PerpanjanganModule.fetchPerpanjangan(this.params);
  }

  editItem(item: any) {
    this.editedIndex = this.perpanjangans;
    this.editedItem = Object.assign({}, item);
    this.isCreateTitle = false;
    this.dialog = true;
  }

  close() {
    this.dialog = false;
    this.isCreateTitle = true;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  showFormCreate() {
    this.perpanjanganData = Object.assign({}, initPerpanjanganData);
    this.dialog = true;
    this.isCreateTitle = true;
  }

  showConfirmDeleteItem(item: any) {
    this.itemWillBeDeleted = Object.assign({}, item);
    this.dialogConfirmDelete = true;
  }

  cancelDelete() {
    this.itemWillBeDeleted = {};
    this.dialogConfirmDelete = false;
  }

  deleteItem() {
    PerpanjanganModule.deleteOnePerpanjangan(this.itemWillBeDeleted.id);
  }

  save() {
    const dataAccount: any = {
      ...this.editedItem,
    };
    console.info('itemnya : ', dataAccount);
    PerpanjanganModule.createOnePerpanjangan(dataAccount);
    this.dialog = false;
  }

  update() {
    console.info('idnya: ', this.editedItem.id);
    const dataAccount: any = {
      ...this.editedItem,
    };
    PerpanjanganModule.updateOnePerpanjangan(dataAccount);
    this.dialog = false;
  }
}
