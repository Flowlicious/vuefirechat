// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

let config = { //TODO CONFIG FILE?
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
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

