<template>
  <v-card outlined>
    <div class="ma-3 d-flex">
      <v-avatar size="100" tile class="mr-3">
        <v-img
          v-if="payload.image && !isImageError"
          @error="previewImageChecker"
          :src="payload.image"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-img v-else src="../../assets/images/icon-notif-learning.svg"></v-img>
      </v-avatar>
      <div>
        <div class="mb-3">
          <publish-badge :status="payload.status" />
          <router-link
            :to="{name: 'program-detail', params: {id: payload.id}}"
            class="title-card font-weight-bold black--text"
            v-text="payload.title"
          ></router-link>
        </div>
        <div class="subtitle-text mb-2" v-text="'Tags'"></div>
        <div v-if="payload.tags.length > 0" class="d-flex flex-wrap">
          <v-chip
            v-for="tag in payload.tags"
            :key="tag"
            small
            class="mr-1 mb-1"
            color="success"
          >{{ tag }}</v-chip>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" src="./programCard.ts"></script>