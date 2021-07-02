import { mockMultiAxios, mockAxios } from 'Utils/testHelpers/mockAxios'
import { AUTH_TOKEN, VALIDATE_TOKEN_WITH_LOGIN, NEW_SESSION } from 'Constants'
import { loginOperation } from '../loginOperation'
import {
  requestTokenMockResponse,
  requestSessionIDMockResponse,
  loginFailsErrorResponse
} from '../../__mocks__/responses'
import {
  loginFails, loginSuccess, loginRequest, getUser
} from '../../actions'

describe('loginOperation()', () => {
  const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem')
  let dispatch
  const requestTokenMock = {
    method: 'get',
    url: AUTH_TOKEN,
    response: requestTokenMockResponse
  }

  const sessionRequestMock = {
    method: 'post',
    url: VALIDATE_TOKEN_WITH_LOGIN,
    response: requestTokenMockResponse
  }

  const sessionIdRequestMock = {
    method: 'post',
    url: NEW_SESSION,
    response: requestSessionIDMockResponse
  }

  const action = {
    username: 'username',
    password: 'password'
  }

  describe('success', () => {
    let axios
    beforeEach((done) => {
      axios = mockMultiAxios([requestTokenMock, sessionRequestMock, sessionIdRequestMock])
      dispatch = jest.fn(() => done())
      loginOperation.process({ action, axios }, dispatch, done)
    })

    it('has valid attributes', () => {
      expect(loginOperation).toMatchSnapshot()
    })

    it('should call right endpoint with right params', () => {
      expect(axios.spies.get).toHaveBeenNthCalledWith(1, AUTH_TOKEN)
      expect(axios.spies.post).toHaveBeenNthCalledWith(
        1,
        VALIDATE_TOKEN_WITH_LOGIN,
        { request_token: requestTokenMockResponse.data.request_token, ...action }
      )
      expect(axios.spies.post).toHaveBeenNthCalledWith(
        2,
        NEW_SESSION,
        { request_token: requestTokenMockResponse.data.request_token }
      )
    })

    it('should call dispatch() with right params', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, loginRequest())
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        getUser(requestSessionIDMockResponse.data.session_id)
      )
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        loginSuccess(requestSessionIDMockResponse.data.session_id)
      )
    })

    it('calls localStorage.removeItem() with right arguments', () => {
      expect(localStorageSpy).toHaveBeenCalledWith('sessionId', requestSessionIDMockResponse.data.session_id)
    })
  })

  describe('failure', () => {
    let axios
    beforeEach((done) => {
      axios = mockAxios({ method: 'get', response: loginFailsErrorResponse, reject: true })
      dispatch = jest.fn(() => done())
      loginOperation.process({ action, axios }, dispatch, done)
    })

    it('should call dispatch() with right arguments', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, loginRequest())
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        loginFails(loginFailsErrorResponse.response.data.status_message)
      )
    })
  })
})
