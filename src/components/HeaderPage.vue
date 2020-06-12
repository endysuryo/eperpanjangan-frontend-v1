<template>
  <div>
    <div class="header-wrapper">
      <div class="header-left">
        <div class="header-title">polapikir</div>
        <header-link />
      </div>

      <div class="header-right flex-center">
        <v-btn outlined color="ash_darken" class="mr-5 outline-bg-white">
          <span v-if="notificationIndicator" class="notif-dot"></span>
          <v-icon color="grey_darken" class="mr-1">mdi-bell-outline</v-icon>
          <div class="black--text">5 message</div>
        </v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              outlined
              color="ash_darken"
              class="outline-bg-white"
            >
              <v-avatar size="28" class="mr-2">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <div class="black--text">{{ fullname }}</div>
              <v-icon color="grey_darken" class="ml-1">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
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
  </div>
</template>

<script lang="ts" src="./headerPage.ts"></script>

<style lang="scss">
.header-wrapper {
  border-bottom: 1px solid #dfdfdf;
  height: 70px;
  display: grid;
  background-color: #f8f8f8;
  grid-template-columns: 80px 1fr 1fr 80px;
  .header-left {
    grid-column: 2;
    display: flex;
    align-items: center;
    .header-title {
      margin-right: 100px;
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  .header-right {
    grid-column: 3;
    align-items: center;
    justify-self: flex-end;
  }
}
.notif-dot {
  width: 7px;
  height: 7px;
  background-color: #ff5252;
  border-radius: 10px;
  position: absolute;
  left: 18px;
  top: 0px;
}
.outline-bg-white {
  background-color: white !important;
}
</style>
