import {
  GET_USER_LISTS,
  CREATE_USER_LIST,
  CREATE_USER_LIST_START,
  CREATE_USER_LIST_ERROR,
  CREATE_USER_LIST_SUCCESS,
  REQUEST_USER_LISTS_START,
  REQUEST_USER_LISTS_SUCCESS,
  REQUEST_USER_LISTS_ERROR,
  REMOVE_USER_LIST
} from './types'

export const requestUserListsStart = () => ({
  type: REQUEST_USER_LISTS_START
})

export const requestUserListsSuccess = payload => ({
  type: REQUEST_USER_LISTS_SUCCESS,
  payload
})

export const requestUserListsError = () => ({
  type: REQUEST_USER_LISTS_ERROR
})

export const getUserLists = page => ({
  type: GET_USER_LISTS,
  page
})

export const createUserLits = (values, cb) => ({
  type: CREATE_USER_LIST,
  values,
  cb
})

export const createUserListStart = () => ({
  type: CREATE_USER_LIST_START
})

export const createUserListSuccess = () => ({
  type: CREATE_USER_LIST_SUCCESS
})

export const createUserListError = () => ({
  type: CREATE_USER_LIST_ERROR
})

export const removeUserList = listId => ({
  type: REMOVE_USER_LIST,
  listId
})
