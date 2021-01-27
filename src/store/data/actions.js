import { REQUEST_DATA, REQUEST_DATA_SUCCESS } from './types'

export const requestData = (url, endpoint, schema) => ({
  type: REQUEST_DATA,
  url,
  endpoint,
  schema
})

export const requestDataSuccess = payload => ({
  type: REQUEST_DATA_SUCCESS,
  payload
})
