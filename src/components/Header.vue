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
      this.title = 'new title';
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