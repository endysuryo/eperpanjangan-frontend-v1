<template>
  <div class="container-step">
    <div
      @click="currentStep === item.id ? {} : stepClickEvent(item)"
      :class="currentStep === item.id ? 'step-wrapper-active' : 'step-wrapper'"
      v-for="item in data"
      :key="item.id"
    >{{ item.title }}</div>
  </div>
</template>

<script lang="ts" src="./stepNavigation.ts"></script>

<style lang="scss">
.container-step {
  display: flex;
  align-items: center;
  [class^='step-wrapper'] {
    justify-content: space-around;
    align-items: center;
    display: flex;
    height: 60px;
    flex: 1;
    font-size: 1.05rem;
    background-color: #f0f0f0;
    border-bottom: 5px solid #f0f0f0;
    border: 1px solid #dfdfdf;
    font-weight: 700;
    cursor: pointer;
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  .step-wrapper-active {
    border: 1px solid #c4ddf5;
    border-bottom: 5px solid #2a59dc;
    background-color: #e8f4ff;
    color: #2a59dc;
  }
}
</style>