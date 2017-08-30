<template>
  <div>
    <h1>{{title}}</h1>

    <!-- al haber registrado globalmente el componente "heroes" se puede usar aquí -->
    <heroes></heroes>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'List of Heroes'
    }
  }
}
</script>

<style>

</style>
