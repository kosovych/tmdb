import { get } from 'lodash'

export const movieDataSelector = state => (
  get(state, ['data', 'movies'])
)

export const userListsDataSelector = state => (
  get(state, ['data', 'userLists'])
)
