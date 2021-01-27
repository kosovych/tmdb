import { createLogic } from 'redux-logic'
import { REQUEST_DATA } from '../types'
import { requestDataSuccess } from '../actions'
import { addMovies } from '../../movies/actions'

export const dataOperation = createLogic({
  type: REQUEST_DATA,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    const { endpoint, url, schema } = action
    try {
      const dataRequest = await axios.get(url)
      const { data } = dataRequest
      const { result, entities } = schema(data.results)
      const movies = {
        items: result,
        totalPages: data.total_pages,
        currentPage: data.page
      }
      dispatch(addMovies(movies, endpoint))
      dispatch(requestDataSuccess(entities.movies))
    } catch (err) {
      console.log('error')
    }
    done()
  }
})
