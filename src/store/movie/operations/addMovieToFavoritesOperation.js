import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils'
import { sessionIdSelector, userIdSelector } from 'Store/auth/selectors'
import { movieSelector, currentMovieIdSelector, isFavoriteSelector } from 'Store/movie/selectors'
import { storeData } from 'Store/data/actions'
import { ADD_MOVIE_TO_FAVORITES } from '../types'

export const addMovieToFavoritesOperation = createLogic({
  type: ADD_MOVIE_TO_FAVORITES,
  latest: true,
  async process({ axios, getState }, dispatch, done) {
    const isFavorite = isFavoriteSelector(getState())
    const movieId = currentMovieIdSelector(getState())
    const state = getState()
    const params = {
      session_id: sessionIdSelector(state)
    }
    const data = {
      media_type: 'movie',
      media_id: movieId,
      favorite: !isFavorite
    }
    const url = `/account/${userIdSelector(state)}/favorite`
    const storeMovie = movieSelector(getState())
    dispatch(storeData('movies', { [movieId]: { ...storeMovie, isFavorite: !isFavorite } }))
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
      dispatch(storeData('movies', { [movieId]: { ...storeMovie, isFavorite } }))
    }
    done()
  }
})
