<template>
  <div>
    <h1>{{title}}</h1>

    <!-- al haber registrado globalmente el componente "heroes" se puede usar aquí -->
    <heroes></heroes>
  </div>
</template>

<script>

// ----- import and setting a local component
import Heroes from './Heroes.vue'


export default {
  // component registered localy
  components: {
    'heroes': Heroes
  },

  data () {
    return {
      title: 'List of Heroes'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
