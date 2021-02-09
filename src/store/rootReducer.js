import { combineReducers } from 'redux'

import auth from './auth'
import data from './data'
import movieCatalogs from './concepts/movieCatalogs'

const reducers = combineReducers({
  auth,
  data,
  movieCatalogs
})

export default reducers
