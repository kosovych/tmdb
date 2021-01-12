import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_START } from './types'

export const requestData = (url, endpoint, schema) => ({
  type: REQUEST_DATA,
  url,
  endpoint,
  schema
})

export const requestDataStart = loading => ({
  type: REQUEST_DATA_START,
  loading
})

export const requestDataSuccess = payload => ({
  type: REQUEST_DATA_SUCCESS,
  payload
})
