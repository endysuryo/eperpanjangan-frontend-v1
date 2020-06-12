<template>
  <div>
    <v-tooltip max-width="300" v-if="useTooltip" right>
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" class="flex-center mb-3 inline-block">
          <div class="text-input mr-1">
            {{ text }}
          </div>
          <v-icon small>mdi-information-outline</v-icon>
        </div>
      </template>
      <span>{{ tooltipMessage }}</span>
    </v-tooltip>
    <div v-else class="flex-center mb-3 inline-block">
      <div class="text-input mr-1">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./inputLabel.ts"></script>
