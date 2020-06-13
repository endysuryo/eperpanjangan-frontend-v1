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
    <div class="title-text font-weight-bold mb-5">Program List</div>

    <!-- filter -->
    <div class="flex-center-between mb-5">
      <div>
        <v-btn
          :to="{ name: 'create-program' }"
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
    <v-row v-if="programs.count > 0" class="flex-wrap">
      <v-col cols="8">
        <program-card
          class="mb-5"
          v-for="item in programs.data"
          :key="item.id"
          :payload="{
          title: item.title_converted,
          image: item.preview_image_url,
          status: item.status,
          tags: item.tags,
          id: item.id,
        }"
        />
      </v-col>
      <v-col cols="4">
        <div class="title-text">Tutorial section</div>
      </v-col>
    </v-row>

    <!-- empty data -->
    <v-row v-if="programs.count === 0 && !isLoadingFetchProgram">
      <v-col cols="12" class="flex-center-around">
        <div class="text-center">
          <v-icon x-large class="mb-5">mdi-information-outline</v-icon>
          <div class="title-text">Your program is empty</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./program.ts"></script>
