import { merge, get } from 'lodash'

import {
  REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, SET_SEARCH
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
          search: get(state, ['meta', 'search'])
        }
      }
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        meta: {
          loading: false,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          error: null,
          search: get(state, ['meta', 'search'])
        },
        entries: action.payload.entries
      }
    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        meta: {
          error: action.error,
          loading: false,
          search: get(state, ['meta', 'search'])
        },
        entries: null
      }
    case SET_SEARCH:
      return merge({}, state, { meta: { search: action.searchQuery } })
    default:
      return state
  }
}

export default reducer
