<template>
  <div>
    <HeaderPage />
    <div class="flex-center-between">
      <div class="black--text">Laporan Data Reklame</div>
      <!-- <router-link class="grey--text" :to="{ name: 'program' }">See All Programs</router-link> -->
    </div>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-card>
          <v-card-text class="pa-8">
            <div class="flex-center-between">
              <div v-for="n in 4" :key="n" class="d-flex">
                <v-avatar dark width="50px" height="50px" color="primary" class="mr-4">
                  <v-icon color="white">mdi-arrow-up-drop-circle</v-icon>
                </v-avatar>
                <div>
                  <div class="body-2">Total Enrollment</div>
                  <div class="headline black--text">120 Orang</div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./dashboard.ts"></script>
