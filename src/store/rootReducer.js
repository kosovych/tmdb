import { combineReducers } from 'redux'

import auth from './auth'
import data from './data'
import trendingMovies from './trendingMovies'
import watchListMovies from './watchList'
import favoriteMovies from './favorites'
import userMovieLists from './userMovieLists'
import listDetails from './listDetails'
import movie from './movie'

const reducers = combineReducers({
  auth,
  data,
  trendingMovies,
  watchListMovies,
  favoriteMovies,
  userMovieLists,
  listDetails,
  movie
})

export default reducers
