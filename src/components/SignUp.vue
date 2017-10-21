<template>
  <div class="sign-up">
    <p>Create a new account </p>
    <input type="text" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <button v-on:click="signUp">sign up</button>
    <span>or go back to <router-link to="/login">Login</router-link></span>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            if (user) this.$router.replace("hello");
          },
          err => {
            alert("ooops " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
  grid-column: 2;
}
input {
  margin: 10px 0;
  width: 100%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
