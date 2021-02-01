import { combineReducers } from 'redux'
import auth from './auth'
import data from './data'
import movies from './concepts/movies'

const reducers = combineReducers({
  auth,
  data,
  movies
})

export default reducers
