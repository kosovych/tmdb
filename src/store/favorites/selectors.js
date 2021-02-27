import { createSelector } from 'reselect'
import { map, pick, get } from 'lodash'
import { movieDataSelector } from 'Store/data/selectors'

const movieCatalogEntriesSelector = state => (
  get(state, ['favoriteMovies', 'entries'])
)

const movieMetaSelector = state => (
  get(state, ['favoriteMovies', 'meta'])
)

export const moviePagesSelector = createSelector(
  movieMetaSelector,
  meta => pick(meta, ['currentPage', 'totalResults'])
)

export const movieErrorSelector = createSelector(
  movieMetaSelector,
  meta => get(meta, ['error'])
)

export const movieLoadingSelector = createSelector(
  movieMetaSelector,
  meta => get(meta, 'loading')
)

export const movieSearchQuerySelector = createSelector(
  movieMetaSelector,
  meta => get(meta, 'search')
)

export const isBlankSelector = createSelector(
  movieCatalogEntriesSelector,
  movieLoadingSelector,
  (moviesEntries, loading) => !loading && moviesEntries && !moviesEntries.length
)

export const removeMovieErrorsSelector = createSelector(
  movieMetaSelector,
  meta => get(meta, 'removeErrors') || []
)

export const moviesSelector = createSelector(
  movieCatalogEntriesSelector,
  movieDataSelector,
  (movieEntries, data) => map(movieEntries, id => data[id])
)
