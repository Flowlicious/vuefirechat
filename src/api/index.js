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

console.log("api loading");

export function getAllUsers(callBackFunction, errorFunction) {
  db.collection("chatUsers").onSnapshot((querySnapshot) => {
    let users = [];
    querySnapshot.forEach(doc => {
      users.push(new User(doc.data().displayName));
    });
    callBackFunction(users);
  }, (error) => {
    console.log(error)
  });

  /*   querySnapshot => {
    let users = [];
    querySnapshot.forEach(doc => {
      users.push(doc.data());
    });
    this.users = users;  }*/
}

export function addUser(user, callBackFunction) {
  db
    .collection("chatUsers")
    .doc(user.email)
    .set(
    Object.assign({}, user)
    ).then(callBackFunction(user));
}
