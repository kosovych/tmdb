import { createLogic } from 'redux-logic'
import { normalize } from 'normalizr'

import { moviesListSchema } from 'Schemas'
import { openNotification } from 'Utils'
import { storeData } from 'Store/data/actions'
import {
  requestStart,
  requestSuccess,
  requestError
} from '../actions'
import { GET_LIST_DETAILS } from '../types'

export const getListDetailsOperation = createLogic({
  type: GET_LIST_DETAILS,
  latest: true,
  async process({ action, axios }, dispatch, done) {
    dispatch(requestStart())
    const { listId } = action
    try {
      const response = await axios.get(`/list/${listId}`)
      const { name, items } = response.data
      const { result: entries, entities } = normalize(items, moviesListSchema)
      dispatch(storeData('movies', entities.movies))
      dispatch(requestSuccess(name, entries))
    } catch (error) {
      dispatch(requestError())
      openNotification({
        message: error.message,
        type: 'error'
      })
    }
    done()
  }
})
