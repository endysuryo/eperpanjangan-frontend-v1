<template>
  <div>
    <v-progress-linear
      class="loading-indicator"
      v-if="isLoadingFetchProgram"
      color="success"
      indeterminate
      height="5"
    ></v-progress-linear>

    <!-- title -->
    <v-row class="mb-5">
      <v-col cols="12">
        <div class="title-text font-weight-bold">
          Program List {{ programs.page }}
        </div>
      </v-col>
    </v-row>

    <!-- filter -->
    <div class="flex-center-between mb-5">
      <div>
        <v-btn
          @click="dialog = !dialog"
          outlined
          color="ash_darken"
          class="mr-5 outline-bg-white"
        >
          <v-icon color="grey_darken" class="mr-1">mdi-plus</v-icon>
          <div class="black--text">New Program</div>
        </v-btn>
      </div>
      <div>
        <v-btn>filter 2</v-btn>
      </div>
    </div>

    <!-- data -->
    <v-row v-if="programs.data.length > 0" class="flex-wrap">
      <v-col v-for="(item, index) in programs.data" :key="{ index }" cols="4">
        <v-card outlined>
          <div class="d-flex flex-no-wrap">
            <v-avatar class="ma-2 mr-0" size="100" tile>
              <v-img :src="item.preview_image_url"></v-img>
            </v-avatar>
            <div>
              <v-card-title
                class="title-text font-weight-bold mb-2"
                v-text="convertTitle(item.title)"
              ></v-card-title>
              <v-card-subtitle v-text="'Presented by -'"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- empty data -->
    <v-row v-if="programs.data.length === 0 && !isLoadingFetchProgram">
      <v-col cols="12" class="flex-center-around">
        <div class="text-center">
          <v-icon x-large class="mb-5">mdi-information-outline</v-icon>
          <div class="title-text">Your program is empty</div>
        </div>
      </v-col>
    </v-row>

    <FormProgram
      v-if="dialog"
      :dialog="dialog"
      v-on:closeModal="onDialogClosed($event)"
    />
  </div>
</template>

<script lang="ts" src="./program.ts"></script>
