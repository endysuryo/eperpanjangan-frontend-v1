<template>
  <div>
    <HeaderPage />
    <v-row>
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" v-for="n in 8" :key="n">
        <v-card :to="{ name: 'program' }">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-title class="title pb-0"
            >Top 10 Australian beaches</v-card-title
          >
          <v-card-text class="text--primary pb-0">
            <div class="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod...
            </div>
          </v-card-text>
          <v-card-text class="pt-0">
            <div class="flex-center-between">
              <div>Total Kelas</div>
              <div class="my-2 black--text">5 Kelas</div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="py-2">
            <div class="flex-center-between my-2">
              <div>Status</div>
              <v-chip small color="success">
                <span class="white--text">Published</span>
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./program.ts"></script>
