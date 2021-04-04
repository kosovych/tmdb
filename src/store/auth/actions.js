import {
  LOGIN_REQUEST,
  LOGIN_FAILS,
  LOGIN_SUCCESS,
  LOGIN_SUBMIT,
  LOGIN_LOGOUT,
  STORE_USER,
  GET_USER
} from './types'

export const loginSubmit = ({ username, password }) => ({
  type: LOGIN_SUBMIT,
  username,
  password
})

export const loginFails = errorTxt => ({
  type: LOGIN_FAILS,
  errorTxt
})

export const logout = () => ({
  type: LOGIN_LOGOUT
})

export const loginSuccess = sessionId => ({
  type: LOGIN_SUCCESS,
  sessionId
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const getUser = sessionId => ({
  type: GET_USER,
  sessionId
})

export const storeUser = payload => ({
  type: STORE_USER,
  payload
})
