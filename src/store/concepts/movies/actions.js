import {
  GET_MOVIES, REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR
} from './types'

export const getMovies = (endpoint, url) => ({
  type: GET_MOVIES,
  endpoint,
  url
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
