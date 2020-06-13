<template>
  <div>
    <!-- alert -->
    <alert />

    <!-- step navigation -->
    <program-detail-nav :currentStep="$route.name" />

    <!-- title -->
    <div class="title-text font-weight-bold mb-5">Class Session</div>
  </div>
</template>

<script lang="ts" src="./classSession.ts"></script>