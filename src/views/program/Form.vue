<template>
  <v-dialog origin="'top center'" persistent v-model="dialog" width="60%">
    <v-card outlined>
      <v-card-text class="pa-10">
        <div class="title-text mb-5">Create New Program</div>

        <v-form ref="form" @submit="closeDialog">
          <input-label
            :useTooltip="true"
            :tooltipMessage="'This title will become your program title'"
            :text="'Program Title'"
          />
          <v-text-field
            color="ash_darken"
            class="white--text"
            v-model="program.title"
            :rules="titleRules"
            outlined
            dense
            solo
            flat
            required
          ></v-text-field>

          <input-label
            :useTooltip="true"
            :tooltipMessage="'This title will become your program title'"
            :text="'Program Description'"
          />
          <quill-editor
            ref="quill"
            class="mb-3"
            v-model="program.description"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
          />

          <input-label
            :useTooltip="true"
            :tooltipMessage="'This title will become your program title'"
            :text="'Program Requirements'"
          />
          <quill-editor
            ref="quill"
            class="mb-3"
            v-model="program.requirements"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
          />

          <input-label
            :useTooltip="true"
            :tooltipMessage="'This title will become your program title'"
            :text="'Program Learning Purpose'"
          />
          <quill-editor
            ref="quill"
            class="mb-3"
            v-model="program.learning_purposes"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
          />

          <div class="d-flex align-content-start justify-space-between">
            <div class="flex-1 mr-5">
              <input-label
                :useTooltip="true"
                :tooltipMessage="'This title will become your program title'"
                :text="'Program Deadline Access'"
              />
              <v-text-field
                color="ash_darken"
                class="white--text"
                v-model="program.max_duration_access"
                :rules="titleRules"
                outlined
                dense
                solo
                flat
                required
              ></v-text-field>
            </div>
            <div class="flex-1 ml-5">
              <input-label
                :useTooltip="true"
                :tooltipMessage="'This title will become your program title'"
                :text="'Program Deadline Access'"
              />
              <v-text-field
                color="ash_darken"
                class="white--text"
                v-model="program.max_duration_access"
                :rules="titleRules"
                outlined
                dense
                solo
                flat
                required
              ></v-text-field>
            </div>
          </div>
        </v-form>

        <v-divider class="my-5"></v-divider>

        <div class="flex-center">
          <v-spacer></v-spacer>
          <v-btn
            @click="closeDialog"
            outlined
            color="ash_darken"
            class="outline-bg-white"
          >
            <div class="black--text">Cancel</div>
          </v-btn>
          <v-btn
            @click="closeDialog"
            color="primary"
            class="ml-3 outline-bg-white"
            type="submit"
          >
            <div class="white--text">Save Program</div>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./form.ts"></script>
