<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">

      <md-input-container>
        <md-input id="blog-title" v-model.lazy="blog.title" placeholder="Blog Title"></md-input>
      </md-input-container>

      <br>

      <md-input-container>
        <md-textarea id="blog-content" v-model.lazy="blog.content" name="" cols="30" rows="10" placeholder="The content goes here"></md-textarea>
      </md-input-container>

      <div id="checkboxes">
        <i style="font-size: 30px;" class="devicon-vuejs-plain colored"></i>
        <label for="">Vue</label>
        <input class="progamming-list" v-model="blog.categories" type="checkbox" value="Vue">
        <i style="font-size: 30px;" class="devicon-ruby-plain colored"></i>
        <label for="">Ruby</label>
        <input class="progamming-list" v-model="blog.categories" type="checkbox" value="Ruby">
        <i style="font-size: 30px;" class="devicon-nodejs-plain colored"></i>
        <label for="">JS</label>
        <input class="progamming-list" v-model="blog.categories" type="checkbox" value="JS">
        <br>
        <i style="font-size: 50px;" class="devicon-nginx-original colored"></i>
        <label for="">Nginx</label>
        <input class="progamming-list" v-model="blog.categories" type="checkbox" value="Nginx">
        <i style="font-size: 50px;" class="devicon-ssh-plain colored"></i>
        <label for="">Other</label>
        <input class="progamming-list" v-model="blog.categories" type="checkbox" value="Other">
      </div>

        <md-input-container style="width: 50px;text-align: right;">
          <md-select name="author" id="author" v-model="blog.author" placeholder="hola tronco" multiple>
            <md-button class="md-icon-button" md-menu-trigger slot="icon">
              <i class="material-icons md-48">face</i>
            </md-button>
          <md-subheader>Authors</md-subheader>
            <md-option v-for="author in authors" :key="author" v-bind:value="author">{{author}}</md-option>
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
        <li v-for="category in blog.categories">
          <i style="font-size: 50px;" v-bind:class="getIcon(category)"></i>
          {{category}}
        </li>
      </ul>
      <p>Author:</p>
      <p>{{blog.author}}</p>
    </div>

    <!-- alert title-content cançt be empty -->
    <md-dialog ref="needConten">
      <md-dialog-title style="background-color: #2196F3;">Error - empty inputs detected</md-dialog-title>

      <md-dialog-content>In order to submit the form you must first fill the {{failedValidation}} of the article</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('needConten')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

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
      submitted: false,
      icons: {
        'Vue' : 'devicon-vuejs-plain colored',
        'Ruby' : 'devicon-ruby-plain colored',
        'JS' : 'devicon-nodejs-plain colored',
        'Nginx' : 'devicon-nginx-plain colored',
        'Other' : 'devicon-ssh-plain colored',
      },
      'failedValidation' : ''
    }
  },
  methods: {
    post: function(){
      const title = (document.getElementById('blog-title').value.trim() === '' ? true : false);
      const content = (document.getElementById('blog-content').value.trim() === '' ? true : false);
      const categories = (this.blog.categories.length === 0 ? true : false);
      const author = (this.blog.author === '' ? true : false)

      if (title || content || categories || author) {

        if (title) {
          this.failedValidation = 'title';
        }else if(content){
          this.failedValidation = 'main content';
        }else if(categories){
          this.failedValidation = 'programming categories';
        }else if(author){
          this.failedValidation = 'author';
        };

        this.openDialog('needConten');
      }else{
        this.$http.post('https://vue-blog-47b5b.firebaseio.com/programming_posts.json',this.blog).then(function(data){
          this.submitted = true;
        });
      };
    },
    getIcon : function(name){
      return this.icons[name];
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  },
  computed: {
    // getIcon : function(name){
    //   return this.icons[name];
    // }
  }
}
</script>

<style scoped>

.programming-list {
  margin-bottom: 50px;
}

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
    background-color: #eceff1;
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
    margin-right: 50px;
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
