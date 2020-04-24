<template>
  <div class="mb-10 flex-center-between">
    <div class="headline font-weight-bold">
      <span>{{ title }}</span>
      <v-chip small class="ml-3" color="primary"
        >Beta {{ ENV }}-{{ VERSION_APP }}</v-chip
      >
    </div>
    <div class=" flex-center-between">
      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" color="black" class="mr-3">mdi-bell-outline</v-icon>
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
