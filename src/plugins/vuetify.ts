import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2a59dc',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        ash: '#FBFBFB',
        ash_darken: '#DFDFDF',
        grey: '#9F9FA8',
        grey_darken: '#777781',
      },
    },
  },
});
