import { createLogicMiddleware } from 'redux-logic'
import { createStore, applyMiddleware } from 'redux'
import axios from '../axios';

import logic from './logics';
import rootReducer from './rootReducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    const { composeWithDevTools } = require('redux-devtools-extension')

    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const configureStore = (initialState = {}) => {
  // Add dependencies to pass them to logic functions
  const dependencies = {
    axios
  }

  const logicMiddleware = createLogicMiddleware(logic, dependencies)
  const store = createStore(rootReducer, initialState, bindMiddleware([logicMiddleware]))

  return store
}

export default configureStore
