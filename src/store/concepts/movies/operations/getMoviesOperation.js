import { createLogic } from 'redux-logic'
import { storeData } from 'Store/data/actions'
import { normalize, schema } from 'normalizr'
import { GET_MOVIES } from '../types'
import { requestMoviesStart, requestMoviesSuccess, requestMoviesError } from '../actions'

export const getMoviesOperation = createLogic({
  type: GET_MOVIES,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { endpoint, url } = action
    const movieSchema = new schema.Entity('movies')
    const moviesListSchema = new schema.Array(movieSchema)
    dispatch(requestMoviesStart(endpoint))
    try {
      const dataRequest = await axios.get(url)
      const { data } = dataRequest
      const { result, entities } = normalize(data.results, moviesListSchema)
      const movies = {
        entries: result,
        totalPages: data.total_pages,
        currentPage: data.page
      }
      dispatch(storeData('movies', entities.movies))
      dispatch(requestMoviesSuccess(endpoint, movies))
    } catch (error) {
      dispatch(requestMoviesError(endpoint, error.message))
    }
    done()
  }
})
