<template>
  <div class="login">
      <h3>sign in</h3>
      <input type="text" placeholder="E-Mail" v-model="email"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button v-on:click="login">connection</button>
      <p>You dont have an account? <router-link to="/sign-up"> create one </router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            if (user) this.$router.replace("hello");
          },
          err => {
            alert("oops " + err);
          }
        );
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
  grid-column: 2;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
