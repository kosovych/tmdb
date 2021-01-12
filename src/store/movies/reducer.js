import { ADD_MOVIES } from './types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, [action.endpoint]: { ...action.payload } }
    default:
      return state
  }
}

export default reducer
