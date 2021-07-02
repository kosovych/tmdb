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

const getContainer = () => {
  const store = configureStore()({})
  store.dispatch = jest.fn()
  const wrapper = shallow(<SearchWrapper store={store} />)
  const container = diveTo(wrapper, SearchContainer)
  return container
}

describe('Login Container', () => {
  it('matches snapshot', () => {
    const container = getContainer()
    expect(container).toMatchSnapshot()
  })

  describe('onClear()', () => {
    describe('when form have been submitted', () => {
      const submitCount = 1
      const handleReset = jest.fn()
      const setFieldTouched = jest.fn()
      const container = getContainer()
      container.setProps({
        submitCount,
        handleReset,
        setFieldTouched
      })
      const instance = container.instance()

      beforeEach(() => {
        jest.clearAllMocks()
      })
      it('should call setFieldTouched() actions with right params', () => {
        instance.onClear()
        expect(setFieldTouched).toHaveBeenCalledTimes(1)
      })
      it('should call setSearchAction() actions with right params', () => {
        instance.onClear()
        expect(setSearchAction).toHaveBeenCalledWith('')
      })
      it('should call getMoviesAction() actions with right params', () => {
        instance.onClear()
        expect(getMoviesAction).toHaveBeenCalledTimes(1)
      })
      it('should call handleReset() actions with right params', () => {
        instance.onClear()
        expect(handleReset).toHaveBeenCalledTimes(1)
      })
    })
    describe('when form have NOT been submitted', () => {
      const submitCount = 0
      const handleReset = jest.fn()
      const setFieldTouched = jest.fn()
      const container = getContainer()
      container.setProps({
        submitCount,
        handleReset,
        setFieldTouched
      })
      const instance = container.instance()

      beforeEach(() => {
        jest.clearAllMocks()
      })
      it('should not call setSearchAction() actions with right params', () => {
        instance.onClear()
        expect(setSearchAction).not.toHaveBeenCalled()
      })
      it('should not call getMoviesAction() actions with right params', () => {
        instance.onClear()
        expect(getMoviesAction).not.toHaveBeenCalled()
      })
    })
  })
})

describe('handleSubmit()', () => {
  const getMovies = jest.fn()
  const setSearch = jest.fn()
  const props = { getMovies, setSearch }
  const values = { search: 'Search...' }
  handleSubmit(values, { props })
  it('should call setSearch() with right params', () => {
    handleSubmit(values, { props })
    expect(setSearch).toHaveBeenCalledTimes(1)
    expect(setSearch).toHaveBeenCalledWith(values.search)
  })
  it('should call getMovies()', () => {
    handleSubmit(values, { props })
    expect(getMovies).toHaveBeenCalled()
  })
})
