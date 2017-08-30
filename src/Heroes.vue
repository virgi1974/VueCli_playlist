<template>
  <div>
    <h1>from heroes.vue component</h1>
    <ul>
      <li v-for="heroe in heroes">
        {{heroe}}
      </li>
    </ul>
  </div>
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

<style scoped>
  h1 {
    color:green;
  }
</style>
