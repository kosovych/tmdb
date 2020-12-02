import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from './actions/types';

const initState = {
    loading: false,
    error: false,
    errorTxt: null,
    sessionID: localStorage.getItem('session_id'),
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_LOADING: return { ...state, loading: action.loading }
        case LOGIN_ERROR: return { ...state, error: action.error, errorTxt: action.errorTxt }
        case LOGIN_SUCCESS: return { ...state, sessionID: action.sessionID }
        default: return state
    }
}

export default authReducer
