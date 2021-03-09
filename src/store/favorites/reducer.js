import {
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_ERROR
} from './types'

const reducer = (state = {}, action) => {
  const { type } = action
  switch (type) {
    case REQUEST_MOVIES_START:
      return {
        ...state,
        meta: {
          loading: true,
          error: null,
          currentPage: state.meta?.currentPage,
          totalResults: state.meta?.totalResults
        }
      }
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        meta: {
          loading: false,
          currentPage: action.payload.currentPage,
          totalResults: action.payload.totalResults,
          error: null
        },
        entries: action.payload.entries
      }
    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        meta: {
          error: action.error,
          loading: false
        },
        entries: null
      }
    default:
      return state
  }
}

export default reducer
