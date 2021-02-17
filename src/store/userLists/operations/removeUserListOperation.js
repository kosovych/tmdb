import { createLogic } from 'redux-logic'

import { openNotification } from 'Utils/index'
import { sessionIdSelector } from 'Store/auth/selectors'
import { REMOVE_USER_LIST } from '../types'
import { getUserLists } from '../actions'

export const removeUserListOperation = createLogic({
  type: REMOVE_USER_LIST,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    const { listId } = action
    try {
      await axios({
        method: 'delete',
        url: `/list/${listId}`,
        params: {
          session_id: sessionIdSelector(getState())
        }
      })
      dispatch(getUserLists())
    } catch (error) {
      // server returns error with status 500 and status_code 11
      // but the list was removed successfully
      if (error.response.status !== 500 && error.response.data.status_code !== 11) {
        openNotification({
          message: error.message,
          description: error.response.data.status_message,
          type: 'error'
        })
      } else {
        dispatch(getUserLists())
      }
    }
    done()
  }
})
