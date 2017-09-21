<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">

      <md-input-container>
        <md-input v-model.lazy="blog.title" placeholder="Blog Title"></md-input>
      </md-input-container>

      <br>

      <md-input-container>
        <md-textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10" placeholder="The content goes here"></md-textarea>
      </md-input-container>

      <div id="checkboxes">
        <label for="">Ruby</label><i class="devicon-ruby-plain colored"></i>
        <input v-model="blog.categories" type="checkbox" value="Ruby">
        <label for="">JS</label><i class="devicon-nodejs-plain colored"></i>
        <input v-model="blog.categories" type="checkbox" value="JS">
        <label for="">Nginx</label><i class="devicon-nginx-original colored"></i>
        <input v-model="blog.categories" type="checkbox" value="Nginx">
        <label for="">Other</label>
        <input v-model="blog.categories" type="checkbox" value="Other">
      </div>

        <md-input-container style="width: 50px;text-align: right;">
          <md-select name="author" id="author" v-model="blog.author" placeholder="hola tronco" multiple>
            <md-button class="md-icon-button" md-menu-trigger slot="icon">
              <i class="material-icons md-48">face</i>
            </md-button>
          <md-subheader>Authors</md-subheader>
            <md-option v-for="author in authors" v-bind:value="author">{{author}}</md-option>
          </md-select>
        </md-input-container>

      <md-button class="md-raised md-primary" v-on:click.prevent="post">Add Blog</md-button>

    </form>

    <div v-if="submitted">
      <h3 id="submitted-msg">Thanks for submitting with us</h3>
    </div>


    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author:</p>
      <p>{{blog.author}}</p>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Virgilio','Aranzazu','Ariadna','Selene'],
      submitted: false
    }
  },
  methods: {
    post: function(){
      this.$http.post('https://vue-blog-47b5b.firebaseio.com/programming_posts.json',this.blog).then(function(data){
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>

  #add-blog *{
    box-sizing: border-box;
  }

  #add-blog {
    margin: 20px auto;
    max-width: 550px;
  }

  label {
    display: block;
    margin:20px auto;
  }

  input[type=text],textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 50px 0;
    background-color: rgba(231, 234, 231, 0.35);
  }

  #preview li {
    display: inline-block;
    background-color: lightblue;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 2px;
  }

  h3 {
    margin-top: 10px;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label {
    display: inline-block;
  }

  #submitted-msg {
    background-color: lightblue;
    border: 1px;
    text-align: center;
    padding: 5px;
    color: white;
  }

  textarea {
    background-color: #FAFAFA;
  }
</style>
