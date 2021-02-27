import { combineReducers } from 'redux'

import auth from './auth'
import data from './data'
import trendingMovies from './trendingMovies'
import watchListMovies from './watchList'
import favoriteMovies from './favorites'

const reducers = combineReducers({
  auth,
  data,
  trendingMovies,
  watchListMovies,
  favoriteMovies
})

export default reducers
