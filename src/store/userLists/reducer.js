import { get } from 'lodash'

import {
  CREATE_USER_LIST_START,
  CREATE_USER_LIST_FINISH,
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
          loading: true,
          error: null,
          currentPage: get(state, ['meta', 'currentPage']),
          totalResults: get(state, ['meta', 'totalResults'])
        }
      }
    case REQUEST_USER_LISTS_SUCCESS:
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
    case REQUEST_USER_LISTS_ERROR:
      return {
        ...state,
        meta: {
          error: action.error,
          loading: false
        },
        entries: null
      }
    case CREATE_USER_LIST_START:
      return {
        ...state,
        createListLoading: true
      }
    case CREATE_USER_LIST_FINISH:
      return {
        ...state,
        createListLoading: false
      }
    default:
      return state
  }
}

export default reducer
