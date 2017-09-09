<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

// the rest of the components are imported through the routes definition
import header from './components/header.vue'

export default {
  components: {
    'app-header': header
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
