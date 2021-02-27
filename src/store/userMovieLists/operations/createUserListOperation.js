import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils/'
import { sessionIdSelector } from 'Store/auth/selectors'
import { CREATE_USER_LIST } from '../types'
import {
  createUserListStart,
  createUserListSuccess,
  createUserListError,
  getUserLists
} from '../actions'

export const createUserListOperation = createLogic({
  type: CREATE_USER_LIST,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { values, cb } = action
    const { name, description } = values
    const sessionId = sessionIdSelector(getState())
    try {
      dispatch(createUserListStart())
      await axios({
        method: 'post',
        url: '/list',
        data: {
          name,
          description
        },
        params: {
          session_id: sessionId
        }
      })
      cb()
    } catch (error) {
      dispatch(createUserListError())
      openNotification({
        message: error.message,
        type: 'error'
      })
    }
    dispatch(createUserListSuccess())
    dispatch(getUserLists())
    done()
  }
})
