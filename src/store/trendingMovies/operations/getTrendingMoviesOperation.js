import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'


import { moviesListSchema, searchMoviesSchema } from 'Schemas'
import { TRENDING_MOVIES_DAY, SEARCH_MOVIE_URL } from 'Constants'
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
    const url = searchQuery ? SEARCH_MOVIE_URL : TRENDING_MOVIES_DAY
    const schema = searchQuery ? searchMoviesSchema : moviesListSchema

    if (searchQuery) {
      params = { ...params, query: searchQuery }
    }
    dispatch(requestMoviesStart())
    try {
      const dataRequest = await axios.get(url, { params })
      const { data } = dataRequest
      const { result, entities } = normalize(data.results, schema)
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
