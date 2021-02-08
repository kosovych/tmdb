import { createSelector } from 'reselect'
import { path } from 'ramda'
import { map, pick } from 'lodash'

const movieDataSelector = state => (
  path(['data', 'movies'], state)
)

const movieCatalogEntriesSelector = (state, endpoint) => (
  path(['movieCatalogs', endpoint, 'entries'], state)
)

const movieMetaSelector = (state, endpoint) => (
  path(['movieCatalogs', endpoint, 'meta'], state)
)

export const moviePagesSelector = createSelector(
  movieMetaSelector,
  meta => pick(meta, ['currentPage', 'totalPages'])
)

export const movieErrorSelector = createSelector(
  movieMetaSelector,
  meta => path(['error'], meta)
)

export const movieLoadingSelector = createSelector(
  movieMetaSelector,
  meta => path(['loading'], meta)
)

export const isBlankSelector = createSelector(
  movieCatalogEntriesSelector,
  movieLoadingSelector,
  (moviesEntries, loading) => !loading && moviesEntries && !moviesEntries.length
)

export const moviesSelector = createSelector(
  movieCatalogEntriesSelector,
  movieDataSelector,
  (movieEntries, data) => map(movieEntries, id => data[id])
)
