import { logoutOperation } from '../logoutOperation'

describe('logoutOperation()', () => {
  it('has valid attributes', () => {
    expect(logoutOperation).toMatchSnapshot()
  })
  it('calls localStorage.removeItem() with right arguments', () => {
    const done = jest.fn()
    const spy = jest.spyOn(Storage.prototype, 'removeItem')
    logoutOperation.process(null, null, done)

    expect(spy).toHaveBeenCalledTimes(2)

    expect(spy).toHaveBeenNthCalledWith(1, 'sessionId')
    expect(spy).toHaveBeenNthCalledWith(2, 'userId')
  })
})
