import { createSelector } from 'reselect'
import { get, map, pick } from 'lodash'
import { userListsDataSelector } from 'Store/data/selectors'

const userListsStateSelector = state => get(state, 'userLists')

const userListsMetaSelector = createSelector(
  userListsStateSelector,
  userLists => get(userLists, 'meta')
)

export const userListsLoadingSelector = createSelector(
  userListsMetaSelector,
  meta => get(meta, 'loading')
)
export const userListsPageSelector = createSelector(
  userListsMetaSelector,
  meta => pick(meta, ['currentPage', 'totalResults'])
)
export const userListsErrorSelector = createSelector(
  userListsMetaSelector,
  meta => get(meta, 'error')
)

export const userListsEntriesSelector = createSelector(
  userListsStateSelector,
  userLists => get(userLists, 'entries')
)

export const isBlankSelector = createSelector(
  userListsEntriesSelector,
  userListsLoadingSelector,
  (userListsEntries, loading) => !loading && userListsEntries && !userListsEntries.length
)

export const userListsSelector = createSelector(
  userListsEntriesSelector,
  userListsDataSelector,
  (entries, data) => map(entries, id => data[id])
)

export const createListLoadingSelector = createSelector(
  userListsStateSelector,
  userLists => get(userLists, 'createListLoading')
)
