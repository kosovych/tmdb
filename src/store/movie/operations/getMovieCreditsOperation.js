import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import { uniq } from 'lodash'

import { movieCredits } from 'Schemas'
import { storeData } from 'Store/data/actions'
import { movieSelector, currentMovieIdSelector } from 'Store/movie/selectors'
import { GET_MOVIE_CREDITS } from '../types'
import {
  requestMovieCreditsStart,
  requestMovieCreditsSuccess,
  requestMovieCreditsError
} from '../actions'

export const getMovieCreditsOperation = createLogic({
  type: GET_MOVIE_CREDITS,
  latest: true,
  async process({ axios, getState }, dispatch, done) {
    const movieId = currentMovieIdSelector(getState())
    dispatch(requestMovieCreditsStart())
    try {
      const response = await axios.get(`/movie/${movieId}/credits`)
      const { movie, persons } = normalize(response.data, movieCredits).entities
      const storeMovie = movieSelector(getState())
      const { cast, crew } = movie[movieId]
      dispatch(storeData('persons', persons))
      dispatch(storeData('movies', { [movieId]: { ...storeMovie, cast, crew: uniq(crew) } }))
      dispatch(requestMovieCreditsSuccess())
    } catch (error) {
      dispatch(requestMovieCreditsError())
    }
    done()
  }
})
