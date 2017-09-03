<template>
  <div>
    <app-form1></app-form1>
    <app-form2></app-form2>
  </div>
</template>

<script>

import Form1 from './components/Form1.vue'
import Form2 from './components/Form2.vue'

export default {
  components: {
    'app-form1': Form1,
    'app-form2': Form2
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
