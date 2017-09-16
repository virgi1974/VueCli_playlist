<template> 
  <div> 
    <h1>Signup succeeded</h1> 
    <button @click="logOut">Log out</button>
    <hr> 
    <img :src="photo" style="height: 120px"> <br> 
    <p>{{name}}</p> 
    <p>{{email}}</p> 
    <p>{{userId}}</p> 
    <hr> 
    <pre>{{user}}</pre> 
  </div>
</template>

<script>
  import firebase from 'firebase';
  import firebaseui from 'firebaseui'
  import {config} from '../helpers/firebaseConfig';

  import { bus } from '../main';
  
  export default {
   data(){
       return {
         photo: '',
         userId: '',
         name: '',
         email: '',
         user: {}
       }
     },
     created() {
       var vm = this
       firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           vm.user = user;
           vm.name = vm.user.displayName;
           vm.email = vm.user.email;
           vm.photo = vm.user.photoURL;
           vm.userId = vm.user.uid;
           // we emit through the bus the state that a user is logged in
           bus.$emit('userLoggedIn', true);
        }
      });
    },
    methods: {
      logOut() {
        firebase.auth().signOut();
        bus.$emit('userLoggedIn', false);
      }
    },
  };
</script>

<style scoped>

</style>