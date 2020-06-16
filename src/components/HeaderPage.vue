<template>
  <div class="mb-10 flex-center-between">
    <div class="flex-center">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-3"></v-app-bar-nav-icon>
      <v-btn fab small class="mr-2" v-if="$route.meta.back" :to="{ name: $route.meta.back }">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="title font-weight-normal">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="flex-center-between">
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
          <!-- <v-list-item @click="$keycloak.logoutFn"> -->
          <v-list-item>
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
