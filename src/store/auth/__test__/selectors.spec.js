import {
  userDataSelector,
  userIdSelector,
  sessionIdSelector,
  displayNameSelector,
  authLoadingSelector,
  avatarUrlSelector,
  usernameSelector,
  errorMessageSelector
} from '../selectors'

import { state } from '../__mocks__/state'

describe('Auth selectors', () => {
  describe('userDataSelector()', () => {
    it('returns auth store slice', () => {
      const auth = {
        loading: false,
        errorMessage: null,
        sessionId: 'sessionId',
        userId: 1,
        displayName: 'User Name',
        username: 'user_name',
        avatarUrl: 'image'
      }
      expect(userDataSelector(state)).toEqual(auth)
    })
  })

  describe('userIdSelector()', () => {
    it('returns user ID', () => {
      const userId = 1
      expect(userIdSelector(state)).toBe(userId)
    })
  })

  describe('sessionIdSelector()', () => {
    it('returns session ID', () => {
      const sessionId = 'sessionId'
      expect(sessionIdSelector(state)).toBe(sessionId)
    })
  })

  describe('displayNameSelector()', () => {
    it('returns user display name', () => {
      const displayName = 'User Name'
      expect(displayNameSelector(state)).toBe(displayName)
    })
  })

  describe('authLoadingSelector()', () => {
    it('returns loading state', () => {
      const loading = false
      expect(authLoadingSelector(state)).toBe(loading)
    })
  })

  describe('avatarUrlSelector()', () => {
    it('returns avatar ULR', () => {
      const avatarUrl = 'image'
      expect(avatarUrlSelector(state)).toBe(avatarUrl)
    })
  })

  describe('usernameSelector()', () => {
    it('returns user name', () => {
      const username = 'user_name'
      expect(usernameSelector(state)).toBe(username)
    })
  })

  describe('errorMessageSelector()', () => {
    it('returns error message', () => {
      const errorMessage = null
      expect(errorMessageSelector(state)).toBe(errorMessage)
    })
  })
})
