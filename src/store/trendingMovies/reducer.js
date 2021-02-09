import { merge } from 'lodash'
import { assoc, path } from 'ramda'

import {
  REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, SET_SEARCH
} from './types'

const reducer = (state = {}, action) => {
  const { type } = action
  switch (type) {
    case REQUEST_MOVIES_START:
      return assoc(
        'meta',
        {
          loading: true,
          error: null,
          search: path(['meta', 'search'], state)
        },
        state
      )
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        meta: {
          loading: false,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          error: null,
          search: path(['meta', 'search'], state)
        },
        entries: action.payload.entries
      }
    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        meta: {
          error: action.error,
          loading: false,
          search: path(['meta', 'search'], state)
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
