<template>
  <!-- <v-alert
    :value="alertData.alert"
    :color="alertData.type"
    :light="alertData.type === 'warning' "
    :dark="alertData.type === 'error' || alertData.type === 'info' || alertData.type === 'succes' "
    transition="scale-transition"
  >
    <div class="flex-center-between">
      <div>
        <div class="title-alert">{{ alertData.title }}</div>
        <div>{{ alertData.message }}</div>
      </div>
      <v-btn small @click="resetAlert" text>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-alert>-->
  <v-snackbar
    elevation="0"
    v-model="alertData.alert"
    :color="alertData.type"
    min-width="100%"
    :timeout="0"
    top
  >
    <div class="flex-center-between">
      <div :class="alertData.type === 'warning' ? 'black-text' : 'white-text'">
        <div class="title-alert">{{ alertData.title }}</div>
        <div>{{ alertData.message }}</div>
      </div>
      <v-btn @click="resetAlert" small text>
        <v-icon :color="alertData.type === 'warning' ? 'black' : 'white'">mdi-close</v-icon>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script lang="ts" src="./alert.ts"></script>

<style lang="scss">
.title-alert {
  font-weight: 700;
  font-size: 1.2rem;
}
.black-text {
  color: black;
}
.white-text {
  color: white;
}
</style>