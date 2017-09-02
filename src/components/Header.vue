<template>
  <div>
    <header>
    <h1>
      {{title}}
    </h1>
    </header>
    <button v-on:click="changeTitleOnlyHere">Chane Title Only Here</button>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      title: 'HEADER'
    }
  },
  methods: {
    changeTitleOnlyHere: function(){
      // PRIMITIVE TYPES EJ:srings
      // this is going to change only title in this component, not the original
      // this.title = 'new title';

      // EMIT AN EVENT - we want to change the parent data we recived a s a prop, so it changes
      // value wherever the same data has been used as a prop(ex: footer)
      // parameter1 -> name of the event
      // paramter2 -> value
      this.$emit('changeTitle','value updated from header and emmitted to parent component');
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