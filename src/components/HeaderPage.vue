<template>
  <div class="mb-10 flex-center-between">
    <div class="flex-center">
      <v-btn
        fab
        small
        class="mr-2"
        v-if="$route.meta.back"
        :to="{ name: $route.meta.back }"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="title font-weight-normal">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="flex-center-between">
      <router-link :to="{ name: 'account' }">
        <div class="flex-center black--text">
          <div>{{ fullname }}</div>
          <v-avatar size="32" class="ml-3">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
      </router-link>
      <v-divider vertical class="mx-5"></v-divider>
      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" color="black" class="mr-5">mdi-bell-outline</v-icon>
        </template>
        <v-card height="450" width="400">
          <div class="flex-center-between">
            <v-subheader>Notifications</v-subheader>
            <v-subheader class="black--text">Mark as read</v-subheader>
          </div>
          <v-list two-line class="pt-0">
            <template v-for="item in items">
              <v-list-item :key="item.title" :to="{ name: 'program' }">
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
        </v-card>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" color="black">mdi-account-outline</v-icon>
        </template>
        <v-list width="250">
          <v-list-item :to="{ name: 'program' }">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$keycloak.logoutFn">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts" src="./headerPage.ts"></script>
