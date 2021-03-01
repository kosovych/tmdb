import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils'
import { storeMovieInfo } from 'Store/data/actions'
import { GET_MOVIE_IMAGES } from '../types'
import {
  requestMovieImagesStart,
  requestMovieImagesSuccess,
  requestMovieImagesError
} from '../actions'

export const getMovieImagesOperation = createLogic({
  type: GET_MOVIE_IMAGES,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { movieId } = action
    dispatch(requestMovieImagesStart())
    try {
      const response = await axios.get(`movie/${movieId}/images`)
      const images = response.data.backdrops?.slice(0, 3)
      dispatch(storeMovieInfo(movieId, { images }))
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
