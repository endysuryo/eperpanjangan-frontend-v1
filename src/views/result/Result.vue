<template>
  <div>
    <HeaderPage />
    <v-progress-linear
      class="loading-indicator"
      v-if="isLoadingFetchPerpanjangan"
      color="success"
      indeterminate
      height="5"
    ></v-progress-linear>
    <v-data-table :headers="headers" :items="perpanjangans" :search="search" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>
            <!-- <b>Rekap Perpanjangan</b> -->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar-title>
          <v-dialog v-model="dialog" max-width="800px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ isCreateTitle ? 'Create' : 'Tinjau' }} Perpanjangan</span>
                <v-spacer></v-spacer>
                <v-chip dark v-if="editedItem.status === 'REJECT'" color="error">Ditolak</v-chip>
                <v-chip dark v-else-if="editedItem.status === 'PENDING'" color="warning">Menunggu</v-chip>
                <v-chip dark v-else-if="editedItem.status === 'APPROVE'" color="success">Disetujui</v-chip>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-text-field v-model="users.first_name" label="Nama Depan" readonly></v-text-field>
                  <v-text-field v-model="users.last_name" label="Nama Belakang" readonly></v-text-field>
                  <v-text-field v-model="users.email" label="E-Mail" readonly></v-text-field>
                  <v-text-field v-model="editedItem.jenis_angkutan" label="Jenis Angkutan" readonly></v-text-field>
                  <v-text-field v-model="editedItem.nama_po" label="Nama PO" readonly></v-text-field>
                  <v-text-field v-model="editedItem.tnkb" label="TNKB" readonly></v-text-field>
                  <v-card elevation="10" class="ma-3">
                    <v-img :src="editedItem.kp_lama" contain class="grey darken-4"></v-img>
                    <v-card-text>KP Lama</v-card-text>
                  </v-card>
                  <v-card elevation="10" class="ma-3">
                    <v-img :src="editedItem.jasa_raharja" contain class="grey darken-4"></v-img>
                    <v-card-text>Jasa Raharja</v-card-text>
                  </v-card>
                  <v-card elevation="10" class="ma-3">
                    <v-img :src="editedItem.stnk" contain class="grey darken-4"></v-img>
                    <v-card-text>STNK</v-card-text>
                  </v-card>
                  <v-card elevation="10" class="ma-3">
                    <v-img :src="editedItem.surat_rekomendasi" contain class="grey darken-4"></v-img>
                    <v-card-text>Surat Rekomendasi</v-card-text>
                  </v-card>
                  <v-card elevation="10" class="ma-3">
                    <v-img :src="editedItem.sk_trayek" contain class="grey darken-4"></v-img>
                    <v-card-text>SK Trayek</v-card-text>
                  </v-card>
                  <v-text-field
                    v-model="editedItem.biaya"
                    label="Biaya"
                    prefix="Rp."
                    class="mt-10"
                    readonly
                  ></v-text-field>
                  <v-text-field v-model="editedItem.denda" label="Denda" prefix="Rp. " readonly></v-text-field>
                  <v-textarea label="Keterangan" v-model="editedItem.keterangan" readonly></v-textarea>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="alert" max-width="290">
            <v-card>
              <v-card-title class="headline">Peringatan</v-card-title>

              <v-card-text>Harap proses data ke-1 terlebih dahulu</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="alert = false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip dark v-if="item.status === 'REJECT'" color="error">Ditolak</v-chip>
        <v-chip dark v-else-if="item.status === 'PENDING'" color="warning">Menunggu</v-chip>
        <v-chip dark v-else-if="item.status === 'APPROVE'" color="success">Disetujui</v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn color="primary" small class="white--text" @click="editItem(item)">
          Tinjau
          <v-icon right dark>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <!-- Delete Dialog -->
    <v-dialog v-model="dialogConfirmDelete" max-width="450">
      <v-card>
        <v-card-title>Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialogConfirmDelete = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="dialogConfirmDelete = deleteItem(item)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./result.ts"></script>
