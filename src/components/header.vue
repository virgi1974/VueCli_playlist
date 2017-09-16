<template>
  <nav>
  <ul>
    <li v-if="user">{{ user.email }}</li>
    <div id="welcome-tag" v-else>Welcome - Sign in</div>
    <li v-if="user" @click="logOut"><router-link to="/" exact>Log Out</router-link></li>
    <li v-if="user"><router-link to="/bloglist" exact>Blogs</router-link></li>
    <li v-if="user"><router-link to="/add" exact>Add a new Blog</router-link></li>
  </ul>
  </nav>
</template>

<script>

import { bus } from '../main';

import firebase from 'firebase';
import firebaseui from 'firebaseui'

export default {
  components: {
  },
  data () {
    return {
      user: null
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.user = null;
      // bus.$emit('userLoggedIn', null);
    }
  },
  computed: {
  },
  filters: {
  },
  directives: {
  },
  created(){
    bus.$on('userLoggedIn', (userData) => {
      this.user = userData;
    })
  }
}
</script>

<style scoped>

  nav ul li:first-child { 
    float: left;
    color: white;
  }
  
  #welcome-tag { 
    color: white;
    text-align: left;
  }

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
