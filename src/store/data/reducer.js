import { get, merge } from 'lodash'

import { STORE_DATA, STORE_MOVIE_INFO } from './types'

const reducer = (state = {}, action) => {
  const endpointData = state[action.endpoint]
  switch (action.type) {
    case STORE_DATA:
      return { ...state, [action.endpoint]: { ...endpointData, ...action.payload } }
    case STORE_MOVIE_INFO:
      const { movieId, payload } = action
      const movies = get(state, 'movies', {})
      const prevMovie = get(movies, movieId, {})
      const movie = merge({}, prevMovie, payload)
      return {
        ...state,
        movies: {
          ...movies,
          [movieId]: movie
        }
      }
    default:
      return state
  }
}

export default reducer
