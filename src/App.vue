<template>
  <div> <!-- Component template should contain exactly one root element - so we wrap all components inside a div-->
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    // header or footer can not be used as a component name cause is a reserved word
    'app-header': Header,
    'app-footer': Footer,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
