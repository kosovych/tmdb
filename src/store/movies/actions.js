import { ADD_MOVIES } from './types'

export const addMovies = (payload, endpoint) => ({
  type: ADD_MOVIES,
  payload,
  endpoint
})
