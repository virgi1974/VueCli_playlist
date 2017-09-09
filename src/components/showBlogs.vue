<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input v-model="search" type="text" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
      <article>{{ blog.body | short-version}}</article>
    </div>
    <br>
    <hr>
    <list-blogs></list-blogs>
  </div>
</template>

<script>

import listBlogs from './listBlogs.vue';

import searchMixin from '../mixins/searchMixin';

export default {
  components: {
    'list-blogs': listBlogs
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
    },
    // format 2
    shortVersion(value){
      return value.slice(0,100) + '....';
    }
  },
  // DIRECTIVES REGISTERED LOCALLY
  directives: {
    'rainbow': {
      bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
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
