<template>
<div class="wrapper">
<div class="users">
  <ul id="example-1">
  <li v-for="(user, index) in users" :key="index">
    {{ user.displayName }}
  </li>
</ul>
</div>
  <div class="chat">
    <h1>{{ msg }}</h1>
    <button v-on:click="signOut">sign Out</button>
    <button v-on:click="testmich">testmich</button>
    <form>
    <textarea v-model="message" name="message"> </textarea>
    </form>
  </div>
</div>
</template>

<script>
console.log("hello loading");
import User from "../models/user";
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "hello"
    };
  },
  methods: {
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },
    testmich: function() {
      debugger;
      console.log(this.users);
    }
  },
  computed: {
    ...mapGetters({
      users: "users"
    })
  },
  mounted: function() {
    console.log("Mounted", this.users);
    this.$store.dispatch(
      "addUser",
      new User(
        firebase.auth().currentUser.email,
        firebase.auth().currentUser.email
      )
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 100%;
  grid-column: 1/3;
}
.users {
  grid-column: 1;
}
.chat {
  grid-column: 2;
}
textarea {
  width: 100%;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
