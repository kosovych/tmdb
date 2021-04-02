import { STORE_DATA } from './types'

const reducer = (state = {}, action) => {
  const endpointData = state[action.endpoint]
  switch (action.type) {
    case STORE_DATA:
      return { ...state, [action.endpoint]: { ...endpointData, ...action.payload } }
    default:
      return state
  }
}

export default reducer
