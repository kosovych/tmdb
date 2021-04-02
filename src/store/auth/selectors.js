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

export const displayNameSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'displayName')
)

export const authLoadingSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'loading')
)

export const avatarUrlSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'avatarUrl')
)

export const usernameSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'username')
)

export const errorTxtSelector = createSelector(
  userDataSelector,
  userData => get(userData, 'errorTxt')
)
