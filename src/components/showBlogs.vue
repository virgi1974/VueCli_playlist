<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input v-model="search" type="text" placeholder="search blogs">
    <span v-if="mode === false"><button @click="toggleMode()">HTML</button></span>
    <span v-if="mode === true"><button @click="mode = false">RAW</button></span>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
      </router-link>

      <article v-if="mode === false">{{ blog.content | short-version}}</article>
      <div v-if="mode === true" v-html="blog.content"></div>
    </div>

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
      search: '',
      mode: false
    }
  },
  methods: {
    toggleMode: function(){
      this.mode = !this.mode;
    }
  },
  created(){
    this.$http.get('https://vue-blog-47b5b.firebaseio.com/programming_posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for (let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      };
        this.blogs = blogsArray;
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
