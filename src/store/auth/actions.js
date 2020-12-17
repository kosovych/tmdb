import {
  LOGIN_REQUEST, LOGIN_FAILS, LOGIN_SUCCESS, LOGIN_SUBMIT
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

export const loginSuccess = sessionID => ({
  type: LOGIN_SUCCESS,
  sessionID
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})
