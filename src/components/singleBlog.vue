<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>

export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      this.blog = data.body;
    });
  }
}
</script>

<style scoped>
 h1 {
  background: #ccc;
  width: 80%;
  margin: 20px auto;
  text-align: center;
 }

 article {
  width: 80%;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0 auto;
 }
</style>
