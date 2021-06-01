import {
  loginSubmit,
  loginFails,
  logout,
  loginSuccess,
  loginRequest,
  getUser,
  storeUser
} from '../actions'

import {
  LOGIN_REQUEST,
  LOGIN_FAILS,
  LOGIN_SUCCESS,
  LOGIN_SUBMIT,
  LOGIN_LOGOUT,
  STORE_USER,
  GET_USER
} from '../types'

describe('Auth actions', () => {
  it('loginSubmit()', () => {
    const expectedAction = {
      type: LOGIN_SUBMIT,
      username: 'username',
      password: 'password'
    }
    expect(loginSubmit({ username: 'username', password: 'password' })).toEqual(expectedAction)
  })
  it('loginFails()', () => {
    const expectedAction = {
      type: LOGIN_FAILS,
      errorMessage: 'Error'
    }
    expect(loginFails('Error')).toEqual(expectedAction)
  })
  it('logout()', () => {
    const expectedAction = {
      type: LOGIN_LOGOUT
    }
    expect(logout()).toEqual(expectedAction)
  })
  it('loginSuccess()', () => {
    const expectedAction = {
      type: LOGIN_SUCCESS,
      sessionId: 1
    }
    expect(loginSuccess(1)).toEqual(expectedAction)
  })
  it('loginRequest()', () => {
    const expectedAction = {
      type: LOGIN_REQUEST
    }
    expect(loginRequest()).toEqual(expectedAction)
  })
  it('getUser()', () => {
    const expectedAction = {
      type: GET_USER,
      sessionId: 1
    }
    expect(getUser(1)).toEqual(expectedAction)
  })
  it('storeUser()', () => {
    const expectedAction = {
      type: STORE_USER,
      payload: {}
    }
    expect(storeUser({})).toEqual(expectedAction)
  })
})
