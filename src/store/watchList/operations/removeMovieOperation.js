import { createLogic } from 'redux-logic'

import { userIdSelector, sessionIdSelector } from 'Store/auth/selectors'
import { removeMovieFromStore, setRemoveMovieError } from '../actions'
import { REMOVE_MOVIE } from '../types'

export const removeMovieOperation = createLogic({
  type: REMOVE_MOVIE,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { movieId } = action
    const state = getState()
    const data = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: false
    }
    const params = {
      session_id: sessionIdSelector(state)
    }
    const url = `/account/${userIdSelector(state)}/watchlist`
    try {
      await axios({
        method: 'post',
        url,
        params,
        data
      })
      dispatch(removeMovieFromStore(movieId))
    } catch (err) {
      dispatch(setRemoveMovieError(movieId))
    }
    done()
  }
})
