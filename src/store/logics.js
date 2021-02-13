import { loginOperation, getUserOperation } from './auth/operations'
import { getMoviesOperation } from './trendingMovies/operations'
import { getWatchListOperation, removeMovieOperation } from './watchList/operations'

export default [
  loginOperation,
  getUserOperation,
  getMoviesOperation,
  getWatchListOperation,
  removeMovieOperation
]
