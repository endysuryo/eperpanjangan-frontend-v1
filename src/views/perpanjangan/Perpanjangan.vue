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
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search Perpanjangan"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="showFormCreate">Create Perpanjangan</v-btn>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ isCreateTitle ? 'Create' : 'Edit' }} Perpanjangan</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-text-field v-model="editedItem.jenis_angkutan" label="Jenis Angkutan"></v-text-field>
                  <v-text-field v-model="editedItem.nama_po" label="Nama PO"></v-text-field>
                  <v-text-field v-model="editedItem.tnkb" label="TNKB"></v-text-field>
                  <div class="d-flex justify left">
                    <v-file-input
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="KP Lama"
                      @change="selectedImage('kp_lama')"
                    ></v-file-input>
                    <v-btn text @click="uploadImage('kp_lama')"></v-btn>
                  </div>
                  <v-text-field v-model="editedItem.jasa_raharja" label="Jasa Raharja"></v-text-field>
                  <v-text-field v-model="editedItem.stnk" label="STNK"></v-text-field>
                  <v-text-field v-model="editedItem.surat_rekomendasi" label="Surat Rekomendasi"></v-text-field>
                  <v-text-field v-model="editedItem.sk_trayek" label="SK Trayek"></v-text-field>
                  <v-text-field v-model="editedItem.biaya" label="Biaya"></v-text-field>
                  <v-text-field v-model="editedItem.denda" label="Denda"></v-text-field>
                  <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                  <v-text-field v-model="editedItem.approve_at" label="Disetujui Tanggal"></v-text-field>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn v-if="isCreateTitle" color="blue darken-1" text @click="save">Save</v-btn>
                <v-btn v-if="!isCreateTitle" color="blue darken-1" text @click="update">Update</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="showConfirmDeleteItem(item)">mdi-delete</v-icon>
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

<script lang="ts" src="./perpanjangan.ts"></script>
