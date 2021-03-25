import { loginOperation, getUserOperation } from './auth/operations'
import { getMoviesOperation } from './trendingMovies/operations'
import { getWatchListOperation, removeMovieOperation } from './watchList/operations'
import { getFavoritesOperation, removeFavoriteMovieOperation } from './favorites/operations'
import {
  createUserListOperation,
  getUserListsOperation,
  removeUserListOperation
} from './userMovieLists/operations'
import {
  getListDetailsOperation,
  removeMovieOperation as removeMovieFromUserListOperation,
  removeUserListOperation as removeUserListDetailsOperation
} from './listDetails/operations'

export default [
  loginOperation,
  getUserOperation,
  getMoviesOperation,
  getWatchListOperation,
  removeMovieOperation,
  getFavoritesOperation,
  removeFavoriteMovieOperation,
  createUserListOperation,
  getUserListsOperation,
  removeUserListOperation,
  getListDetailsOperation,
  removeMovieFromUserListOperation,
  removeUserListDetailsOperation
]
