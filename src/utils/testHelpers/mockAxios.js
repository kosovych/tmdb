export const mockAxios = ({ method, response, reject } = { reject: false, response: null }) => {
  const axios = {
    [method]: () => new Promise((res, rej) => {
      if (reject) {
        rej(response)
      } else {
        res(response)
      }
    })
  }
  axios.spy = jest.spyOn(axios, method)
  return axios
}

export const mockMultiAxios = (mocks) => {
  const httpClient = { spies: {} }
  mocks.forEach((mock) => {
    if (httpClient[mock.method] === undefined) {
      httpClient[mock.method] = jest.fn()
      const spy = jest.spyOn(httpClient, mock.method)
      httpClient.spies[mock.method] = spy
    }
    httpClient[mock.method].mockImplementationOnce(() => new Promise((resolve, deny) => {
      if (mock.reject) {
        deny(mock.response)
      } else {
        resolve(mock.response)
      }
    }))
  })

  return httpClient
}
