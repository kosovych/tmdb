import { createSelector } from 'reselect'
import { map, pick, get } from 'lodash'

const movieDataSelector = state => (
  get(state, ['data', 'movies'])
)

const movieCatalogEntriesSelector = state => (
  get(state, ['favorites', 'entries'])
)

const movieMetaSelector = state => (
  get(state, ['favorites', 'meta'])
)

export const moviePagesSelector = createSelector(
  movieMetaSelector,
  meta => pick(meta, ['currentPage', 'totalPages'])
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
