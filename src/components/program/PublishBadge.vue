<template>
  <div class="flex-center mb-2">
    <span class="mr-2">Status:</span>
    <v-img
      v-if="status === 'DRAFT'"
      max-width="22"
      class="mr-1"
      src="../../assets/images/icon-unit-draft.svg"
    />
    <v-img
      v-if="status === 'WAITING_APPROVAL'"
      max-width="22"
      class="mr-1"
      src="../../assets/images/icon-unit-waiting.svg"
    />
    <v-img
      v-if="status === 'PUBLISHED'"
      max-width="22"
      class="mr-1"
      src="../../assets/images/icon-unit-published.svg"
    />
    <div class="status-text">{{ convertStatus() }}</div>
  </div>
</template>

<script lang="ts" src="./publishBadge.ts"></script>