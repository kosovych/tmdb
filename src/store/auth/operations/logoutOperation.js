import { createLogic } from 'redux-logic'

import { LOGIN_LOGOUT } from '../types'

export const logoutOperation = createLogic({
  type: LOGIN_LOGOUT,
  latest: true,
  process(deps, dispatch, done) {
    localStorage.removeItem('sessionId')
    localStorage.removeItem('userId')
    done()
  }
})
