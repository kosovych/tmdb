import {
  SET_MOVIE_ID,
  REQUEST_MOVIE_INFO_START,
  REQUEST_MOVIE_INFO_SUCCESS,
  REQUEST_MOVIE_INFO_ERROR,
  REQUEST_MOVIE_IMAGES_START,
  REQUEST_MOVIE_IMAGES_SUCCESS,
  REQUEST_MOVIE_IMAGES_ERROR,
  REQUEST_MOVIE_CREDITS_START,
  REQUEST_MOVIE_CREDITS_SUCCESS,
  REQUEST_MOVIE_CREDITS_ERROR,
  REQUEST_MOVIE_ACCOUNT_STATES_START,
  REQUEST_MOVIE_ACCOUNT_STATES_ERROR,
  REQUEST_MOVIE_ACCOUNT_STATES_SUCCESS,
  ADD_MOVIE_TO_NEW_LIST_START,
  ADD_MOVIE_TO_NEW_LIST_SUCCESS
} from './types'

const initialStore = {
  infoLoading: true,
  imageLoading: true,
  creditsLoading: true,
  accountStatesLoading: true
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_MOVIE_ID:
      return { ...state, movieId: action.movieId }
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
    case REQUEST_MOVIE_ACCOUNT_STATES_START:
      return { ...state, accountStatesLoading: true }
    case REQUEST_MOVIE_ACCOUNT_STATES_ERROR:
      return { ...state, accountStatesLoading: false }
    case REQUEST_MOVIE_ACCOUNT_STATES_SUCCESS:
      return { ...state, accountStatesLoading: false }
    case ADD_MOVIE_TO_NEW_LIST_START:
      return { ...state, newListLoading: true }
    case ADD_MOVIE_TO_NEW_LIST_SUCCESS:
      return { ...state, newListLoading: false }
    default:
      return state
  }
}

export default reducer
