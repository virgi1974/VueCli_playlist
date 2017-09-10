<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <ul>
      <li v-for="category in blog.categories">
        {{ category}}
      </li>
    </ul>
    <p>Author: <small><em>{{ blog.author}}</em></small></p>
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
    this.$http.get('https://vue-blog-47b5b.firebaseio.com/programming_posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
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
