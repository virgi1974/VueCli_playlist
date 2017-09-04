<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form action="">
      <label for="">Blog Title</label>
      <input  v-model.lazy="blog.title" type="text" required>
      <br>
      <label for="">Blog Content</label>
      <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10"></textarea>
    </form>

    <div id="checkboxes">
      <label for="">Ruby</label>
      <input v-model="blog.categories" type="checkbox" value="Ruby">
      <label for="">JS</label>
      <input v-model="blog.categories" type="checkbox" value="JS">
      <label for="">Nginx</label>
      <input v-model="blog.categories" type="checkbox" value="Nginx">
      <label for="">Other</label>
      <input v-model="blog.categories" type="checkbox" value="Other">
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
    </div>

  </div>
</template>

<script>

// import Form1 from './components/Form1.vue'

export default {
  components: {
    // 'app-form1': Form1,
  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: []
      }
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
    background-color: lightgray;
  }

  #preview li {
    display: inline-block;
    background-color: lightblue;
    margin-left: 10px;
    border-bottom: 1px solid black;
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
</style>
