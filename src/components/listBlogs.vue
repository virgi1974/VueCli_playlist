<template>
  <div id="show-blogs">
    <h1>List Blog Articles</h1>
    <small>example of a component nested inside a parent and using a mixin for the search functionality</small>
    <input v-model="search" type="text" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h3>{{ blog.title | to-uppercase}}</h3>
    </div>
  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';

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
  },
  filters: { //FILTERS RESGISTERED LOCALLY - 2 formats
    // format 1
    'to-uppercase': function(value){ 
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
  .single-blog {
    width: 40%;
    float: left;
    padding: 20px;
    padding-top: 10px;
    margin: 10px;
    box-sizing: border-box;
    background-color: rgba(231, 234, 231, 0.35)
  }

</style>
