<template>
  <v-app id="base-app">
    <header-page />
    <v-content>
      <div class="outter-content">
        <div class="inner-content">
          <router-view />
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./baseApp.ts"></script>

<style lang="scss">
.outter-content {
  position: relative;
}
.inner-content {
  width: 90%;
  margin: 0 auto;
  padding: 40px 40px;
}
/* ----------- Non-Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .inner-content {
    width: 80%;
    margin: 0 auto;
    padding: 40px 40px;
  }
}

/* ----------- Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  .inner-content {
    width: 80%;
    margin: 0 auto;
    padding: 40px 40px;
  }
}
</style>
