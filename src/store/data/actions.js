import {
  STORE_DATA,
  STORE_MOVIE_INFO
} from './types'

export const storeData = (endpoint, payload) => ({
  type: STORE_DATA,
  endpoint,
  payload
})

export const storeMovieInfo = (movieId, payload) => ({
  type: STORE_MOVIE_INFO,
  movieId,
  payload
})
