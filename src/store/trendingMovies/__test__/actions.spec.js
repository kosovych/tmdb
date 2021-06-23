import {
  getMovies,
  requestMoviesStart,
  requestMoviesSuccess,
  requestMoviesError,
  setSearch
} from '../actions'

import {
  GET_MOVIES,
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_ERROR,
  SET_SEARCH
} from '../types'

describe('Trending list actions', () => {
  describe('getMovies()', () => {
    it('returns correct value', () => {
      const expectedAction = {
        type: GET_MOVIES,
        params: {}
      }
      expect(getMovies({})).toEqual(expectedAction)
    })
  })

  describe('requestMoviesStart()', () => {
    it('returns correct value', () => {
      const expectedAction = {
        type: REQUEST_MOVIES_START
      }
      expect(requestMoviesStart()).toEqual(expectedAction)
    })
  })

  describe('requestMoviesSuccess()', () => {
    it('returns correct value', () => {
      const expectedAction = {
        type: REQUEST_MOVIES_SUCCESS,
        payload: {}
      }
      expect(requestMoviesSuccess({})).toEqual(expectedAction)
    })
  })

  describe('requestMoviesError()', () => {
    it('returns correct value', () => {
      const expectedAction = {
        type: REQUEST_MOVIES_ERROR,
        error: {}
      }
      expect(requestMoviesError({})).toEqual(expectedAction)
    })
  })

  describe('setSearch()', () => {
    it('returns correct value', () => {
      const expectedAction = {
        type: SET_SEARCH,
        searchQuery: {}
      }
      expect(setSearch({})).toEqual(expectedAction)
    })
  })
})
