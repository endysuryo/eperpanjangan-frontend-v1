<template>
  <div>
    <HeaderPage />
    <v-card ref="form">
      <v-progress-linear
        class="loading-indicator"
        v-if="isLoading"
        color="red lighten-1"
        indeterminate
        height="5"
      ></v-progress-linear>
      <v-card-text>
        <div class="flex-center-between">
          <div class="black--text mb-5">Input Data Customer</div>
        </div>
        <v-text-field
          v-model="name"
          :rules="[() => !!name || 'Kolom wajib di isi']"
          :error-messages="errorMessages"
          label="Nama Lengkap"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="address"
          :rules="[() => !!address || 'Kolom wajib di isi']"
          :error-messages="errorMessages"
          label="Alamat"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="[() => !!phone || 'Kolom wajib di isi']"
          :error-messages="errorMessages"
          label="Telepon"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="npwp"
          :rules="[() => !!npwp || 'Kolom wajib di isi']"
          :error-messages="errorMessages"
          label="NPWP"
          outlined
          required
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip v-if="formHasErrors" left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn color="red lighten-1" @click="submit" dark>Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" src="./customer.ts"></script>