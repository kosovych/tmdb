import { createLogic } from 'redux-logic'

import { sessionIdSelector } from 'Store/auth/selectors'
import { storeData } from 'Store/data/actions'
import { movieSelector, currentMovieIdSelector } from 'Store/movie/selectors'
import {
  requestMovieAccountStatesStart,
  requestMovieAccountStatesError,
  requestMovieAccountStatesSuccess
} from '../actions'
import { GET_MOVIE_ACCOUNT_STATES } from '../types'

export const getMovieAccountStatesOperation = createLogic({
  type: GET_MOVIE_ACCOUNT_STATES,
  latest: true,
  async process({ axios, getState }, dispatch, done) {
    const movieId = currentMovieIdSelector(getState())
    try {
      dispatch(requestMovieAccountStatesStart())
      const response = await axios.get(
        `/movie/${movieId}/account_states`,
        {
          params: {
            session_id: sessionIdSelector(getState())
          }
        }
      )
      const { favorite, watchlist } = response.data
      const movie = movieSelector(getState())
      dispatch(storeData('movies', { [movieId]: { ...movie, isFavorite: favorite, isOnWatchlist: watchlist } }))
      dispatch(requestMovieAccountStatesSuccess())
    } catch (error) {
      dispatch(requestMovieAccountStatesError())
    }
    done()
  }
})
