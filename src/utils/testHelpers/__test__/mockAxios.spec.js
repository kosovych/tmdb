import { mockAxios, mockMultiAxios } from '../mockAxios'

describe('mockHttpClient()', () => {
  describe('returns right values', () => {
    const method = 'get'
    const response = {
      data: { id: '1' }
    }

    it('resolves with correct value', () => {
      const mock = mockAxios({ method, response })
      expect(mock[method]()).resolves.toBe(response)
    })

    it('reject with correct value', () => {
      const mock = mockAxios({ method, response, reject: true })
      expect(mock[method]()).rejects.toBe(response)
    })
  })
})

describe('mockMultiHttpClient()', () => {
  describe('returns correct values for multiple calls', () => {
    const method = 'get'
    const response = {
      data: { id: '1' }
    }

    describe('with the same methods', () => {
      const method2 = 'get'
      const response2 = {
        data: { id: '2' }
      }

      it('resolve with correct value', () => {
        const mock = mockMultiAxios([
          { method, response },
          { method: method2, response: response2 }
        ])
        expect(mock[method]()).resolves.toBe(response)
        expect(mock[method]()).resolves.toBe(response2)
      })

      it('returns undefined', () => {
        const mock = mockMultiAxios([
          { method, response },
          { method: method2, response: response2 }
        ])
        expect(mock[method]()).resolves.toBe(response)
        expect(mock[method]()).resolves.toBe(response2)
        expect(mock[method]()).toBeUndefined()
      })

      it('rejects with correct value', () => {
        const mock = mockMultiAxios([
          { method, response, reject: true },
          { method: method2, response: response2, reject: true }
        ])
        expect(mock[method]()).rejects.toBe(response)
        expect(mock[method]()).rejects.toBe(response2)
      })
    })

    describe('with different methods', () => {
      const method2 = 'post'
      const response2 = {
        data: { id: '2' }
      }

      it('resolve with correct values', () => {
        const mock = mockMultiAxios([
          { method, response },
          { method: method2, response: response2 }
        ])
        expect(mock[method]()).resolves.toBe(response)
        expect(mock[method2]()).resolves.toBe(response2)
      })

      it('reject with correct values', () => {
        const mock = mockMultiAxios([
          { method, response, reject: true },
          { method: method2, response: response2, reject: true }
        ])
        expect(mock[method]()).rejects.toBe(response)
        expect(mock[method2]()).rejects.toBe(response2)
      })
    })
  })
})
