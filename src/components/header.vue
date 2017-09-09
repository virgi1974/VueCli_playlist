<template>
  <nav>
  <ul>
    <li><router-link to="/" exact>Blogs</router-link></li>
    <li><router-link to="/add" exact>Add a new Blog</router-link></li>
  </ul>
  </nav>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {
  },
  filters: {
  },
  directives: {
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: right;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a:hover {
    color: lightblue;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 4px 6px;
    border-radius: 5px;
  }

  nav {
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }

  .router-link-active {
    background: #eee;
    color: #444;
  }
</style>
