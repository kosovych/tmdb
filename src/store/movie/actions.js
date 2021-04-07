import {
  GET_MOVIE_INFO,
  REQUEST_MOVIE_INFO_START,
  REQUEST_MOVIE_INFO_SUCCESS,
  REQUEST_MOVIE_INFO_ERROR,
  GET_MOVIE_IMAGES,
  REQUEST_MOVIE_IMAGES_START,
  REQUEST_MOVIE_IMAGES_SUCCESS,
  REQUEST_MOVIE_IMAGES_ERROR,
  GET_MOVIE_CREDITS,
  REQUEST_MOVIE_CREDITS_START,
  REQUEST_MOVIE_CREDITS_ERROR,
  REQUEST_MOVIE_CREDITS_SUCCESS
} from './types'

export const getMovie = movieId => ({
  type: GET_MOVIE_INFO,
  movieId
})

export const requestMovieInfoStart = () => ({
  type: REQUEST_MOVIE_INFO_START
})

export const requestMovieInfoSuccess = info => ({
  type: REQUEST_MOVIE_INFO_SUCCESS,
  info
})

export const requestMovieInfoError = () => ({
  type: REQUEST_MOVIE_INFO_ERROR
})

export const getMovieImages = movieId => ({
  type: GET_MOVIE_IMAGES,
  movieId
})

export const requestMovieImagesStart = () => ({
  type: REQUEST_MOVIE_IMAGES_START
})

export const requestMovieImagesSuccess = images => ({
  type: REQUEST_MOVIE_IMAGES_SUCCESS,
  images
})

export const requestMovieImagesError = () => ({
  type: REQUEST_MOVIE_IMAGES_ERROR
})

export const getMovieCredits = movieId => ({
  type: GET_MOVIE_CREDITS,
  movieId
})

export const requestMovieCreditsStart = () => ({
  type: REQUEST_MOVIE_CREDITS_START
})
export const requestMovieCreditsError = () => ({
  type: REQUEST_MOVIE_CREDITS_ERROR
})

export const requestMovieCreditsSuccess = (cast, crew) => ({
  type: REQUEST_MOVIE_CREDITS_SUCCESS,
  cast,
  crew
})
