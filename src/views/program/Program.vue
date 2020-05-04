<template>
  <div>
    <HeaderPage />
    <v-row>
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" v-for="n in 8" :key="n">
        <v-card
          :to="{ name: 'create-program' }"
          v-if="n === 1"
          class="fill-height text-center flex-center-around"
        >
          <div>
            <v-btn fab color="grey lighten-3" class="mb-5">
              <v-icon large color="grey">mdi-plus</v-icon>
            </v-btn>
            <div class="title">New Program</div>
            <div class="grey--text">Let's create an awesome program</div>
          </div>
        </v-card>

        <v-card v-else :to="{ name: 'detail-program', params: { id: n } }">
          <v-img
            class="white--text align-end"
            height="180px"
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
            <div class="flex-center-between">
              <div>Total Kelas</div>
              <div class="my-2 black--text">5 Kelas</div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="py-3">
            <div class="flex-center">
              <v-avatar class="mr-3" size="32">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
              </v-avatar>
              <div class="font-weight-bold">
                Ahmad Bistomi
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./program.ts"></script>
