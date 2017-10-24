import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.GET_USERS](state, { users }) {
    state.users = users;
    /*     users.forEach(user => {
          addUser(state, user);
        }) */
  },
  [types.ADD_USER](state, user) {
    console.log("user added");
  },
}

function addUser(state, user) {
  state.users.push(user);
  /* Vue.set(state.users, user.id, user.data()); */
}
