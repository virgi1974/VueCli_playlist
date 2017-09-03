<template>
  <div>
    <h3>Chose a component to render</h3>
    <form action="">
      <keep-alive>
        <component v-bind:is="templateName"></component>
      </keep-alive>
    </form>
    <br>
    <button v-on:click="templateName = 'app-form1'">Show first template dynamically</button>
    <button v-on:click="templateName = 'app-form2'">Show second template dynamically</button>
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
      templateName: ""
    }
  }
}
</script>

<style scoped>
</style>
