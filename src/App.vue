<template>
  <div> <!-- Component template should contain exactly one root element - so we wrap all components inside a div-->

    <!--  changeTitle is the name of the veent we listen to-->
    <!--  updateTile is the function we trigger when detect the event has been emitted-->
    <!-- $event is the value that comes from the child component -->
    <app-header v-bind:title="title" v-on:changeTitle="updateTile($event)"></app-header>
    <p>{{using}}</p>
    <!-- we need to bind the data to the component using v-bind -->
    <app-heroes v-bind:heroes="heroes"></app-heroes>
    <app-footer v-bind:title="title"></app-footer>
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
      using: 'usando props para pasar datos del componente padre al hijo',
      title: 'title ORIGINAL (from parent component passed as a prop to a child component)'
    }
  },
  methods: {
    updateTile: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>
  p {
    background-color: gray;
  }
</style>
