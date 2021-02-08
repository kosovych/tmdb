import { TRENDING_MOVIES } from 'Constants'
import { merge } from 'lodash'
import { assoc, path } from 'ramda'
import {
  REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, SET_SEARCH
} from './types'

const initialState = {
  [TRENDING_MOVIES]: {
    meta: {
      loading: false
    }
  }
}

const reducer = (state = initialState, action) => {
  const { type, endpoint } = action
  switch (type) {
    case REQUEST_MOVIES_START:
      return assoc(
        endpoint,
        {
          meta: {
            loading: true,
            error: null,
            search: path([`${endpoint}`, 'meta', 'search'], state)
          }
        },
        state
      )
    case REQUEST_MOVIES_SUCCESS:
      return assoc(
        endpoint,
        {
          meta: {
            loading: false,
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
            error: null,
            search: path([`${endpoint}`, 'meta', 'search'], state)
          },
          entries: action.payload.entries
        },
        state
      )
    case REQUEST_MOVIES_ERROR:
      return assoc(
        endpoint,
        {
          meta: {
            error: action.error,
            loading: false,
            search: path([`${endpoint}`, 'meta', 'search'], state)
          },
          entries: null
        },
        state
      )
    case SET_SEARCH:
      return merge({}, state, { [endpoint]: { meta: { search: action.searchQuery } } })
    default:
      return state
  }
}

export default reducer
