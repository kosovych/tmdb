import { ACCOUNT } from 'Constants'
import { mockAxios } from 'Utils/testHelpers/mockAxios'
import { getUserOperation } from '../getUserOperation'
import { getUserResponse } from '../../__mocks__/responses'

describe('getUserOperation()', () => {
  describe('success', () => {
    const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem')
    const dispatch = jest.fn()
    const done = jest.fn()
    const axios = mockAxios({ method: 'get', response: getUserResponse })
    const sessionId = 'sessionId'
    const action = { sessionId }

    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('has valid attributes', () => {
      expect(getUserOperation).toMatchSnapshot()
    })

    it('should calls right endpoint with right params', async () => {
      await getUserOperation.process({ action, axios }, dispatch, done)
      expect(axios.spy).toHaveBeenCalledWith(ACCOUNT, { params: { session_id: sessionId } })
    })

    it('should calls dispatch', async () => {
      await getUserOperation.process({ action, axios }, dispatch, done)
      expect(dispatch).toHaveBeenCalled()
    })

    it('should calls localStorage.setItem() with right arguments', async () => {
      await getUserOperation.process({ action, axios }, dispatch, done)
      expect(localStorageSpy).toHaveBeenCalledWith('userId', getUserResponse.data.id)
    })
  })
})
