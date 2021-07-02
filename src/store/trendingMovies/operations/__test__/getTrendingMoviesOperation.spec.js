import { TRENDING_MOVIES_DAY, SEARCH_MOVIE_URL } from 'Constants'
import { mockAxios } from 'Utils/testHelpers/mockAxios'
import { storeData } from 'Store/data/actions'
import { getMoviesOperation } from '../getTrendingMoviesOperation'
import { state } from '../../__mock__/state'
import { getTrendingMoviesOperationSuccess, getTrendingMoviesOperationError } from '../../__mock__/responses'
import { requestMoviesStart, requestMoviesSuccess, requestMoviesError } from '../../actions'

describe('getTrendingMoviesOperation()', () => {
  describe('when fetching trending movies', () => {
    let dispatch
    const getState = jest.fn(() => ({}))
    const action = {
      params: 'test param'
    }
    const request = {
      method: 'get',
      response: getTrendingMoviesOperationSuccess
    }

    describe('success', () => {
      const beforeFunction = axios => (done) => {
        jest.clearAllMocks()
        dispatch = jest.fn(() => done)
        getMoviesOperation.process({ getState, action, axios }, dispatch, done)
      }
      const axios = mockAxios(request)
      beforeEach(beforeFunction(axios))

      it('should call dispatch() with right arguments', () => {
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(dispatch).toHaveBeenNthCalledWith(1, requestMoviesStart())
        expect(dispatch).toHaveBeenNthCalledWith(
          2,
          storeData(
            'movies',
            {
              299536: {
                id: 299536,
                title: 'Avengers: Infinity War',
                mediaType: 'movie'
              }
            }
          )
        )
        expect(dispatch).toHaveBeenNthCalledWith(3, requestMoviesSuccess({
          entries: [299536],
          totalResults: 1,
          currentPage: 1
        }))
      })

      it('should call right endpoint with right params', () => {
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenNthCalledWith(1,
          TRENDING_MOVIES_DAY,
          { params: 'test param' })
      })
    })

    describe('failure', () => {
      const failureRequest = {
        method: 'get',
        reject: true,
        response: getTrendingMoviesOperationError
      }
      const beforeFunction = axios => (done) => {
        jest.clearAllMocks()
        dispatch = jest.fn(() => done)
        getMoviesOperation.process({ getState, action, axios }, dispatch, done)
      }
      const axios = mockAxios(failureRequest)
      beforeEach(beforeFunction(axios))
      it('should call dispatch() with right arguments', () => {
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch).toHaveBeenNthCalledWith(1, requestMoviesStart())
        expect(dispatch).toHaveBeenNthCalledWith(
          2,
          requestMoviesError(getTrendingMoviesOperationError.message)
        )
      })
    })
  })

  describe('when fetching searched movies', () => {
    let dispatch
    const getState = jest.fn(() => state)
    const action = {
      params: {}
    }
    const request = {
      method: 'get',
      response: getTrendingMoviesOperationSuccess
    }
    describe('success', () => {
      const beforeFunction = axios => (done) => {
        jest.clearAllMocks()
        dispatch = jest.fn(() => done)
        getMoviesOperation.process({ getState, action, axios }, dispatch, done)
      }
      const axios = mockAxios(request)
      beforeEach(beforeFunction(axios))
      it('should call right endpoint with right params', () => {
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenNthCalledWith(1,
          SEARCH_MOVIE_URL,
          { params: { query: 'search' } })
      })
    })
  })
})
