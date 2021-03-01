import { createSelector } from 'reselect'
import { get, map } from 'lodash'

import { moviesDataSelector } from 'Store/data/selectors'

const listDetailsSelector = state => get(state, 'listDetails')

export const listEntriesSelector = createSelector(
  listDetailsSelector,
  listDetails => get(listDetails, 'entries')
)

const listMetaSelector = createSelector(
  listDetailsSelector,
  listDetails => get(listDetails, 'meta')
)

export const listNameSelector = createSelector(
  listMetaSelector,
  listMeta => get(listMeta, 'name')
)

export const listLoadingSelector = createSelector(
  listMetaSelector,
  listMeta => get(listMeta, 'loading')
)

export const isBlankSelector = createSelector(
  listEntriesSelector,
  listLoadingSelector,
  (entries, loading) => !loading && entries && !entries.length
)

export const listMoviesSelector = createSelector(
  listEntriesSelector,
  moviesDataSelector,
  (movieEntries, data) => map(movieEntries, id => data[id])
)
