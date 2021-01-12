import { combineReducers } from 'redux'
import data from './data'
import auth from './auth'
import movies from './movies'

const reducers = combineReducers({
  auth,
  data,
  movies
})

export default reducers
