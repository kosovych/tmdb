import reducer, { initState } from '../reducer'
import {
  LOGIN_REQUEST,
  LOGIN_FAILS,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
  STORE_USER
} from '../types'

describe('Billing reducers', () => {
  it('should returns initial State', () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })

  it('should handle LOGIN_REQUEST action', () => {
    const action = {
      type: LOGIN_REQUEST
    }
    const { loading, errorMessage } = reducer(undefined, action)
    expect(loading).toBe(true)
    expect(errorMessage).toBe(null)
  })

  it('should handle LOGIN_FAILS action', () => {
    const action = {
      type: LOGIN_FAILS,
      errorMessage: 'errorMessage'
    }
    const { errorMessage, loading } = reducer(undefined, action)
    expect(loading).toBe(false)
    expect(errorMessage).toBe('errorMessage')
  })

  it('should handle LOGIN_SUCCESS action', () => {
    const action = {
      type: LOGIN_SUCCESS,
      sessionId: 'sessionId'
    }
    const { sessionId, loading } = reducer(undefined, action)
    expect(sessionId).toBe('sessionId')
    expect(loading).toBe(false)
  })

  it('should handle LOGIN_LOGOUT action', () => {
    const action = {
      type: LOGIN_LOGOUT
    }
    expect(reducer(undefined, action)).toEqual({ ...initState, sessionId: null })
  })

  it('should handle STORE_USER action', () => {
    const payload = {
      userId: 1,
      displayName: '',
      username: 'user_name',
      avatarUrl: 'image'
    }
    const action = {
      type: STORE_USER,
      payload
    }
    expect(reducer(undefined, action)).toEqual({ ...initState, ...payload })
  })
})
