<template>
  <div>
    <header>
    <h1>
      {{title}}
    </h1>
    </header>
    <button v-if="showButton === false" v-on:click="showButton = !showButton">Show options for passing-updating props between components</button>
    <button v-else v-on:click="showButton = false">Hide again</button>
    <div v-if="showButton">
      <button v-on:click="changeTitleOnlyHere">Change only Header Title - Primitive Type</button>
      <br>
      <button v-on:click="changeAllTitles">Change Header-Footer Title - Emit Event from child to parent</button>
      <br>
      <button v-on:click="changeAllTitlesWithBusEvent">Change Header-Footer Title - Bus Event comunicating components</button>
    </div>

  </div>
</template>

<script>
// we need to import the Event Bus form main.js, where is defined
import { bus } from "../main"

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      title: 'HEADER',
      showButton: false
    }
  },
  methods: {
    changeTitleOnlyHere: function(){
      // 1 - PRIMITIVE TYPES EJ:srings
      // this is going to change only title in this component, not the original
      this.title = 'new title';
    },
    changeAllTitles: function(){
      // 2 - EMIT AN EVENT - we want to change the parent data we recived a s a prop, so it changes
      // value wherever the same data has been used as a prop(ex: footer)
      // parameter1 -> name of the event
      // paramter2 -> value
      this.$emit('changeTitle','value updated from header and emmitted to parent component');
    },
    changeAllTitlesWithBusEvent: function(){
      // 3 - EVENT BUS
      // we change our own data(because we emit to the Bus Event but we are not listening to it at the same time)
      this.title = 'Event Bus is cooooool!!!!!!!';
      // we emit the desired change to other components
      bus.$emit('EventBusChangesTitle','Event Bus is cooooool!!!!!!!');
    }
  }
}
</script>

<style scoped>
  header {
    background: lightblue;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>