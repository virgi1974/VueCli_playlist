<template>
  <div> <!-- Component template should contain exactly one root element - so we wrap all components inside a div-->
    <app-header></app-header>
    <p>{{using}}</p>
    <!-- we need to bind the data to the component using v-bind -->
    <app-heroes v-bind:heroes="heroes">list-q</app-heroes>
    <hr>
    <p>because the heroes list is passed by reference, both app-heroes components share the reference to the same data.
      This way, the actions in one component data are reflected on the othe one</p>
    <app-heroes v-bind:heroes="heroes">list-2</app-heroes>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Heroes from './Heroes.vue'

export default {
  components: {
    // header or footer can not be used as a component name cause is a reserved word
    'app-header': Header,
    'app-footer': Footer,
    'app-heroes': Heroes
  },
  data () {
    return {
      heroes: [
        {name: 'Superman', power: 'strength', show: false},
        {name: 'Batman', power: 'swift', show: false},
        {name: 'Spiderman', power: 'sense of humor', show: false},
        {name: 'Elektra', power: 'martial arts', show: false},
        {name: 'Daredevil', power: 'sixth sense', show: false},
        {name: 'Thor', power: 'hummer', show: false}
      ],
      using: 'usando props para pasar datos del componente padre al hijo'
    }
  }
}
</script>

<style scoped>
  p {
    background-color: gray;
  }
</style>
