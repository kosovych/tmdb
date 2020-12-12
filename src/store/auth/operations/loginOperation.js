import { createLogic } from 'redux-logic'
// eslint-disable-next-line import/no-unresolved
import { API_KEY } from 'Constants'
import { LOGIN_SUBMIT } from '../types'
import { loginLoading, loginError, loginSuccess } from '../actions'

export const loginOperation = createLogic({
  type: LOGIN_SUBMIT,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    dispatch(loginLoading(true))
    dispatch(loginError(null))
    const { username, password } = action
    try {
      const requestToken = await axios.get(`/authentication/token/new?api_key=${API_KEY}`)
        .then(res => res.data.request_token)

      const sessionRequestToken = await axios.post(
        `/authentication/token/validate_with_login?api_key=${API_KEY}`,
        {
          request_token: requestToken,
          username,
          password
        }
      )
        .then(res => res.data.request_token)

      const sessionID = await axios.post(
        `/authentication/session/new?api_key=${API_KEY}`,
        { request_token: sessionRequestToken }
      )
        .then(res => res.data.session_id)
      localStorage.setItem('session_id', sessionID)
      dispatch(loginSuccess(sessionID))
    } catch (err) {
      dispatch(loginError(err.response.data.status_message))
    }
    dispatch(loginLoading(false))
    done()
  }
})
