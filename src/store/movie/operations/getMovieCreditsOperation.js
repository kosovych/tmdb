import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import { uniq, mergeWith } from 'lodash'

import { movieCredits } from 'Schemas'
import { storeData, storeMovieInfo } from 'Store/data/actions'
import { GET_MOVIE_CREDITS } from '../types'
import {
  requestMovieCreditsStart,
  requestMovieCreditsSuccess,
  requestMovieCreditsError
} from '../actions'

export const getMovieCreditsOperation = createLogic({
  type: GET_MOVIE_CREDITS,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { movieId } = action
    dispatch(requestMovieCreditsStart())
    try {
      const response = await axios.get(`/movie/${movieId}/credits`)
      const { movie, persons } = normalize(response.data, movieCredits).entities
      const { cast, crew } = movie[movieId]
      dispatch(storeData('persons', persons))
      console.log(response.data)
      dispatch(storeMovieInfo(movieId, { cast, crew: uniq(crew) }))
      dispatch(requestMovieCreditsSuccess())
    } catch (error) {
      dispatch(requestMovieCreditsError())
    }
    done()
  }
})
