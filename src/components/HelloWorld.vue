<template>
<div class="wrapper">
<div class="users">
  user
</div>
  <div class="chat">
    <h1>{{ msg }}</h1>
    <button v-on:click="signOut">sign Out</button>
  </div>
</div>
</template>

<script>
import User from "../models/user";
import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");
let config = {
  //TODO CONFIG FILE?
  apiKey: "AIzaSyBUZ8wzMM2558ZnkhrsXXGHvdNvLx87Bgs",
  authDomain: "test-d378a.firebaseapp.com",
  databaseURL: "https://test-d378a.firebaseio.com",
  projectId: "test-d378a",
  storageBucket: "test-d378a.appspot.com",
  messagingSenderId: "952639203488"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "hello",
      test: []
    };
  },
  methods: {
    signOut: function() {
      //TODO FRAGEN WARUM HIER NICHT ARROW GEHT, falsches this?
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    }
  },
  mounted: function() {
    db.collection("chatUsers").onSnapshot(querySnapshot => {
      let users = [];
      querySnapshot.forEach(doc => {
        users.push(doc.data());
      });
      this.test = users;
    });

    var userRef = db
      .collection("chatUsers")
      .doc(firebase.auth().currentUser.email);

    userRef
      .get()
      .then(function(user) {
        if (!user.exists) {
          db
            .collection("chatUsers")
            .doc(firebase.auth().currentUser.email)
            .set(
              Object.assign({}, new User(firebase.auth().currentUser.email))
            );
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
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
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
