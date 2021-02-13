import { combineReducers } from 'redux'

import auth from './auth'
import data from './data'
import trendingMovies from './trendingMovies'
import watchList from './watchList'

const reducers = combineReducers({
  auth,
  data,
  trendingMovies,
  watchList
})

export default reducers
