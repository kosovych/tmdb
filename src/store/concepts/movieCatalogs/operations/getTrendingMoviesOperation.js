import { createLogic } from 'redux-logic'
import { storeData } from 'Store/data/actions'
import { path } from 'ramda'
import { normalize, schema } from 'normalizr'
import { ALL_TRENDING_DAY_URL, SEARCH_MOVIE_URL, TRENDING_MOVIES } from 'Constants'
import { GET_MOVIES } from '../types'
import { requestMoviesStart, requestMoviesSuccess, requestMoviesError } from '../actions'

export const getMoviesOperation = createLogic({
  type: GET_MOVIES,
  latest: true,
  async process({ getState, action, axios }, dispatch, done) {
    let { queries } = action
    const searchQuery = path(['movieCatalogs', `${TRENDING_MOVIES}`, 'meta', 'search'], getState())
    const url = searchQuery ? SEARCH_MOVIE_URL : ALL_TRENDING_DAY_URL
    if (searchQuery) {
      queries = { ...queries, query: searchQuery }
    }
    const movieSchema = new schema.Entity('movies')
    const moviesListSchema = new schema.Array(movieSchema)
    dispatch(requestMoviesStart(TRENDING_MOVIES))
    try {
      const dataRequest = await axios.get(url, { params: queries })
      const { data } = dataRequest
      const { result, entities } = normalize(data.results, moviesListSchema)
      const movies = {
        entries: result,
        totalPages: data.total_pages,
        currentPage: data.page
      }
      dispatch(storeData('movies', entities.movies))
      dispatch(requestMoviesSuccess(TRENDING_MOVIES, movies))
    } catch (error) {
      dispatch(requestMoviesError(TRENDING_MOVIES, error.message))
    }
    done()
  }
})
