<template>
  <v-card outlined height="400" class="flex-center-around mb-3">
    <div v-if="type === 'video'" class="flex-column-center">
      <v-img width="80" src="../../assets/images/play-circle.svg" />
      <div class="placeholder-text">Your video preview</div>
      <div class="placeholder-text-subtitle">Paste your link to see the video</div>
    </div>
    <div v-if="type === 'image'" class="flex-column-center">
      <v-img width="80" src="../../assets/images/image.svg" />
      <div class="placeholder-text">Your Image preview</div>
      <div class="placeholder-text-subtitle">Upload your image to see the preview</div>
    </div>
  </v-card>
</template>

<script lang="ts" src="./filePlaceholder.ts"></script>