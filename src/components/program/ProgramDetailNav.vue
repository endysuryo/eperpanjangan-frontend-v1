<template>
  <div class="flex-center-around">
    <div class="program-create-step-detail-program">
      <step-navigation
        v-on:stepClickEvent="stepClickEvent($event)"
        :currentStep="currentStep"
        :data="steps"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./programDetailNav.ts"></script>

<style lang="scss" scope>
.program-create-step-detail-program {
  width: 100%;
}
</style>