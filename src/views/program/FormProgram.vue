<template>
  <v-dialog origin="'top center'" persistent v-model="dialog" width="80%">
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
            v-model="program.title"
            :rules="titleRules"
            data-text="title"
            @blur="dataChange($event)"
            color="ash_darken"
            class="white--text"
            validate-on-blur
            outlined
            dense
            solo
            flat
            required
          ></v-text-field>

          <div class="d-flex align-content-start justify-space-between">
            <div class="flex-1 mr-5">
              <input-label
                :useTooltip="true"
                :tooltipMessage="'This title will become your program title'"
                :text="'Program Video Teaser'"
              />
              <file-placeholder v-if="!videoPreviewValid" type="video" />
              <vue-plyr class="mb-3" v-else ref="plyr">
                <div data-plyr-provider="youtube" :data-plyr-embed-id="videoPreviewId"></div>
              </vue-plyr>
              <v-text-field
                color="ash_darken"
                class="white--text"
                v-model="program.preview_video_url"
                :rules="titleRules"
                @blur="onVideoTeaserBlur($event)"
                hint="example: https://www.youtube.com/watch?v=BPNTC7uZYrI"
                placeholder="Paste your link here"
                outlined
                dense
                solo
                flat
                required
              ></v-text-field>
            </div>

            <div class="flex-1 mr-5">
              <input-label
                :useTooltip="true"
                :tooltipMessage="'This title will become your program title'"
                :text="'Program Image Thumbnail'"
              />
              <file-placeholder
                v-if="!program.preview_image_url && tempFile.filename === ''"
                type="image"
              />
              <v-card v-else outlined flat color="ash_darken" class="mb-3">
                <v-img contain max-height="400" :src="program.preview_image_url">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
              <div class="mb-5">
                <v-file-input
                  color="ash_darken"
                  @change="validateImage($event)"
                  v-model="fileContainer"
                  :value="fileContainer"
                  accept="image/*"
                  outlined
                  loader-height="5"
                  :suffix="uploadPrecentage > 0 && isLoadingUploadFile ? `Upload progress: ${uploadPrecentage}` : ''"
                  dense
                  solo
                  hide-details
                  show-size
                  flat
                  required
                ></v-file-input>
                <div v-if="isLoadingUploadFile" class="pl-9">
                  <v-progress-linear height="5" v-model="uploadPrecentage" color="success"></v-progress-linear>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex align-content-start justify-space-between">
            <div class="flex-1 mr-5">
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
            </div>
            <div class="flex-1 mr-5">
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
            </div>
          </div>

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
              <v-menu
                ref="menu"
                v-model="programAccessDeadline"
                :close-on-content-click="false"
                :return-value.sync="program.max_duration_access"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="program.max_duration_access"
                    label="Picker in menu"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                    dense
                    solo
                    flat
                    hint="This program will available for learner until this time"
                    persistent-hint
                  ></v-text-field>
                </template>
                <v-date-picker
                  type="month"
                  :min="minProgramAccessDeadline"
                  v-model="program.max_duration_access"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="programAccessDeadline = false">Cancel</v-btn>
                  <v-btn color="primary" @click="$refs.menu.save(program.max_duration_access)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="flex-1 ml-5">
              <input-label
                :useTooltip="true"
                :tooltipMessage="'This title will become your program title'"
                :text="'Class Dependencies'"
              />
              <v-radio-group row v-model="program.is_class_dependent_by_order">
                <v-radio label="Yes" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div class="flex-1 ml-5">
              <input-label
                :useTooltip="true"
                :tooltipMessage="'This title will become your program title'"
                :text="'Unit Dependencies'"
              />
              <v-radio-group row v-model="program.is_unit_dependent_by_order">
                <v-radio label="Yes" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </div>
          </div>
        </v-form>

        <v-divider class="my-5"></v-divider>

        <div class="flex-center">
          <v-spacer></v-spacer>
          <v-btn @click="closeDialog" outlined color="ash_darken" class="outline-bg-white">
            <div class="black--text">Cancel</div>
          </v-btn>
          <v-btn @click="closeDialog" color="primary" class="ml-3 outline-bg-white" type="submit">
            <div class="white--text">Save Program</div>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./formProgram.ts"></script>
