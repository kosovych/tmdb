import { get } from 'lodash'

export const moviesDataSelector = state => (
  get(state, ['data', 'movies'])
)

export const userListsDataSelector = state => (
  get(state, ['data', 'userLists'])
)

export const genresDataSelector = state => (
  get(state, ['data', 'genres'])
)

export const personsDataSelector = state => (
  get(state, ['data', 'persons'])
)
