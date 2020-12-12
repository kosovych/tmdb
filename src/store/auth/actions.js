import {
  LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_SUBMIT
} from './types'

export const loginSubmit = ({ username, password }) => ({
  type: LOGIN_SUBMIT,
  username,
  password
})

export const loginError = errorTxt => ({
  type: LOGIN_ERROR,
  errorTxt
})

export const loginSuccess = sessionID => ({
  type: LOGIN_SUCCESS,
  sessionID
})

export const loginLoading = loading => ({
  type: LOGIN_LOADING,
  loading
})
