import {
  GET_MOVIES, REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, SET_SEARCH
} from './types'

export const getMovies = params => ({
  type: GET_MOVIES,
  params
})

export const requestMoviesStart = endpoint => ({
  type: REQUEST_MOVIES_START,
  endpoint
})

export const requestMoviesSuccess = (endpoint, payload) => ({
  type: REQUEST_MOVIES_SUCCESS,
  endpoint,
  payload
})

export const requestMoviesError = (endpoint, error) => ({
  type: REQUEST_MOVIES_ERROR,
  endpoint,
  error
})

export const setSearch = (endpoint, searchQuery) => ({
  type: SET_SEARCH,
  endpoint,
  searchQuery
})
