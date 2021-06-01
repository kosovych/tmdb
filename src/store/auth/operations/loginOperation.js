import { createLogic } from 'redux-logic'
import { AUTH_TOKEN, VALIDATE_TOKEN_WITH_LOGIN, NEW_SESSION } from 'Constants'

import { LOGIN_SUBMIT } from '../types'
import {
  loginFails, loginSuccess, loginRequest, getUser
} from '../actions'

export const loginOperation = createLogic({
  type: LOGIN_SUBMIT,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    dispatch(loginRequest())
    const { username, password } = action
    try {
      const requestTokenResponse = await axios.get(AUTH_TOKEN)
      const requestToken = requestTokenResponse.data.request_token

      const sessionRequestTokenResponse = await axios.post(
        VALIDATE_TOKEN_WITH_LOGIN,
        {
          request_token: requestToken,
          username,
          password
        }
      )
      const sessionRequestToken = sessionRequestTokenResponse.data.request_token

      const sessionIdResponse = await axios.post(
        NEW_SESSION,
        { request_token: sessionRequestToken }
      )
      const sessionId = sessionIdResponse.data.session_id
      dispatch(getUser(sessionId))
      localStorage.setItem('sessionId', sessionId)
      dispatch(loginSuccess(sessionId))
    } catch (err) {
      dispatch(loginFails(err.response.data.status_message))
    }
    done()
  }
})
