import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils'
import { sessionIdSelector } from 'Store/auth/selectors'
import { REMOVE_MOVIE } from '../types'
import { getListDetails } from '../actions'

export const removeMovieOperation = createLogic({
  type: REMOVE_MOVIE,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { movieId, listId } = action
    const state = getState()
    const params = {
      session_id: sessionIdSelector(state)
    }
    try {
      await axios({
        method: 'post',
        url: `/list/${listId}/remove_item`,
        params,
        data: {
          media_id: movieId
        }
      })
      dispatch(getListDetails(listId))
    } catch (error) {
      openNotification({
        message: error.message,
        description: error.response.data.status_message,
        type: 'error'
      })
    }
    done()
  }
})
