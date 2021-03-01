import {
  REQUEST_SUCCESS,
  REQUEST_START,
  REQUEST_ERROR
} from './types'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        meta: {
          loading: true
        }
      }
    case REQUEST_ERROR:
      return {
        ...state,
        meta: {
          loading: false
        }
      }
    case REQUEST_SUCCESS:
      const { name, entries } = action
      return {
        ...state,
        entries,
        meta: {
          name,
          loading: false
        }
      }
    default: return state
  }
}

export default authReducer
