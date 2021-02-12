import {
  LOGIN_REQUEST,
  LOGIN_FAILS,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT
} from './types'

const initState = {
  loading: false,
  errorTxt: null,
  sessionID: localStorage.getItem('session_id')
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: return { ...state, loading: true, errorTxt: null }
    case LOGIN_FAILS: return { ...state, errorTxt: action.errorTxt, loading: false }
    case LOGIN_SUCCESS: return { ...state, sessionID: action.sessionID, loading: false }
    case LOGIN_LOGOUT:
      localStorage.removeItem('session_id')
      return { ...state, sessionID: null }
    default: return state
  }
}

export default authReducer
