import {
  SET_MOVIE_ID,
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
  REQUEST_MOVIE_CREDITS_SUCCESS,
  GET_MOVIE_ACCOUNT_STATES,
  REQUEST_MOVIE_ACCOUNT_STATES_START,
  REQUEST_MOVIE_ACCOUNT_STATES_ERROR,
  REQUEST_MOVIE_ACCOUNT_STATES_SUCCESS,
  ADD_MOVIE_TO_WATCHLIST,
  ADD_MOVIE_TO_FAVORITES,
  ADD_MOVIE_TO_EXIST_LIST,
  ADD_MOVIE_TO_NEW_LIST,
  ADD_MOVIE_TO_NEW_LIST_START,
  ADD_MOVIE_TO_NEW_LIST_SUCCESS
} from './types'

export const setCurrentMovieId = movieId => ({
  type: SET_MOVIE_ID,
  movieId
})

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

export const getMovieAccountStates = movieId => ({
  type: GET_MOVIE_ACCOUNT_STATES,
  movieId
})

export const requestMovieAccountStatesStart = () => ({
  type: REQUEST_MOVIE_ACCOUNT_STATES_START
})

export const requestMovieAccountStatesError = () => ({
  type: REQUEST_MOVIE_ACCOUNT_STATES_ERROR
})

export const requestMovieAccountStatesSuccess = () => ({
  type: REQUEST_MOVIE_ACCOUNT_STATES_SUCCESS
})

export const addMovieToWatchList = (movieId, isOnWatchlist) => ({
  type: ADD_MOVIE_TO_WATCHLIST,
  movieId,
  isOnWatchlist
})

export const addMovieToFavorites = (movieId, isFavorite) => ({
  type: ADD_MOVIE_TO_FAVORITES,
  movieId,
  isFavorite
})

export const addMovieToExistList = listId => ({
  type: ADD_MOVIE_TO_EXIST_LIST,
  listId
})

export const addMovieToNewList = (values, cb) => ({
  type: ADD_MOVIE_TO_NEW_LIST,
  values,
  cb
})

export const addMovieToNewListStart = () => ({
  type: ADD_MOVIE_TO_NEW_LIST_START
})

export const addMovieToNewListSuccess = () => ({
  type: ADD_MOVIE_TO_NEW_LIST_SUCCESS
})
