import { createLogic } from 'redux-logic'

import { sessionIdSelector } from 'Store/auth/selectors'
import { storeData } from 'Store/data/actions'
import { movieSelector } from 'Store/movie/selectors'
import {
  requestMovieAccountStatesStart,
  requestMovieAccountStatesError,
  requestMovieAccountStatesSuccess
} from '../actions'
import { GET_MOVIE_ACCOUNT_STATES } from '../types'


export const getMovieAccountStatesOperation = createLogic({
  type: GET_MOVIE_ACCOUNT_STATES,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { movieId } = action
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
      const storeMovie = movieSelector(getState(), movieId)
      dispatch(storeData('movies', { [movieId]: { ...storeMovie, isFavorite: favorite, isOnWatchlist: watchlist } }))
      dispatch(requestMovieAccountStatesSuccess())
    } catch (error) {
      dispatch(requestMovieAccountStatesError())
    }
    done()
  }
})
