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
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
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
        content: ''
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

  h3 {
    margin-top: 10px;
  }
</style>
