import {
  STORE_DATA
} from './types'

export const storeData = (endpoint, payload) => ({
  type: STORE_DATA,
  endpoint,
  payload
})
