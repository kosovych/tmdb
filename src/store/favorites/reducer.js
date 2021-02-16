import { concat, without } from 'lodash'

import {
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_ERROR,
  SET_REMOVE_MOVIE_ERROR,
  REMOVE_MOVIE_FROM_STORE,
  CLEANUP_REMOVE_MOVIE_ERRORS
} from './types'

const reducer = (state = {}, action) => {
  const { type } = action
  switch (type) {
    case REQUEST_MOVIES_START:
      return {
        ...state,
        meta: {
          loading: true,
          error: null
        }
      }
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        meta: {
          loading: false,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
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
    case REMOVE_MOVIE_FROM_STORE:
      return {
        ...state,
        entries: without(state.entries, action.movieId)
      }
    case SET_REMOVE_MOVIE_ERROR:
      return {
        ...state,
        meta: {
          ...state.meta,
          removeErrors: concat(state.meta.removeErrors || [], action.movieId)
        }
      }
    case CLEANUP_REMOVE_MOVIE_ERRORS:
      return {
        ...state,
        meta: {
          ...state.meta,
          removeErrors: without(state.meta.removeErrors, action.movieId)
        }
      }
    default:
      return state
  }
}

export default reducer
