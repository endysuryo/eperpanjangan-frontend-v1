<template>
  <div>
    <!-- alert -->
    <alert />

    <div class="flex-center-around">
      <div class="program-create-step">
        <step-navigation
          v-on:stepClickEvent="stepClickEvent($event)"
          :currentStep="currentStep"
          :data="steps"
        />
      </div>
    </div>

    <!-- step 1 -->
    <div class="flex-center-around my-10" v-if="currentStep === 0">
      <div class="text-center content-step">
        <div class="mb-5">Step 1</div>
        <div class="title-text mb-5">What's Program Title</div>
        <div
          class="mb-10"
        >aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</div>
        <div class="flex-start mb-5">
          <v-text-field
            v-model="program.title"
            data-text="title"
            color="ash_darken"
            outlined
            hint="Program title is required and title count minimal 10 letter"
            persistent-hint
            placeholder="Sample program title"
            solo
            flat
            required
          ></v-text-field>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on" class="title-counter">{{ titleCounter }}</div>
            </template>
            <span>Recommendation title length for program</span>
          </v-tooltip>
        </div>

        <div class="flex-center-around">
          <div class="flex-center">
            <v-btn class="mx-2" @click="cancelCreateProgram" color="grey" large>
              <div class="white--text">Cancel</div>
            </v-btn>
            <v-btn @click="currentStep = 1" class="mx-2" color="primary" large>
              <div class="white--text">Next Step</div>
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- step 2 -->
    <div class="flex-center-around my-10" v-if="currentStep === 1">
      <div class="text-center content-step">
        <div class="mb-5">Step 2</div>
        <div class="title-text mb-5">Program Tags</div>
        <div
          class="mb-10"
        >aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</div>
        <div class="flex-start">
          <v-text-field
            ref="inputTags"
            v-model="currentTag"
            v-on:keyup.enter="addNewTag($event)"
            data-text="tags"
            color="ash_darken"
            class="mb-3"
            placeholder="Press (enter) to add new tag"
            outlined
            hide-details
            solo
            flat
          ></v-text-field>
        </div>
        <div v-if="program.tags.length > 0" class="flex-start-around flex-wrap mb-5">
          <v-chip
            close
            close-icon="mdi-delete"
            @click:close="removeTag(item)"
            v-for="item in program.tags"
            :key="item"
            color="success"
            class="ma-2 chip-text"
          >{{ item }}</v-chip>
        </div>
        <div v-else class="flex-center-around mb-5">
          <div>Program tags is empty</div>
        </div>

        <div class="flex-center-around">
          <div class="flex-center">
            <v-btn
              :disabled="isLoadingCreateProgram"
              class="mx-2"
              @click="currentStep = 0"
              color="grey"
              large
            >
              <div class="white--text">Back</div>
            </v-btn>
            <v-btn
              @click.stop="createProgram"
              :disabled="program.tags.length < 1 && isLoadingCreateProgram"
              color="primary"
              :loading="isLoadingCreateProgram"
              large
            >
              <div class="white--text">Create Program</div>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./create.ts"></script>

<style scope lang="scss">
.content-step {
  width: 60%;
}
.program-create-step {
  width: 80%;
}
.title-counter {
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  justify-content: space-around;
  height: 58px;
  width: 58px;
  border-radius: 5px;
  background-color: grey;
  color: white;
  cursor: default;
}
.chip-text {
  text-transform: capitalize;
}
</style>