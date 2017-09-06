<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input v-model="search" type="text" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2>{{ blog.title | to-uppercase}}</h2>
      <article>{{ blog.body | short-version}}</article>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    })
  },
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    padding-top: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    background-color: rgba(231, 234, 231, 0.35)
  }

</style>
