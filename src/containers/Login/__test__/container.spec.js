import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import diveTo from 'Utils/testHelpers/diveToEnzyme'
import LoginWrapper, { LoginContainer, handleSubmit } from '../container'

jest.mock('Store/auth/actions', () => ({
  loginSubmit: jest.fn()
}))

jest.mock('Store/auth/selectors', () => ({
  authLoadingSelector: jest.fn(() => false),
  errorMessageSelector: jest.fn(() => null),
  sessionIdSelector: jest.fn(() => '')
}))


describe('Login Container', () => {
  const store = configureStore()({})
  store.dispatch = jest.fn()

  const wrapper = shallow(<LoginWrapper store={store} />)
  const container = diveTo(wrapper, LoginContainer)

  it('renders Login component', () => {
    expect(container).toMatchSnapshot()
  })

  describe('handleSubmit()', () => {
    it('calls login() with correct params', () => {
      const login = jest.fn()
      const value = { password: 'password', username: 'username' }
      const props = { login }
      handleSubmit(value, { props })
      expect(login).toHaveBeenCalledWith(value)
    })
  })
})
