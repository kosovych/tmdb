import {
  GET_MOVIES,
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_ERROR,
  REMOVE_MOVIE
} from './types'

export const removeMovie = movieId => ({
  type: REMOVE_MOVIE,
  movieId
})

export const getMovies = params => ({
  type: GET_MOVIES,
  params
})

export const requestMoviesStart = () => ({
  type: REQUEST_MOVIES_START
})

export const requestMoviesSuccess = payload => ({
  type: REQUEST_MOVIES_SUCCESS,
  payload
})

export const requestMoviesError = error => ({
  type: REQUEST_MOVIES_ERROR,
  error
})
