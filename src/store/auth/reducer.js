import {
  LOGIN_REQUEST,
  LOGIN_FAILS,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
  STORE_USER
} from './types'

const initState = {
  loading: false,
  errorTxt: null,
  sessionId: localStorage.getItem('sessionId')
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: return { ...state, loading: true, errorTxt: null }
    case LOGIN_FAILS: return { ...state, errorTxt: action.errorTxt, loading: false }
    case LOGIN_SUCCESS: return { ...state, sessionId: action.sessionId, loading: false }
    case LOGIN_LOGOUT:
      localStorage.removeItem('sessionId')
      localStorage.removeItem('userId')
      return { ...initState, sessionId: null }
    case STORE_USER:
      return { ...state, ...action.payload }
    default: return state
  }
}

export default authReducer
