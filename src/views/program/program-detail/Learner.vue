<template>
  <div>
    <!-- alert -->
    <alert />

    <!-- step navigation -->
    <program-detail-nav :currentStep="$route.name" />

    <!-- title -->
    <div class="title-text font-weight-bold mb-5">Program Learner Management</div>
  </div>
</template>

<script lang="ts" src="./learner.ts"></script>