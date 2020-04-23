<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      clipped
      app
      light
      color="white"
    >
      <v-list>
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-content class="px-3">
            <v-list-item-title class="title font-weight-bold blue--text"
              >Renjana Kata</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item two-line :class="miniVariant && 'px-2'">
          <v-list-item-avatar @click="miniVariant = !miniVariant">
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->

        <v-divider></v-divider>

        <div class="px-3">
          <v-subheader v-if="!miniVariant">Dashboard </v-subheader>
          <v-list-item
            v-for="item in itemsAccount"
            :key="item.text"
            :to="{ name: item.routeName }"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-subheader v-if="!miniVariant">Course Management </v-subheader>
          <v-list-item v-for="item in itemsCourse" :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app clipped-left color="primary" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Renjana Kata</span>
      </v-toolbar-title>
    </v-app-bar> -->

    <v-content style="background: #f3f3f6;">
      <div class="pa-5">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="./assets/style.scss"></style>
