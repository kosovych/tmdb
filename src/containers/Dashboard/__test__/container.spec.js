import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import diveTo from 'Utils/testHelpers/diveToEnzyme'
import { getMovies as getMoviesAction } from 'Store/trendingMovies/actions'
import DashboardWrapper, { DashboardContainer } from '../container'

jest.mock('Store/trendingMovies/actions', () => ({
  getMovies: jest.fn(),
  setSearch: jest.fn()
}))

describe('Login Container', () => {
  const store = configureStore()({})
  store.dispatch = jest.fn()
  const wrapper = shallow(<DashboardWrapper store={store} />)
  const container = diveTo(wrapper, DashboardContainer)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('componentDidMount()', () => {
    it('should call getMoviesAction() action', () => {
      const instance = container.instance()
      instance.componentDidMount()
      expect(getMoviesAction).toHaveBeenCalledTimes(1)
    })
  })

  describe('onPageChange()', () => {
    const page = { page: 1 }
    const instance = container.instance()
    it('should call getMoviesAction() action with right params', () => {
      instance.onPageChange(page)
      expect(getMoviesAction).toHaveBeenCalledTimes(1)
    })
  })
})
