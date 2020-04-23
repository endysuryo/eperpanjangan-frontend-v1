<template>
  <div>
    <div class="mb-10 flex-center-between">
      <div class="headline">Dashboard</div>
      <div class=" flex-center-between">
        <v-avatar color="orange" size="36" class="mr-4">
          <v-icon color="white" small>mdi-bell</v-icon>
        </v-avatar>
        <v-avatar color="orange" size="36">
          <v-icon color="white" small>mdi-account</v-icon>
        </v-avatar>
      </div>
    </div>
    <div class="black--text">Summary Report</div>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-card elevation="0">
          <v-card-text class="pa-8">
            <div class="flex-center-between">
              <div v-for="n in 4" :key="n" class="d-flex">
                <v-avatar
                  dark
                  width="50px"
                  height="50px"
                  color="blue"
                  class="mr-4"
                >
                  <v-icon color="white">mdi-arrow-up-drop-circle</v-icon>
                </v-avatar>
                <div>
                  <div class="body-2">Total Enrollment</div>
                  <div class="headline black--text">
                    120 Orang
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="flex-center-between">
      <div class="black--text">Top Programs</div>
      <div class="grey--text body-1">See All</div>
    </div>
    <v-row class="mb-3">
      <v-col v-for="n in 4" :key="n">
        <v-card max-width="300" elevation="0">
          <v-img
            class="white--text align-end"
            height="180px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="title">Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-2">
            <v-chip small color="blue">
              <span class="white--text">Technology</span>
            </v-chip>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div class="my-2">Whitsunday Island, Whitsunday Islands</div>
            <div class="flex-center-between">
              <div>Total user enroll</div>
              <div class="font-weight-bold">65</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" v-for="n in 2" :key="n">
        <div class="black--text mb-3">Recent Comments</div>
        <v-card elevation="0">
          <v-card-text>
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-divider :key="index" v-if="index !== 0"></v-divider>
                <v-list-item :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./dashboard.ts"></script>
