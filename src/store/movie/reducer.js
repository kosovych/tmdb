import {
  REQUEST_MOVIE_INFO_START,
  REQUEST_MOVIE_INFO_SUCCESS,
  REQUEST_MOVIE_INFO_ERROR,
  REQUEST_MOVIE_IMAGES_START,
  REQUEST_MOVIE_IMAGES_SUCCESS,
  REQUEST_MOVIE_IMAGES_ERROR,
  REQUEST_MOVIE_CREDITS_START,
  REQUEST_MOVIE_CREDITS_SUCCESS,
  REQUEST_MOVIE_CREDITS_ERROR
} from './types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_INFO_START:
      return { ...state, infoLoading: true }
    case REQUEST_MOVIE_INFO_SUCCESS:
      return { ...state, infoLoading: false }
    case REQUEST_MOVIE_INFO_ERROR:
      return { ...state, infoLoading: false }
    case REQUEST_MOVIE_IMAGES_START:
      return { ...state, imageLoading: true }
    case REQUEST_MOVIE_IMAGES_SUCCESS:
      return { ...state, imageLoading: false }
    case REQUEST_MOVIE_IMAGES_ERROR:
      return { ...state, imageLoading: false }
    case REQUEST_MOVIE_CREDITS_START:
      return { ...state, creditsLoading: true }
    case REQUEST_MOVIE_CREDITS_SUCCESS:
      return { ...state, creditsLoading: false }
    case REQUEST_MOVIE_CREDITS_ERROR:
      return { ...state, creditsLoading: false }
    default:
      return state
  }
}

export default reducer
