import { TRENDING_MOVIES } from 'Constants'
import { merge } from 'lodash'
import { REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR } from './types'

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
      return merge({ ...state }, { [endpoint]: { meta: { loading: true, error: null } } })
    case REQUEST_MOVIES_SUCCESS:
      return merge(
        { ...state },
        {
          [endpoint]: {
            meta: {
              loading: false,
              currentPage: action.payload.currentPage,
              totalPages: action.payload.totalPages,
              error: null
            },
            entries: action.payload.entries
          }
        }
      )
    case REQUEST_MOVIES_ERROR:
      return merge(
        { ...state },
        {
          [endpoint]: {
            meta: {
              error: action.error,
              loading: false
            },
            entries: null
          }
        }
      )
    default:
      return state
  }
}

export default reducer
