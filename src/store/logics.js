import { loginOperation, getUserOperation } from './auth/operations'
import { getMoviesOperation } from './trendingMovies/operations'
import { getWatchListOperation, removeMovieOperation } from './watchList/operations'
import { getFavoritesOperation, removeFavoriteMovieOperation } from './favorites/operations'
import {
  createUserListOperation,
  getUserListsOperations,
  removeUserListOperation
} from './userMovieLists/operations'

export default [
  loginOperation,
  getUserOperation,
  getMoviesOperation,
  getWatchListOperation,
  removeMovieOperation,
  getFavoritesOperation,
  removeFavoriteMovieOperation,
  createUserListOperation,
  getUserListsOperations,
  removeUserListOperation
]
