import { createSelector } from 'reselect'
import { map, pick, get } from 'lodash'
import { moviesDataSelector } from 'Store/data/selectors'

export const movieCatalogEntriesSelector = state => (
  get(state, ['trendingMovies', 'entries'])
)

export const movieMetaSelector = state => (
  get(state, ['trendingMovies', 'meta'])
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
  (moviesEntries, loading) => {
    if (!moviesEntries) {
      return true
    }
    return !loading && !moviesEntries.length
  }
)

export const moviesSelector = createSelector(
  movieCatalogEntriesSelector,
  moviesDataSelector,
  (movieEntries, data) => map(movieEntries, id => data[id])
)
