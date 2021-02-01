import { createLogic } from 'redux-logic'
import { storeData } from 'Store/data/actions'
import { GET_MOVIES } from '../types'
import { getSchemaByEndpoint } from './utils'
import { requestMoviesStart, requestMoviesSuccess, requestMoviesError } from '../actions'

export const getMoviesOperation = createLogic({
  type: GET_MOVIES,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { endpoint, url } = action
    const schema = getSchemaByEndpoint(endpoint)
    dispatch(requestMoviesStart(endpoint))
    try {
      const dataRequest = await axios.get(url)
      const { data } = dataRequest
      const { result, entities } = schema(data.results)
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
