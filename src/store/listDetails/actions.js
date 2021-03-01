import {
  GET_LIST_DETAILS,
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  REMOVE_MOVIE,
  REMOVE_USER_LIST
} from './types'

export const getListDetails = listId => ({
  type: GET_LIST_DETAILS,
  listId
})

export const requestStart = () => ({
  type: REQUEST_START
})

export const requestSuccess = (name, entries) => ({
  type: REQUEST_SUCCESS,
  name,
  entries
})

export const requestError = () => ({
  type: REQUEST_ERROR
})

export const removeMovie = (movieId, listId) => ({
  type: REMOVE_MOVIE,
  movieId,
  listId
})

export const removeUserList = (listId, history) => ({
  type: REMOVE_USER_LIST,
  listId,
  history
})
