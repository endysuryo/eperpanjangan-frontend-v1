<template>
  <div>
    <HeaderPage />
    <div class="flex-center-between">
      <div class="black--text">Laporan Data Perpanjangan</div>
      <!-- <router-link class="grey--text" :to="{ name: 'program' }">See All Programs</router-link> -->
    </div>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-card color="primary" dark>
          <v-card-title class="headline">
            <h1>120</h1>
          </v-card-title>
          <v-card-subtitle class="mt-1">
            <h3>Data Perpanjangan Diterima</h3>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="primary" dark>
          <v-card-title class="headline">
            <h1>21</h1>
          </v-card-title>
          <v-card-subtitle class="mt-1">
            <h3>Data Perpanjangan Ditolak</h3>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="primary" dark>
          <v-card-title class="headline">
            <h1>32</h1>
          </v-card-title>
          <v-card-subtitle class="mt-1">
            <h3>Data Perpanjangan Belum Diproses</h3>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./dashboard.ts"></script>
