import {
  GET_MOVIES,
  REQUEST_MOVIES_START,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_ERROR,
  REMOVE_MOVIE,
  REMOVE_MOVIE_FROM_STORE,
  SET_REMOVE_MOVIE_ERROR,
  CLEANUP_REMOVE_MOVIE_ERRORS
} from './types'

export const removeMovie = movieId => ({
  type: REMOVE_MOVIE,
  movieId
})

export const removeMovieFromStore = movieId => ({
  type: REMOVE_MOVIE_FROM_STORE,
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

export const setRemoveMovieError = movieId => ({
  type: SET_REMOVE_MOVIE_ERROR,
  movieId
})

export const cleanupRemoveMovieErrors = movieId => ({
  type: CLEANUP_REMOVE_MOVIE_ERRORS,
  movieId
})
