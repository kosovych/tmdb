import { get, pick, map } from 'lodash'
import { createSelector } from 'reselect'
import { moviesDataSelector, genresDataSelector, personsDataSelector } from 'Store/data/selectors'

const movieSliceSelector = state => get(state, 'movie')

export const currentMovieIdSelector = createSelector(
  movieSliceSelector,
  movie => movie?.movieId
)

export const movieSelector = state => get(moviesDataSelector(state), currentMovieIdSelector(state))

export const castMovieSelector = createSelector(
  movieSelector,
  personsDataSelector,
  (movie, personsData) => map(get(movie, 'cast'), id => personsData[id])
)

export const crewMovieSelector = createSelector(
  movieSelector,
  personsDataSelector,
  (movie, personsData) => map(get(movie, 'crew'), id => personsData[id])
)

export const genresMovieSelector = createSelector(
  movieSelector,
  genresDataSelector,
  (movie, genresData) => map(get(movie, 'genres'), id => genresData[id])
)

export const movieImagesSelector = createSelector(
  movieSelector,
  movie => get(movie, 'images')
)

export const movieInfoSelector = createSelector(
  movieSelector,
  (movie) => {
    const movieInfo = pick(
      movie,
      [
        'originalTitle',
        'originalLanguage',
        'overview',
        'runtime',
        'budget',
        'revenue',
        'firstAirDate',
        'releaseDate',
        'originalName'
      ]
    )
    return movieInfo
  }
)

export const movieLoadingSelector = createSelector(
  movieSliceSelector,
  movie => [
    movie.infoLoading,
    movie.imageLoading,
    movie.creditsLoading
  ].includes(true)
)

export const newListLoadingSelector = createSelector(
  movieSliceSelector,
  movie => get(movie, 'newListLoading')
)

export const accountStatesLoadingSelector = createSelector(
  movieSliceSelector,
  movie => movie.accountStatesLoading
)

export const isOnWatchlistSelector = createSelector(
  movieSelector,
  movie => movie.isOnWatchlist
)

export const isFavoriteSelector = createSelector(
  movieSelector,
  movie => movie.isFavorite
)
