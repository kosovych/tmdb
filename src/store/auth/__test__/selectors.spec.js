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
      expect(userIdSelector(state)).toBe(1)
    })
  })

  describe('sessionIdSelector()', () => {
    it('returns session ID', () => {
      expect(sessionIdSelector(state)).toBe('sessionId')
    })
  })

  describe('displayNameSelector()', () => {
    it('returns user display name', () => {
      expect(displayNameSelector(state)).toBe('User Name')
    })
  })

  describe('authLoadingSelector()', () => {
    it('returns loading state', () => {
      expect(authLoadingSelector(state)).toBe(false)
    })
  })

  describe('avatarUrlSelector()', () => {
    it('returns avatar ULR', () => {
      expect(avatarUrlSelector(state)).toBe('image')
    })
  })

  describe('usernameSelector()', () => {
    it('returns user name', () => {
      expect(usernameSelector(state)).toBe('user_name')
    })
  })

  describe('errorMessageSelector()', () => {
    it('returns error message', () => {
      expect(errorMessageSelector(state)).toBeNull()
    })
  })
})
