<template>
  <div>
    <HeaderPage />
    <div class="black--text">Summary Report</div>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-card>
          <v-card-text class="pa-8">
            <div class="flex-center-between">
              <div v-for="n in 4" :key="n" class="d-flex">
                <v-avatar
                  dark
                  width="50px"
                  height="50px"
                  color="primary"
                  class="mr-4"
                >
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
    <div class="flex-center-between">
      <div class="black--text">Top Programs</div>
      <router-link class="grey--text" :to="{ name: 'program' }"
        >See All Programs</router-link
      >
    </div>
    <v-row>
      <v-col cols="12">
        <hooper ref="hooper" style="height: 400px;" :settings="hooperSettings">
          <slide class="pr-5" v-for="n in 8" :key="n">
            <v-card :to="{ name: 'program' }">
              <v-img
                class="white--text align-end"
                height="180px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
              </v-img>
              <v-card-title class="title"
                >Top 10 Australian beaches</v-card-title
              >

              <v-card-text class="text--primary pb-0">
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4"
                    background-color="grey"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>
                <div class="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod...
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="py-2">
                <div class="flex-center-between">
                  <div>Total enroll</div>
                  <div class="font-weight-bold">65</div>
                </div>
              </v-card-text>
            </v-card>
          </slide>
          <navigation slot="hooper-addons"></navigation>
        </hooper>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <div class="black--text mb-3">Recent Comments</div>
        <v-card>
          <v-card-text>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <div :key="item.id">
                  <v-divider v-if="index !== 0"></v-divider>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./dashboard.ts"></script>
