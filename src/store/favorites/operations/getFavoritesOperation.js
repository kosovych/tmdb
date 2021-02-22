import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'

import { moviesListSchema } from 'Store/userMovieLists/operations'
import { userIdSelector, sessionIdSelector } from 'Store/auth/selectors'
import { storeData } from 'Store/data/actions'
import { GET_MOVIES } from '../types'
import { requestMoviesStart, requestMoviesSuccess, requestMoviesError } from '../actions'

export const getFavoritesOperation = createLogic({
  type: GET_MOVIES,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const state = getState()
    const { params = {} } = action
    params.session_id = sessionIdSelector(state)
    const url = `/account/${userIdSelector(state)}/favorite/movies`
    dispatch(requestMoviesStart())
    try {
      const dataRequest = await axios.get(url, { params })
      const { data } = dataRequest
      const { result, entities } = normalize(data.results, moviesListSchema)
      const movies = {
        entries: result,
        totalResults: data.total_results,
        currentPage: data.page
      }
      dispatch(storeData('movies', entities.movies))
      dispatch(requestMoviesSuccess(movies))
    } catch (error) {
      dispatch(requestMoviesError(error.message))
    }
    done()
  }
})
