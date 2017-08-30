<template>
  <div>
    <footer>
    <p>
      {{copyright}}
    </p>
    </footer>
  </div>
</template>

<script>
export default {
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