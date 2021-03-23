import { get, pick, map } from 'lodash'
import { createSelector } from 'reselect'
import camelcaseKeys from 'camelcase-keys'
import { moviesDataSelector, genresDataSelector, personsDataSelector } from 'Store/data/selectors'


export const movieSelector = (state, movieId) => get(moviesDataSelector(state), movieId)

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
      ['original_title', 'original_language', 'overview', 'runtime', 'budget', 'revenue', 'first_air_date', 'release_date', 'original_name']
    )
    return camelcaseKeys(movieInfo)
  }
)

export const movieLoadingSelector = createSelector(
  state => get(state, 'movie'),
  movie => [
    movie?.infoLoading,
    movie?.imageLoading,
    movie?.creditsLoading
  ].every(item => item === true)
)
