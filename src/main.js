import Vue from 'vue'
import App from './App.vue'

// ----- import and setting a global component
// import Heroes from './Heroes.vue'

// this way we register the component globaly
// we register under the name "heroes"
// Vue.component('heroes', Heroes);
// --------------------------------------------

new Vue({
  el: '#app',
  render: h => h(App)
})
