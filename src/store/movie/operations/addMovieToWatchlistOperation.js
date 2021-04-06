import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils'
import { sessionIdSelector, userIdSelector } from 'Store/auth/selectors'
import { movieSelector } from 'Store/movie/selectors'
import { storeData } from 'Store/data/actions'
import { ADD_MOVIE_TO_WATCHLIST } from '../types'


export const addMovieToWatchlistOperation = createLogic({
  type: ADD_MOVIE_TO_WATCHLIST,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { movieId, isOnWatchlist } = action
    const state = getState()
    const params = {
      session_id: sessionIdSelector(state)
    }
    const data = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: !isOnWatchlist
    }
    const url = `/account/${userIdSelector(state)}/watchlist`
    const storeMovie = movieSelector(getState(), movieId)
    dispatch(storeData('movies', { [movieId]: { ...storeMovie, isOnWatchlist: !isOnWatchlist } }))
    try {
      await axios({
        method: 'post',
        url,
        params,
        data
      })
    } catch (error) {
      openNotification({
        message: error.message,
        description: error.response.data.status_message,
        type: 'error'
      })
      dispatch(storeData('movies', { [movieId]: { ...storeMovie, isOnWatchlist } }))
    }
    done()
  }
})
