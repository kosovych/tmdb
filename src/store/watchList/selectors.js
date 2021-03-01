import { createSelector } from 'reselect'
import { map, pick, get } from 'lodash'
import { moviesDataSelector } from 'Store/data/selectors'

const movieCatalogEntriesSelector = state => (
  get(state, ['watchListMovies', 'entries'])
)

const movieMetaSelector = state => (
  get(state, ['watchListMovies', 'meta'])
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

export const moviesSelector = createSelector(
  movieCatalogEntriesSelector,
  moviesDataSelector,
  (movieEntries, data) => map(movieEntries, id => data[id])
)
