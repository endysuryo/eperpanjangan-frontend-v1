<template>
  <div>
    <!-- <HeaderPage /> -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">
          Kode Perpanjangan Anda :
          <div>
            <b>{{ perpanjanganItem.kode_perpanjangan }}</b>
          </div>
        </v-card-title>

        <v-card-text>Harap simpan kode perpanjangan ini untuk meninjau proses perpanjangan di menu pencarian.</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="close">Tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="mb-5">
      <h2>E-KP / KJP</h2>
      <h5>Dinas Perhubungan Prov. Jateng</h5>
    </div>
    <v-card color="primary mb-5" dark v-if="search_mode && !create_mode">
      <v-card-title class="headline">
        <v-text-field v-model="kode" outlined label="Masukkan Kode Pengajuan"></v-text-field>
        <v-btn text block @click="searchPerpanjangan">
          Cari
          <v-icon class="mr-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>

    <v-card color="primary mb-5" dark v-else-if="!search_mode && !create_mode">
      <v-card-title class="headline">Kode Pengajuan : {{ perpanjangans.kode_perpanjangan }}</v-card-title>

      <v-card-subtitle>
        Status :
        <v-chip
          v-if="perpanjangans.status === 'APPROVE'"
          class="ma-2"
          color="success"
          text-color="white"
        >Diterima</v-chip>
        <v-chip
          v-else-if="perpanjangans.status === 'REJECT'"
          class="ma-2"
          color="error"
          text-color="white"
        >Ditolak</v-chip>
        <v-chip
          v-else-if="perpanjangans.status === 'PENDING'"
          class="ma-2"
          color="warning"
          text-color="white"
        >Menunggu</v-chip>
      </v-card-subtitle>

      <v-card-text v-if="perpanjangans.status === 'APPROVE'">
        Pengajuan anda diterima, silahkan hubungi admin untuk melakukan verifikasi berkas dan pembayaran.
        <div class="mt-5">
          Biaya :
          <b>Rp. {{ perpanjangans.biaya }}</b>
        </div>
        <div>
          Denda :
          <b>Rp. {{ perpanjangans.denda }}</b>
        </div>
      </v-card-text>
      <v-card-text v-else-if="perpanjangans.status === 'REJECT'">
        Pengajuan anda ditolak, silahkan ulang atau hubungi admin.
        <div class="mt-5">
          Alasan :
          <b>{{ perpanjangans.keterangan }}</b>
        </div>
      </v-card-text>
      <v-card-text
        v-else-if="perpanjangans.status === 'PENDING'"
      >Pengajuan anda sedang menunggu persetujuan, harap tunggu.</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="search_mode = !search_mode">
          <v-icon class="mr-2">mdi-arrow-left</v-icon>Kembali
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-btn
      v-if="!create_mode && search_mode"
      block
      @click="create_mode = !create_mode"
      color="success"
    >Input Pengajuan</v-btn>

    <v-card class="mx-auto" v-if="create_mode">
      <v-card-text class="text--primary">
        <div class="mb-5 mt-5">
          <h2>Data Pengguna</h2>
        </div>
        <div>
          <v-text-field label="Nama Depan" outlined v-model="userItem.first_name"></v-text-field>
        </div>
        <div>
          <v-text-field label="Nama Belakang" outlined v-model="userItem.last_name"></v-text-field>
        </div>
        <div>
          <v-text-field label="Telepon" outlined v-model="userItem.telephone"></v-text-field>
        </div>
        <div>
          <v-text-field label="E-Mail" outlined v-model="userItem.email"></v-text-field>
        </div>
        <div class="mb-5 mt-5">
          <h2>Data Pengajuan</h2>
        </div>
        <div>
          <v-select
            label="Jenis Angkutan"
            outlined
            v-model="perpanjanganItem.jenis_angkutan"
            :items="angkutans"
            item-text="name"
            item-value="name"
          ></v-select>
        </div>
        <div>
          <v-text-field
            label="Biaya"
            outlined
            v-model="perpanjanganItem.biaya"
            prefix="Rp. "
            readonly
          ></v-text-field>
        </div>
        <div>
          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Tanggal Habis KP"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
        <v-card v-if="dif_date != ''">
          <v-card-text class="d-flex">
            Terlambat
            <v-spacer></v-spacer>
            <v-chip color="red" text-color="white">{{ dif_date }}</v-chip>
          </v-card-text>
        </v-card>
        <div>
          <v-text-field
            label="Denda"
            outlined
            v-model="perpanjanganItem.denda"
            prefix="Rp. "
            readonly
          ></v-text-field>
        </div>
        <div>
          <v-text-field label="Nama PO" outlined v-model="perpanjanganItem.nama_po"></v-text-field>
        </div>
        <div>
          <v-text-field label="TNKB" outlined v-model="perpanjanganItem.tnkb"></v-text-field>
        </div>
        <div class="mb-5 mt-5">
          <h2>Upload Dokumen</h2>
        </div>
        <div>
          <v-file-input
            label="KP Lama"
            outlined
            prepend-icon="mdi-file-document"
            @change="SelectedKpLama"
          ></v-file-input>
        </div>
        <div>
          <v-file-input
            label="Jasa Raharja"
            outlined
            prepend-icon="mdi-file-document"
            @change="SelectedJasaRaharja"
          ></v-file-input>
        </div>
        <div>
          <v-file-input
            label="STNK"
            outlined
            prepend-icon="mdi-file-document"
            @change="SelectedStnk"
          ></v-file-input>
        </div>
        <div>
          <v-file-input
            label="Surat Rekomendasi"
            outlined
            prepend-icon="mdi-file-document"
            @change="SelectedSuratRekomendasi"
          ></v-file-input>
        </div>
        <div>
          <v-file-input
            label="SK Trayek"
            outlined
            prepend-icon="mdi-file-document"
            @change="SelectedSkTrayek"
          ></v-file-input>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" block @click="save">Ajukan</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn v-if="create_mode" color="error" block text @click="close" class="mt-5">Batal</v-btn>
  </div>
</template>

<script lang="ts" src="./pengajuan.ts"></script>
