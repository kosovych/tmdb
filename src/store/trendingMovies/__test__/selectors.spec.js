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
import {
  state, loadingState, emptyEntriesState, noEntriesState, loadingStateNoEntries
} from '../__mock__/state'

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
    describe('when movies are loading and trendingMovies has array of entries', () => {
      it('returns correct value', () => {
        expect(isBlankSelector(loadingState)).toBe(false)
      })
    })

    describe("when movies are loading and trendingMovies doesn't has array of entries", () => {
      it('returns correct value', () => {
        expect(isBlankSelector(loadingStateNoEntries)).toBe(true)
      })
    })

    describe("when trendingMovies doesn't has array of entries", () => {
      it('returns correct value', () => {
        expect(isBlankSelector(noEntriesState)).toBe(true)
      })
    })

    describe('when trendingMovies are not loading and has empty array of entries', () => {
      it('returns correct value', () => {
        expect(isBlankSelector(emptyEntriesState)).toBe(false)
      })
    })
  })

  describe('moviesSelector()', () => {
    it('returns correct value', () => {
      expect(moviesSelector(state)).toEqual([{
        title: 'Movie',
        id: 1
      }])
    })
  })
})
