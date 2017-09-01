<template>
  <div>
    <footer>
    <p>
      {{copyright}} {{title}}
    </p>
    </footer>
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
      copyright: 'Copyright 2017 Virgil'
    }
  }
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    color: lightblue;
    text-align: center;
  }
</style>