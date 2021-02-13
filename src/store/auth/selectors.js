import { createSelector } from 'reselect'
import { get } from 'lodash'

const userDataSelector = state => (
  get(state, 'auth')
)

export const userIdSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'userID')
)

export const sessionIdSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'sessionID')
)
