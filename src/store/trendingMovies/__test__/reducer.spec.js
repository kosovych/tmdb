import { merge } from 'lodash'
import reducer from '../reducer'
import {
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_ERROR,
  SET_SEARCH
} from '../types'

describe('Auth reducers', () => {
  const mockState = { meta: { search: 'test' } }
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle REQUEST_MOVIES_START action', () => {
    const action = {
      type: REQUEST_MOVIES_START
    }
    expect(reducer(mockState, action)).toEqual({
      meta: {
        loading: true,
        error: null,
        search: 'test'
      }
    })
  })

  it('should handle REQUEST_MOVIES_SUCCESS action', () => {
    const action = {
      type: REQUEST_MOVIES_SUCCESS,
      payload: {
        currentPage: 1,
        totalResults: 1,
        entries: []
      }
    }
    expect(reducer(mockState, action)).toEqual({
      meta: {
        loading: false,
        currentPage: 1,
        totalResults: 1,
        error: null,
        search: 'test'
      },
      entries: []
    })
  })

  it('should handle REQUEST_MOVIES_ERROR action', () => {
    const action = {
      type: REQUEST_MOVIES_ERROR,
      error: 'Error'
    }
    expect(reducer(mockState, action)).toEqual({
      meta: {
        error: 'Error',
        loading: false,
        search: 'test'
      },
      entries: null
    })
  })

  it('should handle SET_SEARCH action', () => {
    const action = {
      type: SET_SEARCH,
      searchQuery: 'test'
    }

    expect(reducer(mockState, action)).toEqual(merge(
      {},
      mockState,
      { meta: { search: 'test' } }
    ))
  })
})
