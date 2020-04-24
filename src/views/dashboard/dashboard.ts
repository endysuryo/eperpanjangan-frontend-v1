import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderPage from '../../components/HeaderPage.vue';

@Component({
  name: 'Dashboard',
  components: {
    HeaderPage,
  },
})
export default class Dashboard extends Vue {
  items: any = [
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: 'Ill be in your neighborhood doing errands this weekend',
    },
  ];
}
