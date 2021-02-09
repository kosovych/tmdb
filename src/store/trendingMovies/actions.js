import {
  GET_MOVIES, REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, SET_SEARCH
} from './types'

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

export const setSearch = searchQuery => ({
  type: SET_SEARCH,
  searchQuery
})
