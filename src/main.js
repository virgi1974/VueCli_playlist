import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase'
import firebaseui from 'firebaseui';

import {config} from './helpers/firebaseConfig'

import Routes from './routes'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

export const bus = new Vue();

import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  created() {
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.$router.push('/success')
    } else {
      this.$router.push('/auth')
    }
   });
  },
})
