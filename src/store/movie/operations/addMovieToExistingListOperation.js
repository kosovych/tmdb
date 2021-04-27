import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils'
import { sessionIdSelector } from 'Store/auth/selectors'
import { currentMovieIdSelector } from 'Store/movie/selectors'
import { ADD_MOVIE_TO_EXISTING_LIST } from '../types'

export const addMovieToExistingListOperation = createLogic({
  type: ADD_MOVIE_TO_EXISTING_LIST,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const movieId = currentMovieIdSelector(getState())
    const { listId } = action
    const sessionId = sessionIdSelector(getState())
    const params = {
      session_id: sessionId
    }
    const data = {
      media_id: movieId
    }
    try {
      await axios({
        method: 'post',
        url: `/list/${listId}/add_item`,
        data,
        params
      })
      openNotification({
        message: 'The movie added to the list',
        type: 'success'
      })
    } catch (error) {
      openNotification({
        message: error.response.data.status_message,
        type: 'error'
      })
    }
    done()
  }
})
