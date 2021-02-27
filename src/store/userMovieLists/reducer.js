import { get } from 'lodash'

import {
  CREATE_USER_LIST_START,
  CREATE_USER_LIST_SUCCESS,
  CREATE_USER_LIST_ERROR,
  REQUEST_USER_LISTS_START,
  REQUEST_USER_LISTS_SUCCESS,
  REQUEST_USER_LISTS_ERROR
} from './types'

const reducer = (state = {}, action) => {
  const { type } = action
  switch (type) {
    case REQUEST_USER_LISTS_START:
      return {
        ...state,
        meta: {
          catalogLoading: true,
          error: null,
          currentPage: get(state, ['meta', 'currentPage']),
          totalResults: get(state, ['meta', 'totalResults'])
        }
      }
    case REQUEST_USER_LISTS_SUCCESS:
      return {
        ...state,
        meta: {
          catalogLoading: false,
          currentPage: action.payload.currentPage,
          totalResults: action.payload.totalResults,
          error: null
        },
        entries: action.payload.entries
      }
    case REQUEST_USER_LISTS_ERROR:
      return {
        ...state,
        meta: {
          error: action.error,
          catalogLoading: false
        },
        entries: null
      }
    case CREATE_USER_LIST_START:
      return {
        ...state,
        meta: {
          ...state.meta,
          createListLoading: true
        }
      }
    case CREATE_USER_LIST_SUCCESS:
      return {
        ...state,
        meta: {
          ...state.meta,
          createListLoading: false
        }
      }
    case CREATE_USER_LIST_ERROR:
      return {
        ...state,
        meta: {
          ...state.meta,
          createListLoading: false
        }
      }
    default:
      return state
  }
}

export default reducer
