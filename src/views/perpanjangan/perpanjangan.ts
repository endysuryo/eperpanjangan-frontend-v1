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
  alert: boolean = false;
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
      text: 'Kode Perpanjangan',
      align: 'start',
      sortable: false,
      value: 'kode_perpanjangan',
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
    PerpanjanganModule.fetchPendingPerpanjangan(this.params);
  }

  editItem(item: any) {
    const arrayIndex = this.perpanjangans.findIndex(
      (el: any) => el.kode_perpanjangan === item.kode_perpanjangan,
    );

    console.info('index ke = ', arrayIndex);
    if (arrayIndex === 0) {
      this.editedIndex = this.perpanjangans;
      this.editedItem = Object.assign({}, item);
      this.isCreateTitle = false;
      this.dialog = true;
    } else {
      this.alert = true;
    }
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

  update(status: string) {
    const dataPerpanjangan: any = {
      ...this.editedItem,
      status,
    };
    PerpanjanganModule.updateOnePerpanjangan(dataPerpanjangan);
    this.dialog = false;
  }
}
