import { initPerpanjanganData } from '@/common/utils/initialValue';
import { Hooper, Navigation, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import moment from 'moment';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IPerpanjanganData } from '../../common/interface/perpanjangan.interface';
import HeaderPage from '../../components/HeaderPage.vue';
import { PerpanjanganModule } from '../../store/modules/perpanjangan';

moment.locale('id');

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
    jenis_angkutan: '',
    nama_po: '',
    tnkb: '',
    kp_lama: '',
    jasa_raharja: '',
    stnk: '',
    surat_rekomendasi: '',
    sk_trayek: '',
    biaya: '',
    denda: '',
    status: '',
    approve_at: '',
    admin_id: '',
    user_id: '',
    created_at: '',
  };
  defaultItem: any = {
    jenis_angkutan: '',
    nama_po: '',
    tnkb: '',
    kp_lama: '',
    jasa_raharja: '',
    stnk: '',
    surat_rekomendasi: '',
    sk_trayek: '',
    biaya: '',
    denda: '',
    status: '',
    approve_at: '',
    admin_id: '',
    user_id: '',
    created_at: '',
  };
  image_kp_lama: any = '';
  rules: any = [
    (value: { size: number }) =>
      !value || value.size < 2000000 || 'Image size should be less than 2 MB!',
  ];
  hooperSettings: any = {
    itemsToShow: 4.14,
    centerMode: false,
    pagination: 'no',
    wheelControl: false,
  };

  headers: any = [
    {
      text: 'Tanggal Pengajuan',
      align: 'start',
      sortable: false,
      value: 'created_at',
    },
    {
      text: 'Jenis Angkutan',
      align: 'start',
      sortable: false,
      value: 'jenis_angkutan',
    },
    {
      text: 'Nama PO',
      align: 'start',
      sortable: false,
      value: 'nama_po',
    },
    {
      text: 'TNKB',
      align: 'start',
      sortable: false,
      value: 'tnkb',
    },
    {
      text: 'KP Lama',
      align: 'start',
      sortable: false,
      value: 'kp_lama',
    },
    {
      text: 'Jasa Raharja',
      align: 'start',
      sortable: false,
      value: 'jasa_raharja',
    },
    {
      text: 'STNK',
      align: 'start',
      sortable: false,
      value: 'stnk',
    },
    { text: 'Actions', value: 'actions', sortable: false },
  ];

  created() {
    this.getPerpanjanganList();
  }

  mounted() {
    console.info(moment().format('LLL'));
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

  selectedImage(event: any) {
    console.info('hello : ', event);
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
    PerpanjanganModule.deleteOnePerpanjangan(this.itemWillBeDeleted._id);
  }

  save() {
    console.info('kb_lama: ', this.editedItem.kp_lama);
    const dataAccount: any = {
      ...this.editedItem,
      created_at: moment().format('LLL'),
    };
    PerpanjanganModule.createOnePerpanjangan(dataAccount);
    this.close();
  }

  update() {
    const dataAccount: any = {
      ...this.editedItem,
    };
    PerpanjanganModule.updateOnePerpanjangan(dataAccount);
    this.dialog = false;
  }
}
