import * as api from '../api'
import * as types from './mutation-types'

export const getAllUsers = ({ commit }) => {
  api.getAllUsers(users => {
    commit(types.GET_USERS, {
      users
    })
  })
}

export const addUser = ({ commit }, payload) => {
  api.addUser(payload, user => {
    commit(types.ADD_USER, user)
  })
}

/* export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload, message => {
    commit(types.RECEIVE_MESSAGE, {
      message
    })
  })
}

export const switchThread = ({ commit }, payload) => {
  commit(types.SWITCH_THREAD, payload)
} */
