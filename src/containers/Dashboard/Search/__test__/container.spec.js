import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import diveTo from 'Utils/testHelpers/diveToEnzyme'
import { getMovies as getMoviesAction, setSearch as setSearchAction } from 'Store/trendingMovies/actions'
import SearchWrapper, { SearchContainer, handleSubmit } from '../container'

jest.mock('Store/trendingMovies/actions', () => ({
  getMovies: jest.fn(),
  setSearch: jest.fn()
}))

describe('Login Container', () => {
  const store = configureStore()({})
  store.dispatch = jest.fn()
  const wrapper = shallow(<SearchWrapper store={store} />)
  const container = diveTo(wrapper, SearchContainer)
  const instance = container.instance()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('onClear()', () => {
    describe('if form have been submitted', () => {
      it('should call actions with right params', () => {
        const handleReset = jest.fn()
        const setFieldTouched = jest.fn()
        container.setProps({
          submitCount: 1,
          handleReset,
          setFieldTouched
        })
        instance.onClear()
        expect(setFieldTouched).toHaveBeenCalledTimes(1)
        expect(setSearchAction).toHaveBeenCalledWith('')
        expect(getMoviesAction).toHaveBeenCalledTimes(1)
        expect(handleReset).toHaveBeenCalledTimes(1)
      })
    })
    describe('if form have NOT been submitted', () => {
      it('should call actions with right params', () => {
        const submitCount = 0
        const handleReset = jest.fn()
        const setFieldTouched = jest.fn()
        container.setProps({
          submitCount,
          handleReset,
          setFieldTouched
        })
        instance.onClear()
        expect(setSearchAction).not.toHaveBeenCalled()
        expect(getMoviesAction).not.toHaveBeenCalled()
      })
    })
  })

  describe('handleSubmit()', () => {
    const getMovies = jest.fn()
    const setSearch = jest.fn()
    const props = { getMovies, setSearch }
    const values = { search: 'Search...' }
    handleSubmit(values, { props })
    expect(setSearch).toHaveBeenCalledTimes(1)
    expect(setSearch).toHaveBeenCalledWith(values.search)
    expect(getMovies).toHaveBeenCalled()
  })
})
