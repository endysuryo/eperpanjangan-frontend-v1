<template>
  <div class="flex-center-between">
    <router-link :to="{ name: item.to }" v-for="item in menu" :key="item.title" class="header-menu">
      <v-icon :color="$route.name === item.to ? 'primary' : 'grey'">{{ item.icon }}</v-icon>
      <div :class="$route.name === item.to ? 'text-link-active' : 'text-link'">{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script lang="ts" src="./headerLink.ts"></script>

<style lang="scss">
.header-menu {
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-weight: 600;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  .text-link {
    color: #777781;
    margin-left: 10px;
  }
  .text-link-active {
    margin-left: 10px;
    color: #2a59dc !important;
  }
}
</style>