import { combineReducers } from 'redux'

import auth from './auth'
import data from './data'
import trendingMovies from './trendingMovies'
import watchList from './watchList'
import favorites from './favorites'

const reducers = combineReducers({
  auth,
  data,
  trendingMovies,
  watchList,
  favorites
})

export default reducers
