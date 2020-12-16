import {
  LOGIN_REQUEST, LOGIN_FAILS, LOGIN_SUCCESS, LOGIN_SUBMIT
} from './types'

export const loginSubmit = ({ username, password }) => ({
  type: LOGIN_SUBMIT,
  username,
  password
})

export const loginFails = (errorTxt, loading) => ({
  type: LOGIN_FAILS,
  errorTxt,
  loading
})

export const loginSuccess = (sessionID, loading) => ({
  type: LOGIN_SUCCESS,
  sessionID,
  loading
})

export const loginRequest = (loading, error) => ({
  type: LOGIN_REQUEST,
  loading,
  error
})
