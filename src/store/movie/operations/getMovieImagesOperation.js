import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils'
import { storeData } from 'Store/data/actions'
import { movieSelector, currentMovieIdSelector } from 'Store/movie/selectors'
import { GET_MOVIE_IMAGES } from '../types'
import {
  requestMovieImagesStart,
  requestMovieImagesSuccess,
  requestMovieImagesError
} from '../actions'

export const getMovieImagesOperation = createLogic({
  type: GET_MOVIE_IMAGES,
  latest: true,
  async process({ axios, getState }, dispatch, done) {
    const movieId = currentMovieIdSelector(getState())
    dispatch(requestMovieImagesStart())
    try {
      const response = await axios.get(`movie/${movieId}/images`)
      const images = response.data.backdrops?.slice(0, 3)
      const movie = movieSelector(getState())
      dispatch(storeData('movies', { [movieId]: { ...movie, images } }))
      dispatch(requestMovieImagesSuccess())
    } catch (error) {
      dispatch(requestMovieImagesError())
      openNotification({
        message: error.message,
        type: 'error'
      })
    }
    done()
  }
})
