import { REQUEST_DATA, REQUEST_DATA_SUCCESS } from './types'

const initState = {
  loading: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true }
    case REQUEST_DATA_SUCCESS:
      return { ...state, moviesData: action.payload, loading: false }
    default:
      return { ...state }
  }
}

export default reducer
