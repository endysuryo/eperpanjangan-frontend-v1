<template>
  <div>
    <HeaderPage />
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
          <v-btn color="primary" text @click="dialog = false">Tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card color="primary mb-5" dark v-if="search_mode && !create_mode">
      <v-card-title class="headline">
        <v-text-field v-model="kode" outlined label="Kode Pengajuan"></v-text-field>
        <v-btn text block @click="searchPerpanjangan">
          Cari
          <v-icon class="mr-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>

    <v-card color="primary mb-5" dark v-else-if="!search_mode && !create_mode">
      <v-card-title class="headline">Kode Pengajuan : 5aZ5c</v-card-title>

      <v-card-subtitle>
        Status :
        <v-chip class="ma-2" color="error" text-color="white">Ditolak</v-chip>
      </v-card-subtitle>

      <v-card-text>Pengajuan anda ditolak, silahkan ulang atau hubungi admin.</v-card-text>

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
          <v-text-field label="Jenis Angkutan" outlined v-model="perpanjanganItem.jenis_angkutan"></v-text-field>
        </div>
        <div>
          <v-text-field label="Nama PO" outlined v-model="perpanjanganItem.nama_po"></v-text-field>
        </div>
        <div>
          <v-text-field label="TNKB" outlined v-model="perpanjanganItem.tnkb"></v-text-field>
        </div>
        <div>
          <v-file-input label="KP Lama" outlined prepend-icon="mdi-camera" @change="SelectedKpLama"></v-file-input>
        </div>
        <div>
          <v-file-input
            label="Jasa Raharja"
            outlined
            prepend-icon="mdi-camera"
            @change="SelectedJasaRaharja"
          ></v-file-input>
        </div>
        <div>
          <v-file-input label="STNK" outlined prepend-icon="mdi-camera" @change="SelectedStnk"></v-file-input>
        </div>
        <div>
          <v-file-input
            label="Surat Rekomendasi"
            outlined
            prepend-icon="mdi-camera"
            @change="SelectedSuratRekomendasi"
          ></v-file-input>
        </div>
        <div>
          <v-file-input
            label="SK Trayek"
            outlined
            prepend-icon="mdi-camera"
            @change="SelectedSkTrayek"
          ></v-file-input>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" block @click="save">Ajukan</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" src="./pengajuan.ts"></script>
