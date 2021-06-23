import {
  movieCatalogEntriesSelector,
  movieMetaSelector,
  moviePagesSelector,
  movieErrorSelector,
  movieLoadingSelector,
  movieSearchQuerySelector,
  isBlankSelector,
  moviesSelector
} from '../selectors'
import { state, blankState } from '../__mock__/state'

jest.mock('Store/data/selectors', () => ({
  moviesDataSelector: () => ({ 1: {} })
}))

describe('Auth selectors', () => {
  describe('movieCatalogEntriesSelector()', () => {
    it('returns correct value', () => {
      expect(movieCatalogEntriesSelector(state)).toEqual([1])
    })
  })
  describe('movieMetaSelector()', () => {
    it('returns correct value', () => {
      expect(movieMetaSelector(state)).toEqual({
        loading: false,
        currentPage: 1,
        totalResults: 2,
        error: 'Error',
        search: 'search'
      })
    })
  })
  describe('moviePagesSelector()', () => {
    it('returns correct value', () => {
      expect(moviePagesSelector(state)).toEqual({
        currentPage: 1,
        totalResults: 2
      })
    })
  })

  describe('movieErrorSelector()', () => {
    it('returns correct value', () => {
      expect(movieErrorSelector(state)).toBe('Error')
    })
  })

  describe('movieLoadingSelector()', () => {
    it('returns correct value', () => {
      expect(movieLoadingSelector(state)).toBe(false)
    })
  })

  describe('movieSearchQuerySelector()', () => {
    it('returns correct value', () => {
      expect(movieSearchQuerySelector(state)).toBe('search')
    })
  })

  describe('isBlankSelector()', () => {
    describe('if blank', () => {
      it('returns correct value', () => {
        expect(isBlankSelector(blankState)).toBe(true)
      })
    })
    describe('if NOT blank', () => {
      it('returns correct value', () => {
        expect(isBlankSelector(state)).toBe(false)
      })
    })
  })

  describe('moviesSelector()', () => {
    it('returns correct value', () => {
      expect(moviesSelector(state)).toEqual([{}])
    })
  })
})
