<template>
  <ul>
    <li v-for="heroe in heroes">
      {{heroe}}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      heroes: ['Superman','Robin','CatWoman']
    }
  }
}
</script>

<style>

</style>
