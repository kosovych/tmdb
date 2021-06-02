import { loginOperation, getUserOperation, logoutOperation } from './auth/operations'
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
import {
  getMovieInfoOperation,
  getMovieImagesOperation,
  getMovieCreditsOperation,
  getMovieAccountStatesOperation,
  toggleMovieWatchlistOperation,
  addMovieToFavoritesOperation,
  addToExistingListOperation,
  addMovieToNewListOperation
} from './movie/operations'

export default [
  loginOperation,
  logoutOperation,
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
  removeUserListDetailsOperation,
  getMovieInfoOperation,
  getMovieImagesOperation,
  getMovieCreditsOperation,
  getMovieAccountStatesOperation,
  toggleMovieWatchlistOperation,
  addMovieToFavoritesOperation,
  addToExistingListOperation,
  addMovieToNewListOperation
]
