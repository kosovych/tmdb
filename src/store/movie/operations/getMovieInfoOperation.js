import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'
import camelcaseKeys from 'camelcase-keys'

import { openNotification } from 'Utils'
import { genresListsSchema } from 'Schemas'
import { storeData } from 'Store/data/actions'
import { movieSelector } from 'Store/movie/selectors'
import { GET_MOVIE_INFO } from '../types'
import {
  requestMovieInfoStart,
  requestMovieInfoSuccess,
  requestMovieInfoError
} from '../actions'

export const getMovieInfoOperation = createLogic({
  type: GET_MOVIE_INFO,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    dispatch(requestMovieInfoStart())
    const { movieId } = action
    try {
      const response = await axios.get(`/movie/${movieId}`)
      const { genres } = response.data
      const { result: genresIDs, entities: genresData } = normalize(genres, genresListsSchema)
      const movie = movieSelector(getState(), movieId)
      dispatch(storeData('genres', genresData.genreLists))
      dispatch(storeData('movies', { [movieId]: { ...movie, ...camelcaseKeys(response.data), genres: genresIDs } }))
      dispatch(requestMovieInfoSuccess())
    } catch (error) {
      dispatch(requestMovieInfoError())
      openNotification({
        message: error.message,
        type: 'error'
      })
    }
    done()
  }
})
