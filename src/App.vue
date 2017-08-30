<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Let´s practice dude!!!!!'
    }
  },
  methods: {
    greeting: function(){
      return "Hi there Virgi";
    }
  }
}
</script>

<style>

</style>
