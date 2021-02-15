import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'

import { moviesListSchema } from 'Schemas'
import { ALL_TRENDING_DAY_URL, SEARCH_MOVIE_URL } from 'Constants'
import { storeData } from 'Store/data/actions'
import { GET_MOVIES } from '../types'
import { requestMoviesStart, requestMoviesSuccess, requestMoviesError } from '../actions'
import { movieSearchQuerySelector } from '../selectors'

export const getMoviesOperation = createLogic({
  type: GET_MOVIES,
  latest: true,
  async process({ getState, action, axios }, dispatch, done) {
    let { params } = action
    const searchQuery = movieSearchQuerySelector(getState())
    const url = searchQuery ? SEARCH_MOVIE_URL : ALL_TRENDING_DAY_URL
    if (searchQuery) {
      params = { ...params, query: searchQuery }
    }
    dispatch(requestMoviesStart())
    try {
      const dataRequest = await axios.get(url, { params })
      const { data } = dataRequest
      const { result, entities } = normalize(data.results, moviesListSchema)
      const movies = {
        entries: result,
        totalPages: data.total_pages,
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