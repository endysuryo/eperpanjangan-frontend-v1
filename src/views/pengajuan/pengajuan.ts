import { initPerpanjanganData } from '@/common/utils/initialValue';
import { UserModule } from '@/store/modules/user';
import axios from 'axios';
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
  name: 'Pengajuan',
  components: {
    HeaderPage,
    Hooper,
    Slide,
    Navigation,
  },
})
export default class Pengajuan extends Vue {
  userItem: any = {
    kode_perpanjangan: '',
    first_name: '',
    last_name: '',
    telephone: '',
    email: '',
    role: 'user',
    password: '12345',
  };
  perpanjanganItem: any = {
    kode_perpanjangan: '',
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
    status: 'PENDING',
    keterangan: '',
    approve_at: '',
    admin_id: '',
    user_id: '',
    created_at: '',
  };
  search_mode: boolean = true;
  create_mode: boolean = false;
  dialog: boolean = false;

  created() {
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

  save() {
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    this.userItem.kode_perpanjangan = randomName;
    this.perpanjanganItem.kode_perpanjangan = randomName;
    const dataAccount: any = {
      ...this.perpanjanganItem,
      created_at: moment().format('LLL'),
    };
    UserModule.createOneUser(this.userItem);
    PerpanjanganModule.createOnePerpanjangan(dataAccount);
    this.dialog = true;
  }

  async SelectedKpLama(event: any) {
    console.info(event);
    const fd: any = new FormData();
    fd.append('image', event, event.name);
    await axios
      .post('http://localhost:3000/perpanjangan/upload', fd)
      .then((res) => {
        console.info(res);
        this.perpanjanganItem.kp_lama =
          'http://localhost:3000/perpanjangan/image/' + res.data.filename;
      });
  }

  async SelectedJasaRaharja(event: any) {
    console.info(event);
    const fd: any = new FormData();
    fd.append('image', event, event.name);
    await axios
      .post('http://localhost:3000/perpanjangan/upload', fd)
      .then((res) => {
        console.info(res);
        this.perpanjanganItem.jasa_raharja =
          'http://localhost:3000/perpanjangan/image/' + res.data.filename;
      });
  }

  async SelectedStnk(event: any) {
    console.info(event);
    const fd: any = new FormData();
    fd.append('image', event, event.name);
    await axios
      .post('http://localhost:3000/perpanjangan/upload', fd)
      .then((res) => {
        console.info(res);
        this.perpanjanganItem.stnk =
          'http://localhost:3000/perpanjangan/image/' + res.data.filename;
      });
  }

  async SelectedSuratRekomendasi(event: any) {
    console.info(event);
    const fd: any = new FormData();
    fd.append('image', event, event.name);
    await axios
      .post('http://localhost:3000/perpanjangan/upload', fd)
      .then((res) => {
        console.info(res);
        this.perpanjanganItem.surat_rekomendasi =
          'http://localhost:3000/perpanjangan/image/' + res.data.filename;
      });
  }

  async SelectedSkTrayek(event: any) {
    console.info(event);
    const fd: any = new FormData();
    fd.append('image', event, event.name);
    await axios
      .post('http://localhost:3000/perpanjangan/upload', fd)
      .then((res) => {
        console.info(res);
        this.perpanjanganItem.sk_trayek =
          'http://localhost:3000/perpanjangan/image/' + res.data.filename;
      });
  }
}
