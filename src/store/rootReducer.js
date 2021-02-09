import { combineReducers } from 'redux'

import auth from './auth'
import data from './data'
import trendingMovies from './trendingMovies'

const reducers = combineReducers({
  auth,
  data,
  trendingMovies
})

export default reducers
