import { createLogic } from 'redux-logic'
import { LOGIN_SUBMIT } from '../types'
import { loginFails, loginSuccess, loginRequest } from '../actions'

export const loginOperation = createLogic({
  type: LOGIN_SUBMIT,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    dispatch(loginRequest())
    const { username, password } = action
    try {
      const requestTokenReq = await axios.get('/authentication/token/new')
      const requestToken = requestTokenReq.data.request_token

      const sessionRequestTokenReq = await axios.post(
        '/authentication/token/validate_with_login',
        {
          request_token: requestToken,
          username,
          password
        }
      )
      const sessionRequestToken = sessionRequestTokenReq.data.request_token

      const sessionIDReq = await axios.post(
        '/authentication/session/new',
        { request_token: sessionRequestToken }
      )
      const sessionID = sessionIDReq.data.session_id

      localStorage.setItem('session_id', sessionID)
      dispatch(loginSuccess(sessionID))
    } catch (err) {
      dispatch(loginFails(err.response.data.status_message))
    }
    done()
  }
})
