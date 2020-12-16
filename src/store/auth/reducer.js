import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from './types'

const initState = {
  loading: false,
  errorTxt: null,
  sessionID: localStorage.getItem('session_id')
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_LOADING: return { ...state, loading: action.loading }
    case LOGIN_ERROR: return { ...state, errorTxt: action.errorTxt }
    case LOGIN_SUCCESS: return { ...state, sessionID: action.sessionID }
    default: return state
  }
}

export default authReducer
