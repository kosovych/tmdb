import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'

import { userListsSchema } from 'Schemas'
import { sessionIdSelector, userIdSelector } from 'Store/auth/selectors'
import { storeData } from 'Store/data/actions'
import {
  requestUserListsStart,
  requestUserListsSuccess,
  requestUserListsError
} from '../actions'
import { GET_USER_LISTS } from '../types'

export const getUserListsOperation = createLogic({
  type: GET_USER_LISTS,
  latest: true,
  async process({ action, axios, getState }, dispatch, done) {
    dispatch(requestUserListsStart())
    const state = getState()
    const { page } = action
    const params = {
      session_id: sessionIdSelector(state)
    }
    if (page) {
      params.page = page
    }
    const url = `/account/${userIdSelector(state)}/lists`
    try {
      const response = await axios.get(url, { params })
      const responseData = response.data
      const { results, page: currentPage, total_results: totalResults } = responseData
      const { result, entities } = normalize(results, userListsSchema)
      const lists = {
        entries: result,
        totalResults,
        currentPage
      }
      dispatch(storeData('userLists', entities.userLists))
      dispatch(requestUserListsSuccess(lists))
    } catch (error) {
      dispatch(requestUserListsError(error))
    }
    done()
  }
})
