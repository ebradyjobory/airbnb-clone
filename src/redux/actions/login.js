import * as types from './types'
import user from '../../data/user.json'

export function logIn(email, password) {
  return dispatch => {
    if (email === user.email && password === user.password) {
      dispatch(setLoggedInUser(true))
    }
  }
}

export function setLoggedInUser(loggedInState) {
  return {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
}