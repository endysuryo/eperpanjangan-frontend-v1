<template>
  <div>
    <div class="screen-height flex-center-around">
      <div>
        <v-card min-width="450" class="pa-5">
          <div class="flex-center-around my-10">
            <div class="text-center">
              <img
                width="240px"
                src="../../assets/images/renjana-kata-logo.svg"
              />
              <div>Lorem ipsum consectetur adipiscing</div>
            </div>
          </div>
          <v-card-text>
            <v-form @submit.prevent="chooseRealm" id="login-form">
              <v-text-field
                color="primary"
                label="Realm"
                name="realm"
                type="text"
                v-model="realmName"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              large
              color="primary"
              class="elevation-0 py-4"
              dark
              block
              justify-center
              type="submit"
              form="login-form"
              >Submit</v-btn
            >
            <div class="flex-grow-1"></div>
          </v-card-actions>
          <div class="flex-center-around mt-8">
            <div class="grey--text">{{ VERSION_APP }}-{{ ENV }}</div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./chooseRealm.ts"></script>
