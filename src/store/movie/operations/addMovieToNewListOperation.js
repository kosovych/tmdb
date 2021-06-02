import { createLogic } from 'redux-logic'
import camelcaseKeys from 'camelcase-keys'

import { openNotification } from 'Utils/'
import { sessionIdSelector } from 'Store/auth/selectors'
import { ADD_MOVIE_TO_NEW_LIST } from '../types'
import {
  addMovieToNewListStart,
  addMovieToNewListSuccess,
  onAddToExistingList
} from '../actions'

export const addMovieToNewListOperation = createLogic({
  type: ADD_MOVIE_TO_NEW_LIST,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { values, cb } = action
    const { name, description } = values
    const sessionId = sessionIdSelector(getState())
    try {
      dispatch(addMovieToNewListStart())
      const newListResponse = await axios({
        method: 'post',
        url: '/list',
        data: {
          name,
          description
        },
        params: {
          session_id: sessionId
        }
      })
      const { listId } = camelcaseKeys(newListResponse.data)
      dispatch(onAddToExistingList(listId))
      cb()
    } catch (error) {
      openNotification({
        message: error.message,
        type: 'error'
      })
    }
    dispatch(addMovieToNewListSuccess())
    done()
  }
})
