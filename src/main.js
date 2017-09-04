import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

// custom directive declared globally
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

// custom directive to use different theme, with differnent values or arguments passed
Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "600px";
    };

    if (binding.arg == 'column') {
      el.style.background = 'floralwhite';
    };
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
