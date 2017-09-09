import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

// FILTER REGISTERED GLOBALLY
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// })

// FILTER REGISTERED GLOBALLY
// Vue.filter('short-version', function(value){
//   return value.slice(0,100) + '....';
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
